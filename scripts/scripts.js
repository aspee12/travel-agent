document.addEventListener('DOMContentLoaded', () => {
    const images = [
        '../assets/swapper1.png',
        '../assets/swapper2.jpeg',
        '../assets/swapper3.jpg'
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

document.addEventListener('DOMContentLoaded', function() {
    const festivals = [
        { name: 'Punakha Drubchen', town: 'Punakha', startDate: 'Feb 16, 2024', endDate: 'Feb 18, 2024' },
        { name: 'Thimphu Tshechu', town: 'Thimphu', startDate: 'Sep 20, 2024', endDate: 'Sep 22, 2024' },
        {name: 'Tharpaling Thongdrol', town: 'Bumthang', startDate: 'Feb 24, 2024', endDate: 'Feb 27, 2024'},
        {name: 'Kurjey Tshechu', town: 'Bumthang', startDate: 'Jun 16, 2024', endDate: 'Jun 20, 2024'},
        {name: 'Haa Summer Festival', town: 'Haa Valley', startDate: 'Jul 14, 2024', endDate: 'Jul 15, 2024'},
        {name: 'Thimphu Drubchen', town: 'Thimphu', startDate: 'Sep 02, 2024', endDate: 'Sep 07, 2024'},
        {name: 'Wangdue Tshechu', town: 'Wangdue Phodrang', startDate: 'Sep 11, 2024', endDate: 'Sep 13, 2024'},
        {name: 'Thimphu Tshechu', town: 'Thimphu', startDate: 'Sep 13, 2024', endDate: 'Sep 15, 2024'},
        {name: 'Gangtey Tshechu', town: 'Wangdue Phodrang', startDate: 'Sep 16, 2024', endDate: 'Sep 18, 2024'},
        {name: 'Tangbi Mani', town: 'Bumthang', startDate: 'Sep 17, 2024', endDate: 'Sep 19, 2024'},
        {name: 'Jakar Tshechu', town: 'Bumthang', startDate: 'Oct 10, 2024', endDate: 'Oct 12, 2024'},
        {name: 'Chhukha Tshechu', town: 'Chukha', startDate: 'Oct 13, 2024', endDate: 'Oct 15, 2024'},
        {name: 'Prakhar Duchhoed', town: 'Bumthang', startDate: 'Oct14 13, 2024', endDate: 'Oct 15, 2024'},
        {name: 'Royal Highland Festival(Laya)', town: 'Laya', startDate: 'Oct 23, 2024', endDate: 'Oct 24, 2024'},
        {name: 'Dechenphu Tshechu', town: 'Thimphu', startDate: 'Nov 03, 2024', endDate: 'Nov 03, 2024'},
        {name: 'Mongar Tshechu', town: 'Mongar', startDate: 'Nov 9, 2024', endDate: 'Nov 11, 2024'},


    ];

    const calendarContainer = document.getElementById('calendar-logic');

    festivals.forEach(festival => {
        const festivalDiv = document.createElement('div');
        festivalDiv.classList.add('calendar-contain', 'calendar-value');

        const namePara = document.createElement('p');
        namePara.classList.add('flex-width');
        namePara.textContent = festival.name;

        const townPara = document.createElement('p');
        townPara.classList.add('flex-width');
        townPara.textContent = festival.town;

        const startDatePara = document.createElement('p');
        startDatePara.classList.add('flex-width');
        startDatePara.textContent = festival.startDate;

        const endDatePara = document.createElement('p');
        endDatePara.classList.add('flex-width');
        endDatePara.textContent = festival.endDate;

        festivalDiv.appendChild(namePara);
        festivalDiv.appendChild(townPara);
        festivalDiv.appendChild(startDatePara);
        festivalDiv.appendChild(endDatePara);

        calendarContainer.appendChild(festivalDiv);
    });
});

