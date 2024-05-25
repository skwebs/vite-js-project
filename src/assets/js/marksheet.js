import download from "downloadjs";
import * as htmlToImage from "html-to-image";

document.addEventListener("DOMContentLoaded", function () {
  const fileName = `Marksheet_${new Date().getTime()}`;
  // var node = document.getElementById("my-node");
  const targetElement = document.getElementById("marksheet");

  // htmlToImage.toPng(node)
  //   .then(function (dataUrl) {
  //     var img = new Image();
  //     img.src = dataUrl;
  //     document.body.appendChild(img);
  //   })
  //   .catch(function (error) {
  //     console.error('oops, something went wrong!', error);
  //   });

  // htmlToImage.toPng(targetElement).then(function (dataUrl) {
  //   download(dataUrl, fileName);
  // });

  htmlToImage.toJpeg(targetElement, { quality: 0.95 }).then(function (dataUrl) {
    var link = document.createElement("a");
    link.download = fileName;
    link.href = dataUrl;
    link.click();
  });

  // htmlToImage
  //   .toCanvas(document.getElementById("my-node"))
  //   .then(function (canvas) {
  //     document.body.appendChild(canvas);
  //   });
});
