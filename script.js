const squares = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
let activeSquare;

document.querySelectorAll('.day-button').forEach(button => {
    button.addEventListener('click', function() {
        changeColor(this.id);
    });
});

function changeColor(day) {
    if (activeSquare) {
        if (activeSquare === day) {
            // If the active square is the same as the clicked square, hide it
            document.getElementById(activeSquare + "-square").className = activeSquare + "-up";
            activeSquare = null;
        } else {
            // If the active square is different, hide the active square and show the clicked square
            document.getElementById(activeSquare + "-square").className = activeSquare + "-up";
            document.getElementById(day + "-square").className = day + "-down";
            activeSquare = day;
        }
    } else {
        // If there's no active square, show the clicked square
        document.getElementById(day + "-square").className = day + "-down";
        activeSquare = day;
    }
}