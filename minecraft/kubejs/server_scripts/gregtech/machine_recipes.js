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

    // Coals/Cokes
        let coalCokeTypes = ['bamboo', 'cactus', 'sugar'];
        coalCokeTypes.forEach(type => {
            event.recipes.gtceu.compressor("compress_" + type + "_charcoal_to_block")
                .itemInputs("9x gtmetx:" + type + "_charcoal")
                .itemOutputs("gtmetx:" + type + "_charcoal_block")
                .EUt(GTValues.VH[GTValues.ULV] / 2).duration(300);
            event.recipes.gtceu.compressor("compress_" + type + "_coke_to_block")
                .itemInputs("9x gtmetx:" + type + "_coke")
                .itemOutputs("gtmetx:" + type + "_coke_block")
                .EUt(GTValues.VH[GTValues.ULV] / 2).duration(300);
            event.recipes.gtceu.forge_hammer("hammer_" + type + "_charcoal_block_to_individual")
                .itemInputs("gtmetx:" + type + "_charcoal_block")
                .itemOutputs("9x gtmetx:" + type + "_charcoal")
                .EUt(GTValues.VA[GTValues.LV]).duration(100);
            event.recipes.gtceu.forge_hammer("hammer_" + type + "_coke_block_to_individual")
                .itemInputs("gtmetx:" + type + "_coke_block")
                .itemOutputs("9x gtmetx:" + type + "_coke")
                .EUt(GTValues.VA[GTValues.LV]).duration(100);
            
            let name = type != 'sugar' ? type : 'sugar_cane';
            event.recipes.gtceu.coke_oven(name + "_to_charcoal")
                .itemInputs("minecraft:" + name)
                .itemOutputs("gtmetx:" + type + "_charcoal")
                .outputFluids(Fluid.of("gtceu:creosote", 200))
                .duration(900);
            event.recipes.gtceu.coke_oven(name + "_block_to_charcoal_block")
                .itemInputs((type == 'bamboo' ? "minecraft:" : "quark:") + name + "_block")
                .itemOutputs("gtmetx:" + type + "_charcoal_block")
                .outputFluids(Fluid.of("gtceu:creosote", 2000))
                .duration(8100);
            event.recipes.gtceu.coke_oven(type + "_charcoal_to_coke")
                .itemInputs("gtmetx:" + type + "_charcoal")
                .itemOutputs("gtmetx:" + type + "_coke")
                .outputFluids(Fluid.of("gtceu:creosote", 200))
                .duration(900);
            event.recipes.gtceu.coke_oven(type + "_charcoal_block_to_coke_block")
                .itemInputs("gtmetx:" + type + "_charcoal_block")
                .itemOutputs("gtmetx:" + type + "_coke_block")
                .outputFluids(Fluid.of("gtceu:creosote", 2000))
                .duration(8100);

            event.recipes.gtceu.pyrolyse_oven(type + "_to_creosote")
                .circuit(1)
                .itemInputs("16x minecraft:" + name)
                .itemOutputs("20x gtmetx:" + type + "_charcoal")
                .outputFluids(Fluid.of("gtceu:creosote", 3500))
                .EUt(GTValues.VH[GTValues.MV]).duration(640);
            event.recipes.gtceu.pyrolyse_oven(type + "_to_creosote_nitrogen")
                .circuit(2)
                .itemInputs("16x minecraft:" + name)
                .inputFluids(Fluid.of("gtceu:nitrogen", 1000))
                .itemOutputs("20x gtmetx:" + type + "_charcoal")
                .outputFluids(Fluid.of("gtceu:creosote", 3500))
                .EUt(GTValues.V[GTValues.MV] * 3 / 4).duration(320);
            event.recipes.gtceu.pyrolyse_oven(type + "_to_coal_gas")
                .circuit(20)
                .itemInputs("16x minecraft:" + name)
                .inputFluids(Fluid.of("gtceu:steam", 1000))
                .itemOutputs("20x gtmetx:" + type + "_charcoal")
                .outputFluids(Fluid.of("gtceu:coal_gas", 2000))
                .EUt(GTValues.VH[GTValues.MV]).duration(640);
            event.recipes.gtceu.pyrolyse_oven(type + "_to_charcoal_byproducts")
                .circuit(4)
                .itemInputs("16x minecraft:" + name)
                .inputFluids(Fluid.of("gtceu:nitrogen", 1000))
                .itemOutputs("20x gtmetx:" + type + "_charcoal")
                .outputFluids(Fluid.of("gtceu:charcoal_byproducts", 4000))
                .EUt(GTValues.V[GTValues.MV] * 3 / 4).duration(320);
            event.recipes.gtceu.pyrolyse_oven(type + "_charcoal_to_coke_creosote")
                .circuit(1)
                .itemInputs("16x gtmetx:" + type + "_charcoal")
                .itemOutputs("16x gtmetx:" + type + "_coke")
                .outputFluids(Fluid.of("gtceu:creosote", 3500))
                .EUt(GTValues.VH[GTValues.MV]).duration(640);
            event.recipes.gtceu.pyrolyse_oven(type + "_charcoal_to_coke_creosote_nitrogen")
                .circuit(2)
                .itemInputs("16x gtmetx:" + type + "_charcoal")
                .inputFluids(Fluid.of("gtceu:nitrogen", 1000))
                .itemOutputs("16x gtmetx:" + type + "_coke")
                .outputFluids(Fluid.of("gtceu:creosote", 3500))
                .EUt(GTValues.V[GTValues.MV] * 3 / 4).duration(320);
            event.recipes.gtceu.pyrolyse_oven(type + "_charcoal_to_coke_coal_gas")
                .circuit(22)
                .itemInputs("16x gtmetx:" + type + "_charcoal")
                .inputFluids(Fluid.of("gtceu:steam", 1000))
                .itemOutputs("16x gtmetx:" + type + "_coke")
                .outputFluids(Fluid.of("gtceu:coal_gas", 4000))
                .EUt(GTValues.V[GTValues.MV] * 3 / 4).duration(320);

            event.recipes.gtceu.industrial_coke_oven(type + "_charcoal_creosote")
                .circuit(1)
                .itemInputs("minecraft:" + name)
                .itemOutputs("gtmetx:" + type + "_charcoal")
                .outputFluids(Fluid.of("gtceu:creosote", 1500))
                .EUt(GTValues.VH[GTValues.MV]).duration(32);
            event.recipes.gtceu.industrial_coke_oven(type + "_charcoal_creosote_nitrogen")
                .circuit(2)
                .itemInputs("2x minecraft:" + name)
                .inputFluids(Fluid.of("gtceu:nitrogen", 125))
                .itemOutputs("2x gtmetx:" + type + "_charcoal")
                .outputFluids(Fluid.of("gtceu:creosote", 1600))
                .EUt(GTValues.V[GTValues.MV] * 3 / 4).duration(320);
            event.recipes.gtceu.industrial_coke_oven(type + "_charcoal_coal_gas")
                .circuit(22)
                .itemInputs("6x minecraft:" + name)
                .inputFluids(Fluid.of("gtceu:steam", 500))
                .itemOutputs("12x gtmetx:" + type + "_charcoal")
                .outputFluids(Fluid.of("gtceu:coal_gas", 2520))
                .EUt(GTValues.VA[GTValues.MV]).duration(288);
            event.recipes.gtceu.industrial_coke_oven(type + "_charcoal_coal_gas_x2")
                .itemInputs("8x minecraft:" + name, "3x gtmetx:" + type + "_charcoal")
                .inputFluids(Fluid.of("gtceu:steam", 1000))
                .itemOutputs("17x gtmetx:" + type + "_charcoal")
                .outputFluids(Fluid.of("gtceu:coal_gas", 5040))
                .EUt(GTValues.VHA[GTValues.HV]).duration(600);
            event.recipes.gtceu.industrial_coke_oven(type + "_coke_creosote")
                .circuit(1)
                .itemInputs("gtmetx:" + type + "_charcoal")
                .itemOutputs("gtmetx:" + type + "_coke")
                .outputFluids(Fluid.of("gtceu:creosote", 1500))
                .EUt(GTValues.VH[GTValues.MV]).duration(32);
            event.recipes.gtceu.industrial_coke_oven(type + "_coke_creosote_nitrogen")
                .circuit(2)
                .itemInputs("2x gtmetx:" + type + "_charcoal")
                .inputFluids(Fluid.of("gtceu:nitrogen", 125))
                .itemOutputs("2x gtmetx:" + type + "_coke")
                .outputFluids(Fluid.of("gtceu:creosote", 1600))
                .EUt(GTValues.V[GTValues.MV] * 3 / 4).duration(320);
            event.recipes.gtceu.industrial_coke_oven(type + "_coke_coal_gas")
                .circuit(22)
                .itemInputs("6x gtmetx:" + type + "_charcoal")
                .inputFluids(Fluid.of("gtceu:steam", 500))
                .itemOutputs("12x gtmetx:" + type + "_coke")
                .outputFluids(Fluid.of("gtceu:coal_gas", 2520))
                .EUt(GTValues.VA[GTValues.MV]).duration(288);
            event.recipes.gtceu.industrial_coke_oven(type + "_coke_coal_gas_x2")
                .itemInputs("8x gtmetx:" + type + "_charcoal", "3x gtmetx:" + type + "_coke")
                .inputFluids(Fluid.of("gtceu:steam", 1000))
                .itemOutputs("17x gtmetx:" + type + "_coke")
                .outputFluids(Fluid.of("gtceu:coal_gas", 5040))
                .EUt(GTValues.VHA[GTValues.HV]).duration(600);
        });

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