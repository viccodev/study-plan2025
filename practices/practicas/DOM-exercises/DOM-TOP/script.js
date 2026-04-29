const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);
// <--- Original text

let p1, h31, div1;

p1 = document.createElement("p");
p1.textContent = "Hey Im red!";
    p1.style.color = "red";
    container.appendChild(p1)

h31 = document.createElement("h3");
    h31.style.color = "blue";
    h31.textContent = "Im a blue h3!";
    container.appendChild(h31)

div1 = document.createElement("div");
    div1.setAttribute("style", "border: 1px solid black; background: white;");

let p2, h11;

h11 = document.createElement("h1");
    h11.textContent = "Im in a DIV!";
    div1.appendChild(h11);
    
p2 = document.createElement("p");
    p2.textContent = "ME TOO!";
    div1.appendChild(p2);

container.appendChild(div1);

let btn1 = document.createElement("button");
btn1.classList.add("testbtn");
btn1.onclick = () => alert("2 method of events :)");
btn1.textContent = "Method 2!";
container.appendChild(btn1);

let btn3 = document.createElement("button");
btn3.classList.add("eventListener");
btn3.addEventListener("click", () => {
  alert("Hello World")});
btn3.textContent = "Method 3 and the best!";
container.appendChild(btn3);

let btntest = document.createElement("button");
btntest.classList.add("btnForTest");
btntest.addEventListener("click", (e) => e.target.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)}`);
btntest.textContent = "BTN TEST";
container.appendChild(btntest);

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

