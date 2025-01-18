const images = [ 
'https://images-cdn.9gag.com/photo/aqbooxv_700b.jpg',
'https://www.pngarts.com/files/10/Chemical-Guys-Logo-PNG-Picture.png',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCoSH2wYST4iKztvVKUlkDXfdhwEedVhUCcw&s',
'https://1000logos.net/wp-content/uploads/2024/07/FurViking-Logo-500x282.png',
'https://logowik.com/content/uploads/images/3m-black-old1717713102.logowik.com.webp'

]; 
 
let currentIndex = 0; 
 
function changeImage() { 
    const slideshow = document.getElementById('slideshow'); 
    currentIndex = (currentIndex + 1) % images.length; 
    slideshow.style.opacity = 0; // Fade out 
    setTimeout(() => { 
        slideshow.src = images[currentIndex]; 
        slideshow.style.opacity = 1; // Fade in 
    }, 1000); // Wait for fade out to finish 
} 
 
setInterval(changeImage, 3000); // Change image every 5 seconds 