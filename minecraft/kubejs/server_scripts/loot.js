// priority: 0

LootJS.modifiers((event) => {
    mystical_flower_types.forEach(type => {
        event.addBlockLootModifier("botania:" + type + "_mystical_flower")
            .not((n) => {
                n.matchMainHand(Ingredient.of("#forge:shears"));
            })
            .replaceLoot("botania:" + type + "_mystical_flower", "2x kubejs:inert_" + type + "_petal");
        event.addBlockLootModifier("botania:" + type + "_double_flower")
            .not((n) => {
                n.matchMainHand(Ingredient.of("#forge:shears"));
            })
            .replaceLoot("botania:" + type + "_double_flower", "4x kubejs:inert_" + type + "_petal");
    });
    event.addBlockLootModifier("minecraft:grass").removeLoot("occultism:datura_seeds");
    event.addBlockLootModifier("minecraft:tall_grass").removeLoot("occultism:datura_seeds");
})