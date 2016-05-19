var p1Name=localStorage.getItem("player1name");
var p2Name=localStorage.getItem("player2name");
var scoreLoad=localStorage.getItem("score");
var setLoad=localStorage.getItem("sets");
var legLoad=localStorage.getItem("legs");

var p1Sets=0, p1Legs=0, p1Score=501, p1Average=0, p1TotalScore=0, p1DartsThrows=0, p1180=0, p1170=0, p1140=0, p1100=0, p160=0, p1HighestOut=0, p1LegsWon=0;
var p2Sets=0, p2Legs=0, p2Score=501, p2Average=0, p2TotalScore=0, p2DartsThrows=0, p2180=0, p2170=0, p2140=0, p2100=0, p260=0, p2HighestOut=0, p2LegsWon=0;
var whosThrow = "p1";
var threwFirstSet = "p1";
var threwFirstLeg = "p1";
var threwFirstMatch = "p1";

function setPage()
{
	if(p1Name=localStorage.getItem("player1name"))
	{
		document.getElementById("enterPlayer1Name").innerHTML = p1Name;
		document.getElementById("enterPlayer2Name").innerHTML = p2Name;
		document.getElementById("player1Name").innerHTML = p1Name;
		document.getElementById("player2Name").innerHTML = p2Name;
		document.getElementById("player1Score").innerHTML=scoreLoad;
		document.getElementById("player2Score").innerHTML=scoreLoad;
		p1Score = parseInt(scoreLoad);
		p2Score = parseInt(scoreLoad);
	}
	else
	{
		p1Name="Player1";
		p2Name="Player2";
		scoreLoad=501;
		setLoad=3;
		legLoad=3;
	}
	
	if(scoreLoad == 101)
	{
		document.getElementById("player1finish").innerHTML = getFinish(101);
		document.getElementById("player2finish").innerHTML = getFinish(101);
	}
}

function addNumber(x)
{
	aa = document.getElementById('scoreInput').value + x;
	document.getElementById('scoreInput').value = aa;
}
function removeNumber()
{
	document.getElementById('scoreInput').value = "";
}

function scoreDartsEnter(e) 
	{
		if (e.keyCode == 13) 
		{
			scoreDarts();
		}
	}

