//console.log("hoi")


var buttonrood=document.querySelector("form ul li:nth-child(1)");
//console.log("buttonrood: " + buttonrood);

var buttonblue=document.querySelector("form ul li:nth-child(2)");


var buttongreen=document.querySelector("form ul li:nth-child(3)");


var plaatjerood = Array.prototype.slice.call(document.querySelectorAll(".rood"));
//console.log("test3"+plaatje)

var plaatjeblue = Array.prototype.slice.call(document.querySelectorAll(".blue"));

var plaatjegreen = Array.prototype.slice.call(document.querySelectorAll(".green"));


var imagesToShow = [];


function hideImg(imgArray) {
	console.log(imgArray);
	imgArray.forEach(function(item){
		item.classList.add("hide")
	});
}
hideImg(plaatjegreen.concat(plaatjerood, plaatjeblue));
function showImg(imgArray) {
	console.log(imgArray);
	imgArray.forEach(function(item){
		item.classList.remove("hide")
	});
}
function removeFromImgArray(arrayToRemove) {
	imagesToShow = imagesToShow.filter( function( el ) {
		return arrayToRemove.indexOf( el ) < 0;
	} );
}
function putInImgArray(arrayToPutIn){
	arrayToPutIn.forEach(function(item){
		if (imagesToShow.indexOf(item) === -1){
			console.log("zit er nog niet in: " , item);
			imagesToShow.push(item);
		}
	});
}



buttonrood.addEventListener("click",function(){
		if (buttonrood.classList.contains("colorselected")){
			buttonrood.classList.remove("colorselected");
			removeFromImgArray(plaatjerood);
			hideImg(plaatjerood);
		} else {
			putInImgArray(plaatjerood);
			buttonrood.classList.add("colorselected");
			showImg(imagesToShow);
		}
		console.log(imagesToShow);
	
});

buttonblue.addEventListener("click",function(){
	if (buttonblue.classList.contains("colorselected")){
			buttonblue.classList.remove("colorselected");
			removeFromImgArray(plaatjeblue);
			hideImg(plaatjeblue);
		} else {
			putInImgArray(plaatjeblue);
			buttonblue.classList.add("colorselected");
			showImg(imagesToShow);
		}
		console.log(imagesToShow);
});

buttongreen.addEventListener("click",function(){
	if (buttongreen.classList.contains("colorselected")){
			buttongreen.classList.remove("colorselected");
			removeFromImgArray(plaatjegreen);
			hideImg(plaatjegreen);
		} else {
			putInImgArray(plaatjegreen);
			buttongreen.classList.add("colorselected");
			showImg(imagesToShow);
		}
		console.log(imagesToShow);
});


