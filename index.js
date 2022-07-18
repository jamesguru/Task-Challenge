const taskTitle = document.querySelector(".title");

const taskdesc = document.querySelector(".description");

const taskDate = document.querySelector(".date");
const addButton = document.querySelector(".add-btn");

const taskBox = document.querySelector(".task-box");


const clearButton = document.querySelector(".clear-btn");






addButton.addEventListener("click", () => {
  if (taskTitle.value && taskDate.value && taskdesc.value) {
    let tasks = JSON.parse(localStorage.getItem("task-list"));

    

    function showTasks () {

        let li = "";


    

       

       if(tasks){

        tasks.forEach((task,id) => {

            li += `

            <li class="task">

                    <label for="${id}">


                    
                    

                    <input onclick = updateStatus(this) type="checkbox" id="${id} class="input-checkbox">

                    <p>${task.title}</p>


                   
            

                        
                    </label>


                    

                    <div class="settings">

                       


                        <ul class="task-menu">

                            <li>Edit</li>

                            <li>Delete</li>
                        </ul>
                    </div>


                   
                </li>

   
            
            `


        });
       }

        taskBox.innerHTML = li;


        
    }



    

showTasks();

function updateStatus(){

  
}


const deleteTask = (deleteID) => {

console.log(deleteId);

}
    

    if (!tasks) {
      tasks = [];
    }

    let newTask = {
      title: taskTitle.value,
      desc: taskdesc.value,
      date: taskDate.value,
      status: "pending",
    };

    tasks.push(newTask);

    localStorage.setItem("task-list",JSON.stringify(tasks));

    taskTitle.value= "";

    taskdesc.value = "";

    taskDate.value = "";
   
    showTasks();

  }
});



clearButton.addEventListener("click", () => {

    
    let tasks = JSON.parse(localStorage.getItem("task-list"));


    


    if(tasks) {

        tasks = [];

        localStorage.setItem("task-list",JSON.stringify(tasks));
        
    }





})