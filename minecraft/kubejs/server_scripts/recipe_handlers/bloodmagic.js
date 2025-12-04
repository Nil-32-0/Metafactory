// priority: 50

const BloodMagicRecipes = {
    /**
     * @param {$RecipesEventJS} event
     */
    initialize(event) {
        this.event = event;
        this.arc.event = event;
        this.alchemyTable.event = event;
        this.altar.event = event;
        this.hellForge.event = event;
    },

    arc: {
        recipe: {
            type: "bloodmagic:arc",
            consumeingredient: false,
            mainoutputchance: 0.0
        },


        /**
         * @param {$Ingredient} item Item consumed by the recipe
         * @param {number} count How many items are consumed
         */
        inputItem (item, count) {
            this.recipe.input = item;
            this.recipe.inputsize = count;
            return this;
        },
        /**
         * @param {$Ingredient} item Item produced by the recipe
         */
        outputItem (item) {
            this.recipe.output = item;
            return this;
        },
        // /**
        //  * @param {[$Ingredient,number][]} items List of additional Items produced by the recipe, with chances on each
        //  */
        // TODO: Get this working
        // addedOutputs (items) {
        //     let addedOutputList = [];
        //     items.forEach(item => {
        //         addedOutputList.push({
        //             type: {item: item[0].id},
        //             chance: item[1],
        //             mainchance: 0.0}
        //         );
        //     });
        //     this.recipe.addedoutputs = addedOutputList;
        //     return this;
        // },
        /**
         * @param {boolean} bool
         */
        consumeIngredient (bool) {
            this.recipe.consumeingredient = bool;
            return this;
        },
        /**
         * @param {$FluidStackJS} fluid Fluid consumed by the recipe
         */
        inputFluid (fluid) {
            this.recipe.inputFluid = fluid.toJson();
            return this;
        },
        /**
         * @param {$FluidStackJS} fluid Fluid produced by the recipe
         */
        outputFluid (fluid) {
            this.recipe.outputFluid = fluid.toJson();
            return this;
        },

        /**
         * @param {$Ingredient} tool The alchemical tool used in the recipe
         */
        register (tool) {
            this.recipe.tool = tool;
            this.event.custom(this.recipe);
        }
    },

    /**
     * @param {$Ingredient} output Item produced by the recipe
     * @param {$Ingredient} baseInput Item consumed by the recipe, used first
     * @param {$Ingredient} additionInput Item consumed by the recipe, used second
     * @param {string} texture Texture location of texture used by the recipe animation
     */
    array (output, baseInput, additionInput, texture) {this.event.custom({
        type: "bloodmagic:array",
        baseinput: baseInput,
        addedinput: additionInput,
        output: output,
        texture: texture
    })},

    alchemyTable: {
        recipe: {
            type: "bloodmagic:alchemytable",
            syphon: 100,
            ticks: 100,
            upgradeLevel: 1
        },

        /**
         * @param {$Ingredient[]} items List of Items consumed by the recipe
         */
        inputItems(items) {
            this.recipe.input = items;
            return this;
        },
        /**
         * @param {$Ingredient} item Item produced by the recipe
         */
        outputItem(item) {
            this.recipe.output = item;
            return this;
        },
        /**
         * @param {number} totalLP Total LP consumed by the recipe
         */
        syphon (totalLP) {
            this.recipe.syphon = totalLP;
            return this;
        },
        /**
         * @param {number} ticks The recipe duration in ticks, 1 second = 20 ticks
         */
        duration (ticks) {
            this.recipe.ticks = ticks;
            return this;
        },
        /**
         * @param {number} level Blood orb tier required for the recipe
         */
        upgradeLevel (level) {
            this.recipe.upgradeLevel = level;
            return this;
        },

        register () {
            this.event.custom(this.recipe);
        }
    },

    altar: {
        recipe: {
            type: "bloodmagic:altar",
            altarSyphon: -1,
            consumptionRate: -1,
            drainRate: -1,
            upgradeLevel: 1
        },

        /**
         * @param {$Ingredient} item Item consumed by the recipe
         */
        inputItem (item) {
            this.recipe.input = item;
            return this;
        },
        /**
         * @param {$Ingredient} item Item produced by the recipe
         */
        outputItem (item) {
            this.recipe.output = item;
            return this;
        },
        /**
         * @param {number} totalLP Total LP consumed by the recipe
         */
        syphon(totalLP) {
            this.recipe.altarSyphon = totalLP;
            return this;
        },
        /**
         * @param {number} rate Rate LP is consumed by the recipe, in LP/tick
         */
        consumeRate (rate) {
            this.recipe.consumptionRate = rate;
            return this;
        },
        /**
         * @param {number} rate Rate LP decays during the recipe, in LP/tick
         */
        drainRate (rate) {
            this.recipe.drainRate = rate;
            return this;
        },
        /**
         * @param {number} level Blood altar tier required for the recipe
         */
        upgradeLevel (level) {
            this.recipe.upgradeLevel = level;
            return this;
        },

        register () {
            if (this.recipe.altarSyphon == -1) {
                this.recipe.altarSyphon = 100;
            }
            if (this.recipe.consumptionRate == -1) {
                this.recipe.consumptionRate = Math.floor(this.recipe.altarSyphon / 100);
            }
            if (this.recipe.drainRate == -1) {
                this.recipe.drainRate = this.recipe.consumptionRate;
            }

            this.event.custom(this.recipe);
        }
    },

    hellForge: {
        recipe: {
            type: "bloodmagic:soulforge",
            drain: 0.0,
            minimumDrain: -1.0
        },

        /**
         * @param {$Ingredient[]} items List of Items consumed by the recipe, up to four
         */
        inputItems (items) {
            let index = 0;
            items.forEach(item => {
                this.recipe["input"+index] = item;
                index += 1;
            });
            return this;
        },
        /**
         * @param {$Ingredient} item Item produced by the recipe
         */
        outputItem (item) {
            this.recipe.output = item;
            return this;
        },
        /**
         * @param {number} totalDrain Total Demonic Will consumed by the recipe
         */
        drain (totalDrain) {
            this.recipe.drain = totalDrain;
            return this;
        },
        /**
         * @param {number} minDrain Minimum Demonic Will required for the recipe to begin
         */
        minimumDrain (minDrain) {
            this.recipe.minimumDrain = minDrain;
            return this;
        },

        register () {
            if (this.recipe.minimumDrain == -1.0) {
                this.recipe.minimumDrain = this.recipe.drain * 2;
            }

            this.event.custom(this.recipe);
        }
    }
}