// priority: 0

ServerEvents.recipes(event => {
    BotaniaRecipes.initialize(event);
    NaturesAuraRecipes.initialize(event);

    // Blood Magic machine recipes
    event.shaped("bloodmagic:altar", [
        "SCS",
        "SFS",
        "GGG"
    ], {
        S: "#forge:stone",
        C: "gtmetx:basic_arcane_circuit",
        F: "minecraft:furnace",
        G: "minecraft:gold_ingot"
    });

    // Botania machine recipes
    BotaniaRecipes.apothecary(Ingredient.of("botania:pure_daisy"), [
        Ingredient.of("#botania:petals/white"),
        Ingredient.of("#botania:petals/white"),
        Ingredient.of("#botania:petals/white"),
        Ingredient.of("#botania:petals/white")
    ], Ingredient.of("gtmetx:aether_tube"));

    // Malum machine recipes
    event.shaped("malum:spirit_altar", [
        "PSP",
        "GRG",
        "RRR"
    ], {
        P: "gtmetx:basic_arcane_circuit",
        S: "malum:processed_soulstone",
        G: "minecraft:gold_ingot",
        R: "malum:runewood_planks"
    });

    // Nature's Aura machine recipes
    NaturesAuraRecipes.treeRitual(Ingredient.of("naturesaura:nature_altar"), [
        Ingredient.of("minecraft:stone"),
        Ingredient.of("gtmetx:basic_arcane_circuit"),
        Ingredient.of("naturesaura:gold_leaf"),
        Ingredient.of("naturesaura:token_joy"),
        Ingredient.of("minecraft:stone"),
        Ingredient.of("gtmetx:basic_arcane_circuit"),
        Ingredient.of("minecraft:stone"),
        Ingredient.of("minecraft:gold_ingot")
    ]);

    // ProjectE machine recipes
    event.shaped("projecte:collector_mk2", [
        "TDT",
        "CGC",
        "GGG"
    ], {
        T: "gtmetx:aether_tube",
        D: "projecte:dark_matter",
        C: "projecte:collector_mk1",
        G: "minecraft:glowstone"
    });
    event.shaped("projecte:collector_mk3", [
        "ARA",
        "CGC",
        "GGG"
    ], {
        A: "gtmetx:basic_arcane_circuit",
        R: "projecte:red_matter",
        C: "projecte:collector_mk2",
        G: "minecraft:glowstone"
    });

    event.shapeless("projecte:collector_mk1", ["projectexpansion:basic_collector"]);
    event.shapeless("projecte:collector_mk2", ["projectexpansion:dark_collector"]);
    event.shapeless("projecte:collector_mk3", ["projectexpansion:red_collector"]);
})