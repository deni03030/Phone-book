/* 
  Functions related to the Modal
*/

const escapeListener = (event) => {
  if (event.key === "Escape") {
    closePipModal();
  }
};

function openModal() {
  document.querySelector("html").style.overflow = "hidden";
  document.querySelector("#modal").style.display = "block";
  document.addEventListener("keyup", escapeListener);
}

function closeModal() {
  // Hide the modal
  document.querySelector("html").style.overflow = "auto";
  document.querySelector("#modal").style.display = "none";
  document.removeEventListener("keyup", escapeListener);
  resetModal();
}
