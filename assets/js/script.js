$(window).on('load', function () {
    let drawing = false;
    const canvas = document.querySelector("canvas");
    const line = canvas.getContext("2d");
    canvas.height = $("body").height();
    canvas.width = $("body").width();
    console.log(canvas.height);

    $(this).on("mousedown", function () {
        drawing = true;
    });

    $(this).on("mouseup", function () {
        drawing = false;
        line.beginPath();
    });

    $(this).on("mousemove", function (e) {
        if (!drawing) return;
        line.lineWidth = 10;
        line.lineCap = "round";

        line.lineTo(e.pageX, e.pageY);
        line.stroke();
        line.beginPath();
        line.lineTo(e.pageX, e.pageY);
        console.log("done");
    });
});
