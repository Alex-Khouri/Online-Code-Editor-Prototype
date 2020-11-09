/****
Website Prototype for Compsci 345 Assignment 3
AUTHORS: Alexander Khouri, Michael Johnson, Hazel Watson-Smith, Anastasia Baranova
****/

let canEdit = true; //Whether current user has edit/run abilities
let users = 1; //Number of users currently accessing the file
let currVersion = "3"; //Must be string to accommodate multiple decimal points (e.g. 1.1.1)
let mapNodes = 5; //Number of nodes currently in the version map

let codeInputV1 = `variable1 = "Hello"<br>print(variable1)`; //Formatted for HTML
let codeInputV2 = `variable1 = "Hello"<br>variable2 = "world"<br>print(variable1 + variable2)`;
let codeInputV2_1 = `variable1 = "Hello"<br>variable2 = "world"<br>print(variable1 + " " + variable2)`;
let codeInputV2_2 = `variable1 = "Hello"<br>variable2 = "world"<br>print(variable1 + " " + variable2 + "!")`;
let codeInputV3 = `variable1 = "Hello"<br>variable2 = "world"<br>variable3 = " "<br>print(variable1 + variable3 + variable2)`;
let codeInputV4 = `variable1 = "Hello"<br>variable2 = "world"<br>variable3 = " "<br>print(variable1 + variable3 + variable2)`;
let codeOutputV1 = `Hello`; //Formatted for HTML
let codeOutputV2 = `Helloworld`;
let codeOutputV2_1 = `Hello world`;
let codeOutputV2_2 = `Hello world!`;
let codeOutputV3 = `Hello world`;
let codeOutputV4 = `Hello world`;

let usernames = ["Alex Kauri", "Michael Jones", "Anastasia Baryshnikov", "Hazel Wilson-Swift"]
let userComments = ["EMPTY: DO NOT USE",
                    "I think our program is too complicated.",
                    "Yeah, we could get the same result with one variable.",
                    "We could even do it without any variables..."];

function loadDev() {
    document.getElementById("favicon").href = "Images/Dev Logo.jpg";
    document.getElementById("title").innerHTML = "Doogle Dev";
    document.getElementById("body").classList = "devBackground";
    document.getElementById("driveContextEntry").classList = "hidden";
    document.getElementById("devMain").classList.remove("hidden")
    document.getElementById("devMain").classList.add("visible");
    for (let i = users; i < usernames.length; i++) {
        setTimeout(addUser, 7000*i);
        setTimeout(() => {
            submitComment(usernames[i].split(" ")[0], userComments[i]);
        }, 7000*i + 4000);
    }
}

function setVersion(newVersion) { //Triggered by clicking nodes on Version Map
    if (mapNodes === 5) {
        switch (newVersion) {
            case "1":
                document.getElementById("versionMap").src = "Images/Version Map First 1.jpg";
                document.getElementById("codeInput").innerHTML = codeInputV1;
                break;
            case "2":
                document.getElementById("versionMap").src = "Images/Version Map First 2.jpg";
                document.getElementById("codeInput").innerHTML = codeInputV2;
                break;
            case "2.1":
                document.getElementById("versionMap").src = "Images/Version Map First 2_1.jpg";
                document.getElementById("codeInput").innerHTML = codeInputV2_1;
                break;
            case "2.2":
                document.getElementById("versionMap").src = "Images/Version Map First 2_2.jpg";
                document.getElementById("codeInput").innerHTML = codeInputV2_2;
                break;
            case "3":
                document.getElementById("versionMap").src = "Images/Version Map First 3.jpg";
                document.getElementById("codeInput").innerHTML = codeInputV3;
                break;
            default:
                alert("ERROR: Invalid new version value.");
        }
    } else if (mapNodes === 6) {
        switch (newVersion) {
            case "1":
                document.getElementById("versionMap").src = "Images/Version Map Second 1.jpg";
                document.getElementById("codeInput").innerHTML = codeInputV1;
                break;
            case "2":
                document.getElementById("versionMap").src = "Images/Version Map Second 2.jpg";
                document.getElementById("codeInput").innerHTML = codeInputV2;
                break;
            case "2.1":
                document.getElementById("versionMap").src = "Images/Version Map Second 2_1.jpg";
                document.getElementById("codeInput").innerHTML = codeInputV2_1;
                break;
            case "2.2":
                document.getElementById("versionMap").src = "Images/Version Map Second 2_2.jpg";
                document.getElementById("codeInput").innerHTML = codeInputV2_2;
                break;
            case "3":
                document.getElementById("versionMap").src = "Images/Version Map Second 3.jpg";
                document.getElementById("codeInput").innerHTML = codeInputV3;
                break;
            case "4":
                document.getElementById("versionMap").src = "Images/Version Map Second 4.jpg";
                document.getElementById("codeInput").innerHTML = codeInputV4;
                break;
            default:
                alert("ERROR: Invalid new version value.");
        }
    } else {
        alert("ERROR: Map nodes !=== {5,6}.");
    }
    currVersion = newVersion;
    document.getElementById("codeOutput").innerHTML = ">> "
}

