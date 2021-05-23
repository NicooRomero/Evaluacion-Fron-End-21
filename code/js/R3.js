// Variables
const openModal = document.querySelectorAll("[data-open]");
const contentModal = document.querySelector(".modal-video");
const isVisible = "is-visible";

// Al hacer click en video se reproduce en ventana modal con su correspondiente video url
for(const modal of openModal) {
    
    modal.addEventListener("click", function() {
    
        vidId = modal.id;

        url = document.querySelector("#" + vidId).src;

        document.querySelector(".modal").classList.add(isVisible);

        contentModal.innerHTML = '<video src="'+ url + '" width="700" height="400" type="video/mp4" controls autoplay><source src="'+ url + '" type="video/mp4" /></video>';

    });
}

// Cerrar modal al hacer click por fuera
document.addEventListener("click", e => {
    if (e.target == document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
        document.querySelector("video").pause();
    }
});

// Cerrar modal tecla Esc
document.addEventListener("keyup", e => {
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
        document.querySelector("video").pause();
    }
});