// let saturate = document.getElementById("saturate");
// let contrast = document.getElementById("Contrast");
// let brightness = document.getElementById("brightness");
// let sepia = document.getElementById("sepia");
// let grayscale = document.getElementById("greyscale");
// let blur = document.getElementById("blur");
// let hueRotate = document.getElementById("hue-rotate");

// let upload = document.getElementById("upload");

// let download = document.getElementById("download");
// let img = document.getElementById("img");

// let reset = document.querySelector("span");
// let imgBox = document.querySelector(".img-box");

// let canvas=document.getElementById("canvas");
// const ctx=canvas.getContext('2d');

// function resetValue(){
//     img.style.filter='none';
//     saturate.value='100';
//     contrast.value='100';
//     brightness.value='100';
//     sepia.value='0';
//     grayscale.value='0';
//     blur.value='0';
//     hueRotate.value='0';
// }






// window.onload = function () {
//     download.style.display = 'none';
//     reset.style.display = 'none';
//     imgBox.style.display = 'none';
// };

// upload.onchange = function () {
//     resetValue();
//     download.style.display = 'block';
//     reset.style.display = 'block';
//     imgBox.style.display = 'block';
    
//     let file = new FileReader();
//     file.readAsDataURL(upload.files[0]);
//     file.onload = function () {
//         img.src = file.result;
//     };
//     img.onload=function(){
//         canvas.widht=img.widht;
//         canvas.heigth=img.height;
//         ctx.drawImage(img,0,0,canvas.widht,canvas.height);
//         // img.style.display='none';
//     }
// };

// let filters = document.querySelectorAll("ul li input");
// filters.forEach(filter => {
//     filter.addEventListener('input', function () {
//         ctx.style.filter = `
//             saturate(${saturate.value}%)
//             contrast(${contrast.value}%)
//             brightness(${brightness.value}%)
//             grayscale(${grayscale.value * 100}%)
//             blur(${blur.value}px)
//             hue-rotate(${hueRotate.value}deg)
//             sepia(${sepia.value}%)
//         `;
//         ctx.drawImage(img,0,0,canvas.width,canvas.heigth);

//     });
// });

// download.onclick=function(){
//     download.href=canvas.toDataURL();
// }

let saturate = document.getElementById("saturate");
let contrast = document.getElementById("Contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("greyscale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");

let reset = document.querySelector("span");
let imgBox = document.querySelector(".img-box");

let canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

function resetValue() {
    // Reset all the filter sliders and the canvas
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    hueRotate.value = '0';

    ctx.filter = 'none';  // Reset the canvas filter
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);  // Redraw the image without filters
}

window.onload = function () {
    download.style.display = 'none';
    reset.style.display = 'none';
    imgBox.style.display = 'none';
};

upload.onchange = function () {
    resetValue();
    download.style.display = 'block';
    reset.style.display = 'block';
    imgBox.style.display = 'block';

    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function () {
        img.src = file.result;
    };
    img.onload = function () {
        // Set canvas size to match image size
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image for the first time
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
};

// Apply filters and redraw the image on the canvas
let filters = document.querySelectorAll("ul li input");
filters.forEach(filter => {
    filter.addEventListener('input', function () {
        // Apply all the filters to the canvas context
        ctx.filter = `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            grayscale(${grayscale.value * 100}%)
            blur(${blur.value}px)
            hue-rotate(${hueRotate.value}deg)
            sepia(${sepia.value}%)
        `;

        // Clear and redraw the image on the canvas with the updated filters
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the previous drawing
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Redraw the image with filters
    });
});

download.onclick = function () {
    download.href = canvas.toDataURL(); // Set the download link to the canvas image
};
