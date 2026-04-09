const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;

let prevX = 0;
let prevY = 0;

function fade() {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document.addEventListener("mousemove", (e) => {

    let dx = Math.abs(e.clientX - prevX);
    let dy = Math.abs(e.clientY - prevY);

    if (dx > 2 || dy > 2) {
        ctx.fillStyle = "cyan";
        ctx.fillRect(e.clientX, e.clientY, 3, 3);
    }

    prevX = e.clientX;
    prevY = e.clientY;
});

function animate() {
    fade();
    requestAnimationFrame(animate);
}

animate();
