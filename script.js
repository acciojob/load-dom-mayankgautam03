window.addEventListener("load", () => {
    setTimeout(() => {
        let divmaking = document.createElement("div");
        divmaking.id = "dom";
        document.body.appendChild(divmaking);

        let domsuccess = document.getElementById("dom");
        domsuccess.innerHTML = "DOM load success";
    }, 5000); // Adding 5 seconds delay to ensure test completes
});
