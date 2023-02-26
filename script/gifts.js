var bannerimg = [
    "https://n.nordstrommedia.com/id/be051a1c-9e43-4c09-a559-4cd56ba8635c.jpeg?h=457&w=1332",
    "https://n.nordstrommedia.com/id/754958cd-677b-4c14-9e42-6dc7fd028b7a.jpeg?h=525&w=1332",
    "https://n.nordstrommedia.com/id/6fe41b66-5793-49bb-a475-3117b9ef30ac.jpeg?h=457&w=1332",
    "https://n.nordstrommedia.com/id/59258e70-f0bb-4d58-9f5e-2fa34b3e67c6.jpeg?h=563&w=1332"
]

let slideshow = document.getElementById("banner")
let img = document.createElement("img");
let x=0;
img.src = bannerimg[0];

function slideshowfun(image){
    setInterval(function(){
        console.log(x)
        x++;
        if(x===image.length) x=0;
        img.src = image[x];
    },3000);

    slideshow.append(img);
}

window.addEventListener("load", function(){
    slideshowfun(bannerimg);
});