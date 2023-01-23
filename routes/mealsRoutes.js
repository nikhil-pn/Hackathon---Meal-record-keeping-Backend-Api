const express = require("express");
const router = express.Router();
const Meals = require("../models/mealsModels");

router.get("/", async (req, res) => {
  try {
    const meals = await Meals.findAll();
    res.status(200).send(meals);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/create", async (req, res) => {
  try {
    const { meal, time, calories } = req.body;

    if (!meal) {
      return res.status(400).send("Input a meal");
    }

    const timeDate = new Date();
    const timeString = String(timeDate);

    const createMeal = {
      time: time || timeString,
      meal: meal,
      calories: calories || 250,
    };

    const saveMeal = await Meals.create(createMeal);

    res.status(200).send(saveMeal);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.put("/:id", async (req, res) => {
    try {
      const { meal } =
        req.body;
  
      const exitingTodo = await Meals.findOne({
        where: { id: req.params.id },
      });
  
      if (!exitingTodo) {
        return res.status(404).send("Meals doesn't exits in database");
      }
  
      if (exitingTodo) {
        const updatedTodo = await exitingTodo.update({
         meal
        });
        await updatedTodo.save();
        return res.status(200).send(updatedTodo);
      }
    } catch (error) {
      return res.status(500).json({ err: error });
    }
  });
module.exports = router;
