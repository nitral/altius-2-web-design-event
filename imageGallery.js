/* Submission for Web-D Event in Altius - 2 by Edu-Techs
Name  - Nilay Binjola | Altius ID - A2ET1113 */
/* JS for image Gallery */

var currentImage = 1;

function modifyGalleryArrow(arrowID)
{
	document.getElementById("LeftArrow").src = "./images/galleryLeftArrowHollow.png";
	document.getElementById("RightArrow").src = "./images/galleryRightArrowHollow.png";
	
	if(arrowID == 0)
	{
		;
	}
	else
	{
		var imageSource = "./images/gallery" + arrowID + "Solid.png";
		document.getElementById(arrowID).src = imageSource;
	}
}

function changeImage(change)
{
	currentImage = currentImage + change;
	
	if(currentImage == 0)
	{
		currentImage = 5;
	}
	else if(currentImage == 6)
	{
		currentImage = 1;
	}
	
	var imageSource = "./images/image" + currentImage + ".jpg";
	document.getElementById("gallery").src = imageSource;
}
/* Submission for Web-D Event in Altius - 2 by Edu-Techs
Name  - Nilay Binjola | Altius ID - A2ET1113 */