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
})