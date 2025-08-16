

function clicked(){
    const list = document.getElementById("todoList");
    const listBox = document.createElement("li");
    listBox.className = "listBox";
    listBox.textContent = list.value;
    document.getElementById("randoms").appendChild(listBox);
    list.value = "";
}

function submit(){
//parag.style.color = "red";

}


