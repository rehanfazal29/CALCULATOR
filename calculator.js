let button = document.querySelectorAll(".btn");
let input = document.querySelector(".currentCalculation");
let answerbtn = document.querySelector(".answer button");
let theambtn = document.querySelector(".theam button");
let ansbox = document.querySelector(".result h2");
let resetbtn = document.querySelector(".reset");
let backbtn = document.querySelector(".back");
let mainBody = document.querySelector(".mainbody");


button.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        let value = event.target.textContent;
        input.value = input.value + value;


    })
});

answerbtn.addEventListener("click", () => {
    try {
        let expression = input.value;
        expression = expression.replaceAll("x", "*");
        expression = expression.replaceAll("÷", "/");
        expression = expression.replaceAll("%", "/100 *");

        let answer = eval(expression);

        ansbox.textContent = `ANS = ${answer} `;
    }
    catch {
        ansbox.textContent = ` Invalid Input `;
    }


});
resetbtn.addEventListener("click", () => {
    ansbox.textContent = "";
    input.value = "";

})
backbtn.addEventListener("click", () => {
    input.value = input.value.slice(0, -1);
});

input.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        answerbtn.click();

    }
});

let darkMode = false;

theambtn.addEventListener("click", () => {

    darkMode = !darkMode;
    // ye theam ko toggle  (opposite) kr de raha ,,event click hone ke baad theam button se .
    if (darkMode) {

        document.body.style.backgroundColor = "#121212";

        mainBody.style.backgroundColor = "#1e1e1e";
        mainBody.style.color = "white";

        theambtn.textContent = "Light mode";

    }
    else {
        document.body.style.backgroundColor = "#E3D7D5";

        mainBody.style.backgroundColor = "white";
        mainBody.style.color = "black";

        theambtn.textContent = "Dark Mode";

    }


})