// priority: 50


const AE2Recipes = {
    /**
     * @param {$RecipesEventJS} event
     */
    initialize(event) {
        this.event = event;
        this.inscriber.event = event;
    },

    /**
     * @param {$ItemStack} output Item produced by the recipe
     * @param {$ItemStack} input Item consumed by the recipe
     */
    charger (output, input) {this.event.custom({
        type:"ae2:charger",
        ingredient: input,
        result: output
    })},
    inscriber: {
        /**
         * @param {$ItemStack} output Item produced by the recipe
         * @param {$ItemStack} input1 Item consumed by the recipe, in the center slot
         * @param {$ItemStack | null} input2 Optional Item consumed by the recipe, in the top slot
         * @param {$ItemStack | null} input3 Optional Item consumed by the recipe, in the bottom slot
         */
        press (output, input1, input2, input3) {
            let inputs = {}
            if (input3 != null) {
                inputs = {top: input2, middle: input1, bottom: input3};
            } else if (input2 != null) {
                inputs = {top: input2, middle: input1};
            } else {
                inputs = {middle: input1};
            }

            this.event.custom({
                type: "ae2:inscriber",
                ingredients: inputs,
                mode: "press",
                result: output
        })},
        /**
         * @param {$ItemStack} output Item produced by the recipe
         * @param {$ItemStack} input Item consumed by the recipe, in the center slot
         * @param {$ItemStack} press Item required for the recipe, in the top slot. Not consumed
         */
        inscribe (output, input, press) {this.event.custom({
            type: "ae2:inscriber",
            ingredients: {
                middle: input,
                top: press
            },
            mode: "inscribe",
            result: output
        })}
    },
    /**
     * @param {$ItemStack} output Item produced by the recipe
     * @param {String} fluidTag Tag of the Fluid the recipe takes place in
     * @param {$ItemStack[]} inputs List of Items consumed by the recipe
     */
    transform (output, fluidTag, inputs) {this.event.custom({
        type: "ae2:transform",
        circumstance: {
            type: "fluid",
            tag: fluidTag
        },
        ingredients: inputs,
        result: output
    })},

    // Does not work at the moment
    // /**
    // * @param {$ItemStack} output Item produced by the recipe
    // * @param {Number} inputEnergy Amount of energy consumed by the recipe
    // * @param {$ItemStack[]} inputs List of Items consumed by the recipe
    // * @param {$FluidStack} inputFluid Fluid consumed by the recipe
    // */
    // reaction (output, inputEnergy, inputs, inputFluid) {
    //     let inputs_parsed = [];
    //     inputs.forEach(input => {
    //         inputs_parsed.push({
    //             amount: input.count,
    //             ingredient: {
    //                 item: input.id
    //             }
    //         });
    //     });

    //     let resultType = "";
    //     if ("item" in output) {
    //         resultType = "ae2:i";
    //     } else if ("fluid" in output) {
    //         resultType = "ae2:f";
    //     }


    //     this.event.custom({
    //         type: "advanced_ae:reaction",
    //         input_energy: inputEnergy,
    //         input_fluid: {
    //             amount: inputFluid.amount,
    //             ingredient: {
    //                 fluid: inputFluid.id
    //             }
    //         },
    //         input_items: inputs_parsed,
    //         output: {
    //             "#": output.amount ? output.amount : output.count,
    //             "#t": resultType,
    //             "id": output.id
    //         }
    // })}
}