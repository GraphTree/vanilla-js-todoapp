// when type name, save name in local storage
// then change add class name to input 

inputData = document.querySelector("#inputData");

inputData.addEventListener("keypress", e => {enterPressTrigger(e)})


function enterPressTrigger(event) {
    // event.preventDefault();
    if (event.key === "Enter") {
        saveToDoData();
        addToDo("toDoList");
        inputData.value="";

    }
}




function saveToDoData(){
    localStorage.setItem(String(localStorage.length), inputData.value)
}

function addToDo(tagId) {
        const key = String(localStorage.length-1);
        const value = localStorage.getItem(key);
        let liTag = document.createElement("li");
        liTag.innerText = value;
        document.querySelector(`#${tagId}`).appendChild(liTag)
    }


// after input class change, any input will be saved as todo in firebase
