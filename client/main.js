let randomFortuneBtn = document.getElementById('fortune')
let submitGoal = document.getElementById('submit-goal')
let deleteGoal = document.getElementById('delete-goal')
let editGoal = document.getElementById('edit-goal')

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
            let newGoal = document.createElement('p')
    
              newGoal.textContent = res.data
              body.appendChild(newGoal)
          
        
      })
      goalInput.value = ''
  }
  
  submitGoal.addEventListener('click', addGoal)
  
  function deleteFirstGoal(event){
      event.preventDefault()
      axios.delete('http://localhost:4000/api/goal/')
      .then(res => {
          let body = document.querySelector('body')
          let newGoal = document.createElement('p')
          
          newGoal.textContent = res.data
          body.appendChild(newGoal)
          
        })
    }
    
    deleteGoal.addEventListener('click', deleteFirstGoal)

    function changeLastGoal(event){
        event.preventDefault();

        let goalChange = {
            updatedGoal: goalInput.value
        }

        axios.put('http://localhost:4000/api/goal/', goalChange)
        .then(res => {
            let body = document.querySelector('body')
            let newGoal = document.createElement('p')
          
            newGoal.textContent = res.data
            body.appendChild(newGoal)
        })

        goalInput.value = ''
    }

    editGoal.addEventListener('click', changeLastGoal)