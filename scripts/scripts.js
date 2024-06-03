document.addEventListener('DOMContentLoaded', () => {
    const images = [
        '../../assets/swapper1.png',
        '../../assets/swapper2.jpeg',
        '../../assets/swapper3.jpg'
    ];
    let currentIndex = 0;
    const swapperImage = document.getElementById('swapper-image');

    function updateImage() {
        swapperImage.src = images[currentIndex];
    }

    function autoSwap() {
        currentIndex = (currentIndex < images?.length -1) ? currentIndex +1 : 0;
        updateImage();
    }

    updateImage();
    setInterval(autoSwap, 3000);
});
