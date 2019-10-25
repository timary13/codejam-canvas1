
window.onload = function () {

    const piskelSize = 512;

    imgResize();

    function fourxfour() {
        fetch("./data/4x4.json")
            .then(response => response.json())
            .then(function(result) {

                let scale = piskelSize / result.length;

                //get canvas context
                let canvas = document.getElementById("piskel");
                let ctx = canvas.getContext("2d");
                //get source width and height
                let srcWidth = result[0].length;
                let srcHeight = result.length;

                // Make sure the canvas is no larger than the size we need
                canvas.width = srcWidth * scale;
                canvas.height = srcHeight * scale;

                // Loop through each color and draw that section
                for (let row = 0; row < srcHeight; row++) {
                    for (let col = 0; col < srcWidth; col++) { // Since there are nested arrays we need two for loops
                        ctx.fillStyle = "#" + result[row][col]; // Set the color to the one specified
                        ctx.fillRect(col * scale, row * scale, scale, scale); // Actually draw the rectangle
                    }
                }

            });
    }

    function x32() {
        fetch("./data/32x32.json")
            .then(response => response.json())
            .then(function(result) {

                let scale = piskelSize / result.length;
                console.log(scale);

                //get canvas context
                let canvas = document.getElementById("piskel");
                let ctx = canvas.getContext("2d");
                //get source width and height
                let srcWidth = result[0].length;
                let srcHeight = result.length;

                // Make sure the canvas is no larger than the size we need
                canvas.width = srcWidth * scale;
                canvas.height = srcHeight * scale;

                // Loop through each color and draw that section
                for (let row = 0; row < srcHeight; row++) {
                    for (let col = 0; col < srcWidth; col++) { // Since there are nested arrays we need two for loops
                        ctx.fillStyle = "rgb(" + result[row][col][0] + ", " + result[row][col][1] + ", " + result[row][col][2] + ")"; // Set the color to the one specified
                        ctx.fillRect(col * scale, row * scale, scale, scale); // Actually draw the rectangle
                    }
                }

            });
    }

    function imgResize() {
        let canvas = document.getElementById('piskel'),
            ctx     = canvas.getContext('2d'),
            pic     = new Image();
        pic.src = './data/image.png';
        canvas.height = piskelSize;
        canvas.width = piskelSize;
        pic.onload = function () {
            ctx.drawImage(pic, 0, 0, piskelSize, piskelSize);
        }
    }

}