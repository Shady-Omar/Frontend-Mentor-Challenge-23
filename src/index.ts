// Toggle circle:
let label:any = document.querySelector(".label");
let circle:any = document.querySelector(".circle");

// Prices:
let basic:any = document.querySelector(".money-one");
let pro:any = document.querySelector(".money-two");
let master:any = document.querySelector(".money-three");


label.addEventListener("click", () => {
    circle.classList.toggle("annual");
    if (circle.classList.contains("annual")) {
      label.style.backgroundImage = "linear-gradient(to right, hsl(237, 63%, 64%), hsl(236, 72%, 79%))"
      basic.textContent = `199.99`
      pro.textContent = `249.99`
      master.textContent = `399.99`
    } else {
      label.style.backgroundImage = "linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))"
      basic.textContent = `19.99`
      pro.textContent = `24.99`
      master.textContent = `39.99`
    }
});

circle.addEventListener("click", () => {
    circle.classList.toggle("annual");
    if (circle.classList.contains("annual")) {
      label.style.backgroundImage = "linear-gradient(to right, hsl(237, 63%, 64%), hsl(236, 72%, 79%))"
      basic.textContent = `199.99`
      pro.textContent = `249.99`
      master.textContent = `399.99`
    } else {
      label.style.backgroundImage = "linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))"
      basic.textContent = `19.99`
      pro.textContent = `24.99`
      master.textContent = `39.99`
    }
});
