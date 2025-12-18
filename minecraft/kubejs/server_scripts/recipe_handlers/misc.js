// priority: 50

/**
 * @param {$RecipesEventJS} event Event passed into the function so the recipe can be added
 * @param {$Ingredient} core Item consumed by the recipe, on the core
 * @param {number} coreCount Number of core Items consumed by the recipe
 * @param {$Ingredient[]} inputs List of Items consumed by the recipe, on the injectors
 * @param {$Ingredient} result Item produced by the recipe
 * @param {number} tier Tier injectors required for the recipe
 * @param {number} energy Total energy required for the recipe
 */
function fusionInjection(event, core, coreCount, inputs, result, tier, energy) {
    let tierMap = {1: "DRACONIUM", 2: "WYVERN", 3: "DRACONIC", 4: "CHAOTIC"};
    event.custom({
        type: "draconicevolution:fusion_crafting",
        catalyst: {type: "draconicevolution:ingredient_stack", count: coreCount, items: [core]},
        ingredients: inputs,
        result: result,
        tier: tierMap[tier],
        total_energy: energy
    });
}

/**
 * @param {$RecipesEventJS} event Event passed into the function so the recipe can be added
 * @param {$Ingredient} output Item produced by the recipe
 * @param {$Ingredient} input Item consumed by the recipe on the core
 * @param {$Ingredient[]} essences List of up to four Items consumed as essences by the recipe. Can have a stack size up to 40
 * @param {$Ingredient[]} additionalInputs List of up to four Items consumed as additional inputs by the recipe
 */
function mysticalAgricultureAwakening(event, output, input, essences, additionalInputs) {
    event.custom({
        type: "mysticalagriculture:awakening",
        input: input,
        essences: essences,
        ingredients: additionalInputs,
        result: output
    });
}

/**
 * @param {$RecipesEventJS} event Event passed into the function so the recipe can be added
 * @param {$Ingredient} output Item produced by the recipe
 * @param {$Ingredient} input Item consumed by the recipe on the core
 * @param {$Ingredient[]} additionalInputs List of up to eight Items consumed as additional inputs by the recipe
 */
function mysticalAgricultureInfusion(event, output, input, additionalInputs) {
    event.custom({
        type: "mysticalagriculture:infusion",
        input: input,
        ingredients: additionalInputs,
        result: output
    });
}