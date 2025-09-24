Avaritia's Delight Cooking

Cooks up to 81 different items together and can serve them in a container.
Custom unlock tier: *Undetermined*

<ins>Recipes</ins>
Takes up to 81 different items as inputs, and optionally takes 1 item as a container to produce up to 1 stack of items as output.
Has both a shaped and a shapeless mode.

No built-in method, use custom recipe constructor from avaritiaRecipes instead.
Recipe Syntax:
```
avaritiaRecipes.cooking_shapeless(Item.of(output), [Item.of(input)], Item.of(container))

avaritiaRecipes.cooking_shaoed(Item.of(output), pattern, key, Item.of(container))
```