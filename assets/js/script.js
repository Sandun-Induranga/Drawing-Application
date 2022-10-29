// $(window).on('load', function () {
    let drawing = false;
    const canvas = document.querySelector("canvas");
    const line = canvas.getContext("2d");
    canvas.height = $("body").height();
    canvas.width = $("body").width();

    $(this).on("mousedown", function (e) {
        drawing = true;
        draw(e);
    });

    $(this).on("mouseup", function () {
        drawing = false;
        line.beginPath();
    });

    $(this).on("mousemove", function (e) {
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

    // $("#canvas").on("click", function () {
    //     line.fillStyle = $("#color").value();
    // })
// });