function scoreDarts()
{
	var score = document.getElementById('scoreInput').value;
	if (whosThrow == "p1")
		{		
			if (score > 180)
				{
					alert("Can't score more than 180! Try again");
					document.getElementById('scoreInput').value = "";
				}
			else if (score > p1Score)
				{
					var para=document.createElement("p");
					var node=document.createTextNode("Bust");
					para.appendChild(node);

					var element=document.getElementById("player1chalkBoard");
					element.appendChild(para);
					document.getElementById('scoreInput').value = "";
					
					if(score<181)
					{
						if (whosThrow == "p1")
						{
							whosThrow = "p2";
							document.getElementById("player2Throw").style.visibility = "visible";
							document.getElementById("player1Throw").style.visibility = "hidden";
						}
						else
						{
							whosThrow = "p1";
							document.getElementById("player1Throw").style.visibility = "visible";
							document.getElementById("player2Throw").style.visibility = "hidden";
						}
					}
				}
			else if((p1Score-score) == 1)
				{
					var para=document.createElement("p");
					var node=document.createTextNode("Bust");
					para.appendChild(node);

					var element=document.getElementById("player1chalkBoard");
					element.appendChild(para);
					document.getElementById('scoreInput').value = "";
					
					if(score<181)
					{
						if (whosThrow == "p1")
						{
							whosThrow = "p2";
							document.getElementById("player2Throw").style.visibility = "visible";
							document.getElementById("player1Throw").style.visibility = "hidden";
						}
						else
						{
							whosThrow = "p1";
							document.getElementById("player1Throw").style.visibility = "visible";
							document.getElementById("player2Throw").style.visibility = "hidden";
						}
					}
				}
				
			else
				{
					if(p1Score>99)
					{
						p1TotalScore = (parseInt(p1TotalScore) + parseInt(score));
						p1DartsThrows = parseInt(p1DartsThrows) + 1;
						p1Average = p1TotalScore / p1DartsThrows;
						p1Average = Math.round(p1Average * 100) / 100
						document.getElementById("player1average").innerHTML=p1Average;
					}
					
					p1Score = (p1Score-score);
					
					document.getElementById("player1finish").innerHTML = getFinish(p1Score);
					
					var para=document.createElement("p");
					var node=document.createTextNode(score);
					para.appendChild(node);
					var element=document.getElementById("player1chalkBoard");
					element.appendChild(para);
					
					document.getElementById("player1Score").innerHTML=p1Score;
					
					document.getElementById('scoreInput').value = "";
					
					if(score == 180)
						{
							p1180 = p1180+1;
							document.getElementById("player1180").innerHTML = p1180;
						}
					else if (score >= 170)
						{
							p1170 = p1170+1;
							document.getElementById("player1170").innerHTML = p1170;
						}
					else if (score >= 140)
						{
							p1140 = p1140+1;
							document.getElementById("player1140").innerHTML = p1140;
						}
					else if (score >= 100)
						{
							p1100 = p1100+1;
							document.getElementById("player1100").innerHTML = p1100;
						}
					else if (score >= 60)
						{
							p160 = p160+1;
							document.getElementById("player160").innerHTML = p160;
						}
						
						if(score<181)
						{
							if (whosThrow == "p1")
							{
								whosThrow = "p2";
								document.getElementById("player2Throw").style.visibility = "visible";
								document.getElementById("player1Throw").style.visibility = "hidden";
							}
							else
							{
								whosThrow = "p1";
								document.getElementById("player1Throw").style.visibility = "visible";
								document.getElementById("player2Throw").style.visibility = "hidden";
							}
						}
					
					if(p1Score == 0)
						{
							if(score > parseInt(p1HighestOut))
							{
								p1HighestOut = score;
								document.getElementById("player1highOut").innerHTML = p1HighestOut;
							}
							
							p1LegsWon = parseInt(p1LegsWon) + 1;
							document.getElementById("player1totalLegs").innerHTML = p1LegsWon;
							
							p1Legs = parseInt(p1Legs + 1)
							if(p1Legs == legLoad)
							{
								p1Sets = parseInt(p1Sets + 1);
								document.getElementById("player1Sets").innerHTML = "Sets: " + p1Sets;
								p1Legs = 0;
								document.getElementById("player1Legs").innerHTML = "Legs: " + p1Legs;
								p2Legs = 0;
								document.getElementById("player2Legs").innerHTML = "Legs: " + p2Legs;
								
								if(threwFirstSet == "p1")
								{
									threwFirstSet = "p2";
								}
								else
								{
									threwFirstSet = "p1";
								}
								
								if(p1Sets == setLoad)
								{
									resetMatch();
								}
								else
								{
									resetSet();
								}
							}
							else
							{
								document.getElementById("player1Legs").innerHTML = "Legs: " + p1Legs;
								if(threwFirstLeg == "p1")
								{
									threwFirstLeg = "p2";
								}
								else
								{
									threwFirstLeg = "p1";
								}
								resetLeg();
							}
						}
					
				}
		}
	else
		{
			if (score > 180)
				{
					alert("Can't score more than 180! Try again");
					document.getElementById('scoreInput').value = "";
				}
			else if (score > p2Score)
				{
					var para=document.createElement("p");
					var node=document.createTextNode("Bust");
					para.appendChild(node);

					var element=document.getElementById("player2chalkBoard");
					element.appendChild(para);
					document.getElementById('scoreInput').value = "";
					
					if(score<181)
					{
						if (whosThrow == "p1")
						{
							whosThrow = "p2";
							document.getElementById("player2Throw").style.visibility = "visible";
							document.getElementById("player1Throw").style.visibility = "hidden";
						}
						else
						{
							whosThrow = "p1";
							document.getElementById("player1Throw").style.visibility = "visible";
							document.getElementById("player2Throw").style.visibility = "hidden";
						}
					}
				}
			else if((p2Score-score) == 1)
				{
					var para=document.createElement("p");
					var node=document.createTextNode("Bust");
					para.appendChild(node);

					var element=document.getElementById("player2chalkBoard");
					element.appendChild(para);
					document.getElementById('scoreInput').value = "";
					
					if(score<181)
					{
						if (whosThrow == "p1")
						{
							whosThrow = "p2";
							document.getElementById("player2Throw").style.visibility = "visible";
							document.getElementById("player1Throw").style.visibility = "hidden";
						}
						else
						{
							whosThrow = "p1";
							document.getElementById("player1Throw").style.visibility = "visible";
							document.getElementById("player2Throw").style.visibility = "hidden";
						}
					}
				}
				
			else
				{
					if(p2Score>99)
					{
						p2TotalScore = (parseInt(p2TotalScore) + parseInt(score));
						p2DartsThrows = parseInt(p2DartsThrows) + 1;
						p2Average = p2TotalScore / p2DartsThrows;
						p2Average = Math.round(p2Average * 100) / 100
						document.getElementById("player2average").innerHTML=p2Average;
					}
					
					p2Score = (p2Score-score);
					
					document.getElementById("player2finish").innerHTML = getFinish(p2Score);
					
					var para=document.createElement("p");
					var node=document.createTextNode(score);
					para.appendChild(node);
					var element=document.getElementById("player2chalkBoard");
					element.appendChild(para);
					
					document.getElementById("player2Score").innerHTML=p2Score;
					document.getElementById('scoreInput').value = "";
					
					
					if(score == 180)
						{
							p2180 = p2180+1;
							document.getElementById("player2180").innerHTML = p2180;
						}
					else if (score >= 170)
						{
							p2170 = p2170+1;
							document.getElementById("player2170").innerHTML = p2170;
						}
					else if (score >= 140)
						{
							p2140 = p2140+1;
							document.getElementById("player2140").innerHTML = p2140;
						}
					else if (score >= 100)
						{
							p2100 = p2100+1;
							document.getElementById("player2100").innerHTML = p2100;
						}
					else if (score >= 60)
						{
							p260 = p260+1;
							document.getElementById("player260").innerHTML = p260;
						}
						
						if(score<181)
						{
							if (whosThrow == "p1")
							{
								whosThrow = "p2";
								document.getElementById("player2Throw").style.visibility = "visible";
								document.getElementById("player1Throw").style.visibility = "hidden";
							}
							else
							{
								whosThrow = "p1";
								document.getElementById("player1Throw").style.visibility = "visible";
								document.getElementById("player2Throw").style.visibility = "hidden";
							}
						}
						
						if(p2Score == 0)
						{
							if(score > parseInt(p2HighestOut))
							{
								p2HighestOut = score;
								document.getElementById("player2highOut").innerHTML = p2HighestOut;
							}
							
							p2LegsWon = parseInt(p2LegsWon) + 1;
							document.getElementById("player2totalLegs").innerHTML = p2LegsWon;
							
							p2Legs = parseInt(p2Legs + 1)
							if(p2Legs == legLoad)
							{
								p2Sets = parseInt(p2Sets + 1);
								document.getElementById("player2Sets").innerHTML = "Sets: " + p2Sets;
								p1Legs = 0;
								document.getElementById("player1Legs").innerHTML = "Legs: " + p1Legs;
								p2Legs = 0;
								document.getElementById("player2Legs").innerHTML = "Legs: " + p2Legs;
								
								if(threwFirstSet == "p1")
								{
									threwFirstSet = "p2";
								}
								else
								{
									threwFirstSet = "p1";
								}
								
								if(p2Sets == setLoad)
								{
									resetMatch();
								}
								else
								{
									resetSet();
								}
							}
							else
							{
								document.getElementById("player2Legs").innerHTML = "Legs: " + p2Legs;
								if(threwFirstLeg == "p1")
								{
									threwFirstLeg = "p2";
								}
								else
								{
									threwFirstLeg = "p1";
								}
								
								resetLeg();								
							}
						}
				}
		}
}

