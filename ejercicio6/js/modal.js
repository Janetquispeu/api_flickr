
var modal_ejercicio=(function(){
	var st = {
		divText   : ".div_text",
		contenedor: "#contenedor",
		contInput : "#contInput",
		input     : ".input",
		contDiv		: ".cont_div",
		tpl       : "#tplInput",
		url 			: "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1",
		urlUpload    : "https://up.flickr.com/services/upload/"
	}
	var dom = {};
	var global = {};
	var catchDom = function(){
		dom.divText    = $(st.divText);
		dom.contenedor = $(st.contenedor);
		dom.contDiv 	 = $(st.contDiv);
		dom.tplInput 	 = $(st.tpl);
	};

	var afterCatchDom = function(){
		global.compiled = _.template(dom.tplInput.html());

		var bannerImage = document.getElementById('bannerImg');
		var result = document.getElementById('res');
		var img = document.getElementById('tableBanner');

		// Call fetch to get image from localStorage.
		// So each time you reload the page, the image in localstorage will be 
		// put on tableBanner
		fn.fetchimage(img);
	}

	var suscribeEvents=function(){
		dom.divText.on("click",events.mostrar);
		dom.contenedor.on("click", "#btn", events.retornar);
		$("#small").on("click", events.showImage);
		$('#button').click(events.loadImage);
		$("#bannerImg").change(events.upload);
	};

	var events = {
		mostrar:function(){
			var $this        = $(this);
			var valorDiv     = $this.text();
			var htmlCompiled = global.compiled({
				mivariable: valorDiv
			});

			$(htmlCompiled).appendTo($this.parent());
			$this.hide();
		},
		retornar:function(){
			var $this=$(this);
			var valInput   = $($this.siblings(st.input)).val();
			var $contInput = $this.parent();
			var $divText   = $contInput.siblings(st.divText);
			$divText.text(valInput);
			$divText.show();
			$contInput.remove();
			
		},
		showImage () {
			selected_size=240;  
		},
		loadImage () {
			var selected_size=240;  
			$.getJSON(st.url,function(json){  
				$.each(json.photos.photo,function(i,myresult){  
					var apiurl_size = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&photo_id="+myresult.id+"&format=json&nojsoncallback=1";  
						$.getJSON(apiurl_size,function(size){  
							$.each(size.sizes.size,function(i,myresult_size){  
							if(myresult_size.width==selected_size){  
								$("#results").append('<p><a href="'+myresult_size.url+'" target="_blank"><img src="'+myresult_size.source+'"/></a></p>');  
							}  
						});
					});  
				});  
			});  
		},
		upload (event) {
			var img = document.getElementById('tableBanner');
			var file = this.files[0];
			// Basic type checking.
			if (file.type.indexOf('image') < 0) {
					res.innerHTML = 'invalid type';
					return;
			}
	
			// Create a file reader
			var fReader = new FileReader();
	
			// Add complete behavior
			fReader.onload = function() {
					// Show the uploaded image to banner.
					img.src = fReader.result;
	
					// Save it when data complete.
					// Use your function will ensure the format is png.
					localStorage.setItem("imgData", fn.getBase64Image(img));
					// You can just use as its already a string.
					// localStorage.setItem("imgData", fReader.result);
			};
	
			// Read the file to DataURL format.
			fReader.readAsDataURL(file);
			
		}
	}
	fn = {
		getBase64Image(img) {
			var canvas = document.createElement("canvas");
			canvas.width = img.width;
			canvas.height = img.height;
	
			var ctx = canvas.getContext("2d");
			ctx.drawImage(img, 0, 0);
	
			var dataURL = canvas.toDataURL("image/png");
	
			return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
		},
		fetchimage (img) {
			var dataImage = localStorage.getItem('imgData');
			img.src = "data:image/png;base64," + dataImage;
			console.log(dataImage);
			// If you don't process the url with getBase64Image, you can just use
			// img.src = dataImage;
		}
	};
	
	var initialize=function(){
		catchDom();
		afterCatchDom();
		suscribeEvents();
	};

	return{
		init:initialize
	}

})();

modal_ejercicio.init();
