var list = ['Samosa', 'chuney', 'rice'];


// remove redundancy of declaring container from two function
function displayItem(){
    for (var l in list){

        var li = document.createElement("p");
        var btn = document.createElement("button");
        li.textContent = list[l];

        document.querySelector(".item-display").appendChild(li);
        li.appendChild(btn);
        btn.setAttribute('class','remove-item-btn');
        btn.textContent = "Remove";

        btn.addEventListener('click',  function(e) {
            removeItem(e);
        });
    }
}

function removeItem(e) {
    
    // removes the parent container of button clicked
    var item = e.target;
    var text = item.parentNode.firstChild.textContent;
    item.parentNode.parentNode.removeChild(item.parentNode);

    removeFromList(text);

}

function removeFromList(item) {
    
    var newlist = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i] !== item) {
            newlist.push(list[i]);
        }
    }

    list = newlist;

}


function addItem(){

    
    var item = document.querySelector(".item-input").value;

    if(item != ""){

        list.push(item);

        var li = document.createElement("p");
        var btn = document.createElement("button");
        li.textContent = item;
        document.querySelector(".item-display").appendChild(li);

        li.appendChild(btn);
        btn.setAttribute('class','remove-item-btn');
        btn.textContent = "Remove";

        btn.addEventListener('click',  function(e) {
            removeItem(e);
        });
    }


}

displayItem();