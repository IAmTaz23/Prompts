// 1. Create an alert when you open your page that says "Good morning!"

alert("Good Morning!")

// 2. Create a text field that asks what hour it is (0-23) and a button that when clicked  alerts "Good morning", "good afternoon", or "good evening" (Hint, use an if statement)
function currentHour() {
    let hourIquiry = document.getElementById("name-field").value

    if (hourIquiry < 12) {
    alert("Good morning!");
    } else if (hourIquiry > 18) {
    alert("Good evening!");
    } else {
    alert("Good afternoon!");
    }
}

// 3. Create a button that alerts you and says "Ouch!" when you click it (hint: use a function)
function myFunction() {
    alert("Ouch!")
}

// 4. Create a button that when clicked, gets the users name from a text field, and alerts "Hello (name)!"

function getName(){
    let nameField = document.getElementById("name-input")
    let name = nameField.value
    alert(`Hello ${name}!`)
}









