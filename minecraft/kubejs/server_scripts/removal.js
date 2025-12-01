// priority: 10

ServerEvents.recipes(event => {

    // GT Materials recipe removals

        // Incorrect GT conversions
            event.remove({type: "gtceu:alloy_smelter", output: "gtceu:drenched_iron_ingot", input: "gtceu:drenched_iron_block"});
            event.remove({type: "gtceu:alloy_smelter", output: "gtceu:drenched_iron_nugget", input: "gtceu:drenched_iron_block"});
            event.remove({type: "gtceu:arc_furnace", output: "gtceu:drenched_iron_ingot", input: "gtceu:drenched_iron_block"});

    // AE2 recipe removals
        event.remove({output:"ae2:inscriber"});

    // Blood Magic recipe removals
        event.remove({output: "bloodmagic:altar"});


    // Botania recipe removals
        event.remove({id: "botania:petal_apothecary/pure_daisy"});

    // Forestry recipe removals
        event.remove({output: "forestry:fabricator"});

    // Malum recipe removals
        event.remove({type: "smelting", output: "malum:arcane_charcoal"});
        event.remove({output: "malum:spirit_altar"});

    // Mystical Agriculture recipe removals
        event.remove({id: "matc:crystals/inferium"});

    // Nature's Aura recipe removals
        event.remove({output: "naturesaura:nature_altar"});

    // PneumaticCraft recipe removals
        event.remove({output: "pneumaticcraft:air_compressor"});

    // ProjectE recipe removals
        event.remove({output: "projecte:philosophers_stone"});
        event.remove({output: "projecte:collector_mk2"});
        event.remove({output: "projecte:collector_mk3"});
        event.remove({id: "projectexpansion:collector/basic"});
        event.remove({id: "projectexpansion:collector/dark"});
        event.remove({id: "projectexpansion:collector/red"});

    // Waystones recipe removals
        event.remove({output: "waystones:warp_stone"});
})