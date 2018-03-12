

window.onload = function(){
	document.getElementById("root").classList.add("scroll-lock");

	setTimeout(function (){
    	document.getElementById("root").classList.remove("scroll-lock");
  }, 2600)
};


window.onload = function(){
	document.getElementById("contents").classList.add("contents-hide");

	setTimeout(function (){
    	document.getElementById("contents").classList.remove("contents-hide");
  }, 2600)
};
