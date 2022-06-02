
function newElement() {
    var newTask = document.querySelector("#task").value.trim()

    if (newTask != "") {
        let newItem = document.createElement("li")
        newItem.classList.add("list-item")
        newItem.innerHTML = `<span onclick="markAsDone(this)">${newTask}</span><i onclick="deleteElement(this)" class="bi bi-trash"></i>`

        document.querySelector("#list").appendChild(newItem)
        document.querySelector("#task").value = ""
        $('#liveToast').toast('show')
        items.push(newTask)
        localStorage.setItem("toDoList", JSON.stringify(items))
    } else {
        //hata mesajı gösterilecek
        
        $('#liveToastError').toast('show')
    }

}
// element silme
function deleteElement(element) {
    document.querySelector("#list").removeChild(element.parentElement)
}
//yapıldı işaretlemesi
function markAsDone(element) {
    element.textContent.strike()
    element.innerHTML = element.textContent.strike()
} 


//localStorage
// const value = document.querySelector("#list")

// window.localStorage.setItem('toDoList', value);
// let toDoList = localStorage.getItem(value)
// console.log(toDoList)

let items = JSON.parse(localStorage.getItem("toDoList")) || []
if(items.length>0){
    // liste boş değil sayfaya ekle
    items.forEach(item => {
        let newItem = document.createElement("li")
        newItem.classList.add("list-item")
        newItem.innerHTML = `<span onclick="markAsDone(this)">${item}</span><i onclick="deleteElement(this)" class="bi bi-trash"></i>`

        document.querySelector("#list").appendChild(newItem)
    });
}







