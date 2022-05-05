document.addEventListener('DOMContentLoaded', () => {
    fetch("http://localhost:3000/pups")
    .then(resp => resp.json())
    .then(pups => {
        pups.forEach((pup) => addPupToDogBar(pup))
    });
})

function addPupToDogBar(pup) {
    const div = document.querySelector("#dog-bar")
    const span = document.createElement("span");

    span.textContent = pup.name;
    
    span.addEventListener('click', () => {
        showPupInfo(pup);
    });

    div.append(span);
}

function showPupInfo(pup) {
    const div = document.querySelector("#dog-info");
    
    div.innerHTML = ""; // or add elements to .html instead of creating elements
     
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const btn = document.createElement("button");

    img.src = pup.image;
    h2.textContent = pup.name;
    
    if (pup.isGoodDog === true) {
        btn.textContent = "Good Dog!";
    } else {
        btn.textContent = "Bad Dog!";
    }

    btn.addEventListener('click', () => {
        if (pup.isGoodDog !== true) {
            btn.textContent = "Good Dog!";
        } else {
            btn.textContent = "Bad Dog!";
        }
    })
    div.append(img, h2, btn);
}

