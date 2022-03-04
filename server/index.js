const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune', (req, res) => {
  const fortunes = ['A beautiful, smart, and loving person will be coming into your life.', 'A dubious friend may be an enemy in camouflage.', 
            'A faithful friend is a strong defense.', 'A fresh start will put you on your way.', 
            'A friend asks only for your time not your money.'];
            let index = Math.floor(Math.random() * fortunes.length);
            let randomFortune = fortunes[index];

            res.status(200).send(randomFortune);
})

let goals = [];

app.post('/api/goal', (req, res) => {
  const {newGoal} = req.body;

  goals.push(newGoal);
  res.status(200).send(goals)
})

app.delete('/api/goal', (req, res) => {

  goals.shift()
  console.log(goals)
  res.status(200).send(goals)
})

app.put('/api/goal', (req, res) => {
  const {updatedGoal} = req.body;
  console.log(req.body)
  goals.pop();
  goals.push(updatedGoal);
  console.log(goals)

  res.status(200).send(goals)
  
})


app.listen(4000, () => console.log("Server running on 4000"));
