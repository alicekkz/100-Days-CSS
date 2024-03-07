document.querySelector(".position-marker").addEventListener("click", function () {
    document.querySelector(".info-card").classList.add("visible");
    document.querySelector(".position-marker").classList.add("off-stage");
});

document.querySelector(".info-card").addEventListener("click", function () {
    document.querySelector(".info-card").classList.remove("visible");
    document.querySelector(".position-marker").classList.remove("off-stage");
});