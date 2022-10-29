let drawing = false;
const canvas = document.querySelector("canvas");
const line = canvas.getContext("2d");
canvas.height = $("body").height();
canvas.width = $("body").width();
let downX = 0;
let downY = 0;
let square = false;

$("#canvas").on("mousedown", function (e) {
    drawing = true;
    downX = e.pageX;
    downY = e.pageY;
    draw(e);
});

$("#canvas").on("mouseup", function (e) {
    // drawing = false;
    // line.beginPath();
    line.rect(downX, downY, e.pageX-downX, e.pageY-downY);
    line.stroke();
    line.beginPath();
    line.rect(downX, downY, e.pageX-downX, e.pageY-downY);
});

$("#canvas").on("mousemove", function (e) {
    draw(e);
});

function draw(e) {
    if (!drawing) return;
    line.lineWidth = 10;
    line.lineCap = "round";
    line.strokeStyle = $("#color").val();

    line.lineTo(e.pageX, e.pageY);
    line.stroke();
    line.beginPath();
    line.lineTo(e.pageX, e.pageY);
}

$("#square").on("click", function () {
    if (!square){
        $(this).parent().css("background","#123456");
        $(this).parent().children(":eq(0)").css("background","#123456");
        square = true;
    }else {
        square = false;
        $(this).parent().css("background","white");
        $(this).parent().children(":eq(0)").css("background", "white");
    }
})
