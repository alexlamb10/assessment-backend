let randomFortuneBtn = document.getElementById('fortune')

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