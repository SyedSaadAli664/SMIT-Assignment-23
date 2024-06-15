var ques = [
    {
        id: 1,
        question: "HTML stand for",
        options: {
            a: "Hyper text markup Language",
            b: "Hyper text programming Language",
            c: "Hyper text styling Language",
            d: "Hyper text scripting Language",

        },
        answer: "Hyper text markup Language"
    },
    {
        id: 2,
        question: "How do you write 'Hello World' in an alert box?",
        options: {
            a: "alertBox('Hello world');",
            b: "alert('Hello world');",
            c: "msg('Hello world');",
            d: "msgBox('Hello world');",

        },
        answer: "alert('Hello world');"
    }
]

var fulName = document.getElementById("fulName")
var FulEmail = document.getElementById("FulEmail")
var Questions = document.getElementById("Questions")
var option = document.getElementById("option")

var nowCount =document.getElementById("nowCount")
var totalCount =document.getElementById("totalCount")
totalCount.innerHTML = ques.length

funame = localStorage.getItem("fname")
luname = localStorage.getItem("lname")
fulName.innerHTML = `${funame} ${luname}`
FulEmail.innerHTML = localStorage.getItem("email")
var indexNo = 0


function startquiz(){
    
    console.log("startQuiz", ques[indexNo].options)
    Questions.innerHTML = ques[indexNo].question

    
    option.innerHTML = ""
    for (var key in ques[indexNo].options) {
        var alloption = ques[indexNo].options[key]
        option.innerHTML += `<li>${alloption}</li>`

          console.log(option)
    }
    

}


function Nxt(){
    if(indexNo < ques.length-1){
        indexNo++
        nowCount.innerHTML++
        startquiz()
    }

}