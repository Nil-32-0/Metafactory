// priority: 50

const avaritiaRecipes = {
    /**
     * @param {$RecipesEventJS} event
     */
    initialize(event) {
        this.event = event
    },

    /**
     * @param {Number} tier
     * @param {$ItemStack} output
     * @param {String[]} pattern
     * @param {{[dict_key: String]: $ItemStack}} key
     */
    shaped_table (tier, output, pattern, key) {this.event.recipes.avaritia.shaped_table(tier, output, pattern, key)},
    /**
     * @param {Number} tier
     * @param {$ItemStack} output
     * @param {$ItemStack[]} ingredients
     */
    shapeless_table (tier, output, ingredients) {this.event.recipes.avaritia.shapeless_table(tier, output, ingredients)},
    /**
     * @param {$ItemStack} output
     * @param {$ItemStack} template
     * @param {$ItemStack} base
     * @param {$ItemStack[]} additions
     */
    extreme_smithing (output, template, base, additions) {this.event.recipes.avaritia.extreme_smithing(output, template, base, additions)},
    /**
     * @param {$ItemStack} output
     * @param {$ItemStack} input
     * @param {Number} inputCount
     * @param {Number} time
     */
    compressor (output, input, inputCount, time) {this.event.recipes.avaritia.compressor(input, output, inputCount, time)}
}