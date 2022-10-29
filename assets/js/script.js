let drawing = false;
const canvas = document.querySelector("canvas");
const line = canvas.getContext("2d");
canvas.height = $("body").height();
canvas.width = $("body").width();

let downX = 0;
let downY = 0;
let square = false;
let circle = false;
let eraser = false;
let pen = false;

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
        eraser = false;
        pen = false;
        defaultShapeStyle("#circle, #eraser, #pen");
        $("#color").val("#000000");
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
        eraser = false;
        pen = false;
        defaultShapeStyle("#square, #eraser, #pen");
        $("#color").val("#000000");
    } else {
        circle = false;
        defaultShapeStyle("#circle");
    }
});

$("#pen").on("click", function () {
    if (!pen) {
        $(this).parent().css("background", "#00b4d8");
        $(this).parent().children(":eq(0)").css("background", "#00b4d8");
        pen = true;
        square = false;
        eraser = false;
        circle = false;
        defaultShapeStyle("#square, #eraser, #circle");
        $("#color").val("#000000");
    } else {
        pen = false;
        defaultShapeStyle("#pen");
    }
});

$("#eraser").on("click", function () {
    if (!eraser) {
        $(this).parent().css("background", "#00b4d8");
        $(this).parent().children(":eq(0)").css("background", "#00b4d8");
        $("#color").val("#ffffff");
        eraser = true;
        pen = false;
        circle = false;
        square = false;
        defaultShapeStyle("#square, #circle, #pen");
    } else {
        eraser = false;
        defaultShapeStyle("#eraser");
        $("#color").val("#000000");
    }
});

function defaultShapeStyle(shape) {
    $(shape).parent().css("background", "white");
    $(shape).parent().children(":eq(0)").css("background", "white");
}

$("#color").on("click", function () {
    line.strokeStyle = $("#color").val();
});

$("#size").on("change", function () {
    line.lineWidth = $("#size").val();
});

$("#btn-download").on("click", function () {
    var image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
    var link = document.createElement('a');
    link.download = "my-image.png";
    link.href = image;
    link.click();
});
