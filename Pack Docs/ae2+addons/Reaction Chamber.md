#Mod/AE2 #Mod/AdvancedAE #RecipeType/Machine

<ins>Recipes</ins>
Reacts materials together in a fluid.
Inputs:
- 1-9\*64 Items
- Fluid
- Power
Outputs (Inclusive Or):
- 1-9\*64 Items
- Fluid
# Currently not functional

No built-in method, use custom recipe constructor from `AE2Recipes` instead.
```
AE2Recipes.reaction([outputs], energy, 
	[inputs], inputFluid)
```

Parameter Types:
outputs - `ItemStack` or `FluidStack`
energy - `int`
inputs - `ItemStack`
inputFluid - `FluidStack`