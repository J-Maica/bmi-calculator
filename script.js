// Get a reference to the result container
const resultCont = document.getElementById("resultCont");
const result = document.createElement("h1");

    // Get input fields
const inputFields = document.querySelectorAll("input");

// Function to calculate BMI
const calculate = () => {


    // Get user input values
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const heightFeet = parseFloat(document.getElementById("heightFeet").value);
    const heightInch = parseFloat(document.getElementById("heightInch").value);
    const weight = parseFloat(document.getElementById("weight").value);

    // Calculate height in meters
    let heightInMeters = (heightFeet * 12 + heightInch) * 0.0254;

    // Clear previous result if it exists
    const prevResult = document.getElementById("result");
    if (prevResult) {
        resultCont.removeChild(prevResult);
    }

    // Function to display and style the BMI result
    const displayResult = () => {
        result.id = "result";
        result.style.fontWeight = "bold";
        const bmi = weight / (heightInMeters * heightInMeters);
        result.innerHTML = bmi.toFixed(2);

        if (bmi < 18.5) {
            result.style.color = "#FEB132"; // Underweight color
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result.style.color = "#30A232"; // Normal weight color
        } else if (bmi >= 25 && bmi <= 30) {
            result.style.color = "#E96024"; // Overweight color
        } else {
            result.style.color = "#C0101B"; // Obese color
        }

        // Append the result to the result container
        resultCont.appendChild(result);

    };

    // Check for invalid input
    if (
        Number.isNaN(age) ||
        age <= 0 ||
        isNaN(heightFeet) ||
        isNaN(heightInch) ||
        isNaN(weight)
    ) {
        alert("Invalid Input");
    } else {
        // Clear input fields
        inputFields.forEach((input) => {
            input.value = "";
        });

        // Clear previous user information
        let userInput = document.querySelectorAll("#resultCont p");
        userInput.forEach((p) => {
            resultCont.removeChild(p);
        });

        // Display user information
        const genderCont = document.createElement("p");
        genderCont.innerHTML = "Gender: " + gender;
        resultCont.appendChild(genderCont);

        const ageCont = document.createElement("p");
        ageCont.innerHTML = "Age: " + age;
        resultCont.appendChild(ageCont);

        const heightCont = document.createElement("p");
        heightCont.innerHTML =
            "Height: " + heightFeet.toString() + "'" + heightInch.toString();
        resultCont.appendChild(heightCont);

        const weightCont = document.createElement("p");
        weightCont.innerHTML = "Weight: " + weight;
        resultCont.appendChild(weightCont);

        // Calculate and display the BMI result
        displayResult();
    }
};

// Function to reset input and resultont fields
const reset = () => {
    const inputField = inputFields
    inputField.forEach((input) => {
        input.value = "";
    });

    const userInput = document.querySelectorAll("#resultCont p");
    userInput.forEach((p) => {
        resultCont.removeChild(p);
    });
    resultCont.removeChild(result);
};
