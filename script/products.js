let form = document.querySelector("form")

async function FetchData(){
    try{
        let request = await fetch("https://63f73a4be40e087c9589faa6.mockapi.io/products");
        request = await request.json();
        //console.log(request);
        Display(request);
    }catch(error){
        console.log(error);
    }
}
FetchData();

let ProductData = JSON.parse(localStorage.getItem("card-data")) || [];
let Container = document.getElementById("mid-7");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    let searchData = request.filter((element) => element.title.toLowerCase().includes(form.search.value.toLowerCase()));
    Display(searchData);
    console.log(searchData)
}) 

function Display(data){
    Container.innerHTML = "";
    data.forEach((product) => {
        let card = document.createElement("div");
        let title = document.createElement("h2");
        let image = document.createElement("img");
        let price = document.createElement("s");
        let dprice = document.createElement("h3");
        let brand = document.createElement("p");
        let buy = document.createElement("button")
        
        
        //console.log(data)
        buy.textContent = `${"Add to Bag"}`;
        title.textContent = product.title;
        image.src = product.image;
        price.textContent = `INR ${product.price}`;
        dprice.textContent =`INR ${product.disprice}`;
        brand.textContent = product.brand;

        buy.addEventListener("click",() =>{
            if(checkOrder(product)){
            alert("Product Already in Card");
            }else{
            ProductData.push({...product,quantity:1});
            localStorage.setItem("card-data",JSON.stringify(ProductData))
            alert("Product Added");
            }
        });

        card.append(image,title,brand,dprice,price,buy)
        Container.append(card);
    });
}

function checkOrder(product){
    for(let x=0; x<ProductData.length; x++){
        if(ProductData[x].id === product.id){
            return true
        }
    }
    return false
    }