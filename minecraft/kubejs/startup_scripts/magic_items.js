// priority: 0

StartupEvents.registry("item", event => {
    event.create("gtmetx:pure_glass_tube").texture("gtmetx:item/circuit_components/pure_glass_tube");
    event.create("gtmetx:weak_runewood_board").texture("gtmetx:item/circuit_components/weak_runewood_board");

    event.create("gtmetx:resin_runewood_ash").displayName("Resin-Bound Runewood Ash")
        .texture("gtmetx:item/intermediate_components/resin_runewood_ash");

    event.create("malum:weak_runewood_ash").texture("malum:item/weak_runewood_ash");
    event.create("malum:weak_soulwood_ash").texture("malum:item/weak_soulwood_ash");

    event.create("kubejs:entropic_cerupetal").texture("kubejs:item/entropic_cerupetal");
    event.create("kubejs:purified_cerupetal").texture("kubejs:item/purified_cerupetal");

    mystical_flower_types.forEach(type => {
        event.create("kubejs:inert_" + type + "_petal").texture("kubejs:item/petal/inert_" + type + "_petal");
    });
})