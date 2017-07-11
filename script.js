function begin(e){
    if(e.keyCode == 13){
        var userChoice = (document.getElementById('input1').value).toLowerCase();

        var computerChoice = Math.random();

        //Logic Maker
        var game;
        if (computerChoice >= 0 && computerChoice <= 0.33) {
            document.getElementById('output1').innerHTML = "Rock";
            game = rock();
        } else if (computerChoice >= 0.34 && computerChoice <= 0.66) {
            document.getElementById('output1').innerHTML = "Paper";
            game = paper();
        } else if (computerChoice >= 0.67 && computerChoice <= 1) {
            document.getElementById('output1').innerHTML = "Scissor";
            game = scissor();
        } else {
            console.log("Wrong Input");
            error();
        }

        document.getElementById('answer').innerHTML = compare();
        console.log(compare());

        function compare() {
        //Decision Maker
            if (game == userChoice) {
                return "The result is a tie!";
            } else if (game == "rock" && userChoice == "scissor") {
                cincri();
                return "Computer wins!";
            } else if (game == "paper" && userChoice == "rock") {
                cincri();
                return "Computer wins!";
            } else if (game == "scissor" && userChoice == "paper") {
                cincri();
                return "Computer wins!";
            } else if (userChoice == "rock" && game == "scissor") {
                incri();
                return "User wins!";
            } else if (userChoice == "paper" && game == "rock") {
                incri();
                return "User wins!";
            } else if (userChoice == "scissor" && game == "paper") {
                incri();
                return "User wins!";
            } else {
                console.log("Wrong Input");
                error();
            }
        }
        //The Brains
        function error() {
            return 0;
        }
        function rock() {
            return "rock";
        }
        function paper() {
            return "paper";
        }
        function scissor() {
            return "scissor";
        }
    }
}