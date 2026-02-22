// priority: 0

ServerEvents.recipes(event => {
    event.smelting("malum:weak_runewood_ash", "#malum:runewood_logs");
    event.smelting("malum:weak_soulwood_ash", "#malum:soulwood_logs");

    event.shaped("matc:inferium_crystal", [
        "TET",
        "ECE",
        "TET"
    ], {
        T: "gtmetx:aether_tube",
        E: "mysticalagriculture:inferium_essence",
        C: "mysticalagriculture:inferium_gemstone"
    });

    AvaritiaRecipes.initialize(event);
    AvaritiaRecipes.shaped_table(2, "projecte:philosophers_stone", [
        "PPGPP",
        "PGDGP",
        "GDIDG",
        "PGDGP",
        "PPGPP"
    ], {
        P: "avaritia:neutron_pile",
        G: "minecraft:glowstone",
        D: "minecraft:diamond_block",
        I: "mysticalagradditions:insanium_essence"
    });

    ElementalCraftRecipes.initialize(event);
    ElementalCraftRecipes.infuse(Ingredient.of("kubejs:purified_cerupetal"), Ingredient.of("mna:cerublossom"), 250, "purity");
    ElementalCraftRecipes.infuse(Ingredient.of("kubejs:entropic_cerupetal"), Ingredient.of("mna:cerublossom"), 250, "entropy");

    event.shaped("waystones:warp_stone", [
        "AEA",
        "ECE",
        "AEA"
    ], {
        A: "minecraft:amethyst_shard",
        E: "minecraft:ender_pearl",
        C: "gtmetx:aether_tube"
    });

    mysticalAgricultureInfusion(event, Ingredient.of("mysticalagriculture:prudentium_essence"), Ingredient.of("mysticalagriculture:inferium_block"),
    [
        Ingredient.of("mysticalagriculture:inferium_essence"),
        Ingredient.of("mysticalagriculture:inferium_essence"),
        Ingredient.of("mysticalagriculture:inferium_essence"),
        Ingredient.of("mysticalagriculture:inferium_essence"),
        Ingredient.of("mysticalagriculture:inferium_essence"),
        Ingredient.of("mysticalagriculture:inferium_essence"),
        Ingredient.of("mysticalagriculture:inferium_essence"),
        Ingredient.of("mysticalagriculture:inferium_essence")
    ]);

    event.custom({
        type: "tconstruct:casting_table",
        cast: {
            item: "elementalcraft:inert_crystal"
        },
        cast_consumed: true,
        cooling_time: 50,
        fluid: {
            amount: 64,
            fluid: "gtceu:gold"
        },
        result: "elementalcraft:contained_crystal"
    });

    mystical_flower_types.forEach(type => {
        event.replaceOutput({output: "botania:" + type + "_petal", input: "#minecraft:flowers"}, 
            "botania:" + type + "_petal", "kubejs:inert_" + type + "_petal");
        event.custom({
            "type": "lychee:item_inside",
            "post": [{"type": "drop_item", "item": "mna:cerublossom", "count": 5},
                {
                    "type": "drop_item",
                    "item": "botania:" + type + "_petal",
                    "count": 2
                }
            ],
            "item_in": [
                {"item": "kubejs:entropic_cerupetal"}, {"item": "kubejs:entropic_cerupetal"}, 
                {"item": "kubejs:purified_cerupetal"}, {"item": "kubejs:purified_cerupetal"},
                {
                    "item": "kubejs:inert_" + type + "_petal"
                }
            ],
            "block_in": "minecraft:water"
        });
    });

    event.custom({
        'type': "lychee:item_inside",
        'post': [{
            'type': "place",
            'block': "kubejs:pale_water"
        }],
        'item_in': [{'item': "mna:aum"}],
        'block_in': "minecraft:water"
    });
    
})