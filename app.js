
var strtQuiz = document.getElementById("strtQuiz")
var personalContainer = document.getElementById("personalContainer")


function disableStartquiz(){
  var startquiz = document.getElementById("startquiz");
  startquiz.setAttribute("disabled", "true");
}



function Submit(){
  var fnameInput = document.getElementById("fname");
  var lnameInput = document.getElementById("lname");
  var emailInput = document.getElementById("email");

  var fname = document.getElementById("fname").value
  var lname = document.getElementById("lname").value
  var email = document.getElementById("email").value

  // Regex
  var firstNameRegex = /^[a-zA-Z0-9]{3,16}$/;
  var lastNameRegex = /^[a-zA-Z0-9]{3,16}$/;
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  var checkemail = 0;
  var checkfname = 0;
  var checklname = 0;

  var pleaseNote = document.getElementById("please-note");

  
  
  if(firstNameRegex.test(fname)){
    console.log("chal gya fname")
    fnameInput.style.border = "2px solid green";
    fnameInput.style.color = "green";
    checkfname = 1;

  } else {
    console.log("nhi chala fname")
    fnameInput.style.border = "2px solid red";
    fnameInput.style.color = "red";
    checkfname = 0;
  }

  if(lastNameRegex.test(lname)){
    console.log("chal gya lname")
    lnameInput.style.border = "2px solid green";
    lnameInput.style.color = "green";
    checklname = 1;
  } else {
    console.log("nhi chala lname")
    lnameInput.style.border = "2px solid red";
    lnameInput.style.color = "red";
    checklname = 0;
  }

  if(emailRegex.test(email)){
    console.log("chal gya email")
    emailInput.style.border = "2px solid green";
    emailInput.style.color = "green";
    checkemail = 1;
  } else {
    console.log("nhi chala email")
    emailInput.style.border = "2px solid red";
    emailInput.style.color = "red";
    checkemail = 0;
  }

  if( checkfname === 1 && checklname === 1 && checkemail === 1 ){
    console.log("All works fine");
    localStorage.setItem("fname" , fname)
    localStorage.setItem("lname" , lname)
    localStorage.setItem("email" , email)

    // var mainDetails = document.getElementById("main-details");
    // mainDetails.className = "hid";

    
    // console.log(startquiz);
    startquiz.removeAttribute("disabled");
    // console.log(startquiz);

    pleaseNote.innerHTML = "Please note that you will have 1 minute to answer each question. Good Luck, Press 'Start Quiz' button to start."



    // personalContainer.className = "hid";
    // strtQuiz.className = "show-startquiz";
    
  } else {
    console.log("somethings wrong")
  }
    
} 


