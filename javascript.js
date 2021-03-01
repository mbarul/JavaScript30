const panels = document.querySelectorAll('.img');

function toggleOpen() {
    console.log("helo");
    this.classList.toggle('open');
}

function toggleActive() {
    console.log("jato");
    this.classList.toggle('open-active');
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));