GTCEuStartupEvents.registry("gtceu:world_gen_layer", event => {
    // y >= 60
    event.create("alfheim_livingrock_high")
        .targets("botania:livingrock")
        .dimensions("mythicbotany:alfheim")
    // 0 <= y < 60
    event.create("alfheim_livingrock")
        .targets("botania:livingrock")
        .dimensions("mythicbotany:alfheim")
    // y < 0
    event.create("alfheim_livingrock_deep")
        .targets("botania:livingrock")
        .dimensions("mythicbotany:alfheim")

    // 60 <= y
    event.create("aether")
        .targets("aether:holystone", "deep_aether:raw_clorite", "deep_aether:aseterite", "aether_redux:divinite", "aether_redux:sentrite")
        .dimensions("aether:the_aether")

    // y < 60
    event.create("aether_deep")
        .targets("aether:holystone", "deep_aether:raw_clorite", "deep_aether:aseterite", "aether_redux:divinite", "aether_redux:sentrite")
        .dimensions("aether:the_aether")
})