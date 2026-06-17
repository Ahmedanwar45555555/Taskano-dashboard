 /*pomodoro timer*/
 
 const timeDisplay=document.getElementById("time-display");
 const pomodoroBtn= document.getElementById("pomodoro-btn");
 let timeLeft=25*60;
 let timeId = null;
 let isRunning=false;

 function updateDisplay(){
    const minutes=Math.floor(timeLeft/60);
    const seconds=timeLeft%60;
    const displayMinutes=minutes<10?`0${minutes}`:minutes;
    const displaySeconds=seconds<10?`0${seconds}`:seconds;
    timeDisplay.textContent=`${displayMinutes}:${displaySeconds}`;
}

function toggleTimer(){
    if(isRunning){
        clearInterval(timeId);
        pomodoroBtn.textContent="start pomodoro";
        pomodoroBtn.classList.remove("running");
        isRunning=false;
    }else{
        isRunning= true;
        pomodoroBtn.textContent= "pause";
        pomodoroBtn.classList.add("running");
        timeId=setInterval(()=>{
            if(timeLeft>0){timeLeft--;
                updateDisplay();
            }else{
                clearInterval(timeId);
                alert("time out bro take break for 5 minutes");
                timeLeft=25*60;
                updateDisplay();
                pomodoroBtn.textContent = 'Start Pomodoro';
                pomodoroBtn.classList.remove("running");
                isRunning = false;
            }
        }, 1000);
    }
}
pomodoroBtn.addEventListener('click', toggleTimer);

 /*task management*/
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const tasksList = document.getElementById("tasks-list");

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task, bro!");
        return;
    }

    const li = document.createElement("li");
    li.classList.add("list-item-card");
    
  
    li.innerHTML = `
        <span class= "item-text">${taskText}</span>
        <button class="delete-btn btn-danger">Delete</button>
    `;

    li.querySelector(".delete-btn").addEventListener("click", function() {
        li.remove();
    });

  
    tasksList.appendChild(li);  
    taskInput.value = "";
}
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

 /*timeline management*/
const eventInput= document.getElementById("event-input");
const addEventBtn=document.getElementById("add-event-btn");
const eventDate=document.getElementById("event-date");
const timeLineList=document.getElementById("timeline-List");

addEventBtn.addEventListener("click", ()=>{
    const eventText= eventInput.value.trim();
    const dateText=eventDate.value;
    if (eventText ===""|| dateText ===""){
        alert("please enter both event and date, bro!");
        return;
    }
    const Li=document.createElement("Li");
    Li.classList.add("list-item-card","timeline-item");
    Li.innerHTML=`
        <span style="color: white"><strong>${dateText}</strong> - ${eventText}</span>
        <button class="del-event text-danger">X</button>
        `;

 Li.querySelector(".del-event").addEventListener("click",() =>Li.remove());
 timeLineList.appendChild(Li);
 eventInput.value="";
 eventDate.value="";
});

 /*Note Management*/

const noteInput=document.getElementById("note-input");
const addNoteBtn=document.getElementById("add-note-btn");
const noteList=document.getElementById("notes-list");

addNoteBtn.addEventListener("click",()=>{
    const noteText=noteInput.value.trim();
    if(noteText===""){
        alert("please enter a note bro!");
        return;
    }
    const noteCard=document.createElement("div");
    noteCard.classList.add("list-item-card");
    noteCard.innerHTML=`
        <p class="note-text">${noteText}</p>
        <button class="del-note">DELETE</button>
        `;
        noteCard.querySelector(".del-note").addEventListener("click",()=>noteCard.remove());
        noteList.appendChild(noteCard);
        noteInput.value="";

    });

     /*Habit Management*/

    const habitInput=document.getElementById("habit-input");
    const addHabitBtn=document.getElementById("add-habit-btn");
    const habitList=document.getElementById("habits-list");

    addHabitBtn.addEventListener("click",()=>{
        const habitText=habitInput.value.trim();
        if(habitText===""){
            alert("please enter a habit bro!");
            return;}

    
    const Li=document.createElement("Li");
    Li.classList.add("list-item-card", "habit-item");
    Li.innerHTML=`
    <div class="habit-wrapper">
    <input type="checkbox">
    <span class="item-text">${habitText}</span>
    </div>
    <button class="del-habit text-danger">DELETE</button>
    `;
     const checkbox=Li.querySelector("input[type='checkbox']");
     const span=Li.querySelector("span");

     checkbox.addEventListener("change",()=>{
        span.classList.toggle("completed",checkbox.checked);
     });
     Li.querySelector(".del-habit").addEventListener("click",()=>Li.remove());
     habitList.appendChild(Li);
     habitInput.value="";
    });

 /*search*/
    const mainSearch = document.getElementById("main-search");
const searchBtn = document.getElementById("search-btn");
     
function performSearch() {

    const query = mainSearch.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".page-section.card");

    cards.forEach(card => {
        const cardContent = card.innerText.toLowerCase();
        if (cardContent.includes(query) || query === "") {
            card.classList.remove("hidden"); 
        } else {
            card.classList.add("hidden"); 
        }
    });
}
searchBtn.addEventListener("click", performSearch);
mainSearch.addEventListener("input", performSearch);
    
