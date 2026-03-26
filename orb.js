const canvas = document.getElementById("orbCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 120;
canvas.height = 120;

let t = 0;

function drawOrb() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let cx = canvas.width / 2;
    let cy = canvas.height / 2;

    let g = ctx.createRadialGradient(cx, cy, 20, cx, cy, 60);
    g.addColorStop(0, "#52b788");
    g.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(cx, cy, 50, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "rgba(255,255,255,0.5)";

    for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        for (let x = 0; x < 120; x++) {
            let y = 60 + Math.sin((x * 0.1) + t + i) * (5 + i * 2);
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    }

    t += 0.05;
    requestAnimationFrame(drawOrb);
}

drawOrb();

