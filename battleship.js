
var randomIndex=Math.floor(Math.random()*5);
var location1=randomIndex;
var location2=location1+1;
var location3=location2+1;

var guess;
var hits=0;
var guesses=0;
var isSunk=false;

while(isSunk==false) {
    guess=prompt("Готов? Стреляй! (введи число от 0 до 6):");
    if (guess<0 || guess>6) {
        alert("Ты ввел неправильное число! Напоминаю: от 0 до 6...)))");
    } else {
        guesses=guesses+1;

        if (guess==location1 || guess==location2 || guess==location3) {
            alert("Попал!");
            hits=hits+1;
            if (hits==3) {
                isSunk=true;
                alert("Ты потопил мой корабль! Ну, ладно, в следующий раз будет сложнее))))");
            }
        } else {
            alert("Мазила!!!)))");
        
        }
    }
}
var stats=`Ты сделал ${guesses} хода, чтобы потопить корабль, точность попадания - ${3 / guesses}))))))`;
alert(stats);
