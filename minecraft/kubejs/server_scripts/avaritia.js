// priority: 50

const avaritiaRecipes = {
    initialize(event) {
        this.event = event
    },

    extractor (outputs, input, time) {this.event.custom({
        type: "avaritia_delight:crop_extractor",
        ingredient: input,
        results: outputs,
        time: time
    })},
    cooking_shapeless (output, inputs, container) {
        let recipe = {
            type: "avaritia_delight:extreme_cooking_shapeless",
            category: "meals",
            ingredients: inputs,
            result: output
        };
        if (container != null) {
            recipe.container = container;
        };

        this.event.custom(recipe);
    },
    cooking_shaped (output, pattern, key, container) {
        let recipe = {
            type: "avaritia_delight:extreme_cooking_shaped",
            category: "meals",
            pattern: pattern,
            key: key,
            result: output
        };
        if (container != null) {
            recipe.container = container;
        };
        this.event.custom(recipe);
    },
    shaped_table (tier, output, pattern, key) {this.event.recipes.avaritia.shaped_table(tier, output, pattern, key)},
    shapeless_table (tier, output, ingredients) {this.event.recipes.avaritia.shapeless_table(tier, output, ingredients)},
    extreme_smithing (output, template, base, additions) {this.event.recipes.avaritia.extreme_smithing(output, template, base, additions)},
    compressor (input, output, inputCount, time) {this.event.recipes.avaritia.compressor(input, output, inputCount, time)}
}