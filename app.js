let inputEle = document.createElement("input");
inputEle.placeholder="Username";
let inputElePass = document.createElement("input");
inputElePass.placeholder="Password";
inputElePass.setAttribute("type", "password");
let messageEle = document.createElement("h3");
let button = document.createElement("button");
button.innerHTML="Login";
button.addEventListener("click", function(){
    if(inputEle.value==="cool" && inputElePass.value==="password"){

        document.body.innerHTML="";
        navigation()
        viewGrades()
    }else{
        messageEle.innerHTML="Wrong information entered, please try again"
    }


})

const pages =[
    {
        page:"View Grades",
        navigate: viewGrades
    },
    {
        page:"Add Grades",
        navigate: addGrades
    }
]

function navButton(pg, pr, nv){
    let button = document.createElement("button");
    button.innerHTML=pg;
    button.addEventListener("click", function(){
        document.body.querySelector(".wrapper").innerHTML=""
        nv();
    })
    pr.appendChild(button);
}

function navigation(){
    let nav= document.createElement("nav");
    let wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height="90px";
    nav.style.backgroundColor="lightslategrey";
    for(obj of pages){
        navButton(obj.page, nav, obj.navigate);
    }
    document.body.appendChild(nav);
    document.body.appendChild(wrapper);
}

function viewGrades(){
    document.body.innerHTML = "";
    navigation();
    let view = document.createElement("h1");
    view.innerHTML="Grades:";
    document.body.querySelector(".wrapper").appendChild(view);
    renderList();
    document.body.appendChild(gradeEle);

}

let list=[];
let gradeEle = document.createElement("div");
function renderList(){
    gradeEle.innerHTML = "";
    for (let i=0; i<list.length; i++){
        let ele = document.createElement("div");
        ele.innerHTML=list[i];
        gradeEle.appendChild(ele);
    }
}

function addGrades(){
    document.body.innerHTML = "";
    navigation();
    let add = document.createElement("h1");
    add.innerHTML="Add Grades:";
    document.body.querySelector(".wrapper").appendChild(add);

    let inputName = document.createElement("input");
    inputName.placeholder="Student's Name";
    let inputGrade = document.createElement("input");
    inputGrade.placeholder="Number 0-100";
    let submitGrade = document.createElement("button");
    submitGrade.innerHTML="Submit Grade";

    document.body.appendChild(inputName);
    document.body.appendChild(inputGrade);
    document.body.appendChild(submitGrade);

    submitGrade.addEventListener("click", function() {
        if (inputName.value<=1){
            confirm("Please enter the student's name")
        }
        else if (isNaN(inputGrade.value)){
            confirm("Please enter a number")
        }
        else if (inputGrade.value < 0 || inputGrade.value > 100){
            confirm("Please enter a number grade of 0-100")
        }else{
            list.push("Student's Name: "+inputName.value+"; Grade = "+inputGrade.value);
            document.body.innerHTML = "";
            navigation();
            viewGrades();}


    })
}

document.body.appendChild(inputEle);
document.body.appendChild(inputElePass);
document.body.appendChild(messageEle);
document.body.appendChild(button);
