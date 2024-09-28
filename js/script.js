$(document).ready(function() {

    $(".continue-button").click(function() {
        
        $(this).hide();
        $('#options').show();
    });

    $('.option-btn').on('click', function() {
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
                console.log('Random Quote selected');
                break;
            case 4:
                // Handle Random Color
                const randomColor = getRandomColor();
                alert(randomColor) ; 
                break;
            case 5:
                // Handle Random Facts
                console.log('Random Facts selected');
                break;
            case 6:
                // Handle Random Places
                console.log('Random Places selected');
                break;
            default:
                console.log('Unknown option selected');
        }
    });

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
});
