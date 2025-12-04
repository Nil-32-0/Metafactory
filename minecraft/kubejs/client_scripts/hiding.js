// priority: 0

JEIEvents.hideItems(event => {
    let hiddenTypes = [
        "blazing_quartz",
        "inert_crystal",
        "prosperity",
        "soulstone"
    ];

    hiddenTypes.forEach(type => {
        event.hide("gtceu:"+type+"_block");
        event.hide("gtceu:"+type+"_gem");
    });

    event.hide("gtceu:drenched_iron_ingot");
    event.hide("gtceu:drenched_iron_block");
    event.hide("gtceu:drenched_iron_nugget");
})