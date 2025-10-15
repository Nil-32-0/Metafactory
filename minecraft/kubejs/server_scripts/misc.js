// priority: 50

/**
 * @param {$RecipesEventJS} event Event passed into the function so the recipe can be added
 * @param {$ItemStack} core Item consumed by the recipe, on the core
 * @param {number} coreCount Number of core Items consumed by the recipe
 * @param {$ItemStack[]} inputs List of Items consumed by the recipe, on the injectors
 * @param {$ItemStack} result Item produced by the recipe
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
 * @param {$ItemStack} output Item produced by the recipe
 * @param {$ItemStack} input Item consumed by the recipe on the core
 * @param {$ItemStack[]} essences List of up to four Items consumed as essences by the recipe. Can have a stack size up to 40
 * @param {$ItemStack[]} additionalInputs List of up to four Items consumed as additional inputs by the recipe
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
 * @param {$ItemStack} output Item produced by the recipe
 * @param {$ItemStack} input Item consumed by the recipe on the core
 * @param {$ItemStack[]} additionalInputs List of up to eight Items consumed as additional inputs by the recipe
 */
function mysticalAgricultureInfusion(event, output, input, additionalInputs) {
    event.custom({
        type: "mysticalagriculture:infusion",
        input: input,
        ingredients: additionalInputs,
        result: output
    });
}