

StartupEvents.registry("item", event => {
    let circuitThemes = {
        "sorcerous": {
            prefix: "Sorcerous Processor", 
            category: "magic", 
            baseRank: 2,
            color: "§3", // #00AAAA
            tooltip: "§7Mystifying Computation Speed!"
        },
        "aurelian": {
            prefix: "Aurelian Processor", 
            category: "magic", 
            baseRank: 3,
            color: "§e", // #FFFF55
            tooltip: "§7Tapping gold's potential"
        },
        "enigmatic": {
            prefix: "Enigmatic Processor", 
            category: "magic", 
            baseRank: 4,
            color: "§8", // #555555
            tooltip: "§7Understanding through incomprehension"
        },
        "philosophers": {
            prefix: "Philosopher's Processor", 
            category: "magic", 
            baseRank: 5,
            color: "§c", // #FF5555
            tooltip: "§7Transmuting into information"
        },
        "biological": {
            prefix: "Biological Processor", 
            category: "magic", 
            baseRank: 6,
            color: "§4", // #AA0000
            tooltip: "§7Nature's Hardware"
        },
        "exotic": {
            prefix: "Exotic Processor", 
            category: "tech", 
            baseRank: 7,
            color: "§2", // #00AA00
            tooltip: "§7Strangely superior computation"
        },
        "eldritch": {
            prefix: "Eldritch Processor", 
            category: "magic", 
            baseRank: 7,
            color: "§5", // #AA00AA
            tooltip: "§7The ultimate black box"
        },
        "self_referential": {
            prefix: "Self-Referential Processor", 
            category: "tech", 
            baseRank: 8,
            color: "§1", // #0000AA
            tooltip: "§7Referring to itself referring to itself referring to itself..."
        },
        "ontological": {
            prefix: "Ontological Processor", 
            category: "magic", 
            baseRank: 8,
            color: "§9", // #5555FF
            tooltip: "§7Computation without start nor end"
        },
        "multiversal": {
            prefix: "Multiversal Processor", 
            category: "tech", 
            baseRank: 9,
            color: "§d", // #FF55FF
            tooltip: "§7§kBreaking beyond this existence"
        },
        "prophetic": {
            prefix: "Prophetic Processor", 
            category: "magic", 
            baseRank: 9,
            color: "§d", // #FF55FF
            tooltip: "§7Computing omens of the future"
        }
    };
    let circuitTypes = {
        "processor": {suffix: "", rankAddition: 0},
        "processor_assembly": {suffix: "Assembly", rankAddition: 1},
        "processor_computer": {suffix: "Supercomputer", rankAddition: 2},
        "processor_mainframe": {suffix: "Mainframe", rankAddition: 3},
        "processor_zettacomputer": {suffix: "Zettacomputer", rankAddition: 4},
        "processor_core": {suffix: "Matryoshka Core", rankAddition: 5}
    };
    let expandedThemes = {
        "micro": {
            prefix: "Microprocessor", 
            baseRank: 2,
            color: "§e", // #FFFF55
            tooltip: "§7Amazing Computation Speed!"
        },
        "nano": {
            prefix: "Nanoprocessor", 
            baseRank: 3,
            color: "§b", // #55FFFF
            tooltip: "§7Smaller than ever"
        },
        "quantum": {
            prefix: "Quantum Processor", 
            baseRank: 4,
            color: "§a", // #55FF55
            tooltip: "§7Quantum Computing comes to life!"
        },
        "crystal": {
            prefix: "Crystal Processor", 
            baseRank: 5,
            color: "§9", // #5555FF
            tooltip: "§7Taking Advantage of Crystal Engraving"
        },
        "wetware": {
            prefix: "Wetware Processor", 
            baseRank: 6,
            color: "§4", // #AA0000
            tooltip: "§7Ultimate fusion of Flesh and Machine"
        }
    }

    let ranks = [
        ["ulv", "ULV"],
        ["lv", "LV"],
        ["mv", "MV"],
        ["hv", "HV"],
        ["ev", "EV"],
        ["iv", "IV"],
        ["luv", "LuV"],
        ["zpm", "ZPM"],
        ["uv","UV"],
        ["uhv", "UHV"],
        ["uev", "UEV"],
        ["uiv", "UIV"],
        ["uxv", "UXV"],
        ["opv", "OpV"],
        ["max", "MAX"]
    ]

    Object.keys(circuitThemes).forEach(theme => {
        Object.keys(circuitTypes).forEach(type => {
            let circuitTag;
            let circuitRankTag;
            let rank = circuitThemes[theme].baseRank + circuitTypes[type].rankAddition;
            if (circuitThemes[theme].category == "magic") {
                circuitTag = "gtceu:circuits/magic"; // This tag is later auto-added to the gtceu:circuits tag
                circuitRankTag = "gtceu:circuits/magic/" + ranks[rank][0];
            } else if (circuitThemes[theme].category == "tech") {
                circuitTag = "gtceu:circuits"; // This tag is auto-added to the sub-tags
                circuitRankTag = "gtceu:circuits/" + ranks[rank][0];
            }

            event.create("gtmetx:"+theme+"_"+type)
                .displayName(circuitThemes[theme].prefix+" "+circuitTypes[type].suffix)
                .texture("gtmetx:item/circuits/"+theme+"/"+type)
                .tag("kubejs:needs_texture").tag("kubejs:needs_recipe")
                .tag(circuitTag)
                .tag(circuitRankTag)
                .tooltip(circuitThemes[theme].tooltip)
                .tooltip(circuitThemes[theme].color + ranks[rank][1] + "-Tier Circuit");
        });
    });

    Object.keys(expandedThemes).forEach(theme => {
        ["processor_zettacomputer", "processor_core"].forEach(type => {
            let rank = expandedThemes[theme].baseRank + circuitTypes[type].rankAddition;
            let circuitRankTag = "gtceu:circuits/" + ranks[rank][0];

            event.create("gtmetx:"+theme+"_"+type)
                .displayName(expandedThemes[theme].prefix+" "+circuitTypes[type].suffix)
                .texture("gtmetx:item/circuits/"+theme+"/"+type)
                .tag("kubejs:needs_texture").tag("kubejs:needs_recipe")
                .tag("gtceu:circuits")
                .tag(circuitRankTag)
                .tooltip(expandedThemes[theme].tooltip)
                .tooltip(expandedThemes[theme].color + ranks[rank][1] + "-Tier Circuit");
        });
    });

    event.create("gtmetx:basic_arcane_circuit").texture("gtmetx:item/circuits/arcane/basic").tag("kubejs:needs_texture").tag("kubejs:needs_recipe")
        .tag("gtceu:circuits/magic").tag("gtceu:circuits/magic/lv").tooltip("§7Your Second Circuit").tooltip("§cLV-Tier Circuit");
    event.create("gtmetx:good_arcane_circuit").texture("gtmetx:item/circuits/arcane/good").tag("kubejs:needs_texture").tag("kubejs:needs_recipe")
        .tag("gtceu:circuits/magic").tag("gtceu:circuits/magic/mv").tooltip("§7Your Fourth Circuit").tooltip("§cMV-Tier Circuit");
    event.create("gtmetx:basic_mystic_circuit").texture("gtmetx:item/circuits/mystic/basic").tag("kubejs:needs_texture").tag("kubejs:needs_recipe")
        .tag("gtceu:circuits/magic").tag("gtceu:circuits/magic/lv").tooltip("§7Smaller and faster").tooltip("§6LV-Tier Circuit");
    event.create("gtmetx:good_mystic_circuit").texture("gtmetx:item/circuits/mystic/good").tag("kubejs:needs_texture").tag("kubejs:needs_recipe")
        .tag("gtceu:circuits/magic").tag("gtceu:circuits/magic/mv").tooltip("§7Smaller and faster").tooltip("§6MV-Tier Circuit");
    event.create("gtmetx:advanced_mystic_circuit").texture("gtmetx:item/circuits/mystic/advanced").tag("kubejs:needs_texture").tag("kubejs:needs_recipe")
        .tag("gtceu:circuits/magic").tag("gtceu:circuits/magic/hv").tooltip("§7Smaller and faster").tooltip("§6HV-Tier Circuit");

    event.create("gtmetx:aether_tube").texture("gtmetx:item/circuits/aether_tube").tag("kubejs:needs_texture").tag("kubejs:needs_recipe")
        .tag("gtceu:circuits/magic").tag("gtceu:circuits/magic/ulv").tooltip("§7Supposedly impossible").tooltip("§cULV-Tier Circuit");
    event.create("gtmetx:mana_chip").displayName("MANA Chip").texture("gtmetx:item/circuits/mana_chip").tag("kubejs:needs_texture").tag("kubejs:needs_recipe")
        .tag("gtceu:circuits/magic").tag("gtceu:circuits/magic/ulv").tooltip("§7Magically Attributed NAND Architecture").tooltip("§6ULV-Tier Circuit");
    
});