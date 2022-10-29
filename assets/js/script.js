let drawing = false;
const canvas = document.querySelector("canvas");
const line = canvas.getContext("2d");
canvas.height = $("body").height();
canvas.width = $("body").width();
let downX = 0;
let downY = 0;

$(this).on("mousedown", function (e) {
    drawing = true;
    downX = e.pageX;
    downY = e.pageY;
    draw(e);
});

$(this).on("mouseup", function (e) {
    // drawing = false;
    // line.beginPath();
    line.rect(downX, downY, e.pageX-downX, e.pageY-downY);
    line.stroke();
    line.beginPath();
    line.rect(downX, downY, e.pageX-downX, e.pageY-downY);
});

$(this).on("mousemove", function (e) {
    draw(e);
});

function draw(e) {
    if (!drawing) return;
    line.lineWidth = 10;
    line.lineCap = "round";
    line.strokeStyle = $("#color").val();

    // line.lineTo(e.pageX, e.pageY);
    // line.rect(e.pageX, e.pageY, e.pageX-downX, e.pageY-downY);
    // line.stroke();
    // line.beginPath();
    // line.rect(e.pageX, e.pageY, e.pageX-downX, e.pageY-downY);
    // line.lineTo(e.pageX, e.pageY);
}

// $("#canvas").on("click", function () {
//     line.fillStyle = $("#color").value();
// })

$("#square").on("click", function () {

})
