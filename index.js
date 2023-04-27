const images = ["url('../images/1.jpg')","url('../images/2.jpg')", "url('../images/3.jpg')", "url('../images/4.jpg')","url('../images/5.jpg')"];

let imfondo;

const cambio = setInterval(function() {
    imfondo = images[Math.floor(Math.random() * images.length)];

    document.getElementById('body').style.transition = '7s'

    document.getElementById('body').style.background = imfondo;
    document.getElementById('body').style.backgroundPosition = 'center';
    document.getElementById('body').style.backgroundAttachment = 'fixed';
    document.getElementById('body').style.backgroundSize = 'cover';
}, 7000);
document.getElementById('body').style.transition = '7s'

