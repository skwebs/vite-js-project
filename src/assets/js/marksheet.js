import download from "downloadjs";
import * as htmlToImage from "html-to-image";

// var node = document.getElementById('my-node');

// htmlToImage.toPng(node)
//   .then(function (dataUrl) {
//     var img = new Image();
//     img.src = dataUrl;
//     document.body.appendChild(img);
//   })
//   .catch(function (error) {
//     console.error('oops, something went wrong!', error);
//   });

// htmlToImage.toPng(document.getElementById("my-node")).then(function (dataUrl) {
//   download(dataUrl, "my-node.png");
// });

// htmlToImage
//   .toJpeg(document.getElementById("my-node"), { quality: 0.95 })
//   .then(function (dataUrl) {
//     var link = document.createElement("a");
//     link.download = "my-image-name.jpeg";
//     link.href = dataUrl;
//     link.click();
//   });

// htmlToImage
//   .toCanvas(document.getElementById("my-node"))
//   .then(function (canvas) {
//     document.body.appendChild(canvas);
//   });
