// priority: 50

/**
 * Wrapper function to generate a JSON with the variables required by the runes in MythicBotany rune ritual recipes.
 *
 * Forced to use because Rhino prevents creation of custom classes
 * @param {$ItemStack} item The item to be used in the specified position
 * @param {Number} x The x-axis location of the item, relative to the center rune. Positive is to the right
 * @param {Number} z The z-axis location of the item, relative to the center rune. Positive is upwards
 * @param {boolean} consume Whether the item should be consumed or not
 * @return {{consume: boolean, rune: $ItemStack, x: Number, z: Number}}
 */
function runeConstructor(item, x, z, consume) {
    return {
        consume: consume,
        rune: item,
        x: x,
        z: z
    }
}

const botaniaRecipes = {
    /**
     * @param {$RecipesEventJS} event
     */
    initialize(event) {
        this.event = event;
        this.manaPool.event = event;
        this.marimorphosis.event = event;
    },

    /**
     * @param {String} brewID ID Corresponding to a Botania brew
     * @param {$ItemStack[]} items List of items used in the recipe
     */
    brew (brewID, items) {
        this.event.custom({
            type: "botania:brew",
            brew: brewID,
            ingredients: items
        })
    },
    /**
     * @param {$ItemStack[]} outputItems List of items produced by the recipe
     * @param {$ItemStack[]} inputItems List of items input to the recipe
     */
    elvenTrade (outputItems, inputItems) {this.event.custom({
        type: "botania:elven_trade",
        ingredients: inputItems,
        output: outputItems
    })},

    manaPool: {
        recipe: {
            type: "botania:mana_infusion"
        },

        /**
         * @param {$ItemStack} item Recipe input item
         */
        inputItem (item) {
            this.recipe.input = item;
            return this;
        },
        /**
         * @param {$ItemStack[]} items List of valid recipe input items
         */
        inputItems (items) {
            this.recipe.input = items;
            return this;
        },
        /**
         * @param {$ItemStack} item Item produced by the recipe
         */
        outputItem (item) {
            this.recipe.output = item;
            return this;
        },
        /**
         * @param {String} blockID ID of the block to be used as a catalyst under the mana pool
         */
        catalyst (blockID) {
            this.recipe.catalyst = {type: "block", block: blockID};
            return this;
        },

        /**
         * @param {Number} mana The amount of mana the recipe should consume. A full pool holds 1,000,000 mana
         */
        register (mana) {
            this.recipe.mana = mana;
            this.event.custom(this.recipe);
        }
    },

    /**
     * @param {$ItemStack} output Item produced by the recipe
     * @param {$ItemStack[]} inputs List of items input to the recipe
     * @param {Number} mana The amount of mana the recipe should consume. A full pool holds 1,000,000 mana
     * @param {Number | String} fromColor The color used by the effects. Should be formatted as a hex code with "#XXXXXX" or as the decimal equivalent of that number
     * @param {Number | String} toColor The color used by the effects. Should be formatted the same as fromColor
     */
    manaInfusion (output, inputs, mana, fromColor, toColor) {
        let decFromColor = 0;
        if (typeof fromColor == "string") {
            decFromColor = Number.parseInt(fromColor.slice(1), 16);
        } else {
            decFromColor = fromColor;
        }
        let decToColor = 0;
        if (typeof toColor == "string") {
            decToColor = Number.parseInt(toColor.slice(1), 16);
        } else {
            decToColor = toColor;
        }

        this.event.custom({
            type: "mythicbotany:infuser",
            fromColor: decFromColor,
            ingredients: inputs,
            mana: mana,
            output: output,
            toColor: decToColor
        });
    },

    marimorphosis: {
        recipe: {
            type: "botania:marimorphosis",
            input: {
                type: "tag",
                tag: "botania:marimorphosis_convertable"
            },
            weight: 1,
            biome_bonus: 0,
            biome_bonus_tag: "kubejs:null_biome"
        },

        /**
         * @param {String} blockID ID of the block to be produced
         */
        outputBlock (blockID) {
            this.recipe.output = {type: "block", block: blockID};
            return this;
        },
        /**
         * @param {String} blockID ID of the input block
         */
        inputBlock (blockID) {
            this.recipe.input = {type: "block", block: blockID};
            return this;
        },
        /**
         * @param {String} blockTag Block tag that will determine accepted input blocks
         */
        inputBlocks (blockTag) {
            this.recipe.input = {type: "tag", tag: blockTag};
            return this;
        },
        /**
         * @param {Number} weight Integer chance of being chosen during generation
         */
        weight (weight) {
            this.recipe.weight = weight;
            return this;
        },
        /**
         * @param {Number} bonusWeight Integer increase in weight when in the bonus biomes
         * @param {String} biomeTag Biome tag that determines which biomes give extra weight
         */
        biomeBonus (bonusWeight, biomeTag) {
            this.recipe.biome_bonus = bonusWeight;
            this.recipe.biome_bonus_tag = biomeTag;
            return this;
        },

        register () {
            this.event.custom(this.recipe);
        }
    },

    /**
     * @param {String} outputID Block ID of the block produced
     * @param {String} inputID Block ID of the input block
     * @param {Number} weight Integer chance of being chosen during generation
     */
    orechid (outputID, inputID, weight) {this.event.custom({
        type: "botania:orechid",
        input: {type: "block", block: inputID},
        output: {type: "block", block: outputID},
        weight: weight
    })},

    /**
     * @param {String} outputID Block ID of the block produced
     * @param {String} inputID Block ID of the input block
     * @param {Number} weight Integer chance of being chosen during generation
     */
    orechidIgnem (outputID, inputID, weight) {this.event.custom({
        type: "botania:orechid_ignem",
        input: {type: "block", block: inputID},
        output: {type: "block", block: outputID},
        weight: weight
    })},

    /**
     * @param {$ItemStack} output Item produced by the recipe
     * @param {$ItemStack[]} inputs List of items required for the recipe
     * @param {$ItemStack} reagent Item used to finalize recipe and create the output
     */
    apothecary (output, inputs, reagent) {this.event.custom({
        type: "botania:petal_apothecary",
        ingredients: inputs,
        output: output,
        reagent: reagent
    })},

    /**
     * @param {String} outputID Block ID of the block produced
     * @param {String} inputID Block ID of the input block
     */
    pureDaisy (outputID, inputID) {
        let recipe = {
            type: "botania:pure_daisy",
            output: {
                name: outputID
            },
            input: {}
        };
        if (inputID.charAt(0) === "#") {
            recipe.input.type = "tag";
            recipe.input.tag = inputID.slice(1);
        } else {
            recipe.input.type = "block";
            recipe.input.block = inputID;
        }
        this.event.custom(recipe);
    },

    /**
     * @param {$ItemStack[]} outputs List of items produced by the recipe
     * @param {$ItemStack[]} inputs List of items required for the recipe
     * @param {$ItemStack} centerItem Item to be placed in the center of the multiblock
     * @param {Number} mana The amount of mana the recipe should consume. A full pool holds 1,000,000 mana
     * @param {Number} duration The recipe duration in ticks, 1 second = 20 ticks
     * @param {{consume: boolean, rune: $ItemStack, x: Number, z: Number}[]} runeLayout A list of 'rune' JSONs, specify with runeContructor
     */
    runeRitual (outputs, inputs, centerItem, mana, duration, runeLayout) {
        this.event.custom({
            type: "mythicbotany:rune_ritual",
            center: centerItem,
            inputs: inputs,
            outputs: outputs,
            mana: mana,
            ticks: duration,
            runes: runeLayout
        });
    },

    /**
     * @param {$ItemStack} output Item produced by the recipe
     * @param {$ItemStack[]} inputs List of items required for the recipe
     * @param {Number} mana The amount of mana the recipe should consume. A full pool holds 1,000,000 mana
     */
    runeAltar (output, inputs, mana) {this.event.custom({
        type: "botania:runic_altar",
        ingredients: inputs,
        mana: mana,
        output: output
    })},

    /**
     * @param {$ItemStack} output Item produced by the recipe
     * @param {$ItemStack[]} inputs List of items required for the recipe
     * @param {Number} mana The amount of mana the recipe should consume. A full pool holds 1,000,000 mana
     */
    terraPlate (output, inputs, mana) {this.event.custom({
        type: "botania:terra_plate",
        ingredients: inputs,
        mana: mana,
        result: output
    })}
}