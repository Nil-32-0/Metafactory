// TODO: Change tooltip of Tegmark Forge

ServerEvents.recipes(event => {
    event.recipes.gtceu.tegmark_forge("dirt")
    .itemInputs(
        "3x minecraft:stone"
    )
	.inputFluids(
		Fluid.of("minecraft:lava", 1000)
	)
	.itemOutputs("minecraft:dirt")
    .duration(200)    
})