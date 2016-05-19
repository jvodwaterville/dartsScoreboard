window.onload = writeToLS;

var player1Name = "Player1";
var player2Name = "Player2";
var scoreIs = 501;
var sets = 3;
var legs = 3;

function scoreSelected(score)
{
	if(score == 101)
	{
		document.getElementById("score101").className = "selected";
		document.getElementById("score301").className = "select";
		document.getElementById("score501").className = "select";
		document.getElementById("score1001").className = "select";
		scoreIs = 101;
		writeToLS();
	}
	else if(score == 301)
	{
		document.getElementById("score101").className = "select";
		document.getElementById("score301").className = "selected";
		document.getElementById("score501").className = "select";
		document.getElementById("score1001").className = "select";
		scoreIs = 301;
		writeToLS();
	}
	else if(score == 501)
	{
		document.getElementById("score101").className = "select";
		document.getElementById("score301").className = "select";
		document.getElementById("score501").className = "selected";
		document.getElementById("score1001").className = "select";
		scoreIs = 501;
		writeToLS();
	}
	else if(score == 1001)
	{
		document.getElementById("score101").className = "select";
		document.getElementById("score301").className = "select";
		document.getElementById("score501").className = "select";
		document.getElementById("score1001").className = "selected";
		scoreIs = 1001;
		writeToLS();
	}
}

function setSelected(set)
{
	if(set == 1)
	{
		document.getElementById("set1").className = "selected";
		document.getElementById("set3").className = "select";
		document.getElementById("set5").className = "select";
		document.getElementById("set7").className = "select";
		document.getElementById("set9").className = "select";
		document.getElementById("set11").className = "select";
		sets = 1;
		writeToLS();
	}
	else if(set == 3)
	{
		document.getElementById("set1").className = "select";
		document.getElementById("set3").className = "selected";
		document.getElementById("set5").className = "select";
		document.getElementById("set7").className = "select";
		document.getElementById("set9").className = "select";
		document.getElementById("set11").className = "select";
		sets = 2;
		writeToLS();
	}
	else if(set == 5)
	{
		document.getElementById("set1").className = "select";
		document.getElementById("set3").className = "select";
		document.getElementById("set5").className = "selected";
		document.getElementById("set7").className = "select";
		document.getElementById("set9").className = "select";
		document.getElementById("set11").className = "select";
		sets = 3;
		writeToLS();
	}
	else if(set == 7)
	{
		document.getElementById("set1").className = "select";
		document.getElementById("set3").className = "select";
		document.getElementById("set5").className = "select";
		document.getElementById("set7").className = "selected";
		document.getElementById("set9").className = "select";
		document.getElementById("set11").className = "select";
		sets = 4;
		writeToLS();
	}
	else if(set == 9)
	{
		document.getElementById("set1").className = "select";
		document.getElementById("set3").className = "select";
		document.getElementById("set5").className = "select";
		document.getElementById("set7").className = "select";
		document.getElementById("set9").className = "selected";
		document.getElementById("set11").className = "select";
		sets = 5;
		writeToLS();
	}
	else if(set == 11)
	{
		document.getElementById("set1").className = "select";
		document.getElementById("set3").className = "select";
		document.getElementById("set5").className = "select";
		document.getElementById("set7").className = "select";
		document.getElementById("set9").className = "select";
		document.getElementById("set11").className = "selected";
		sets = 6;
		writeToLS();
	}
}

function legSelected(leg)
{
	if(leg == 3)
	{
		document.getElementById("leg3").className = "selected";
		document.getElementById("leg5").className = "select";
		document.getElementById("leg7").className = "select";
		legs = 2;
		writeToLS();
	}
	else if(leg == 5)
	{
		document.getElementById("leg3").className = "select";
		document.getElementById("leg5").className = "selected";
		document.getElementById("leg7").className = "select";
		legs = 3;
		writeToLS();
	}
	else if(leg == 7)
	{
		document.getElementById("leg3").className = "select";
		document.getElementById("leg5").className = "select";
		document.getElementById("leg7").className = "selected";
		legs = 5;
		writeToLS();
	}
}

function setName()
{
	player1Name = document.getElementById('player1ChangeName').value;
	player2Name = document.getElementById('player2ChangeName').value;
	writeToLS();
}

function writeToLS()
{
	localStorage.setItem("player1name", player1Name);
	localStorage.setItem("player2name", player2Name);
	localStorage.setItem("score", scoreIs);
	localStorage.setItem("sets", sets);
	localStorage.setItem("legs", legs);
}
function readFromLS()
{
	var p1=localStorage.getItem("player1name");
	var p2=localStorage.getItem("player2name");
	var scoreLoad=localStorage.getItem("score");
	var setLoad=localStorage.getItem("sets");
	var legLoad=localStorage.getItem("legs");
	
	alert(p1);
	alert(p2);
	alert(scoreLoad);
	alert(setLoad);
	alert(legLoad);
}