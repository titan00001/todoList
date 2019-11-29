// pendingList = [
//     {
//         "product" : ["tomato", "potato", "sauce"],
//         "date-created" : "23/10/19",
//         "favourite" : true

//     },

//     {
//         "product" : ["surf", "detergent", "bleaching powder"],
//         "date-created" : "02/01/19",
//         "favourite" : true

//     },

//     {
//         "product" : ["bulb", "fan", "tubelight"],
//         "date-created" : "23/08/19",
//         "favourite" : true

//     },

//     {
//         "product" : ["lays", "samosa", "dhokla"],
//         "date-created" : "02/10/19",
//         "favourite" : true

//     },

// ];

currentProductList = ["bulb", "fan", "tubelight"];
addEventToItem();

function addItem() {

    let input = document.querySelector("#inputItem");
    let item = input.value;

    if(input.value == "")
        console.log("enter valid item");
    else {      
        currentProductList.push(item);
        console.log("item added");
        }

    input.value = "";

}



function updateItemList() {
    
    currentProductList.forEach(item => {
        
        console.log(item);
    });

}

function addEventToItem() {
    
    let itemsBtn = document.querySelectorAll(".itemRemove");

    // add event to item : remove
    itemsBtn.forEach(item => {

        item.addEventListener("click", function(e){

            console.log(item.textContent);
            // Add remove event
            removeItem(item.textContent);


        });

        let items

        item.addEventListener("dblclick", function(e){

            console.log(item.textContent + " double clicked");
            // Add remove event
            editItem(item.textContent);


        });

    });

}

function removeItem(itemName){

    if(currentProductList.includes(itemName))
        console.log("item found and removed");
    else
        console.log("some data have not been stored")

}

function editItem(text){

    document.querySelector("#inputItem").value = text;
}

function saveItemArrayToDB(){
    console.log("all data saved to db");
}

function clearAll() {
    currentProductList = [];
    console.log("all reset");
}
