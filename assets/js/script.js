let drawing = false;
const canvas = document.querySelector("canvas");
const line = canvas.getContext("2d");
canvas.height = $("body").height();
canvas.width = $("body").width();
let downX = 0;
let downY = 0;
let square = false;
let circle = false;
let erase = false;

$("#canvas").on("mousedown", function (e) {
    drawing = true;
    downX = e.pageX;
    downY = e.pageY;
    line.strokeStyle = $("#color").val();
    if (!square && !circle) {
        draw(e);
    }
});

$("#canvas").on("mouseup", function (e) {
    if (square) {
        line.rect(downX, downY, e.pageX - downX, e.pageY - downY);
    } else if (circle) {
        line.arc(downX, downY, e.pageY - downY, 0, 2 * Math.PI);
    }
    line.stroke();
    drawing = false;
    line.beginPath();
});

$("#canvas").on("mousemove", function (e) {
    if (!square && !circle) {
        draw(e);
    }
});

function draw(e) {
    if (!drawing) return;
    // line.lineWidth = $("#size").val();
    line.lineCap = "round";
    line.strokeStyle = $("#color").val();

    line.lineTo(e.pageX, e.pageY);
    line.stroke();
    line.beginPath();
    line.lineTo(e.pageX, e.pageY);
}

$("#square").on("click", function () {
    if (!square) {
        $(this).parent().css("background", "#00b4d8");
        $(this).parent().children(":eq(0)").css("background", "#00b4d8");
        square = true;
        circle = false;
        erase = false;
        defaultShapeStyle("#circle");
        defaultShapeStyle("#eraser");
    } else {
        square = false;
        defaultShapeStyle("#square");
    }
});

$("#circle").on("click", function () {
    if (!circle) {
        $(this).parent().css("background", "#00b4d8");
        $(this).parent().children(":eq(0)").css("background", "#00b4d8");
        circle = true;
        square = false;
        erase = false;
        defaultShapeStyle("#square");
        defaultShapeStyle("#eraser");
    } else {
        circle = false;
        defaultShapeStyle("#circle");
    }
});

function defaultShapeStyle(shape) {
    $(shape).parent().css("background", "white");
    $(shape).parent().children(":eq(0)").css("background", "white");
}

$("#color").on("click", function () {
    line.strokeStyle = $("#color").val();
});

$("#eraser").on("click", function () {
    line.strokeStyle = "white";
    if (!erase) {
        $(this).parent().css("background", "#00b4d8");
        $(this).parent().children(":eq(0)").css("background", "#00b4d8");
        line.strokeStyle = "white";
        $("#color").attr("value", "#ffffff");
        erase = true;
        circle = false;
        square = false;
        defaultShapeStyle("#square");
        defaultShapeStyle("#circle");
    } else {
        erase = false;
        defaultShapeStyle("#eraser");
    }
});

$("#size").on("change", function () {
    line.lineWidth = $("#size").val();
})
