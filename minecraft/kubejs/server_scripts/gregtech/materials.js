// priority: 0

ServerEvents.recipes(event => {
    // Fix incorrect GT conversions
    let forms = ["ingot", "block", "nugget"]
    forms.forEach(form => {
        let gtPrefix = "gtceu:drenched_iron_";
        let emPrefix = "elementalcraft:drenched_iron_";
        event.replaceInput({input: gtPrefix+form}, gtPrefix+form,emPrefix+form);
        event.replaceOutput({output: gtPrefix+form}, gtPrefix+form, emPrefix+form);
    });
    event.recipes.gtceu.alloy_smelter("alloy_smelter/alloy_smelt_drenched_iron_to_nugget")
        .itemInputs("elementalcraft:drenched_iron_ingot")
        .notConsumable("gtceu:nugget_casting_mold")
        .itemOutputs("9x elementalcraft:drenched_iron_nugget")
        .EUt(GTValues.VA[GTValues.ULV]).duration(56);
    event.recipes.gtceu.alloy_smelter("alloy_smelter/alloy_smelt_drenched_iron_to_ingot")
        .itemInputs("elementalcraft:drenched_iron_block")
        .notConsumable("gtceu:ingot_casting_mold")
        .itemOutputs("9x elementalcraft:drenched_iron_ingot")
        .EUt(GTValues.VA[GTValues.ULV]).duration(504);
    event.recipes.gtceu.arc_furnace("arc_furnace/arc_drenched_iron_block")
        .itemInputs("elementalcraft:drenched_iron_block")
        .itemOutputs("9x elementalcraft:drenched_iron_ingot")
        .EUt(GTValues.VA[GTValues.LV]).duration(504);


    ElementalCraftRecipes.initialize(event);
    BotaniaRecipes.initialize(event);

    // Recipes to obtain materials

    // Grounded Copper
        ElementalCraftRecipes.infuse(Item.of("gtceu:grounded_copper_ingot"), Item.of("minecraft:copper_ingot"), 500, "earth");


    // Pure Sand
        BotaniaRecipes.pureDaisy("kubejs:pure_sand", "minecraft:sand");
        event.shaped("gtceu:tiny_pure_glass_dust", [
            "S",
            "M"
        ], {
            S: "kubejs:pure_sand",
            M: "#forge:tools/mortars"
        });
        event.recipes.gtceu.macerator("pure_sand_to_dust").itemInputs("kubejs:pure_sand")
            .itemOutputs("gtceu:pure_glass_dust").EUt(GTValues.VA[GTValues.LV]).duration(50);
        event.recipes.gtceu.macerator("pure_glass_tube_to_dust").itemInputs("gtmetx:pure_glass_tube")
            .itemOutputs("gtceu:pure_glass_dust").EUt(GTValues.VH[GTValues.ULV]/2).duration(20);


    // Quickened Redstone
        ElementalCraftRecipes.infuse(Ingredient.of("gtceu:quickened_redstone_dust"),
            Ingredient.of("minecraft:redstone_block"), 500, "fire");


    // Enlightened Red Alloy
        event.recipes.gtceu.alloy_smelter("enlightened_red_alloy_ingot")
            .itemInputs("gtceu:grounded_copper_ingot", "4x gtceu:quickened_redstone_dust")
            .itemOutputs("gtceu:enlightened_red_alloy_ingot")
            .EUt(GTValues.VH[GTValues.LV]).duration(50);

    let blastMaterial = (mat, temp, inputs, cnt, voltage) => {
        let heatTime = temp * Math.log(temp) / Math.log(voltage) / 20;
        event.recipes.gtceu.alloy_blast_smelter("molten_"+mat)
            .itemInputs(inputs)
            .outputFluids(Fluid.of("gtceu:molten_"+mat, 144*cnt))
            .EUt(GTValues.VA[voltage]).duration(heatTime).blastFurnaceTemp(temp);
        event.recipes.gtceu.vacuum_freezer(mat+"_ingot")
            .notConsumable("gtceu:ingot_casting_mold")
            .inputFluids(Fluid.of("gtceu:molten_"+mat, 144))
            .itemOutputs("gtceu:"+mat+"_ingot")
            .EUt(GTValues.VA[voltage-4]).duration(heatTime / 4);
    }
    // Naquadria Neutronate
        blastMaterial("naquadria_neutronate", 10800,
            ["3x gtceu:naquadria_dust", "4x gtceu:neutronium_dust"],
            7, GTValues.ZPM);

    // Astatine Protactinium Telluride
        blastMaterial("astatine_protactinium_telluride", 2750,
            ["2x gtceu:astatine_dust", "1x gtceu:protactinium_dust", "1x gtceu:tellurium_dust"],
            4, GTValues.ZPM);

    // Fermium Tennessine Trinaquadide
        blastMaterial("fermium_tennessine_trinaquadide", 2500,
            ["3x gtceu:fermium_dust", "3x gtceu:tennessine_dust", "3x gtceu:naquadah_dust"],
            9, GTValues.ZPM);


})