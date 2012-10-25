/* Submission for Web-D Event in Altius - 2 by Edu-Techs
Name  - Nilay Binjola | Altius ID - A2ET1113 */
/* JS for Altius Project */

var activePageID = "";

function modifyLinkImage(linkID)
{
	document.getElementById("navGlowBarHome").src = "./images/glowBarWhite.png";
	document.getElementById("navGlowBar2").src = "./images/glowBarWhite.png";
	document.getElementById("navGlowBar3").src = "./images/glowBarWhite.png";
	document.getElementById("navGlowBar4").src = "./images/glowBarWhite.png";
	document.getElementById("navGlowBarHome").style.boxShadow = "0 0 5px #ffffff"
	document.getElementById("navGlowBar2").style.boxShadow = "0 0 5px #ffffff";
	document.getElementById("navGlowBar3").style.boxShadow = "0 0 5px #ffffff";
	document.getElementById("navGlowBar4").style.boxShadow = "0 0 5px #ffffff";
	
	if(linkID == 0)
	{
		var imageSource = "./images/linkImage" + activePageID + ".jpg";
		document.getElementById("navBarLinkImage").src = imageSource;
		var glowBarID = "navGlowBar" + activePageID;
		document.getElementById(glowBarID).src = "./images/glowBarRed.png";
		document.getElementById(glowBarID).style.boxShadow = "0 0 5px #FF0000";
	}
	else
	{
		var imageSource = "./images/linkImage" + linkID + ".jpg";
		document.getElementById("navBarLinkImage").src = imageSource;
		var glowBarID = "navGlowBar" + activePageID;
		document.getElementById(glowBarID).src = "./images/glowBarRed.png";
		document.getElementById(glowBarID).style.boxShadow = "0 0 5px #FF0000";
		var glowBarID = "navGlowBar" + linkID;
		document.getElementById(glowBarID).src = "./images/glowBarBlue.png";
		document.getElementById(glowBarID).style.boxShadow = "0 0 5px #00A2E8";

	}
}

function activePage(pID)
{
	activePageID = pID;
	modifyLinkImage(0);
}
/* Submission for Web-D Event in Altius - 2 by Edu-Techs
Name  - Nilay Binjola | Altius ID - A2ET1113 */