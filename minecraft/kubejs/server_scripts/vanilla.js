// Priority: 0

ServerEvents.recipes(event => {
    event.shaped("8x kubejs:compressed_grout", [
        "GGG",
        "GFG",
        "GGG"
    ], {
        G: "tconstruct:grout",
        F: "gtceu:brick_wooden_form"
    });
    event.shapeless("kubejs:compressed_grout", ["gtceu:brick_wooden_form", "tconstruct:grout"]);
    event.shaped("8x kubejs:compressed_nether_grout", [
        "GGG",
        "GFG",
        "GGG"
    ], {
        G: "tconstruct:nether_grout",
        F: "gtceu:brick_wooden_form"
    });
    event.shapeless("kubejs:compressed_nether_grout", ["gtceu:brick_wooden_form", "tconstruct:nether_grout"]);

    event.smelting("tconstruct:seared_brick", "kubejs:compressed_grout");
    event.smelting("tconstruct:scorched_brick", "kubejs:compressed_nether_grout");

    event.shapeless("gtceu:compressed_clay", ["gtceu:brick_wooden_form", "minecraft:clay_ball"]);
    event.shaped("8x gtceu:compressed_clay", [
        "CCC",
        "CFC",
        "CCC"
    ], {
        C: "minecraft:clay_ball",
        F: "gtceu:brick_wooden_form"
    });

    event.smelting("minecraft:brick", "gtceu:compressed_clay");

    event.custom({
        type: "tconstruct:melting",
        ingredient: {
            item: "gtceu:glass_dust"
        },
        result: {
            fluid: "tconstruct:molten_glass",
            amount: 1000
        },
        temperature: 750,
        time: 80
    });
})