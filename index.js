const model = document.getElementById("cube");
const bodyFilter = document.body;

let base = (e) => {
    var x = e.pageX / window.innerWidth - 0
    var y = e.pageY / window.innerHeight - 0
    model.style.transform = `
    perspective(500px)
    rotateX(${ y * 360 + 1}deg)
    rotateZ(${ -x * 360 + 1}deg)
    translateZ(-9vw)
    `;
}
bodyFilter.addEventListener("pointermove", base)
