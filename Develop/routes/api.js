const router = require("express").Router();
const path = require("path")

router.post("/api/workouts", (req,res) => {
    Workout.create ({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
     .catch(err => {
        res.json(err);
});
});

router.put("/api/workouts/:id", ({body, params} , res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {$push: {exercises : body }} , 
        {new : true, runValidators: true}
    )
    .then(dbWorkout => {
        res.json (dbWorkout);
    })
    .catch(err=> {
        res.json(err);
    });
});

router.get("/api/workouts" , (req, res) =>
{
    Workout.find()
    .then(dbWorkouts =>{
        res.json(dbWorkouts);
    })
    .catch(err =>{
        res.json(err);
    });
});

router.get("/api/workouts/range" , (req, res) =>
{
    Workout.find({}).limit(7)
    .then(dbWorkouts =>{
        console.log (dbWorkouts)
        res.json(dbWorkouts);
    })
    .catch(err =>{
        res.json(err);
    });
});

router.delete("/api/workouts" , ({body}, res) => {
    Workout.findByIdAndDelete(body.id)
    .then(()=>{
        res.json(true);
    })
    .catch(err=>{
        res.json(err);
    });
});

// router.get("/", (req, res) => {

//     res.sendFile(path.join(__dirname, `../public/index.html`));
  

// });

// router.get("/stats", (req, res) => {

//     res.sendFile(path.join(__dirname, `../public/stats.html`));
// });

// router.get("/exercise", (req, res) => {

//     res.sendFile(path.join(__dirname, `../public/exercise.html`));
// });

module.exports = router;

