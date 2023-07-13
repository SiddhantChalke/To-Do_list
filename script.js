document.querySelector('#add').onclick = function(){
    // if input field empty then alert
    if(document.querySelector('#add-task input').value.length ==0){
        alert("Please Enter a Task");
    }
    else{
        // to display tasks
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#add-task input').value}
                </span>
                <button class="delete">
                    Del
                </button>
            </div>
        `;
        // to del task on clicking delete
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        // to clear input field after adding the task
        var getValue= document.getElementById("input");
        if (getValue.value !="") {
            getValue.value = "";
        }
           
    }
}
