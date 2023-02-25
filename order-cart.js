let Container  = document.getElementById("mid-7");
let ProductData = JSON.parse(localStorage.getItem("card-data")) || [];

function Display(data){
    let total = document.getElementById("total-price")
    Container.innerHTML = "";
    ProductData.forEach((product) => {
        let card = document.createElement("div");
        let title = document.createElement("h2");
        let image = document.createElement("img");
        let price = document.createElement("s");
        let dprice = document.createElement("h3");
        let brand = document.createElement("p");
        let quantity = document.createElement("span");
        let Cancel = document.createElement("button");
        let increment = document.createElement("button");
        let decrement = document.createElement("button");

            quantity.textContent = product.quantity;
            Cancel.textContent = "Cancel";
            increment.textContent = "+";
            decrement.textContent = "-";
            image.src = product.image;
            title.textContent = product.title;
            price.textContent = `INR ${product.price}`;
            dprice.textContent =`INR ${product.disprice}`;
            brand.textContent = product.brand;

        Cancel.addEventListener("click", () =>{
            ProductData = ProductData.filter((element) =>{
            return element.id !== product.id;
            })
            localStorage.setItem("card-data",JSON.stringify(ProductData))
            Display()
        });
        increment.addEventListener("click",() =>{
            product=product.quantity++
            localStorage.setItem("card-data",JSON.stringify(ProductData))
            Display()
        });
        decrement.addEventListener("click",() =>{
            if(product.quantity>1){
            product=product.quantity--
            localStorage.setItem("card-data",JSON.stringify(ProductData))
            Display()
            }
        });
        
        card.append(image,title,brand,dprice,price,increment,quantity,decrement,Cancel);
        Container.append(card);
    });
    
    let sum = 0;
    for(let x=0; x<ProductData.length; x++){
        sum+=(Number(ProductData[x].price) * Number(ProductData[x].quantity));
    }
    total.textContent = sum;
}
Display();