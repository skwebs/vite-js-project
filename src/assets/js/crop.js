import "cropperjs/dist/cropper.css";
import Cropper from "cropperjs";

const image = document.getElementById("crop");
const cropper = new Cropper(image, {
  viewMode: 3,
  dragMode: "move",
  aspectRatio: 4 / 5,
  autoCropArea: 1,
  restore: false,
  modal: false,
  highlight: false,
  cropBoxMovable: false,
  cropBoxResizable: false,
  toggleDragModeOnDblclick: false,
  crop(event) {
    console.log(event.detail.x);
    console.log(event.detail.y);
    console.log(event.detail.width);
    console.log(event.detail.height);
    console.log(event.detail.rotate);
    console.log(event.detail.scaleX);
    console.log(event.detail.scaleY);
  },
});
