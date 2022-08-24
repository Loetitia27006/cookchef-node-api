const express = require("express");
const router = express.Router();
module.exports = router;

router.post("/addRecipe", async (req, res) => {
  console.log("Add Recipe");
  res.json("Add Recipes");
});

router.get("/getRecipe", async (req, res) => {
  console.log("Get Recipes");
  res.json("Get Recipes");
});

router.get("/getRecipe/:id", async (req, res) => {
  console.log("Get Recipe by id");
  const id = req.params.id;
  res.json("Get Recipe" + id);
});

router.patch("/updateRecipe/:id", async (req, res) => {
  console.log("update Recipe");
});

router.delete("/deleteRecipe/:id", async (req, res) => {
  console.log("Delete Recipe ");
});
