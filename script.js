//Set the game over to false
var gameOver = false;
//Bind reset button
$("#reset").bind("click", function(){
  $('#myTable td').each(function() {
  		$(this).addClass("clear");
      $(this).html("");
      gameOver = false;
      turn = "O";
      $("#playerTurn").html("It is O's turn");
  });
});
//Array to hold clicked squares
var squareIDs = [];
//Set turn to O or naughts
var turn = "O";
//When a square is clicked swap the turn to X or back to naughts
function swapTurn(){
  if(turn == "O"){
    turn = "X";
    $("#playerTurn").html("It is X's turn");
    console.log(turn);
  }else if (turn == "X") {
    turn = "O";
    $("#playerTurn").html("It is O's turn");
    console.log(turn);
  }
}
//Bind click event to each table square
$('#myTable td').each(function() {
    $(this).bind("click", function(){
      if(!gameOver){
        if (turn == "O" && $(this).is(":empty")) {

      		$(this).addClass("O");
          $(this).html("O");
      		$(this).removeClass("clear");
          squareIDs.push(turn + " " + $(this).data("num"));
          console.log(squareIDs);
      		swapTurn();
          checkWinner();

      	} else if (turn == "X" && $(this).is(":empty")) {

      		$(this).addClass("X");
          $(this).html("X");
      		$(this).removeClass("clear");
          squareIDs.push(turn + " " + $(this).data("num"));
          console.log(squareIDs);
      		swapTurn();
          checkWinner();


      	}
      }else{
        $("#playerTurn").html("The game is over");
      }



    });
    console.log(this);
});

function checkWinner(){
  var O_win =
	   $.inArray("O 0", squareIDs) > -1
	&& $.inArray("O 1", squareIDs) > -1
	&& $.inArray("O 2", squareIDs) > -1
	|| $.inArray("O 0", squareIDs) > -1
	&& $.inArray("O 4", squareIDs) > -1
	&& $.inArray("O 8", squareIDs) > -1
	|| $.inArray("O 1", squareIDs) > -1
	&& $.inArray("O 4", squareIDs) > -1
	&& $.inArray("O 7", squareIDs) > -1
	|| $.inArray("O 2", squareIDs) > -1
	&& $.inArray("O 4", squareIDs) > -1
	&& $.inArray("O 6", squareIDs) > -1
	|| $.inArray("O 2", squareIDs) > -1
	&& $.inArray("O 5", squareIDs) > -1
	&& $.inArray("O 8", squareIDs) > -1
	|| $.inArray("O 3", squareIDs) > -1
	&& $.inArray("O 4", squareIDs) > -1
	&& $.inArray("O 5", squareIDs) > -1
	|| $.inArray("O 6", squareIDs) > -1
	&& $.inArray("O 7", squareIDs) > -1
	&& $.inArray("O 8", squareIDs) > -1
	|| $.inArray("O 6", squareIDs) > -1
	&& $.inArray("O 0", squareIDs) > -1
	&& $.inArray("O 3", squareIDs) > -1;

  if(O_win) {
		$("#playerTurn").html("O's wins");
    gameOver = true;
  }

  var X_win =
	   $.inArray("X 0", squareIDs) > -1
	&& $.inArray("X 1", squareIDs) > -1
	&& $.inArray("X 2", squareIDs) > -1
	|| $.inArray("X 0", squareIDs) > -1
	&& $.inArray("X 4", squareIDs) > -1
	&& $.inArray("X 8", squareIDs) > -1
	|| $.inArray("X 1", squareIDs) > -1
	&& $.inArray("X 4", squareIDs) > -1
	&& $.inArray("X 7", squareIDs) > -1
	|| $.inArray("X 2", squareIDs) > -1
	&& $.inArray("X 4", squareIDs) > -1
	&& $.inArray("X 6", squareIDs) > -1
	|| $.inArray("X 2", squareIDs) > -1
	&& $.inArray("X 5", squareIDs) > -1
	&& $.inArray("X 8", squareIDs) > -1
	|| $.inArray("X 3", squareIDs) > -1
	&& $.inArray("X 4", squareIDs) > -1
	&& $.inArray("X 5", squareIDs) > -1
	|| $.inArray("X 6", squareIDs) > -1
	&& $.inArray("X 7", squareIDs) > -1
	&& $.inArray("X 8", squareIDs) > -1
	|| $.inArray("X 6", squareIDs) > -1
	&& $.inArray("X 0", squareIDs) > -1
	&& $.inArray("X 3", squareIDs) > -1;

  if(X_win) {
		$("#playerTurn").html("X's wins");
    gameOver = true;
  }

}
