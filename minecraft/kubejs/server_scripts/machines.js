// priority: 0

ServerEvents.recipes(event => {
    // AE2 machine recipes
    event.shaped("ae2:inscriber", [
        "IPI",
        "CAI",
        "IPI"
    ], {
        I: "minecraft:iron_ingot",
        P: "minecraft:sticky_piston",
        C: "minecraft:copper_ingot",
        A: "gtceu:lv_machine_hull"
    });

    // Forestry machine recipes
    event.shaped("forestry:fabricator", [
        "GCG",
        "LSL",
        "GHG"
    ], {
        G: "minecraft:gold_ingot",
        C: "gtceu:basic_electronic_circuit",
        S: "forestry:sturdy_machine",
        L: "#forge:glass",
        H: "#forge:chests/wooden"
    });

    // PneumaticCraft machine recipes
    event.shaped("pneumaticcraft:air_compressor", [
        "BBB",
        "BCB",
        "BFP"
    ], {
        B: "pneumaticcraft:reinforced_bricks",
        C: "gtceu:basic_electronic_circuit",
        F: "minecraft:furnace",
        P: "pneumaticcraft:pressure_tube"
    });
})