function resetSet()
{
	whosThrow = threwFirstSet;
	if (whosThrow == "p1")
	{								
		document.getElementById("player1Throw").style.visibility = "visible";
		document.getElementById("player2Throw").style.visibility = "hidden";
	}
	else
	{
		document.getElementById("player2Throw").style.visibility = "visible";
		document.getElementById("player1Throw").style.visibility = "hidden";
	}
	
	p1Score = parseInt(scoreLoad);
	document.getElementById("player1chalkBoard").innerHTML = "<p>Scores</p>";
	document.getElementById("player1Score").innerHTML=p1Score;
	
	p2Score = parseInt(scoreLoad);
	document.getElementById("player2chalkBoard").innerHTML = "<p>Scores</p>";
	document.getElementById("player2Score").innerHTML=p2Score;
	
	if(scoreLoad == 101)
	{
		document.getElementById("player1finish").innerHTML = getFinish(101);
		document.getElementById("player2finish").innerHTML = getFinish(101);
	}
	else
	{
		document.getElementById("player1finish").innerHTML = "No out";
		document.getElementById("player2finish").innerHTML = "No out";
	}
}

function resetLeg()
{
	whosThrow = threwFirstLeg;
	if (whosThrow == "p1")
	{								
		document.getElementById("player1Throw").style.visibility = "visible";
		document.getElementById("player2Throw").style.visibility = "hidden";
	}
	else
	{
		document.getElementById("player2Throw").style.visibility = "visible";
		document.getElementById("player1Throw").style.visibility = "hidden";
	}
	
	p1Score = parseInt(scoreLoad);
	document.getElementById("player1chalkBoard").innerHTML = "<p>Scores</p>";
	document.getElementById("player1Score").innerHTML=p1Score;
	
	p2Score = parseInt(scoreLoad);
	document.getElementById("player2chalkBoard").innerHTML = "<p>Scores</p>";
	document.getElementById("player2Score").innerHTML=p2Score;
	
	if(scoreLoad == 101)
	{
		document.getElementById("player1finish").innerHTML = getFinish(101);
		document.getElementById("player2finish").innerHTML = getFinish(101);
	}
	else
	{
		document.getElementById("player1finish").innerHTML = "No out";
		document.getElementById("player2finish").innerHTML = "No out";
	}
}

