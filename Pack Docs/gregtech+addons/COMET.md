GT Community Additions multiblock

Particle accelerator that smashes atoms together to create various fundamental particles.

<ins>Recipes</ins>
Takes up to 9 stacks of items, or 8 stacks and a circuit
Takes up to 2 fluids
Outputs up to 9 stacks of randomly determined items and up to 2 fluids
Consumes power? - check

Recipe format:
```
events.recipes.gtceu.comet("recipeID")
	.itemInputs()  // Up to nine stacks of items
	.inputFluids() // Up to two fluids
	.chancedOutput("item", chance, 0) // Chance is out of 10,000
	.chancedOutput() // Repeat up to nine times
	.chancedFluidOutput()  // Optional output fluids, up to two
	.circuit(number)       // Optional, add a circuit to the recipe
	.duration()    // optional duration in ticks, defaults to 5 seconds
	.EUt(GTValues.VA[GTValues.VoltageTier]) // Optional, no energy if not specced
```