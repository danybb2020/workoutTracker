const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercise: [{
      type: {
        type: String,
        trim: true,
        require: "Exercise is required"
      },

      name: {
        type: String,
        trim: true,
        require: "Name of exercise required"
      },

      duration: {

        type: Number,
        require: "How many minutes the exercise was"
      },

      weight: {
        type: Number,
      },

      reps: {
        type: Number,
      },

      sets: {
        type: Number,
      },

      distance: {
        type: Number,
      },

    }



  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;