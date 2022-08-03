let saveTask=[]

const inputTask=document.getElementById("input-task")
let inputBtn=document.getElementById("input-btn")
const lisT=document.getElementById("list")

inputBtn.addEventListener("click",function(){
        if (inputTask.value === '') {
            alert("Please enter a task")
        }
        else{
            saveTask.push(inputTask.value)
            renderTask()
            inputTask.value = ""
        } 
})

function renderTask(){
            //let listItems= ""
            const li =document.createElement("li")
            const closebtn=document.createElement("Button")
            closebtn.className="close"
            closebtn.innerHTML="&#10003"
            //add a list item
            for(let i=0;i<saveTask.length;i++)
            {
               // listItems+= "<li>" + saveTask[i] + "</li> "
             
                li.textContent=saveTask[i]
                li.appendChild(closebtn) //add button to list
                lisT.appendChild(li)
            }
            //delete the complete list on button click
            closebtn.addEventListener("click",function(){
                li.style.display="none"
             })
            //lisT.innerHTML=listItems   
}
