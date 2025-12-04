// Priority: 0

ServerEvents.recipes(event => {
    event.shapeless("2x tconstruct:grout", [
        "gtceu:brick_wooden_form",
        "minecraft:clay_ball",
        "minecraft:sand",
        "minecraft:gravel"
    ]);
    event.shapeless("2x tconstruct:nether_grout", [
        "gtceu:brick_wooden_form",
        "minecraft:magma_cream",
        ["minecraft:soul_soil", "minecraft:soul_sand"],
        "minecraft:gravel"
    ]);

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