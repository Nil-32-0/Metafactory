AE2 Recipe Type

Throwing items into water together or exploding items to create new ones.
Due to Lychee being present, single-item transformations in liquids or through explosions should not be performed with this recipe type. See [[Item Entity inside a Block]] or [[Item Exploding]] instead.
While any number of items can be used as inputs, more than three items begins cutting off elements of the recipe display.

<ins>Recipes</ins>
Takes any number of items and produces an output when they are thrown into a fluid.

No built-in method, use custom recipe constructor from ae2Recipes instead.
```
ae2Recipes.transform(Item.of("output"), "fluidTag", [Item.of("inputItem")])
```