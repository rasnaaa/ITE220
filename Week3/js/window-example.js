var myWindow = {
	screenX: window.screenX,
	screenY: window.screenY,
	location: window.location.pathname,
	screenH: window.screen.width,
	screenW: window.screen.height,

	render: function() {
		var ele = document.getElementById("location");
		ele.value = this.location;
		ele = document.getElementById("sx");
		ele.value = this.screenX;
		ele = document.getElementById("sy");
		ele.value = this.screenY ;
		ele = document.getElementById("sh");
		ele.value = this.screenH ;
		ele = document.getElementById("sw");
		ele.value = this.screenW ;
	}
};


myWindow.render();