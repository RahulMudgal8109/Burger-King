let orderButton = document.getElementById("orderButton");

let imageContainer = document.getElementById("imageContainer");
let RandomTime = Math.floor(Math.random()*5000);
//console.log("RandomTime "+ RandomTime)
// console.log(RandomTime);
let orderNumber  = Math.floor(Math.random()*200);

let BoxorderNo = document.getElementById("orderNo");
//console.log("orderNumber "+ orderNumber)

let ticked = [];

let allInputs =document.querySelectorAll("input");
allInputs.forEach(inp=>{
    inp.addEventListener("click",clickeHandlre)
    //console.log(clickeHandlre);
})

function clickeHandlre(e){
    //console.log(e);
    
    if(e.target.checked){
        ticked.push(e.target.id);
        console.log("1");
    }
    else{
        if(ticked.indexOf(e.target.id) !== -1){
            console.log("2");
            ticked.splice(ticked.indexOf(e.target.id),1);
        }
    }
}

orderButton.addEventListener("click",()=>{
   let indexRandom = Math.floor(Math.random()*ticked.length);
   //console.log(ticked);
    let id = ticked[indexRandom];
    console.log(id);
    if(id == "burger"){
        setTimeout(()=>{
            imageContainer.innerHTML = `<img class="w-[450px] h-[300px] mt-10 rounded-xl" src="burger1.avif" alt="burger">`;
            BoxorderNo.innerText = `Order No : ${orderNumber}`;
        },RandomTime);
    }
    else if(id == "frenchfries"){
        setTimeout(()=>{
            imageContainer.innerHTML = `<img class="w-[450px] h-[300px] mt-10 rounded-xl" src="FrenchFries.avif" alt="Fries">`;
            BoxorderNo.innerText = `Order No : ${orderNumber}`;
        },RandomTime);
    }
    else if(id == "colddrink"){
        setTimeout(()=>{
            imageContainer.innerHTML = `<img class="w-[450px] h-[300px] mt-10 rounded-xl" src="Glass.avif" alt="Glass">`;
            BoxorderNo.innerText = `Order No : ${orderNumber}`;
        },RandomTime);    
    }

})