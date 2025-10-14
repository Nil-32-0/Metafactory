// priority: 50

const AvaritiaRecipes = {
    /**
     * @param {$RecipesEventJS} event
     */
    initialize(event) {
        this.event = event
    },

    /**
     * @param {Number} tier Crafting table tier required for the recipe
     * @param {$ItemStack} output Item produced by the recipe
     * @param {String[]} pattern Pattern of characters representing Items used in the recipe
     * @param {{[dict_key: String]: $ItemStack}} key A mapping of which characters in the pattern represent which Item
     */
    shaped_table (tier, output, pattern, key) {this.event.recipes.avaritia.shaped_table(tier, output, pattern, key)},
    /**
     * @param {Number} tier Crafting table tier required for the recipe
     * @param {$ItemStack} output Item produced by the recipe
     * @param {$ItemStack[]} ingredients List of Items consumed by the recipe
     */
    shapeless_table (tier, output, ingredients) {this.event.recipes.avaritia.shapeless_table(tier, output, ingredients)},
    /**
     * @param {$ItemStack} output Item produced by the recipe
     * @param {$ItemStack} template Item consumed as a 'template' for the recipe
     * @param {$ItemStack} base Item consumed by the recipe, used as a 'base' other items are attached to
     * @param {$ItemStack[]} additions List of Items consumed by the recipe, added to the 'base' Item
     */
    extreme_smithing (output, template, base, additions) {this.event.recipes.avaritia.extreme_smithing(output, template, base, additions)},
    /**
     * @param {$ItemStack} output Item produced by the recipe
     * @param {$ItemStack} input Item consumd by the recipe
     * @param {Number} inputCount Number of items consumed
     * @param {Number} time Duration of the recipe in ticks
     */
    compressor (output, input, inputCount, time) {this.event.recipes.avaritia.compressor(input, output, inputCount, time)}
}