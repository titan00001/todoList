list = ['Samosa', 'chuney', 'rice'];

function displayItem(list){
    for (var l in list){

        var li = document.createElement("p");
        li.innerHTML = list[l];
        document.querySelector(".item-display").appendChild(li);
    }
}

function addItem()

displayItem(list);