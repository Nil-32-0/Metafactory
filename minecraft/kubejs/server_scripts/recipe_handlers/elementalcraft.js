// priority: 50

const ElementalCraftRecipes = {
    initialize(event) {
        this.event = event;
    },

    /**
     * @param {$Ingredient} output Item produced by the recipe
     * @param {$Ingredient[]} inputs List of Items consumed by the recipe, in the order they must be inserted
     * @param {number} manaAmount The amount of Elemental Mana consumed by the recipe. Container amounts are 1k, 1M, 5M
     * @param {"air"|"earth"|"fire"|"water"} manaType The type of Elemental Mana consumed by the recipe
     */
    bind (output, inputs, manaAmount, manaType) {this.event.custom({
        type: "elementalcraft:binding",
        element_amount: manaAmount,
        element_type: manaType,
        ingredients: inputs,
        output: output
    })},

    /**
     * @param {$Ingredient} output Item produced by the recipe
     * @param {$Ingredient} input Item consumed by the recipe
     * @param {number} manaAmount The amount of Elemental Mana consumed by the recipe. Container amounts are 1k, 1M, 5M
     * @param {"air"|"earth"|"fire"|"water"} manaType The type of Elemental Mana consumed by the recipe
     */
    infuse (output, input, manaAmount, manaType) {this.event.custom({
        type: "elementalcraft:infusion",
        element_amount: manaAmount,
        element_type: manaType,
        input: input,
        output: output
    })},

    /**
     * @param {$Ingredient} output Item produced by the recipe
     * @param {$Ingredient} input Item consumed by the recipe
     * @param {number} manaAmount The amount of Elemental Mana consumed by the recipe. Container amounts are 1k, 1M, 5M
     * @param {number | null} luckRatio Optional luckRatio for the recipe
     */
    grind (output, input, manaAmount, luckRatio) {
        let lratio = output.count;
        if (luckRatio != null) {
            lratio = luckRatio;
        }
        this.event.custom({
            type: "elementalcraft:grinding",
            element_amount: manaAmount,
            input: input,
            luck_ratio: lratio,
            output: output
        });
    },

    /**
     * @param {$Ingredient} output Item produced by the recipe
     * @param {$Ingredient[]} inputs List of the 5 Items consumed by the recipe. Order is Center, Water, Fire, Earth, Air for positioning
     * @param {number} manaAmount The amount of each kind of Elemental Mana consumed by the recipe. Container amounts are 1k, 1M, 5M
     */
    pureInfuse (output, inputs, manaAmount) {this.event.custom({
        type: "elementalcraft:pureinfusion",
        element_amount: manaAmount,
        ingredients: inputs,
        output: output
    })},

    /**
     * @param {$Ingredient} output Item produced by the recipe
     * @param {$Ingredient[]} inputs List of the 4 Items consumed by the recipe
     * @param {number} manaAmount The amount of Elemental Mana consumed by the recipe. Container amounts are 1k, 1M, 5M
     * @param {"air"|"earth"|"fire"|"water"} manaType The type of Elemental Mana consumed by the recipe
     */
    inscribe (output, inputs, manaAmount, manaType) {this.event.custom({
        type: "elementalcraft:inscription",
        element_amount: manaAmount,
        element_type: manaType,
        slate: inputs[0],
        ingredients: inputs.slice(1),
        output: output
    })},

    /**
     * @param {$Ingredient} output Item produced by the recipe
     * @param {$Ingredient} input Item consumed by the recipe
     * @param {number} manaAmount The amount of Elemental Mana consumed by the recipe. Container amounts are 1k, 1M, 5M
     * @param {number | null} luckRatio Optional luckRatio for the recipe
     */
    saw (output, input, manaAmount, luckRatio) {
        let lratio = output.count;
        if (luckRatio != null) {
            lratio = luckRatio;
        }
        this.event.custom({
            type: "elementalcraft:sawing",
            element_amount: manaAmount,
            input: input,
            luck_ratio: lratio,
            output: output
        });
    },
}