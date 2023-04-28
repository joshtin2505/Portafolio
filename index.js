const images = ["url('../images/1.jpg')", "url('../images/2.jpg')", "url('../images/3.jpg')", "url('../images/4.jpg')", "url('../images/5.jpg')"];

let imfondo;

const cambio = setInterval(function () {
    imfondo = images[Math.floor(Math.random() * images.length)];

    document.getElementById('body').style.transition = '7s'

    document.getElementById('body').style.background = imfondo;
    document.getElementById('body').style.backgroundPosition = 'center';
    document.getElementById('body').style.backgroundAttachment = 'fixed';
    document.getElementById('body').style.backgroundSize = 'cover';
}, 7000);
document.getElementById('body').style.transition = '7s';

function myprojects(){
  const prolist_com = document.querySelector('.prolist-com');
  const prolist = document.querySelector('.prolist');

  prolist_com.addEventListener('mouseover', () => {
      prolist.style.display = 'flex';
    });

  prolist_com.addEventListener('mouseout', () => {
      prolist.style.display = 'none'; 
    });

  prolist.addEventListener('mouseover', () => {
      prolist.style.display = 'flex';
    })

  prolist.addEventListener('mouseout', () => {
      prolist.style.display = 'none';
    })

}
myprojects();