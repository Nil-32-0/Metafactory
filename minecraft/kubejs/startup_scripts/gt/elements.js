GTCEuStartupEvents.registry("gtceu:element", event => {
    // event.create("oganesson", 118, 176, -1, null, "Og", false)
})

const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');

let addFluid = (mat, key) => {
    let prop = new $FluidProperty();
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder());
    mat.setProperty(PropertyKey.FLUID, prop);
}

GTCEuStartupEvents.registry('gtceu:material', event => {
    addFluid(GTMaterials.Oganesson, $FluidStorageKeys.GAS);
    addFluid(GTMaterials.Californium, $FluidStorageKeys.GAS);

    event.create("blazing_quartz").ore(true).color(0xfdb237).gem()
    event.create("cthonic_gold").ore().color(0xfcf49a)
    event.create("dimensional_shard").ore(true).color(0x92dddb).gem()
    event.create("draconium").ore(true).color(0x763eaa)
    event.create("inert_crystal").ore().color(0xf9f9f8).gem()
    event.create("inferium").ore(3, 1, true).color(0x6a8101)
    event.create("natural_quartz").ore().color(0xe7e3da).gem()
    event.create("prosperity").ore(true).color(0x8cabaa).gem()
    event.create("soulstone").ore(true).color(0xa339a8).gem()
    event.create("vinteum").ore(true).color(0x5461ec)

})
