// banner section --------------------------------------------------------------------------------

var bannerimg = [
    "https://n.nordstrommedia.com/id/1c14ef6f-9708-4818-aee7-e69386a5fa54.jpeg?h=700&w=1608",
    "https://n.nordstrommedia.com/id/6d6488a3-a901-45af-b9a0-59e7bc10367f.jpeg?h=700&w=1608",
    "https://n.nordstrommedia.com/id/bd8699a3-03e8-4846-9c87-b54fb8c98fe1.jpeg?h=700&w=1608"
]

let slideshow = document.getElementById("banner")
let img = document.createElement("img");
let x=0;
img.src = bannerimg[0];

function slideshowfun(image){
    setInterval(function(){
        x++;
        if(x===image.length) x=0;
        img.src = image[x];
    },3000);

    slideshow.append(img);
}

window.addEventListener("load", function(){
    slideshowfun(bannerimg);
});


// mid-2 -------------------------------------------------------------------------------------------

// var mid2 = [
//     "https://n.nordstrommedia.com/id/0701eed4-7f9d-4e08-bd43-af63d5780ff7.jpeg?h=700&w=1608",
//     "https://n.nordstrommedia.com/id/4529d44a-32cd-4223-b11b-4df55de6ae64.jpeg?h=700&w=1608",
//     "https://n.nordstrommedia.com/id/0def0408-7273-42e1-aa85-8974827ad4c0.jpeg?h=700&w=1608"
// ]

// let slideshow1 = document.getElementById("mid2")
// let img2 = document.createElement("img2");
// let y=0;
// img2.src2 = mid2[0];

// function slideshowfun2(image2){
//     setInterval(function(){
//         console.log(y)
//         y++;
//         if(y===image2.length) y=0;
//         img2.src2 = image2[y];
//     },3000);

//     slideshow1.append(img2);
// }

// window.addEventListener("load", function(){
//     slideshowfun2(mid2);
// });