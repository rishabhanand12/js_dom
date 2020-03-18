//Select the section with an id of container without using querySelector.
cont=document.getElementById("container");

//Select the section with an id of container using querySelector.
document.querySelector("#id");

//Select all of the list items with a class of "second".
document.querySelectorAll("li.second");

//Select a list item with a class of third, but only the list item inside of the ol tag.

document.querySelector("ol .third");


//Give the section with an id of container the text "Hello!".
cont.innerText="Hello!";


//Add the class main to the div with a class of footer.

document.querySelector(".footer").classList.add("main");

//Remove the class main on the div with a class of footer.
document.querySelector(".footer").classList.remove("main");

//Create a new li element.

let li = document.createElement("li");

//Give the li the text "four".

li.textContent = "four";

//Append the li to the ul element.

let ul = document.querySelector("ul");
ul.append(li);


//Loop over all of the list inside the ol tag and give them a background color of "green".

let ol = document.querySelectorAll("ol>li");
ol.forEach(ol => ol.style.backgroundColor = "green");

//Remove the div with a class of footer.
delete document.querySelector(".footer");