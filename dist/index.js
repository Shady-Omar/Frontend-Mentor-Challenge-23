"use strict";
let label = document.querySelector(".label");
let circle = document.querySelector(".circle");
let basic = document.querySelector(".money-one");
let pro = document.querySelector(".money-two");
let master = document.querySelector(".money-three");
label.addEventListener("click", () => {
    circle.classList.toggle("annual");
    if (circle.classList.contains("annual")) {
        label.style.backgroundImage = "linear-gradient(to right, hsl(237, 63%, 64%), hsl(236, 72%, 79%))";
        basic.textContent = `199.99`;
        pro.textContent = `249.99`;
        master.textContent = `399.99`;
    }
    else {
        label.style.backgroundImage = "linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))";
        basic.textContent = `19.99`;
        pro.textContent = `24.99`;
        master.textContent = `39.99`;
    }
});
circle.addEventListener("click", () => {
    circle.classList.toggle("annual");
    if (circle.classList.contains("annual")) {
        label.style.backgroundImage = "linear-gradient(to right, hsl(237, 63%, 64%), hsl(236, 72%, 79%))";
        basic.textContent = `199.99`;
        pro.textContent = `249.99`;
        master.textContent = `399.99`;
    }
    else {
        label.style.backgroundImage = "linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))";
        basic.textContent = `19.99`;
        pro.textContent = `24.99`;
        master.textContent = `39.99`;
    }
});
//# sourceMappingURL=index.js.map