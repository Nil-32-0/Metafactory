// priority: 50

const bloodMagicRecipes = {
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
         * @param {$ItemStack} item
         * @param {number} count
         */
        inputItem (item, count) {
            this.recipe.input = item;
            this.recipe.inputsize = count;
            return this;
        },
        /**
         * @param {$ItemStack} item
         */
        outputItem (item) {
            this.recipe.output = item;
            return this;
        },
        // /**
        //  * @param {[$ItemStack,number][]} items
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
         * @param {bool} bool
         */
        consumeIngredient (bool) {
            this.recipe.consumeingredient = bool;
            return this;
        },
        /**
         * @param {$FluidStackJS} fluid
         */
        inputFluid (fluid) {
            this.recipe.inputFluid = fluid.toJson();
            return this;
        },
        /**
         * @param {$FluidStackJS} fluid
         */
        outputFluid (fluid) {
            this.recipe.outputFluid = fluid.toJson();
            return this;
        },
        /**
         * @param {$ItemStack} tool
         */
        register (tool) {
            this.recipe.tool = tool;
            this.event.custom(this.recipe);
        }
    },

    /**
     * @param {$ItemStack} output
     * @param {$ItemStack} baseInput
     * @param {$ItemStack} additionInput
     * @param {String} texture
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
         * @param {$ItemStack[]} items
         */
        inputItems(items) {
            this.recipe.input = items;
            return this;
        },
        /**
         * @param {$ItemStack} item
         */
        outputItem(item) {
            this.recipe.output = item;
            return this;
        },
        /**
         * @param {Number} totalLP
         */
        syphon (totalLP) {
            this.recipe.syphon = totalLP;
            return this;
        },
        /**
         * @param {Number} ticks
         */
        duration (ticks) {
            this.recipe.ticks = ticks;
            return this;
        },
        /**
         * @param {Number} level
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
         * @param {$ItemStack} item
         */
        inputItem (item) {
            this.recipe.input = item;
            return this;
        },
        /**
         * @param {$ItemStack} item
         */
        outputItem (item) {
            this.recipe.output = item;
            return this;
        },
        /**
         * @param {Number} totalLP
         */
        syphon(totalLP) {
            this.recipe.altarSyphon = totalLP;
            return this;
        },
        /**
         * @param {Number} rate
         */
        consumeRate (rate) {
            this.recipe.consumptionRate = rate;
            return this;
        },
        /**
         * @param {Number} rate
         */
        drainRate (rate) {
            this.recipe.drainRate = rate;
            return this;
        },
        /**
         * @param {Number} level
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
         * @param {$ItemStack[]} items
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
         * @param {$ItemStack} item
         */
        outputItem (item) {
            this.recipe.output = item;
            return this;
        },
        /**
         * @param {Number} totalDrain
         */
        drain (totalDrain) {
            this.recipe.drain = totalDrain;
            return this;
        },
        /**
         * @param {Number} minDrain
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