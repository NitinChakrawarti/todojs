const input_field  = document.getElementById("input_field");
const list_box = document.getElementById("list_box");

function addtask (){
  if(input_field.value===''){
    alert("you have to write something")
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = input_field.value;
    list_box.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  input_field.value='';
  saveData();
}

list_box.addEventListener("click", (e) => {
if(e.target.tagName === "LI"){
  e.target.classList.toggle('checked')
  saveData();

}

else if(e.target.tagName === "SPAN"){
e.target.parentElement.remove();
saveData();

}
} ,false);

const saveData = ()=>{
  localStorage.setItem("data", list_box.innerHTML)
}

function showData (){
  list_box.innerHTML = localStorage.getItem("data");
}

showData();