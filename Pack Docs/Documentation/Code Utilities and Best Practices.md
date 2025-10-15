There are certain utilities available when writing code:
```
Item.of("itemID") -> ItemStack
Fluid.of("fluidID") -> FluidStack
```
Can also be used as
```
Item.of("itemID", count)
Fluid.of("fluidID", count)
```

# (Brief) Style Guide
- Within code, constants should be named with `PascalCase` while functions should be `camelCase`. `snake_case` should be avoided within code.
- When registering blocks, items, tags, etc. within Minecraft, the IDs should use `snake_case`, although in cases with multiple additions that make sense to be nested together, using slashes to organize these nested categories such as `category/thing_name` is preferred.
- When writing functions, docstrings must be added that at minimum include type hints for the function, although if possible, a short description of the parameters' requirements should be included as well.