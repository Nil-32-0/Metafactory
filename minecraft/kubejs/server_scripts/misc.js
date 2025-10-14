// priority: 50

/**
 * @param {$RecipesEventJS} event Event passed into the function so the recipe can be added
 * @param {$ItemStack} core Item consumed by the recipe, on the core
 * @param {Number} coreCount Number of core Items consumed by the recipe
 * @param {$ItemStack[]} inputs List of Items consumed by the recipe, on the injectors
 * @param {$ItemStack} result Item produced by the recipe
 * @param {Number} tier Tier injectors required for the recipe
 * @param {Number} energy Total energy required for the recipe
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