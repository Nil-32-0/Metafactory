GTCEuStartupEvents.registry("gtceu:tag_prefix", event => {
    event.create("livingrock", "ore")
        .stateSupplier(() => Block.getBlock("botania:livingrock").defaultBlockState())
        .baseModelLocation("botania:block/livingrock")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty);

    event.create("holystone", "ore")
        .stateSupplier(() => Block.getBlock("aether:holystone").defaultBlockState())
        .baseModelLocation("aether:block/holystone")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty);

    event.create("raw_clorite", "ore")
        .stateSupplier(() => Block.getBlock("deep_aether:raw_clorite").defaultBlockState())
        .baseModelLocation("deep_aether:block/raw_clorite")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty);

    event.create("aseterite", "ore")
        .stateSupplier(() => Block.getBlock("deep_aether:aseterite").defaultBlockState())
        .baseModelLocation("deep_aether:block/aseterite")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty);

    event.create("divinite", "ore")
        .stateSupplier(() => Block.getBlock("aether_redux:divinite").defaultBlockState())
        .baseModelLocation("aether_redux:block/divinite")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty);
    
    event.create("sentrite", "ore")
        .stateSupplier(() => Block.getBlock("aether_redux:sentrite").defaultBlockState())
        .baseModelLocation("aether_redux:block/sentrite")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty);
})