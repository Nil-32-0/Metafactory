// priority: 0

ServerEvents.recipes(event => {

    // Circuit Component Recipes
    event.recipes.gtceu.alloy_smelter("pure_glass_tube")
        .itemInputs("gtceu:pure_glass_dust")
        .notConsumable("gtceu:ball_casting_mold")
        .itemOutputs("gtmetx:pure_glass_tube")
        .EUt(GTValues.VH[GTValues.LV]).duration(160);

    event.recipes.gtceu.compressor("compress_weak_runewood_board")
        .itemInputs("4x gtmetx:resin_runewood_ash")
        .itemOutputs("gtmetx:weak_runewood_board")
        .EUt(GTValues.VH[GTValues.ULV]).duration(200);


    // Aether tube
    event.shaped("gtmetx:aether_tube", [
        "BTB",
        "WWW"
    ], {
        B: "gtceu:drenched_iron_bolt",
        T: "gtceu:glass_tube",
        W: "gtceu:grounded_copper_single_wire"
    });

    event.shaped("2x gtmetx:aether_tube", [
        "BTB",
        "WWW"
    ], {
        B: "gtceu:drenched_iron_bolt",
        T: "gtmetx:pure_glass_tube",
        W: "gtceu:grounded_copper_single_wire"
    });

    event.recipes.gtceu.assembler("aether_tube_plain")
        .itemInputs("gtmetx:pure_glass_tube", "gtceu:drenched_iron_bolt", "2x gtceu:grounded_copper_single_wire")
        .itemOutputs("2x gtmetx:aether_tube")
        .EUt(GTValues.VA[GTValues.ULV]).duration(120);

    event.recipes.gtceu.assembler("aether_tube_quickened")
        .itemInputs("gtmetx:pure_glass_tube", "gtceu:drenched_iron_bolt", "2x gtceu:grounded_copper_single_wire")
        .inputFluids(Fluid.of("gtceu:quickened_redstone", 18))
        .itemOutputs("3x gtmetx:aether_tube")
        .EUt(GTValues.VA[GTValues.ULV]).duration(120);


    // Basic Arcane Circuit
    event.shaped("gtmetx:basic_arcane_circuit", [
        "RPR",
        "TBT",
        "CCC"
    ], {
        C: "gtceu:enlightened_red_alloy_single_cable",
        R: "gtceu:resistor",
        P: "gtceu:drenched_iron_plate",
        T: "gtmetx:aether_tube",
        B: "gtmetx:weak_runewood_board"
    });


})