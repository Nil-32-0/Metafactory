// priority: 0

StartupEvents.registry("block", event => {
    event.create("pure_sand").textureAll("kubejs:block/base_resources/pure_sand").tagBoth("minecraft:sand").tagBoth("forge:sand");
})

StartupEvents.registry("fluid", event => {
    event.create('pale_water')
        .thinTexture(0x449999)
        .displayName("Pale Water")
        .noBucket();
})