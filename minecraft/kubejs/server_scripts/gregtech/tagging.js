

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
})