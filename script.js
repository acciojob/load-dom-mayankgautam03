document.addEventListener("DOMContentLoaded", () => {
    let divmaking = document.createElement("div");
    divmaking.id = "dom";
    divmaking.innerHTML = "DOM load success";
    document.body.appendChild(divmaking);
});
