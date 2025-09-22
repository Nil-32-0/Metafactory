GTCEu Multiblock

Performs fusion of liquids

<ins>Recipes</ins>
Takes 2 fluids as inputs. Optionally consumes power
Produces 1 fluid output

Example Recipe:
```
event.recipes.gtceu.fusion_reactor("recipeID")
.inputFluids(
	Fluid.of("fluid1", amount),
	Fluid.of("fluid2", amount)
)
.outputFluids(
	Fluid.of("outputFluid", amount)
)
.fusionStartEU(startEU) // Optional, sets a required EU to start production
.duration() // Optional, defaults to 5 seconds
.EUt(GTValues.VA[GTValues.VoltageTier]) // Optional, no energy if not set
```