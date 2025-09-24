GT Community Additions multiblock

Used to create materials by using fundamental particles to modify an existing material.

TODO: Change tooltip to "...Allows the creation of ethereal materials by combining fundamental particles in the right ratio..."

<ins>Recipes</ins>
Takes up to 8 stacks of items and 2 fluids
Optionally consumes power and requires a data model
Outputs up to 1 stack of items

Example recipe:
```
event.recipes.gtceu.tegmark_forge("recipe id")
	.itemInputs(
		"item1",
		"item2",
		"max 8 item inputs"
	)
	.inputFluids(
		Fluid.of("fluid1", amount),
		Fluid.of("max 2 fluid inputs", amount)
	)
	.itemOutputs("item")
	.stationResearch(b => b
		.researchStack(Item.of("researchItem"))
		.CWUt(computationPerTick)
		.EUt(GTValues.VA[GTValues.VoltageTier])
	)
	.duration(duration) // duration in ticks
	.EUt(GTValues.VA[GTValues.VoltageTier])
```

Recipe syntax:
```
event.recipe.gtceu.tegmark_forge("recipe_id")
	.itemInputs()   // Optional, excluding will prevent research from working
					// itemInput does not work here, itemInputs must be used
	.inputFluids()  // Optional
	.itemOutputs()
	.stationResearch(b => b // Optional
		.researchStack(Item.of("researchItem"))
		.CWUt(computationPerTick)       // Determines research duration
										// Research requires 4000x this computation
		.EUt(GTValues.VA[GTValues.VoltageTier]) // Optional, defaults to LuV
	)
	.duration()     // Optional duration in ticks, default 5 seconds
	.EUt(GTValues.VA[GTValues.VoltageTier])
					// Optional, energy not needed if omitted
```