

function submitForm() {
    if (validateForm()) {
        displayPopup();
        resetForm();
    }
}

function validateForm() {
    var isValid = true;

    
    isValid = isValid && validateName("firstName");
    isValid = isValid && validateName("lastName");
    isValid = isValid && validateDate("dob");
    isValid = isValid && validateSelect("country");
    isValid = isValid && validateCheckbox("gender");
    isValid = isValid && validateText("profession");
    isValid = isValid && validateEmail("email");
    isValid = isValid && validateTel("mobile");

    return isValid;
}

function validateName(fieldName) {
    var value = document.getElementById(fieldName).value;
    if (!value.match(/^[a-zA-Z]+$/)) {
        alert("Invalid " + fieldName + ". Please enter a valid value.");
        return false;
    }
    return true;
}

function validateDate(fieldName) {
    var value = document.getElementById(fieldName).value;
    if (!value) {
        alert("Please enter a valid Date of Birth.");
        return false;
    }
    return true;
}

function validateSelect(fieldName) {
    var value = document.getElementById(fieldName).value;
    if (value === "") {
        alert("Please select a valid Country.");
        return false;
    }
    return true;
}

function validateCheckbox(fieldName) {
    var checkboxes = document.getElementsByName(fieldName);
    var checked = false;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checked = true;
            break;
        }
    }
    if (!checked) {
        alert("Please select a valid Gender.");
        return false;
    }
    return true;
}

function validateText(fieldName) {
    var value = document.getElementById(fieldName).value;
    if (!value.match(/^[a-zA-Z\s]+$/)) {
        alert("Invalid " + fieldName + ". Please enter a valid value.");
        return false;
    }
    return true;
}

function validateEmail(fieldName) {
    var value = document.getElementById(fieldName).value;
    if (!value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ){
        alert("Email should be in form ____@gmail.com");
        return false;
    }
    return true;
}

function validateTel(fieldName) {
    var value = document.getElementById(fieldName).value;
    if (!value.match(/^\d{10}$/)) {
        alert("Invalid " + fieldName + ". Please enter a valid 10-digit Mobile Number.");
        return false;
    }
    return true;
}

function displayPopup() {
    
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;

    var gender = "";
    var genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
    genderCheckboxes.forEach(function (checkbox) {
        gender += checkbox.value + " ";
    });

    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;


    alert(
        "First Name: " + firstName + "\n" +
        "Last Name: " + lastName + "\n" +
        "Date of Birth: " + dob + "\n" +
        "Country: " + country + "\n" +
        "Gender: " + gender + "\n" +
        "Profession: " + profession + "\n" +
        "Email: " + email + "\n" +
        "Mobile Number: " + mobile
    );
}

function resetForm() {
  
    document.getElementById("surveyForm").reset();
}
