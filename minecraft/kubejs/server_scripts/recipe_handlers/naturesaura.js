// priority: 50

const NaturesAuraRecipes = {
    /**
     * @param {$RecipesEventJS} event
     */
    initialize(event) {
        this.event = event;
    },

    /**
     * @param {string} entity ID of the entity produced by the recipe
     * @param {$ItemStack[]} inputs List of Items consumed by the recipe
     * @param {number | null} aura Aura consumed by the recipe, optional, default 0
     * @param {number | null} time Duration of the recipe in ticks, optional, default 20. 1 second = 20 ticks
     */
    animal_spawner(entity, inputs, aura, time) {
        this.event.recipes.naturesaura.animal_spawner(entity, inputs,aura != null ? aura: 0,time != null ? time : 20);
    },

    /**
     * @param {$ItemStack} output Item produced by the recipe
     * @param {$ItemStack} input Item consumed by the recipe
     * @param {number | null} aura Aura consumed by the recipe, optional, default 0
     * @param {number | null} time Duration of the recipe in ticks, optional, default 20. 1 second = 20 ticks
     * @param {string | null} catalyst Block ID of the catalyst for the recipe, optional
     */
    altar(output, input, aura, time, catalyst) {
        if (catalyst != null) {
            this.event.recipes.naturesaura.altar(output, input,
                aura != null ? aura : 0, time != null ? time : 20, catalyst);
        } else {
            this.event.recipes.naturesaura.altar(output, input,
                aura != null ? aura : 0, time != null ? time : 20);
        }
    },

    /**
     * @param {$ItemStack} output Item produced by the recipe
     * @param {$ItemStack} input Item consumed by the recipe
     * @param {$ItemStack} activationItem Item consumed by the recipe, dropped to start the recipe
     */
    offering(output, input, activationItem) {
        this.event.recipes.naturesaura.offering(output, input, activationItem);
    },

    /**
     * @param {$ItemStack} output Item produced by the recipe
     * @param {$ItemStack[]} inputs List of up to eight Items consumed by the recipe
     * @param {string | null} sapling Block ID of the sapling for the recipe, optional
     * @param {number | null} time Duration of the recipe in ticks, optional, default 20. 1 second = 20 ticks
     */
    treeRitual(output, inputs, sapling, time) {
        if (sapling != null) {
            this.event.recipes.naturesaura.tree_ritual(output, inputs, sapling, time != null ? time : 20);
        } else {
            this.event.recipes.naturesaura.tree_ritual(output, inputs);
        }
    }
}