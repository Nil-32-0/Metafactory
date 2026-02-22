// priority: 0

ItemEvents.tooltip(event => {
    event.add(/tconstruct:\w*clear\w*glass$/, Text.darkGray("ULV-Tier Glass"));
    event.add(/minecraft(:glass|:\w*_glass)$/, Text.gray("LV-Tier Glass"));
    event.add(/enderio:fused_quartz\w*/, Text.aqua("MV-Tier Glass"));
    event.add('gtceu:tempered_glass', Text.gold("HV-Tier Glass"));
    event.add('gtca:reinforced_glass', Text.darkPurple("EV-Tier Glass"));
    event.add('gtceu:laminated_glass', Text.blue("IV-Tier Glass"));
    event.add('gtca:borsilicate_reinforced_iridium_glass', Text.lightPurple("LuV-Tier Glass"));
    event.add('gtceu:fusion_glass', Text.red("ZPM-Tier Glass"));
    event.add('gtca:borsilicate_yttrium_thorium_glass', Text.darkAqua("UV-Tier Glass"));
    event.add('gtca:neutronium_fused_glass', Text.darkRed("UHV-Tier Glass"));
    event.add('gtca:omni_purpose_infinity_fused_glass', Text.yellow("UXV-Tier Glass"));
})