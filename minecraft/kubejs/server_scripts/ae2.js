// priority: 50


const ae2Recipes = {
    initialize(event) {
        this.event = event;
        this.inscriber.initialize(event);
    },

    charger (output, input) {this.event.custom({
        type:"ae2:charger",
        ingredient: input,
        result: output
    })},
    inscriber: {
        initialize(event) {
            this.event = event;
        },

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