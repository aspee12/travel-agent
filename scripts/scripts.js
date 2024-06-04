document.addEventListener('DOMContentLoaded', () => {
    const images = [
        '../../assets/swapper1.png',
        '../../assets/swapper2.jpeg',
        '../../assets/swapper3.jpg'
    ];
    let currentIndex = 0;
    const swapperImage = document.getElementById('swapper-image');

    function updateImage() {
        swapperImage.src = images[currentIndex] || '';
    }

    function autoSwap() {
        currentIndex = (currentIndex < images?.length -1) ? currentIndex +1 : 0;
        updateImage();
    }

    updateImage();
    setInterval(autoSwap, 3000);
});



const toggleFaq = (id) => {
    let element = document.getElementById(id);
    var icon = document.getElementById('faq-icon-' + id)
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "flex";
        icon.className = "fa fa-minus"
    } else {
        element.style.display = "none";
        icon.className = "fa fa-plus"
    }
}