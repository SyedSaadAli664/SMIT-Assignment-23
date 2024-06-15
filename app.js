
var strtQuiz = document.getElementById("strtQuiz")
var personalContainer = document.getElementById("personalContainer")


function Submit(){
  var fname = document.getElementById("fname")
  var lname = document.getElementById("lname")
  var email = document.getElementById("email")


  localStorage.setItem("fname" , fname.value)
  localStorage.setItem("lname" , lname.value)
  localStorage.setItem("email" , email.value)
  personalContainer.className = "hid"
  strtQuiz.className = "show"
  


    
}


