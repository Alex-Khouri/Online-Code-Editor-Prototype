/****
The following code was taken from w3schools.com
(though some modifications might have been made)
****/

// When the user clicks on the button, toggle between hiding and showing the dropdown content
function openDropdown(dropdownContentID) {
    document.getElementById(dropdownContentID).classList.toggle("show");
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
        let dropdown = dropdowns[i];
        if (dropdown.id !== dropdownContentID) {
            dropdown.classList.remove('show');
        }
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let dropdown = dropdowns[i];
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }
    }
}