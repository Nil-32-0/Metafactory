GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:overworld/malignant_vein", vein => {
        vein.weight(50)
        vein.clusterSize(60)
        vein.density(0.75)

        vein.layer("stone")
        vein.heightRangeUniform(0, 50)

        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.get("blazing_quartz"), 2)
            .oreBlock(GTMaterials.get("cthonic_gold"), 2)
            .oreBlock(GTMaterials.get("natural_quartz"), 1)
            .oreBlock(GTMaterials.get("soulstone"), 1)
            .veininessThreshold(0.20)
            .maxRichnessThreshold(0.40)
            .minRichness(0.40)
            .maxRichness(0.75)
            .edgeRoundoffBegin(25)
            .maxEdgeRoundoff(0.1)
        )
    })

    event.add("kubejs:overworld/draconic_vein", vein => {
        vein.weight(10)
        vein.clusterSize(10)
        vein.density(0.85)

        vein.layer("deepslate")
        vein.heightRangeUniform(-60, -20)

        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.get("draconium"), 1, -60, -20)
            .withBlock(GTMaterials.get("draconium"), 1, -60, -20)
        )
    })

    event.add("kubejs:overworld/magic_vein", vein => {
        vein.weight(50)
        vein.clusterSize(32)
        vein.density(0.85)

        vein.layer("deepslate")
        vein.heightRangeUniform(-60, -10)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.get("inferium")).size(2,4))
                .layer(l => l.weight(4).mat(GTMaterials.get("vinteum")).size(1,2))
                .layer(l => l.weight(3).mat(GTMaterials.get("inert_crystal")).size(1,2))
                .layer(l => l.weight(3).mat(GTMaterials.get("prosperity")).size(1,2))
            )
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("inferium"))
            .density(0.10)
            .radius(3)
        )
    })
})