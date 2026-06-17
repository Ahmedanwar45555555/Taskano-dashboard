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
        pomodoroBtn.style.backgroundColor="#c69904";
        isRunning=false;
    }else{
        isRunning= true;
        pomodoroBtn.textContent= "pause";
        pomodoroBtn.style.backgroundColor="#ef4444";
        timeId=setInterval(()=>{
            if(timeLeft>0){timeLeft--;
                updateDisplay();
            }else{
                clearInterval(timeId);
                alert("time out bro take break for 5 minutes");
                timeLeft=25*60;
                updateDisplay();
                pomodoroBtn.textContent = 'Start Pomodoro';
                pomodoroBtn.style.backgroundColor = '#c69904';
                isRunning = false;
            }
        }, 1000);
    }
}
pomodoroBtn.addEventListener('click', toggleTimer);


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
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.width = "100%";
    li.style.background = "#1f2937";
    li.style.padding = "10px 15px";
    li.style.borderRadius = "8px";
    li.style.marginBottom = "8px";
    li.style.alignItems = "center";
    li.style.maxWidth = "400px";
    
  
    li.innerHTML = `
        <span style="color: #fff; font-size: 16px;">${taskText}</span>
        <button class="delete-btn" style="background: #ef4444; color: #fff; border: none; padding: 5px 10px; border-radius: 5px; cursor:
         pointer; font-size:12px;">Delete</button>
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


const eventInput= document.getElementById("event-input");
const addEventBtn=document.getElementById("add-event-btn");
const eventDate=document.getElementById("event-date");
const timeLineList=document.getElementById("timeline-List");

addEventBtn.addEventListener("click", ()=>{
    const eventText= eventInput.value.trim();
    const dateText=eventDate.value;
    if (eventText ===""|| dateText ===""){
        alert("please enter both event and date, bro!");
    }
    const Li=document.createElement("Li");
    Li.style.cssText="background:#1f2937;padding:10px 15px;border-radius:8px;margin-bottom:8px; display:flex; justify-content:space-between;align-items:center;max-width:400px;border-left:3px solid#ef4444;";
    Li.innerHTML=`
        <span style="color: white"><strong>${dateText}</strong> - ${eventText}</span>
        <button class="del-event" style="background:none;border:none; color:#ef4444;cursor:pointer;font-weight:bold;">X</button>
        `;

 Li.querySelector(".del-event").addEventListener("click",() =>Li.remove());
 timeLineList.appendChild(Li);
 eventInput.value="";
 eventDate.value="";
});



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
    noteCard.style.cssText="background:#1f2937; padding:15px; border-radius:8px; position:relative;border-left:3px solid #c69904;";
    noteCard.innerHTML=`
        <p style="color:white; margin:0; font-size:15px; white-space:pre-warp;">${noteText}</p>
        <button class="del-note" style="position:absolute;top:10px; right:10px;background:none; border:none ; color:#9ca3af; cursor:pointer;">DELETE</button>
        `;
        noteCard.querySelector(".del-note").addEventListener("click",()=>noteCard.remove());
        noteList.appendChild(noteCard);
        noteInput.value="";

    });

    const habitInput=document.getElementById("habit-input");
    const addHabitBtn=document.getElementById("add-habit-btn");
    const habitList=document.getElementById("habits-list");

    addHabitBtn.addEventListener("click",()=>{
        const habitText=habitInput.value.trim();
        if(habitText===""){
            alert("please enter a habit bro!");
            return;}

    
    const Li=document.createElement("Li");
    Li.style.cssText="background:#1f2937; padding:10px 15px; border-radius:8px; margin-bottom:8px; display:flex;jusify-content:space-between;align-items:center;max-width:400px;";
    Li.innerHTML=`
    <div style="display:flex; align-items:center;gap:10px;">
    <input type="checkbox" style="width:18px; height:18px; cursor:pointer;">
    <span style="color: white;;">${habitText}</span>
    </div>
    <button class="del-habit" style=" background : none; border:none;color:#ef4444;cursor:pointer;">DELETE</button>
    `;
     const checkbox=Li.querySelector("input[type='checkbox']");
     const span=Li.querySelector("span");
     checkbox.addEventListener("change",()=>{
        if (checkbox.checked) {
            span.style.textDecoration="line-through";
            span.style.color="#9ca3af";
        }else{
            span.style.textDecoration="none";
            span.style.color="white";

        }
     });
     Li.querySelector(".del-habit").addEventListener("click",()=>Li.remove());
     habitList.appendChild(Li);
     habitInput.value="";
    });


    const mainSearch = document.getElementById("main-search");
const searchBtn = document.getElementById("search-btn");
     
function performSearch() {

    const query = mainSearch.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".page-section.card");

    cards.forEach(card => {
        const cardContent = card.innerText.toLowerCase();
        if (cardContent.includes(query) || query === "") {
            card.style.display = "flex"; 
        } else {
            card.style.display = "none"; 
        }
    });
}
searchBtn.addEventListener("click", performSearch);
mainSearch.addEventListener("input", performSearch);
    
