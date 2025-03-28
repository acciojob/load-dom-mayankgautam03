//your JS code here. If required.
let divmaking = document.createElement("div");
divmaking.id="dom";
document.body.appendChild(divmaking);

let domsuccess = document.getElementById("dom")
domsuccess.innerHTML="DOM load success";