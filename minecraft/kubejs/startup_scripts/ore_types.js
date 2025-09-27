GTCEuStartupEvents.registry("gtceu:tag_prefix", event => {
    event.create("livingrock", "ore")
        .stateSupplier(() => Block.getBlock("botania:livingrock").defaultBlockState())
        .baseModelLocation("botania:block/livingrock")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
})