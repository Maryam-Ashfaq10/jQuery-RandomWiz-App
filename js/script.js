let facts;
let quotes;
let places;

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
                alert(randomNumber);
                break;
            case 2:
                // Handle Random Name
                console.log('Random Name selected');
                break;
            case 3:
                // Handle Random Quote
                const quoteIndex = Math.floor(Math.random() * quotes.length);
                const randomQuote = quotes[quoteIndex];
                alert(`${randomQuote.text} — ${randomQuote.author}`);
                break;
            case 4:
                // Handle Random Color
                const randomColor = getRandomColor();
                alert(randomColor);
                break;
            case 5:
                // Handle Random Facts
                const factIndex = Math.floor(Math.random() * facts.length);
                const randomFact = facts[factIndex];
                alert(randomFact);
                break;
            case 6:
                // Handle Random Places
                console.log('Random Places selected');
                break;
            default:
                console.log('Unknown option selected');
        }
    });

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
        "Wombat poop is cube-shaped.",
        "Cows have best friends.",
        "The Eiffel Tower can be 15 cm taller during the summer."
    ];
});
