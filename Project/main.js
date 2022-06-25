

  const arrows = document.querySelectorAll(".arrow") ;
  const movieLists = document.querySelectorAll(".movie-list");

  arrows.forEach((arrow , i) => {
    const item = movieLists[i].querySelectorAll("img").length;
    let counter = 0
    
    arrow.addEventListener("click" , () => {
      const v = Math.floor(window.innerWidth/270);
      counter++ ;
      if (item - (3 + counter) + (4 - v)>= 0){
       movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value -240}px)`;
     
    }   else {
        movieLists[i].style.transform = "translateX(0)";
        counter = 0 ;


     }
   });  
    console.log(Math.floor(window.innerWidth/270));
  });


  // const iconClik = document.querySelector(".black-icon");
  // const elements = document.querySelectorAll(".container , .movie-container ,.all-icons ");


  // iconClik.addEventListener("click" , () => {
  //   elements.forEach(element=>{
  //     element.classList.allIcons("active")


  //   });
  //   iconClik.classList.allIcons("active")
  // });


  function myFunction1() {
    document.body.style.backgroundColor = "green";
  }
  function myFunction2() {
    document.body.style.backgroundColor = "blue";
  }
  function myFunction3() {
    document.body.style.backgroundColor = "#333";
  }




  function signup(e){
    event.preventDefault();
   

    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var user = {
      email: email,
      username: username,
      password: password,
    };

    var JSON = JSON.stringify(user);
    localStorage.setItem(username,JSON)
    console.log('user added');



  }



  function login(e){
    event.preventDefault();
    

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var result = document.getElementById('result');

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);


    if (user == null){
      result.innerHTML = 'wrong username'
    } else if (username == data.username && password == data.password){
      result.innerHTML = 'logged in';
    } else{
      result.innerHTML = 'wrong password';
    }

  }