function resetMatch()
{
	document.getElementById("topLine").style.display = "none";
	document.getElementById("player1scoreBoard").style.display = "none";
	document.getElementById("player2scoreBoard").style.display = "none";
	document.getElementById("scoreInput").style.display = "none";
	document.getElementById("keypad").style.display = "none";
	document.getElementById("spacer").style.display = "none";
	document.getElementById("startGame").style.display = "block";
	document.getElementById("resetGame").style.display = "block";
	if(p1Sets > p2Sets)
	{
		document.getElementById("result").innerHTML = p1Name + " has won the game " + p1Sets +" - " + p2Sets;
	}
	else
	{
		document.getElementById("result").innerHTML = p2Name + " has won the game " + p2Sets +" - " + p1Sets;
	}
	document.getElementById("result").style.display = "block";
}

function resetAndStartNew()
{
	whosThrow = threwFirstMatch;
	if (whosThrow == "p1")
	{					
		threwFirstMatch = "p2";
		threwFirstSet = "p2";
		threwFirstLeg = "p2";
		whosThrow = "p2";
		document.getElementById("player2Throw").style.visibility = "visible";
		document.getElementById("player1Throw").style.visibility = "hidden";
	}
	else
	{
		threwFirstMatch = "p1";
		threwFirstSet = "p1";
		threwFirstLeg = "p1";
		whosThrow = "p1";
		document.getElementById("player1Throw").style.visibility = "visible";
		document.getElementById("player2Throw").style.visibility = "hidden";
	}

	p1Score = parseInt(scoreLoad);
	document.getElementById("player1chalkBoard").innerHTML = "<p>Scores</p>";
	document.getElementById("player1Score").innerHTML=p1Score;
	
	p2Score = parseInt(scoreLoad);
	document.getElementById("player2chalkBoard").innerHTML = "<p>Scores</p>";
	document.getElementById("player2Score").innerHTML=p2Score;
	
	if(scoreLoad == 101)
	{
		document.getElementById("player1finish").innerHTML = getFinish(101);
		document.getElementById("player2finish").innerHTML = getFinish(101);
	}
	else
	{
		document.getElementById("player1finish").innerHTML = "No out";
		document.getElementById("player2finish").innerHTML = "No out";
	}
	
	p1Sets = 0;
	document.getElementById("player1Sets").innerHTML = "Sets: " + p1Sets;
	p2Sets = 0;
	document.getElementById("player2Sets").innerHTML = "Sets: " + p2Sets;
	p1Legs = 0;
	document.getElementById("player1Legs").innerHTML = "Legs: " + p1Legs;
	p2Legs = 0;
	document.getElementById("player2Legs").innerHTML = "Legs: " + p2Legs;

	document.getElementById("topLine").style.display = "block";
	document.getElementById("player1scoreBoard").style.display = "table-cell";
	document.getElementById("player2scoreBoard").style.display = "table-cell";
	document.getElementById("scoreInput").style.display = "block";
	document.getElementById("keypad").style.display = "block";
	document.getElementById("spacer").style.display = "block";
	document.getElementById("startGame").style.display = "none";
	document.getElementById("resetGame").style.display = "none";
	document.getElementById("result").style.display = "none";
}

