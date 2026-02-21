// priority: 0

StartupEvents.registry("item", event => {
    event.create("gtmetx:bamboo_charcoal").texture("gtmetx:item/coal/bamboo_charcoal").burnTime(400)
        .tag("minecraft:coals").tag("forge:gems").tag("forge:gems/bamboo_charcoal");
    event.create("gtmetx:bamboo_coke").texture("gtmetx:item/coal/bamboo_coke").burnTime(800)
        .tag("forge:gems").tag("forge:gems/bamboo_coke");
    event.create("gtmetx:cactus_charcoal").texture("gtmetx:item/coal/cactus_charcoal").burnTime(400)
        .tag("minecraft:coals").tag("forge:gems").tag("forge:gems/cactus_charcoal");
    event.create("gtmetx:cactus_coke").texture("gtmetx:item/coal/cactus_coke").burnTime(800)
        .tag("forge:gems").tag("forge:gems/cactus_coke");
    event.create("gtmetx:sugar_charcoal").texture("gtmetx:item/coal/sugar_charcoal").burnTime(400)
        .tag("minecraft:coals").tag("forge:gems").tag("forge:gems/sugar_charcoal");
    event.create("gtmetx:sugar_coke").texture("gtmetx:item/coal/sugar_coke").burnTime(800)
        .tag("forge:gems").tag("forge:gems/sugar_coke");
})

StartupEvents.registry("block", event => {
    event.create("gtmetx:bamboo_charcoal_block").textureAll("gtmetx:block/coal/bamboo_charcoal_block").tagBoth("forge:storage_blocks")
        .tagBoth("forge:storage_blocks/bamboo_charcoal").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:needs_wood_tool")
        .item(item => item.burnTime(400*9));
    event.create("gtmetx:bamboo_coke_block").textureAll("gtmetx:block/coal/bamboo_coke_block").tagBoth("forge:storage_blocks")
        .tagBoth("forge:storage_blocks/bamboo_coke").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:needs_wood_tool")
        .item(item => item.burnTime(800*9));
    event.create("gtmetx:cactus_charcoal_block").textureAll("gtmetx:block/coal/cactus_charcoal_block").tagBoth("forge:storage_blocks")
        .tagBoth("forge:storage_blocks/cactus_charcoal").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:needs_wood_tool")
        .item(item => item.burnTime(400*9));
    event.create("gtmetx:cactus_coke_block").textureAll("gtmetx:block/coal/cactus_coke_block").tagBoth("forge:storage_blocks")
        .tagBoth("forge:storage_blocks/cactus_coke").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:needs_wood_tool")
        .item(item => item.burnTime(800*9));
    event.create("gtmetx:sugar_charcoal_block").textureAll("gtmetx:block/coal/sugar_charcoal_block").tagBoth("forge:storage_blocks")
        .tagBoth("forge:storage_blocks/sugar_charcoal").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:needs_wood_tool")
        .item(item => item.burnTime(400*9));
    event.create("gtmetx:sugar_coke_block").textureAll("gtmetx:block/coal/sugar_coke_block").tagBoth("forge:storage_blocks")
        .tagBoth("forge:storage_blocks/sugar_coke").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:needs_wood_tool")
        .item(item => item.burnTime(800*9));
})