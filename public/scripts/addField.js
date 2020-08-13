// Look for the button
document.querySelector("#add-time")

    // By clicking the button
    .addEventListener("click", cloneField)

// Execute an action
function cloneField() {
    // Duplicate fields
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // Take the fields
    const fields = newFieldContainer.querySelectorAll("input")

    // Clear each field
    fields.forEach(function (field) {

        field.value = ""
    })

    // Put on page
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}