const bulb = document.querySelector(".bulb");
const button = document.querySelector("button");

let flag = 0;

button.addEventListener("click", () => {
    if(flag == 0)
    {
        bulb.style.backgroundColor = "yellow";
        button.innerHTML = "OFF";
        flag = 1;
    }
    else{
        bulb.style.backgroundColor = "grey";
        button.innerHTML = "ON";
        flag = 0;
    }
})