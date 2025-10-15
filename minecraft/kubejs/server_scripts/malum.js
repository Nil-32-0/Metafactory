// priority: 50

const malumRecipes = {
    initialize(event) {
        this.event = event;
    },

    /**
     * @param {$ItemStack} output Item produced by the recipe
     * @param {$ItemStack} base Base Item consumed by the recipe
     * @param {$ItemStack} addition Additional Item consumed by the recipe
     */
    runework (output, base, addition) {this.event.custom({
        type: "malum:runeworking",
        primaryInput: base,
        output: output,
        secondaryInput: addition
    })},

    /**
     * @param {$ItemStack} output Item produced by the recipe
     * @param {$ItemStack} focus Item used by the recipe as the focus (not consumed)
     * @param {Number} focusDamage Durability lost on the focus (if the focus has durability)
     * @param {["aerial" | "aqueous" | "arcane" | "earthen" | "eldritch" | "infernal" | "sacred" | "wicked",
     *              Number][]} spirits List of spirit types and counts to be consumed in the recipe
     * @param {Number} duration The recipe duration in ticks, 1 second = 20 ticks
     */
    focus (output, focus, focusDamage, spirits, duration) {
        let spiritList = [];
        spirits.forEach(spirit => {
            spiritList.push({type: spirit[0], count: spirit[1]});
        });
        this.event.custom({
            type: "malum:spirit_focusing",
            durabilityCost: focusDamage,
            input: focus,
            output: output,
            spirits: spiritList,
            time: duration
        });
    },

    /**
     * @param {$ItemStack} output
     * @param {$ItemStack} focus
     * @param {$ItemStack[]} additions
     * @param {["aerial" | "aqueous" | "arcane" | "earthen" | "eldritch" | "infernal" | "sacred" | "wicked",
     *              Number][]} spirits List of spirit types and counts to be consumed in the recipe
     */
    infusion (output, focus, additions, spirits) {
        let spiritList = [];
        spirits.forEach(spirit => {
            spiritList.push({type: spirit[0], count: spirit[1]});
        });
        this.event.custom({
            type: "malum:spirit_infusion",
            extra_items: additions,
            input: focus,
            output: output,
            spirits: spiritList
        });
    },

    /**
     * @param {$ItemStack} output
     * @param {$ItemStack} input
     */
    unchainedRite (output, input) {this.event.custom({
        type: "malum:spirit_transmutation",
        input: input,
        output: output
    })},

    /**
     * @param {$ItemStack} output
     * @param {$ItemStack} input
     */
    weepingWell (output, input) {this.event.custom({
        type: "malum:favor_of_the_void",
        input: input,
        output: output
    })}
}