function getFinish(score)
{
	var finish="";
	
	if(score == 170)
	{
		finish = "T20, T20, BULL";
	}
	else if(score == 169)
	{
		finish = "No out";
	}
	else if(score == 168)
	{
		finish = "No out";
	}
	else if(score == 167)
	{
		finish = "T20, T19 BULL";
	}
	else if(score == 166)
	{
		finish = "No out";
	}
	else if(score == 165)
	{
		finish = "No out";
	}
	else if(score == 164)
	{
		finish = "T20, T18, BULL";
	}
	else if(score == 163)
	{
		finish = "No out";
	}
	else if(score == 162)
	{
		finish = "No out";
	}
	else if(score == 161)
	{
		finish = "T20, T17, BULL";
	}
	else if(score == 160)
	{
		finish = "T20, T20, D20";
	}
	else if(score == 159)
	{
		finish = "No out";
	}
	else if(score == 158)
	{
		finish = "T20, T20, D19";
	}
	else if(score == 157)
	{
		finish = "T20, T19, D20";
	}
	else if(score == 156)
	{
		finish = "T20, T20, D18";
	}
	else if(score == 155)
	{
		finish = "T20, T15, BULL";
	}
	else if(score == 154)
	{
		finish = "T20, T18, D20";
	}
	else if(score == 153)
	{
		finish = "T20, T19, D18";
	}
	else if(score == 152)
	{
		finish = "T20, T20, D16";
	}
	else if(score == 151)
	{
		finish = "T20, T17, D20";
	}
	else if(score == 150)
	{
		finish = "T20, T18, D18";
	}
	else if(score == 149)
	{
		finish = "T20, T19, D16";
	}
	else if(score == 148)
	{
		finish = "T20, T16, D20";
	}
	else if(score == 147)
	{
		finish = "T20, T17, D18";
	}
	else if(score == 146)
	{
		finish = "T20, T18, D16";
	}
	else if(score == 145)
	{
		finish = "T20, T15, D20";
	}
	else if(score == 144)
	{
		finish = "T20, T20, D12";
	}
	else if(score == 143)
	{
		finish = "T20, T17, D16";
	}
	else if(score == 142)
	{
		finish = "T20, T14, D20";
	}
	else if(score == 141)
	{
		finish = "T20, T15, D18";
	}
	else if(score == 140)
	{
		finish = "T20, T16, D16";
	}
	else if(score == 139)
	{
		finish = "T20, T13, D20";
	}
	else if(score == 138)
	{
		finish = "T20, T14, D18";
	}
	else if(score == 137)
	{
		finish = "T17, T18, D16";
	}
	else if(score == 136)
	{
		finish = "T20, T20, D8";
	}
	else if(score == 135)
	{
		finish = "T20, T15, D15";
	}
	else if(score == 134)
	{
		finish = "T20, T14, D16";
	}
	else if(score == 133)
	{
		finish = "T20, T19, D8";
	}
	else if(score == 132)
	{
		finish = "T20, T20, D6";
	}
	else if(score == 131)
	{
		finish = "T20, T13, D16";
	}
	else if(score == 130)
	{
		finish = "T20, T18, D8";
	}
	else if(score == 129)
	{
		finish = "T19, T20, D6";
	}
	else if(score == 128)
	{
		finish = "T18, T14, D16";
	}
	else if(score == 127)
	{
		finish = "T19, T18, D8";
	}
	else if(score == 126)
	{
		finish = "T19, T19, D6";
	}
	else if(score == 125)
	{
		finish = "T20, T19, D4";
	}
	else if(score == 124)
	{
		finish = "T20, D16, D16";
	}
	else if(score == 123)
	{
		finish = "T19, T16, D9";
	}
	else if(score == 122)
	{
		finish = "T18, T20, D4";
	}
	else if(score == 121)
	{
		finish = "T20, T15, D8";
	}
	else if(score == 120)
	{
		finish = "T20, 20, D20";
	}
	else if(score == 119)
	{
		finish = "T19, T10, D16";
	}
	else if(score == 118)
	{
		finish = "T20, 18, D20";
	}
	else if(score == 117)
	{
		finish = "T20, 17, D20";
	}
	else if(score == 116)
	{
		finish = "T20, 16, D20";
	}
	else if(score == 115)
	{
		finish = "T20, 15, D20";
	}
	else if(score == 114)
	{
		finish = "T20, 14, D20";
	}
	else if(score == 113)
	{
		finish = "T20, 13, D20";
	}
	else if(score == 112)
	{
		finish = "T20, 20, D16";
	}
	else if(score == 111)
	{
		finish = "T20, 19, D16";
	}
	else if(score == 110)
	{
		finish = "T20, 18, D16";
	}
	else if(score == 109)
	{
		finish = "T20, 17, D16";
	}
	else if(score == 108)
	{
		finish = "T20, 16, D16";
	}
	else if(score == 107)
	{
		finish = "T19, 18, D16";
	}
	else if(score == 106)
	{
		finish = "T20, 14, D16";
	}
	else if(score == 105)
	{
		finish = "T20, 13, D16";
	}
	else if(score == 104)
	{
		finish = "T18, 18, D16";
	}
	else if(score == 103)
	{
		finish = "T20, 11, D16";
	}
	else if(score == 102)
	{
		finish = "T20, 10, D16";
	}
	else if(score == 101)
	{
		finish = "T17 18, D16";
	}
	else if(score == 100)
	{
		finish = "T20, D20";
	}
	else if(score == 99)
	{
		finish = "T19, 10, D16";
	}
	else if(score == 98)
	{
		finish = "T20, D19";
	}
	else if(score == 97)
	{
		finish = "T19, D20";
	}
	else if(score == 96)
	{
		finish = "T20, D18";
	}
	else if(score == 95)
	{
		finish = "T15, 18, D16";
	}
	else if(score == 94)
	{
		finish = "T18, D20";
	}
	else if(score == 93)
	{
		finish = "T19, D18";
	}
	else if(score == 92)
	{
		finish = "T20, D16";
	}
	else if(score == 91)
	{
		finish = "T17, D20";
	}
	else if(score == 90)
	{
		finish = "T18, D18";
	}
	else if(score == 89)
	{
		finish = "T19, D16";
	}
	else if(score == 88)
	{
		finish = "T16, D20";
	}
	else if(score == 87)
	{
		finish = "T17, D18";
	}
	else if(score == 86)
	{
		finish = "T18, D16";
	}
	else if(score == 85)
	{
		finish = "T15, D20";
	}
	else if(score == 84)
	{
		finish = "T20, D12";
	}
	else if(score == 83)
	{
		finish = "T17, D16";
	}
	else if(score == 82)
	{
		finish = "T14, D20";
	}
	else if(score == 81)
	{
		finish = "T15, D18";
	}
	else if(score == 80)
	{
		finish = "T16, D16";
	}
	else if(score == 79)
	{
		finish = "T13, D20";
	}
	else if(score == 78)
	{
		finish = "T14, D18";
	}
	else if(score == 77)
	{
		finish = "T15, D16";
	}
	else if(score == 76)
	{
		finish = "T20, D8";
	}
	else if(score == 75)
	{
		finish = "T15, D15";
	}
	else if(score == 74)
	{
		finish = "T14, D16";
	}
	else if(score == 73)
	{
		finish = "T19, D8";
	}
	else if(score == 72)
	{
		finish = "T20, D6";
	}
	else if(score == 71)
	{
		finish = "T13, D16";
	}
	else if(score == 70)
	{
		finish = "T18, D8";
	}
	else if(score == 69)
	{
		finish = "T19, D6";
	}
	else if(score == 68)
	{
		finish = "T16, D10";
	}
	else if(score == 67)
	{
		finish = "T17, D8";
	}
	else if(score == 66)
	{
		finish = "T10, D18";
	}
	else if(score == 65)
	{
		finish = "T15, D10";
	}
	else if(score == 64)
	{
		finish = "T16, D8";
	}
	else if(score == 63)
	{
		finish = "T13, D12";
	}
	else if(score == 62)
	{
		finish = "T10, D16";
	}
	else if(score == 61)
	{
		finish = "T15, D8";
	}
	else if(score == 60)
	{
		finish = "20, D20";
	}
	else if(score == 59)
	{
		finish = "19, D20";
	}
	else if(score == 58)
	{
		finish = "18, D20";
	}
	else if(score == 57)
	{
		finish = "17, D20";
	}
	else if(score == 56)
	{
		finish = "16, D20";
	}
	else if(score == 55)
	{
		finish = "15, D20";
	}
	else if(score == 54)
	{
		finish = "14, D20";
	}
	else if(score == 53)
	{
		finish = "13, D20";
	}
	else if(score == 52)
	{
		finish = "20, D16";
	}
	else if(score == 51)
	{
		finish = "19, D16";
	}
	else if(score == 50)
	{
		finish = "18, D16";
	}
	else if(score == 49)
	{
		finish = "17, D16";
	}
	else if(score == 48)
	{
		finish = "16, D16";
	}
	else if(score == 47)
	{
		finish = "15, D16";
	}
	else if(score == 46)
	{
		finish = "14, D16";
	}
	else if(score == 45)
	{
		finish = "13, D16";
	}
	else if(score == 44)
	{
		finish = "12, D16";
	}
	else if(score == 43)
	{
		finish = "11, D16";
	}
	else if(score == 42)
	{
		finish = "10, D16";
	}
	else if(score == 41)
	{
		finish = "9, D16";
	}
	else if(score == 40)
	{
		finish = "D20";
	}
	else if(score == 39)
	{
		finish = "7, D16";
	}
	else if(score == 38)
	{
		finish = "D19";
	}
	else if(score == 37)
	{
		finish = "5, D16";
	}
	else if(score == 36)
	{
		finish = "D18";
	}
	else if(score == 35)
	{
		finish = "3, D16";
	}
	else if(score == 34)
	{
		finish = "D17";
	}
	else if(score == 33)
	{
		finish = "1, D16";
	}
	else if(score == 32)
	{
		finish = "D16";
	}
	else if(score == 31)
	{
		finish = "7, D12";
	}
	else if(score == 30)
	{
		finish = "D15";
	}
	else if(score == 29)
	{
		finish = "17, D6";
	}
	else if(score == 28)
	{
		finish = "D14";
	}
	else if(score == 27)
	{
		finish = "19, D4";
	}
	else if(score == 26)
	{
		finish = "D13";
	}
	else if(score == 25)
	{
		finish = "9, D8";
	}
	else if(score == 24)
	{
		finish = "D12";
	}
	else if(score == 23)
	{
		finish = "7, D8";
	}
	else if(score == 22)
	{
		finish = "D11";
	}
	else if(score == 21)
	{
		finish = "5, D8";
	}
	else if(score == 20)
	{
		finish = "D10";
	}
	else if(score == 19)
	{
		finish = "3, D8";
	}
	else if(score == 18)
	{
		finish = "D9";
	}
	else if(score == 17)
	{
		finish = "1, D8";
	}
	else if(score == 16)
	{
		finish = "D8";
	}
	else if(score == 15)
	{
		finish = "7, D4";
	}
	else if(score == 14)
	{
		finish = "D7";
	}
	else if(score == 13)
	{
		finish = "5, D4";
	}
	else if(score == 12)
	{
		finish = "D6";
	}
	else if(score == 11)
	{
		finish = "3, D4";
	}
	else if(score == 10)
	{
		finish = "D5";
	}
	else if(score == 9)
	{
		finish = "1, D4";
	}
	else if(score == 8)
	{
		finish = "D4";
	}
	else if(score == 7)
	{
		finish = "3, D2";
	}
	else if(score == 6)
	{
		finish = "D3";
	}
	else if(score == 5)
	{
		finish = "1, D2";
	}
	else if(score == 4)
	{
		finish = "D2";
	}
	else if(score == 3)
	{
		finish = "1, D1";
	}
	else if(score == 2)
	{
		finish = "D1";
	}
	else
	{
		finish = "No out";
	}
	
	return finish;
}

window.onload = setPage;