let randomFortuneBtn = document.getElementById('fortune')
let submitGoal = document.getElementById('submit-goal')

document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  function randomFortune(){
      axios.get("http://localhost:4000/api/fortune/")
      .then(res => {
          const fortune = res.data;
          alert(fortune);
      })
  }
  randomFortuneBtn.addEventListener('click', randomFortune)

let goalInput = document.querySelector('#goal-input')
  function addGoal(event){
      event.preventDefault();
      
      let goal = {
          newGoal: goalInput.value
      }

      axios.post('http://localhost:4000/api/goal/', goal)
      .then(res => {
          console.log(res.data)
          let body = document.querySelector('body')
          let goalList = document.createElement('ul')
          let newGoal = document.createElement('li')

          for(let i = 0; i < res.data.length; i++){
              newGoal.textContent = res.data[i]
              body.appendChild(goalList)
              goalList.appendChild(newGoal)
          }
        
      })
      goalInput.value = ''
  }
  submitGoal.addEventListener('click', addGoal)