function superSave() {
    if (canEdit) {
        if (currVersion === "3") {
            currVersion = "4";
            mapNodes = 6;
            document.getElementById("versionMap").src = "Images/Version Map Second 4.jpg";
            document.getElementById("versionMap").useMap = "#versionMapSecond";
        } else {
            alert("*** FOR TESTING PURPOSES, SUPER SAVE CAN ONLY BE USED WITH VERSION 3 ***");
        }
    }
}

function runCode() {
    let output;
    switch(currVersion) {
        case "1":
            output = codeOutputV1;
            break;
        case "2":
            output = codeOutputV2;
            break;
        case "2.1":
            output = codeOutputV2_1;
            break;
        case "2.2":
            output = codeOutputV2_2;
            break;
        case "3":
            output = codeOutputV3;
            break;
        case "4":
            output = codeOutputV4;
            break;
        default:
            alert("ERROR: Invalid current version value.")
    }
    document.getElementById("codeOutput").innerHTML = ">> " + output;
}

function submitComment(name, comment) {
    document.getElementById("commentsBody").innerHTML += `<i><b>${name}:</b></i> "${comment}"<br><br>`;
    document.getElementById("comment").value = "";
    return false; //Stops page from refreshing
}

function popUp(type) {
    switch(type) {
        case 0:
            if (document.getElementById("searchFunction").style.display == "block") {
                document.getElementById("searchFunction").style = "display: none";
                document.getElementById("search_term").value = "";
            } else {
                document.getElementById("searchFunction").style = "display: block";
            }
            break;
        case 1:
            document.getElementById("overlay").style = "display: block";
            document.getElementById("share_popup").style = "display: block";
            break;
    }
}

function popUpClose(type) {
    switch (type) {
        case 0:
            document.getElementById("searchFunction").style = "display: none";
            break;
        default:
            document.getElementById("overlay").style = "display: none";
            document.getElementById("share_popup").style = "display: none";
            document.getElementById("email").value = "";
            document.getElementById("list_default").selected = "selected";
            document.getElementById("share_success").style = "display: none";
            document.getElementById("share_button").style = "display: block";
            break;
    }
}

function share() {
    let email = document.getElementById("email").value;
    document.getElementById("share_button").style = "display: none";
    document.getElementById("share_success").innerHTML = "Successfully shared with " + email;
    document.getElementById("share_success").style = "display: block";
    setTimeout(popUpClose, 3000);
}

function search(string) {
    string = string.toLowerCase();
    let codeInput = document.getElementById("codeInput");
    let innerHTML = codeInput.innerHTML;
    let caseInnerHTML = codeInput.innerHTML.toLowerCase();
    let index = caseInnerHTML.indexOf(string);
    if (index >= 0) { 
        innerHTML = innerHTML.substring(0, index) + `<span style="color:#4BFF00; font-family:'Courier'; font-weight:bold;">` + innerHTML.substring(index, index + string.length) + "</span>" + innerHTML.substring(index + string.length);
        codeInput.innerHTML = innerHTML;
    }
}

function clearSearch() {
    document.getElementById('codeInput').innerHTML = 'variable1 = "Hello"<br>variable2 = "world"<br>print(variable1 + " " + variable2)';
    document.getElementById("search_term").value = "";
}

function addUser() {
    if (users < 4) {
        let username = usernames[users];
        document.getElementById("userIcons").innerHTML += `<button class="userIcon" onclick="makeActive(${users});"><img id="userIcon${users}" class="userIconImage" src="Images/User Icon Inactive.jpg" alt="User Icon" title="${username}"></button>`;
        users += 1;
    }
}

function makeActive(user) {
    if (canEdit) {
        document.getElementById(`userIcon${user}`).src = "Images/User Icon Active.jpg";
        document.getElementById("runCodeButton").onclick = null; //Remove code-running ability
        document.getElementById("runCodeImage").src = "Images/Run Code Button Inactive.jpg";
        canEdit = false;
    }
}