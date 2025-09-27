// priority: 10

ServerEvents.recipes(event => {
    function gemReplacement (gem, gtGem) {
        let gtGemFull = "gtceu:" + gtGem + "_gem"

        event.replaceInput({input: gtGemFull}, gtGemFull, gem)
        event.replaceOutput({output: gtGemFull}, gtGemFull, gem)

        event.remove({type:"gtceu:cutter", output: gem})
        event.remove({type:"gtceu:forge_hammer", input: "gtceu:"+gtGem+"_block"})
        event.remove({type:"gtceu:forge_hammer", input: "gtceu:endstone_"+gtGem+"_ore"})
        event.remove({type:"gtceu:forge_hammer", input: "gtceu:netherrack_"+gtGem+"_ore"})
        event.remove({type:"gtceu:implosion_compressor", input: "gtceu:"+gtGem+"_dust"})

        event.recipes.gtceu.cutter("cut_"+gtGem+"_flawless_gem_to_gem")
            .itemInputs(Item.of("gtceu:flawless_"+gtGem+"_gem"))
            .itemOutputs(Item.of(gem, 2))
            .EUt(GTValues.VH[GTValues.LV])
            .duration(20)
        event.recipes.gtceu.forge_hammer("hammer_endstone_"+gtGem+"_ore_to_crushed_ore")
            .itemInputs(Item.of("gtceu:endstone_"+gtGem+"_ore"))
            .itemOutputs(Item.of(gem, 2))
            .EUt(GTValues.VH[GTValues.LV])
            .duration(10)
        event.recipes.gtceu.forge_hammer("hammer_netherrack_"+gtGem+"_ore_to_crushed_ore")
            .itemInputs(Item.of("gtceu:netherrack_"+gtGem+"_ore"))
            .itemOutputs(Item.of(gem, 2))
            .EUt(GTValues.VH[GTValues.LV])
            .duration(10)
        event.recipes.gtceu.forge_hammer("hammer_"+gtGem+"_block_to_gem")
            .itemInputs(Item.of("gtceu:"+gtGem+"_block"))
            .itemOutputs(Item.of(gem, 9))
            .EUt(GTValues.VH[GTValues.LV]*1.5)
            .duration(100)

        let explosives = ["tnt", "powderbarrel", "dynamite", "industrial_tnt"]
        let explosiveMappings = {
            "tnt": ["minecraft:", 4],
            "powderbarrel": ["gtceu:", 8],
            "dynamite": ["gtceu:", 2],
            "industrial_tnt": ["gtceu:", 1]
        }
        explosives.forEach(explosive => {
            event.recipes.gtceu.implosion_compressor("implode_dust_"+gtGem+explosive)
                .itemInputs(
                    Item.of("gtceu:"+gtGem+"_dust", 4),
                    Item.of(explosiveMappings[explosive][0]+explosive, explosiveMappings[explosive][1])
                )
                .itemOutputs(Item.of(gem, 3))
                .chancedOutput(Item.of("gtceu:dark_ash_dust"), 2500, 0)
                .EUt(GTValues.VA[GTValues.LV])
                .duration(20)
        })
        
        
    }

    gemReplacement("malum:blazing_quartz", "blazing_quartz")
    gemReplacement("rftoolsbase:dimensionalshard", "dimensional_shard")
    gemReplacement("elementalcraft:inert_crystal", "inert_crystal")
    gemReplacement("malum:natural_quartz", "natural_quartz")
    gemReplacement("mysticalagriculture:prosperity_shard", "prosperity")
    gemReplacement("malum:processed_soulstone", "soulstone")

    event.replaceInput({input: "gtceu:draconium_dust"}, "gtceu:draconium_dust", "draconicevolution:draconium_dust")
    event.replaceOutput({output: "gtceu:draconium_dust"}, "gtceu:draconium_dust", "draconicevolution:draconium_dust")
    event.replaceInput({input: "gtceu:vinteum_dust"}, "gtceu:vinteum_dust", "mna:vinteum_dust")
    event.replaceOutput({output: "gtceu:vinteum_dust"}, "gtceu:vinteum_dust", "mna:vinteum_dust")

    event.remove({type:"minecraft:smelting", output:"mysticalagriculture:inferium_essence"})
    event.smelting("3x mysticalagriculture:inferium_essence", "#forge:ores/inferium")
    event.smelting("mysticalagriculture:inferium_essence", "gtceu:inferium_dust")
    event.blasting("3x mysticalagriculture:inferium_essence", "#forge:ores/inferium")
    event.blasting("mysticalagriculture:inferium_essence", "gtceu:inferium_dust")
})