GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:alfheim/dragonstone_peaks", vein => {
        vein.weight(20)
        vein.clusterSize(5)
        vein.density(0.8)

        vein.layer("alfheim_livingrock_high")
        vein.heightRangeUniform(100, 250)
        vein.biomes("mythicbotany:alfheim_hills")

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).block(() => Block.getBlock('mythicbotany:dragonstone_ore')).size(1,1))
                .layer(l => l.weight(1).block(() => Block.getBlock('mythicbotany:dragonstone_ore')).size(1,1))
            )
        )
    })

    event.add("kubejs:alfheim/peak_filler", vein => {
        vein.weight(200)
        vein.clusterSize(1)
        vein.density(0.10)

        vein.layer("alfheim_livingrock_high")
        vein.heightRangeUniform(60, 65)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).block(() => Block.getBlock('botania:livingrock')).size(1, 1))
                .layer(l => l.weight(1).block(() => Block.getBlock('botania:livingrock')).size(1, 1))
            )
        )
    })
    
    event.add("kubejs:alfheim/small_gold", vein => {
        vein.weight(100)
        vein.clusterSize(20)
        vein.density(0.20)
        vein.discardChanceOnAirExposure(0.10)

        vein.layer("alfheim_livingrock")
        vein.heightRangeUniform(-10, 40)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(30).mat(GTMaterials.Gold).size(3, 5))
                .layer(l => l.weight(1).mat(GTMaterials.Gold).size(1,1))
            )
        )
    })

    event.add("kubejs:alfheim/deep_filler", vein => {
        vein.weight(200)
        vein.clusterSize(1)
        vein.density(0.10)

        vein.layer("alfheim_livingrock_deep")
        vein.heightRangeUniform(-10, 0)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).block(() => Block.getBlock('botania:livingrock')).size(1, 1))
                .layer(l => l.weight(1).block(() => Block.getBlock('botania:livingrock')).size(1, 1))
            )
        )
    })

    event.add("kubejs:alfheim/large_gold", vein => {
        vein.weight(25)
        vein.clusterSize(40)
        vein.density(0.70)
        vein.discardChanceOnAirExposure(0.95)

        vein.layer("alfheim_livingrock_deep")
        vein.heightRangeUniform(-50, 0)

        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(25).mat(GTMaterials.Gold).size(2, 4))
                .layer(l => l.weight(5).block(() => Block.getBlock('mythicbotany:dragonstone_ore')).size(1, 3))
                .layer(l => l.weight(5).block(() => Block.getBlock('mythicbotany:elementium_ore')).size(1, 3))
            )
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Gold)
            .density(0.05)
            .radius(15)
        )
    })

    event.add("kubejs:alfheim/small_deep_magic_vein", vein => {
        vein.weight(50)
        vein.clusterSize(30)
        vein.density(0.65)
        vein.discardChanceOnAirExposure(0.50)

        vein.layer("alfheim_livingrock_deep")
        vein.heightRangeUniform(-50, -10)

        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.get("inert_crystal"), 3, -40, -10)
            .withBlock(GTMaterials.get("cthonic_gold"), 1, -50, -20)
        )

        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("inert_crystal"))
            .density(0.10)
            .radius(5)
        )
    })

    event.add("kubejs:alfheim/large_deep_magic_vein", vein => {
        vein.weight(25)
        vein.clusterSize(50)
        vein.density(0.75)
        vein.discardChanceOnAirExposure(0.65)

        vein.layer("alfheim_livingrock_deep")
        vein.heightRangeUniform(-60, -10)

        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.get("inert_crystal"), 3)
            .oreBlock(GTMaterials.get("cthonic_gold"), 2)
            .oreBlock(GTMaterials.get("inferium"), 2)
            .rareBlock(GTMaterials.get("draconium"), 1)
            .rareBlockChance(0.20)
            .veininessThreshold(0.20)
            .maxRichnessThreshold(0.40)
            .minRichness(0.40)
            .maxRichness(0.75)
            .edgeRoundoffBegin(15)
            .maxEdgeRoundoff(0.25)
        )
    })
})