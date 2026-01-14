// priority: 0

ServerEvents.recipes(event => {
    // Casings
        let registerCasingsHulls = (tier, hull, wire, cable) => {
            event.recipes.gtceu.assembler("casing_"+tier)
                .itemInputs("8x gtceu:"+hull+"_plate")
                .circuit(8)
                .itemOutputs("gtceu:"+tier+"_machine_casing")
                .EUt(GTValues.VH[GTValues.LV]).duration(50);
            event.shaped("gtceu:"+tier+"_machine_casing", [
                "PPP",
                "PWP",
                "PPP"
            ], {
                P: "gtceu:"+hull+"_plate",
                W: "#forge:tools/wrenches"
            });

            event.replaceInput({output:"gtceu:"+tier+"_machine_hull"}, "gtceu:wood_plate", "gtceu:polybenzimidazole_plate");
            event.replaceInput({output:"gtceu:"+tier+"_machine_hull"}, "gtceu:iron_plate", "gtceu:"+hull+"_plate");
            event.replaceInput({output:"gtceu:"+tier+"_machine_hull"}, "gtceu:red_alloy_single_cable",
                "gtceu:"+wire+"_single_" + (cable ? "cable" : "wire"));
            event.recipes.gtceu.assembler("hull_"+tier)
                .itemInputs("gtceu:"+tier+"_machine_casing", "2x gtceu:"+wire+"_single_" + (cable ? "cable" : "wire"))
                .inputFluids(Fluid.of("gtceu:polybenzimidazole", 288))
                .itemOutputs("gtceu:"+tier+"_machine_hull")
                .EUt(GTValues.VH[GTValues.LV]).duration(50);
        }

        registerCasingsHulls("uev", "naquadria_neutronate", "astatine_protactinium_telluride", true);
        registerCasingsHulls("uiv", "semistable_compound", "aerogen_alloy", true);
        registerCasingsHulls("uxv", "infinity", "temporally_frozen_bec", true);
        registerCasingsHulls("opv", "transcendental", "subspatially_layered", false);

    // Intermediate Products
        event.recipes.gtceu.mixer("mix_resin_runewood_ash")
            .itemInputs("malum:weak_runewood_ash", "gtceu:sticky_resin")
            .itemOutputs("gtmetx:resin_runewood_ash")
            .EUt(GTValues.VH[GTValues.LV]).duration(60);

    // Glass Tiers
        let ulv_machines = ["lp_steam_extractor", "lp_steam_liquid_boiler", "hp_steam_liquid_boiler"];
        ulv_machines.forEach(machine => {
            event.replaceInput({output: "gtceu:" + machine}, "minecraft:glass", "#tconstruct:glass/clear");
        });
        event.replaceInput({output: "gtceu:hp_steam_solar_boiler"}, "minecraft:glass", "tconstruct:clear_glass");
        event.replaceInput({output: "gtceu:lp_steam_solar_boiler"}, "minecraft:glass", "tconstruct:clear_glass");

        let glass_machines = ["autoclave", "brewery", "canner", "chemical_bath", "chemical_reactor", "cutter", "distillery", 
            "electrolyzer", "extractor", "fermenter", "fluid_heater", "fluid_solidifier", "mixer", "ore_washer", "rock_crusher"]
        let replaceable_tiers = {
            "lv": "#forge:glass",
            "mv": "#forge:glass",
            "hv": "gtceu:tempered_glass",
            "ev": "gtceu:tempered_glass",
            "iv": "gtceu:laminated_glass",
            "luv": "gtceu:laminated_glass",
            "zpm": "gtceu:fusion_glass",
            "uv": "gtceu:fusion_glass",
            "uhv": "gtceu:fusion_glass",
            "uev": "#forge:glass",
            "uiv": "#forge:glass",
            "uxv": "#forge:glass",
            "opv": "#forge:glass"
        }
        glass_machines.forEach(machine => {
            Object.keys(replaceable_tiers).forEach(tier => {
                event.replaceInput({output: "gtceu:" + tier + "_" + machine}, replaceable_tiers[tier], "#gtmetx:glass/" + tier);
            });
        });

        event.recipes.gtceu.laser_engraver("springaline_glass")
            .itemInputs("elementalcraft:burnt_glass")
            .notConsumable("gtceu:springaline_lens")
            .itemOutputs("elementalcraft:springaline_glass")
            .EUt(GTValues.VHA[GTValues.HV]).duration(100);
})