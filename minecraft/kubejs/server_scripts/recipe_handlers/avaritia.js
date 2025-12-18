// priority: 50

const AvaritiaRecipes = {
    /**
     * @param {$RecipesEventJS} event
     */
    initialize(event) {
        this.event = event
    },

    /**
     * @param {number} tier Crafting table tier required for the recipe
     * @param {$Ingredient} output Item produced by the recipe
     * @param {string[]} pattern Pattern of characters representing Items used in the recipe
     * @param {{[dict_key: string]: $Ingredient}} key A mapping of which characters in the pattern represent which Item
     */
    shaped_table (tier, output, pattern, key) {this.event.recipes.avaritia.shaped_table(tier, output, pattern, key)},
    /**
     * @param {number} tier Crafting table tier required for the recipe
     * @param {$Ingredient} output Item produced by the recipe
     * @param {$Ingredient[]} ingredients List of Items consumed by the recipe
     */
    shapeless_table (tier, output, ingredients) {this.event.recipes.avaritia.shapeless_table(tier, output, ingredients)},
    /**
     * @param {$Ingredient} output Item produced by the recipe
     * @param {$Ingredient} template Item consumed as a 'template' for the recipe
     * @param {$Ingredient} base Item consumed by the recipe, used as a 'base' other items are attached to
     * @param {$Ingredient[]} additions List of Items consumed by the recipe, added to the 'base' Item
     */
    extreme_smithing (output, template, base, additions) {this.event.recipes.avaritia.extreme_smithing(output, template, base, additions)},
    /**
     * @param {$Ingredient} output Item produced by the recipe
     * @param {$Ingredient} input Item consumd by the recipe
     * @param {number} inputCount Number of items consumed
     * @param {number} time Duration of the recipe in ticks
     */
    compressor (output, input, inputCount, time) {this.event.recipes.avaritia.compressor(input, output, inputCount, time)}
}