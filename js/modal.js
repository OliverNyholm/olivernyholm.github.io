// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption

var images = document.getElementsByClassName("img-responsive")
var modalImg = document.getElementById("popupImage");
var captionText = document.getElementById("caption");

for(var i=0; i<images.length; i++) {
	if(images[i].id == "img-popup")
	{
		images[i].onclick = onImageClick;
	}
}

function onImageClick()
{
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

modal.onclick = function()
{
	modal.style.display = "none";
}