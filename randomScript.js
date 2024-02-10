//--select random--------------*//
var url = [
	"./body/A Prayer.html",
	"./body/Advice To A Son.html",
	"./body/Be The Best Of Whatever You Are.html",
	"./body/bodyRight - image.html",	//------*//
	"./body/bodyRight.html",		//------*//
	"./body/Courage.html",
	"./body/Deep-sea Soundings.html",
	"./body/Desiderata.html",
	"./body/Do Not Go Gentle Into That Good Night.html",
	"./body/Faith.html",
	"./body/Fire and Ice.html",
	"./body/Have You Earned Your Tomorrow.html",
	"./body/Hello, Dracula.html",
	"./body/How Do I Love Thee.html",
	"./body/I Am the Only Being Whose Doom.html",
	"./body/I Do Not Love You Except Because I Love You.html",
	"./body/I Love You.html",
	"./body/If God Says Yes.html",
	"./body/If I Can Stop One Heart From Breaking.html",
	"./body/If I Could Tell You.html",
	"./body/If.html",
	"./body/Immortality.html",
	"./body/Into the Fray.html",
	"./body/Invictus.html",
	"./body/Keep Going.html",
	"./body/Later Today.html", 
	"./body/Love's Language.html",
	"./body/Mad Girl's Love Song.html",
	"./body/My Creed.html",
	"./body/Myself.html",
	"./body/Not.html",
	"./body/Pain Ends.html",
	"./body/Remember.html",
	"./body/See It Through.html",
	"./body/See What I See.html",
	"./body/She Walks in Beauty.html",
	"./body/Sonnet 18 Shall I compare thee to a summer’s day.html",
	"./body/Sonnet 116 Let Me Not To The Marriage of True Minds.html",
	"./body/Sonnet VII.html",
	"./body/Still I Rise.html",
	"./body/Stopping by Woods on a Snowy Evening.html",
	"./body/The Invitation.html",
	"./body/The Journey.html",
	"./body/The Night is Darkening Round Me.html",
	"./body/The Road Not Taken.html",
	"./body/The Summer Girl.html",
	"./body/The True Meaning Of Life.html",
	"./body/The Visitor.html",
	"./body/Time Does Not Bring Relief; You All Have Lied.html",
	"./body/To A Little Girl.html",
	];
var myIframe = document.getElementById("bodyRight");
function displayRandomFile() 
	{
		var randomSelectedUrl = url[Math.floor(Math.random() * url.length)];
		myIframe.src = randomSelectedUrl;
	}
displayRandomFile();
setInterval(displayRandomFile, 120000);
//*--------2 minutes 120 seconds---*//
//--END select random--------------*//