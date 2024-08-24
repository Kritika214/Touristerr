const seasons = {
    Spring: {
        heading: "Discover Spring Blossoms",
        subtitle: "Experience the rebirth of nature in stunning locations",
        attractions: [
            { name: 'Darjeeling', description: "Darjeeling is a town in India's West Bengal state, in the Himalayan foothills. Once a summer resort for the British Raj elite, it remains the terminus of the narrow-gauge Darjeeling Himalayan Railway, or “Toy Train,” completed in 1881....", image: 'https://hikerwolf.com/wp-content/uploads/2020/04/Darjeeling-toy-train-route.jpg' },
            { name: 'Valley of Flowers National Park', description: 'Valley of Flowers National Park is an Indian national park which was established in 1982. It is located in Chamoli in the state of Uttarakhand', image: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRFbnA0ZaHdHWoojREd6kUkHH6OJhCYVId_1bTvwSfQ7T68cmXNX0mqO2liAddDFUkS' },
            { name: 'Gulmarg', description: 'Gulmarg, known as Gulmarag in Kashmiri, is a town, hill station, tourist destination, skiing destination, and a notified area committee in the Baramulla district in the Indian union territory of Jammu and Kashmir. It is located at a distance of 31 km from Baramulla and 49 km from Srinagar', image: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTTFsmx8EYTq7rL77gCALdtP-2Sfs9R4Q67I-AsN1rwg6XCmvOCNW4Bsb9doeJuEy3e' },
            { name: 'Munnar', description: 'Munnar is a town in the Western Ghats mountain range in India’s Kerala state. A hill station and former resort for the British Raj elite, its surrounded by rolling hills dotted with tea plantations established in the late 19th century.', image: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ6aXO76Ow6I55t6nahzk9n8MNys3sjj_EXNqQ4uUL4W0hEZUXspvXbShy43O48yLsc' },
            { name: 'Coorg', description: 'Kodagu, also known as Coorg, is a rural district in the southwest Indian state of Karnataka. In the area’s north, Madikeri Fort has 2 life-size elephant statues at its entrance, plus a Gothic-style church with a museum on its grounds. Nearby, the Hindu Omkareshwara Temple dates back to the 19th century.', image: 'https://static.toiimg.com/photo/imgsize-649882,msid-61278924/61278924.jpg' },
            { name: 'Gangtok', description: 'Gangtok is the capital of the mountainous northern Indian state of Sikkim. Established as a Buddhist pilgrimage site in the 1840s, the city became capital of an independent monarchy after British rule ended, but joined India in 1975.', image: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQguhxvE_P6CpK016mupzZv55MakwnlQKGR-3NPHWj5_XZt0hzfr7wSGxTnfH5m6cd1' }
        ]
    },
    Summer: {
        heading: "Embrace Summer Adventures",
        subtitle: "Dive into sun-soaked journeys and thrilling experiences",
        attractions: [
            { name: 'Kashmir', description: 'Popularly referred to as the "Paradise on Earth," Kashmir is a breathtaking region in northwestern India. Historically part of the princely state of Jammu and Kashmir, Jammu & Kashmir was declared a Union Territory in 2019.', image: 'https://www.holidify.com/images/bgImages/KASHMIR.jpg' },
            { name: 'Ladakh', description: 'During the summer months in Ladakh, the snow blankets recede, unveiling panoramic landscapes of barren mountains, azure lakes, and lush valleys, making it an ideal time for trekking, biking, and cultural explorations. As monasteries come alive with festivals', image: 'https://www.holidify.com/images/bgImages/LADAKH.jpg' },
            { name: 'Manali', description: 'In summer, Manali turns into a verdant paradise with blooming apple orchards, gushing rivers, and an escape from the scorching plains, offering myriad activities from trekking to paragliding. The pleasantly cool climate combined with panoramic views of snow-capped peak', image: 'https://www.holidify.com/images/bgImages/MANALI.jpg' },
            { name: 'Kinnaur', description: 'In summer, Kinnaur unveils its vibrant colors with orchards full of apples, peaches, and apricots, against the backdrop of majestic snow-clad mountains and azure skies. ', image: 'https://www.holidify.com/images/bgImages/KINNAUR.jpg' },
            { name: 'Dalhousie', description: 'Dalhousie, with its colonial charm and serene landscapes, becomes a verdant retreat during summers, offering travelers respite from the scorching heat', image: 'https://www.holidify.com/images/compressed/680.jpg' },
            { name: 'Mussoorie', description: 'Mussoorie, fondly known as the Queen of the Hills, offers breathtaking panoramic views of the Himalayan ranges and becomes a picturesque escape with pleasant temperatures during the hot months.', image: 'https://www.holidify.com/images/bgImages/MUSSOORIE.jpg' }
        ]
    },
    Autumn: {
        heading: "Experience Autumn's Magic",
        subtitle: "Witness the world transform in a palette of warm colors",
        attractions: [
            { name: 'Hampi', description: 'Hampi is an ancient village in the south Indian state of Karnataka. Its dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar.', image: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRjOodQi1X9KjU4A_pSN7rzjntEyhn38JWUbkwF2jAhaatZ5QQnDZNC1BU11ux8WFrW' },
            { name: 'Darjeeling', description: 'Darjeeling is a town in Indias West Bengal state, in the Himalayan foothills. Once a summer resort for the British Raj elite, it remains the terminus of the narrow-gauge Darjeeling Himalayan Railway', image: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRkcJGAqpUBSA0uMVq_dmgWH4rXH2dtfHBFVw7WgqQo1D7J5SGrluYwB13HRoRz351F' },
            { name: 'Shimla', description: 'Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills. Once the summer capital of British India, it remains the terminus of the narrow-gauge Kalka-Shimla Railway', image: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcScthE-awCoCuvom6eVowIk04UmBc8EjRJE1BG-Y88dH9I5pYUuMTPVFisLq54TVa_f' },
            { name: 'Kolkata', description: 'Kolkata (formerly Calcutta) is the capital of Indias West Bengal state. Founded as an East India Company trading post, it was Indias capital under the British Raj from 1773–1911.', image: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR5_Ro0MJq2s4FibnysM_etwGi7xmnR9k79okP8gUFBoglo11rS43XtFM2n1V2XZGBk' },
            { name: 'Jammu and Kashmir', description: 'ammu and Kashmir is a region administered by India as a union territory and consists of the southern portion of the larger Kashmir region, which has been the subject of a dispute between India and Pakistan', image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/67000/67990-Jammu-And-Kashmir.jpg' },
            { name: 'Ladakh', description: 'Leh, Ladakh. Autumn is the perfect time to visit Ladakh as the barren landscape transforms into a beautiful canvas of orange and yellow leaves.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Shyok_river_Ladakh.jpg/250px-Shyok_river_Ladakh.jpg' }
        ]
    },
    Winter: {
        heading: "Discover Winter Wonderlands",
        subtitle: "Explore magical snow-covered landscapes and cozy retreats",
        attractions: [
        { name: 'Shimla', description: 'Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills. Once the summer capital of British India, it remains the terminus of the narrow-gauge Kalka-Shimla Railway', image: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcScthE-awCoCuvom6eVowIk04UmBc8EjRJE1BG-Y88dH9I5pYUuMTPVFisLq54TVa_f' },
        { name: 'Jammu and Kashmir', description: 'jammu and Kashmir is a region administered by India as a union territory and consists of the southern portion of the larger Kashmir region, which has been the subject of a dispute between India and Pakistan', image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/67000/67990-Jammu-And-Kashmir.jpg' },
        { name: 'Kashmir', description: 'Popularly referred to as the "Paradise on Earth," Kashmir is a breathtaking region in northwestern India. Historically part of the princely state of Jammu and Kashmir, Jammu & Kashmir was declared a Union Territory in 2019.', image: 'https://www.holidify.com/images/bgImages/KASHMIR.jpg' },
        { name: 'Manali', description: 'In summer, Manali turns into a verdant paradise with blooming apple orchards, gushing rivers, and an escape from the scorching plains, offering myriad activities from trekking to paragliding. The pleasantly cool climate combined with panoramic views of snow-capped peak', image: 'https://www.holidify.com/images/bgImages/MANALI.jpg' },
        { name: 'Mussoorie', description: 'Mussoorie, fondly known as the Queen of the Hills, offers breathtaking panoramic views of the Himalayan ranges and becomes a picturesque escape with pleasant temperatures during the hot months.', image: 'https://www.holidify.com/images/bgImages/MUSSOORIE.jpg' },
        { name: 'Gulmarg', description: 'Gulmarg, known as Gulmarag in Kashmiri, is a town, hill station, tourist destination, skiing destination, and a notified area committee in the Baramulla district in the Indian union territory of Jammu and Kashmir. It is located at a distance of 31 km from Baramulla and 49 km from Srinagar', image: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTTFsmx8EYTq7rL77gCALdtP-2Sfs9R4Q67I-AsN1rwg6XCmvOCNW4Bsb9doeJuEy3e' },
        ]
    }
};

function changeSeason(season) {
    updateAttractions(season);
    updateActiveButton(season);
    updateHeading(season);
}

function updateAttractions(season) {
    const grid = document.getElementById('attractions-grid');
    grid.innerHTML = '';
    seasons[season].attractions.forEach(attraction => {
        const attractionElement = document.createElement('div');
        attractionElement.className = 'attraction';
        attractionElement.innerHTML = `
            <img src="${attraction.image}" alt="${attraction.name}">
            <div class="attraction-info">
                <h2>${attraction.name}</h2>
                <p>${attraction.description}</p>
            </div>
        `;
        grid.appendChild(attractionElement);
    });
}

function updateActiveButton(activeSeason) {
    const buttons = document.querySelectorAll('#season-selector button');
    buttons.forEach(button => {
        if (button.textContent === activeSeason) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function updateHeading(season) {
    const heading = document.getElementById('dynamic-heading');
    const subtitle = document.getElementById('dynamic-subtitle');
    heading.style.opacity = 0;
    subtitle.style.opacity = 0;
    setTimeout(() => {
        heading.textContent = seasons[season].heading;
        subtitle.textContent = seasons[season].subtitle;
        heading.style.opacity = 1;
        subtitle.style.opacity = 1;
    }, 300);
}

// Initialize with Spring season
changeSeason('Spring');