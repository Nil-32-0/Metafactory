// priority: 50

const OccultismRecipes = {
    initialize(event) {
        this.event = event;
    },

    /**
     * @param {$Ingredient} output Item produced by the recipe
     * @param {$Ingredient} input Item consumed by the recipe
     * @param {number | null} duration Duration of the recipe in ticks, optional, default 20 ticks. 1 second = 20 ticks
     * @param {boolean | null} multiply If the recipe output should be multiplied based on the crusher, optional, default true
     */
    crush (output, input, duration, multiply) {this.event.custom({
        type: "occultism:crushing",
        crushing_time: duration != null ? duration : 20,
        ignore_crushing_multiplier: multiply != null ? true : !multiply,
        ingredient: input,
        result: output
    })},

    /**
     * @param {$Ingredient} output Item produced by the recipe
     * @param {$Ingredient} input Item consumed by the recipe, should correspond to an Occultism dimensional miner
     * @param {number} weight Weight of the result
     */
    dimMiner(output, input, weight) {this.event.custom({
        type: "occultism:miner",
        ingredient: input,
        result: output,
        weight: weight
    })},

    /**
     * @param {$Ingredient} output Item produced by the recipe
     * @param {$Ingredient} input Item consumed by the recipe
     */
    spiritFire (output, input) {this.event.custom({
        type: "occultism:spirit_fire",
        ingredient: input,
        result: output
    })}
}