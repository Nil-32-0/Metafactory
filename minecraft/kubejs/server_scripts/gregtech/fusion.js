ServerEvents.recipes(event => {
    event.recipes.gtceu.fusion_reactor("californium")
    .inputFluids(
        Fluid.of("gtceu:lithium", 16),
        Fluid.of("gtceu:americium", 16)
    )
    .outputFluids(
        Fluid.of("gtceu:californium", 16)
    )
    .fusionStartEU(480000000)
    .EUt(GTValues.VA[GTValues.LuV])
    .duration(128)

    // event.recipes.gtceu.fusion_reactor("oganesson")
    // .inputFluids(
    //     Fluid.of("gtca:calcium_plasma_plasma", 48),
    //     Fluid.of("gtceu:californium", 16)
    // )
    // .outputFluids(
    //     Fluid.of("gtceu:oganesson", 16)
    // )
    // .fusionStartEU(640000000)
    // .EUt(GTValues.VA[GTValues.ZPM])
    // .duration(256)
})