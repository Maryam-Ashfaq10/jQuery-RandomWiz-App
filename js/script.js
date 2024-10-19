let facts;
let quotes;
let places;
let animals;

$(document).ready(function () {

    $(".continue-button").click(function () {

        $(this).hide();
        $('#options').show();
    });

    $('.option-btn').on('click', function () {
        const option = $(this).data('option');

        switch (option) {
            case 1:
                // Handle Random Number
                const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100
                $('#result h5').text("Random Number:"); 
                $('#result p').text(randomNumber);
                break;
            case 2:
                // Handle Random Animal
                const animalIndex = Math.floor(Math.random() * animals.length);
                const randomAnimal = animals[animalIndex];
                $('#result h5').text("Random Animal:"); 
                $('#result p').text(randomAnimal);
                break;
            case 3:
                // Handle Random Quote
                const quoteIndex = Math.floor(Math.random() * quotes.length);
                const randomQuote = quotes[quoteIndex];
                $('#result h5').text("Random Quote:"); 
                $('#result p').text(`${randomQuote.text} — ${randomQuote.author}`);
                break;
            case 4:
                // Handle Random Color
                const randomColor = getRandomColor();
                $('#result h5').text("Random Color:"); 
                $('#result p').text(randomColor);
                break;
            case 5:
                // Handle Random Fact
                const factIndex = Math.floor(Math.random() * facts.length);
                const randomFact = facts[factIndex];
                $('#result h5').text("Random Fact:"); 
                $('#result p').text(randomFact);
                break;
            case 6:
                // Handle Random Places
                const placesIndex = Math.floor(Math.random() * places.length);
                const randomPlace = places[placesIndex];
                $('#result h5').text("Random Place:"); 
                $('#result p').text(randomPlace);
                break;
            default:
                alert('Unknown option selected');
        }
        $('#result').show();
        $('#options').hide();
    });

    $(".back-button").click(function () {

        $('#result').hide();
        $('#options').show();
    });

    animals = [
        "Lion", "Tiger", "Bear", "Elephant", "Giraffe",
        "Zebra", "Kangaroo", "Panda", "Koala", "Penguin",
        "Dolphin", "Eagle", "Shark", "Wolf", "Fox", "Cheetah"
    ];

    quotes = [
        {
            text: "The only limit to our realization of tomorrow is our doubts of today.",
            author: "Franklin D. Roosevelt"
        },
        {
            text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
            author: "Martin Luther King Jr."
        },
        {
            text: "Life is what happens when you're busy making other plans.",
            author: "John Lennon"
        },
        {
            text: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
            author: "Ralph Waldo Emerson"
        },
        {
            text: "Your time is limited, so don’t waste it living someone else’s life.",
            author: "Steve Jobs"
        },
        {
            text: "The only thing worse than being blind is having sight but no vision.",
            author: "Helen Keller:"
        }
    ];

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    facts = [
        "Honey never spoils.",
        "Bananas are berries, but strawberries aren't.",
        "A group of flamingos is called a 'flamboyance.'",
        "Octopuses have three hearts.",
        "Sloths can hold their breath longer than dolphins.",
        "Cows have best friends.",
        "The Eiffel Tower can be 15 cm taller during the summer.",
        "A day on Venus is longer than a year on Venus.",
        "Goldfish can see both infrared and ultraviolet light."
    ];

    places = [
        "Paris, France",
        "Tokyo, Japan",
        "New York, USA",
        "Sydney, Australia",
        "Cairo, Egypt",
        "Rome, Italy",
        "Rio de Janeiro, Brazil",
        "Cape Town, South Africa",
        "Moscow, Russia",
        "Beijing, China",
        "Islamabad, Pakistan"
    ];
});
