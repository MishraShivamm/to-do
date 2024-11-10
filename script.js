const box = document.getElementById("input-box");
const container = document.getElementById("list-container");


function addtask(){
    if(box.value ==''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = box.value;
        container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    box.value = "";
    savedata();

}

container.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("done");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",container.innerHTML);
}

function showli(){
    container.innerHTML = localStorage.getItem("data");
}
showli(); 
