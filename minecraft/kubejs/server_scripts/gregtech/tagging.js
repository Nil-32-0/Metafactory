// priority: 25

ServerEvents.tags("item", event => {
    let gtmodernTiers = [
        "ulv",
        "lv",
        "mv",
        "hv",
        "ev",
        "iv",
        "luv",
        "zpm",
        "uv",
        "uhv",
        "uev",
        "uiv",
        "uxv",
        "opv",
        "max"
    ]

    gtmodernTiers.forEach(tier => {
        event.add("gtceu:circuits/tech/"+tier, event.get("gtceu:circuits/"+tier).getObjectIds());
        event.add("gtceu:circuits/tech", event.get("gtceu:circuits/"+tier).getObjectIds());
        event.add("gtceu:circuits/"+tier, event.get("gtceu:circuits/magic/"+tier).getObjectIds())
    });

    event.add("gtceu:circuits", "#gtceu:circuits/magic");

    event.add("forge:gems", 'elementalcraft:springaline_shard');
    event.add("forge:gems/springaline", 'elementalcraft:springaline_shard');
    event.add("forge:storage_blocks", 'elementalcraft:springaline_block')
    event.add("forge:storage_blocks/springaline", 'elementalcraft:springaline_block');

    event.add("tconstruct:glass/clear", /tconstruct:\w*clear\w*glass$/);
    event.add("gtmetx:glass/lv", /minecraft(:glass|:\w*_glass)$/);
    event.add("gtmetx:glass/mv", /enderio:fused_quartz\w*/);
    event.add("gtmetx:glass/hv", 'gtceu:tempered_glass');
    event.add("gtmetx:glass/ev", 'gtca:reinforced_glass');
    event.add("gtmetx:glass/iv", 'gtceu:laminated_glass');
    event.add("gtmetx:glass/luv", 'gtca:borsilicate_reinforced_iridium_glass');
    event.add("gtmetx:glass/zpm", 'gtceu:fusion_glass');
    event.add("gtmetx:glass/uv", 'gtca:borsilicate_yttrium_thorium_glass');
    event.add("gtmetx:glass/uhv", 'gtca:neutronium_fused_glass');
    event.add('gtmetx:glass/uev', 'gtca:neutronium_fused_glass');
    event.add('gtmetx:glass/uiv', 'gtca:neutronium_fused_glass');
    event.add("gtmetx:glass/uxv", 'gtca:omni_purpose_infinity_fused_glass');
    event.add("gtmetx:glass/opv", 'gtca:omni_purpose_infinity_fused_glass');
})