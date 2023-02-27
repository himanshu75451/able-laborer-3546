var bannerimg = [
    "https://n.nordstrommedia.com/id/efd4b277-d554-4ccb-ac79-619c82d29cc9.jpeg?h=400&w=1608",
    "https://n.nordstrommedia.com/id/cbad3079-40d2-4cc4-91d1-ce4119935386.jpeg?h=400&w=1608",
    "https://n.nordstrommedia.com/id/d1a3a3d1-84b5-4645-b065-fd1c9d436b24.jpeg?h=417&w=1334",
    "https://n.nordstrommedia.com/id/04d44329-d927-4eb2-8fda-9b53a303d901.jpeg?h=417&w=1334"
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