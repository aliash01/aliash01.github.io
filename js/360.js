const panoramaImage = new PANOLENS.ImagePanorama("img/ship.jpeg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: false
});

viewer.OrbitControls.noRotate = true;
viewer.OrbitControls.noZoom = true;
viewer.OrbitControls.noPan = true;

viewer.OrbitControls.enableDamping = false;

viewer.add(panoramaImage);
viewer.onWindowResize();

