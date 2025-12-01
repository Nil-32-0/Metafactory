GTCEuStartupEvents.registry("gtceu:element", event => {
    // event.create("oganesson", 118, 176, -1, null, "Og", false)
})

const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');

let addFluid = (mat, key) => {
    let prop = new $FluidProperty();
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder());
    mat.setProperty(PropertyKey.FLUID, prop);
}

let addMolten = (mat, key, temp) => {
    let prop = new $FluidProperty();
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder().temperature(temp))
    mat.setProperty(PropertyKey.FLUID, prop);
}

let addElement = (mat, temp) => {
    addMolten(mat, $FluidStorageKeys.LIQUID, temp);
    mat.setProperty(PropertyKey.DUST, new $DustProperty());
    mat.setProperty(PropertyKey.INGOT, new $IngotProperty());
}

GTCEuStartupEvents.registry('gtceu:material', event => {
    addFluid(GTMaterials.Oganesson, $FluidStorageKeys.GAS);
    addFluid(GTMaterials.Californium, $FluidStorageKeys.GAS);
    addElement(GTMaterials.Astatine, 600);
    addElement(GTMaterials.Protactinium, 2500);
    addElement(GTMaterials.Tellurium, 1000);
    addElement(GTMaterials.Fermium, 2000);
    addElement(GTMaterials.Tennessine, 800);


    event.create("naquadria_neutronate").ingot().color(0xcae8e8)
        ["fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)"]
            ($FluidStorageKeys.MOLTEN, new $FluidBuilder().temperature(10800))
        .components("3x naquadria", "4x neutronium").liquid(10800)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW)
    ;
    event.create("astatine_protactinium_telluride").ingot().color(0xbf8653)
        ["fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)"]
            ($FluidStorageKeys.MOLTEN, new $FluidBuilder().temperature(2750))
        .components("2x astatine", "1x protactinium", "1x tellurium").liquid(2750)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING, GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(GTValues.V[GTValues.UEV], 2, 16, false)
    ;
    event.create("fermium_tennessine_trinaquadide").ingot().color(0xa139cd)
        ["fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)"]
            ($FluidStorageKeys.MOLTEN, new $FluidBuilder().temperature(2500))
        .components("3x fermium", "3x tennessine", "3x naquadah").liquid(2500)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING, GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(GTValues.V[GTValues.UEV], 4, 0, true)
    ;

    event.create("semistable_compound").ingot().color(0x8bb01b).liquid(7800)
        ["fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)"]
            ($FluidStorageKeys.MOLTEN, new $FluidBuilder().temperature(7800))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW);
    event.create("aerogen_alloy").ingot().color(0xc8e9ec).liquid(1000)
        ["fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)"]
            ($FluidStorageKeys.MOLTEN, new $FluidBuilder().temperature(1000))
        .components("1x krypton", "2x xenon", "1x argon", "1x helium", "1x neon", "2x oganesson", "1x radon")
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING, GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(GTValues.V[GTValues.UIV], 4, 32, false)
    ;
    event.create("tachyonic_naquadah_neutronate").ingot().color(0x38053c).liquid(10800)
        ["fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)"]
            ($FluidStorageKeys.MOLTEN, new $FluidBuilder().temperature(10800))
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(GTValues.V[GTValues.UIV], 4, 0, true)
    ;

    event.create("infinity").dust().color(0x931163).liquid(10800)
        ["fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)"]
            ($FluidStorageKeys.MOLTEN, new $FluidBuilder().temperature(10800))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW)
    ;
    event.create("temporally_frozen_bec").ingot().color(0x2af3f9).liquid(100)
        ["fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)"]
            ($FluidStorageKeys.MOLTEN, new $FluidBuilder().temperature(100))
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(GTValues.V[GTValues.UXV], 4, 64, false)
    ;
    event.create("constrained_neutrino").ingot().color(0x2ce20a).liquid(8700)
        ["fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)"]
            ($FluidStorageKeys.MOLTEN, new $FluidBuilder().temperature(8700))
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(GTValues.V[GTValues.UXV], 4, 0, true)
    ;

    event.create("transcendental").ingot().color(0x990ae2).liquid(10800)
        ["fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)"]
            ($FluidStorageKeys.MOLTEN, new $FluidBuilder().temperature(10800))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW)
    ;
    event.create("subspatially_layered").ingot().color(0xe6ad69).liquid(10800)
        ["fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)"]
            ($FluidStorageKeys.MOLTEN, new $FluidBuilder().temperature(10800))
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(GTValues.V[GTValues.OpV], 8, 0, true)
    ;

    // Ores registry
    event.create("blazing_quartz").ore(true).color(0xfdb237).gem();
    event.create("cthonic_gold").ore().color(0xfcf49a);
    event.create("dimensional_shard").ore(true).color(0x92dddb).gem();
    event.create("draconium").ore(true).color(0x763eaa);
    event.create("inert_crystal").ore().color(0xf9f9f8).gem();
    event.create("inferium").ore(3, 1, true).color(0x6a8101);
    event.create("natural_quartz").ore().color(0xe7e3da).gem();
    event.create("prosperity").ore(true).color(0x8cabaa).gem();
    event.create("soulstone").ore(true).color(0xa339a8).gem();
    event.create("vinteum").ore(true).color(0x5461ec);

    // Non-Ore Materials
    event.create("drenched_iron").ingot().color(0x93b8de).iconSet(GTMaterialIconSet.BRIGHT).components("1x iron")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD);
    event.create("grounded_copper").ingot().color(0xac6212).iconSet(GTMaterialIconSet.METALLIC).components("1x copper")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(1, 1, 1, false);
    event.create("quickened_redstone").dust().liquid().color(0x571616);
    event.create("enlightened_red_alloy").ingot().color(0xbb3d3d).iconSet(GTMaterialIconSet.SHINY)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .cableProperties(8, 2, 0, false);

    event.create("pure_glass").dust().color(0xdddddd).iconSet(GTMaterialIconSet.GLASS).components("1x silicon", "2x oxygen");

})
