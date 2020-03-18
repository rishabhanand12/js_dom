document.querySelector(".container").style.border="4px solid green";
document.querySelector(".container").style.height="100vh";
document.addEventListener("mousemove", function(event) {
    console.log("screenX:" + event.screenX);
    console.log("screenY: "+ event.screenY);
    console.log("clientX:" +event.clientX);
    console.log("clientY:" +event.clientY);
});