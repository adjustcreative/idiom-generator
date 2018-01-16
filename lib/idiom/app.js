global.fetch = require('node-fetch');
const $ = require("jquery");
const IdiomList = require('./IdiomList.js');
const ColorUtil = require('./ColorUtil.js');
const ImageMgr = require('./ImageMgr.js');



class Application{
	constructor(){
		var self = this;
		this.idiomList = new IdiomList();
		this.colorUtil = new ColorUtil();
		this.imageMgr = new ImageMgr();
		this.render();

		$("#refresh").on("click", () => {
			this.render();
		});
	}

	render(){
		var idiom = this.idiomList.getRandom();

		// set the idiom text..
		$("#idiom-phrase").empty().append(idiom);

		var pastelOfIdiom = this.colorUtil.pastelHex(idiom);

		// set the colors.
		$("#background-color").css({
			backgroundColor: pastelOfIdiom
		})

		$("#idiom").css({
			margin: 20,
			backgroundColor: this.colorUtil.shadeHex(pastelOfIdiom, 0.5),
			color: pastelOfIdiom,
		});

		$("#adjust").css({
			color: this.colorUtil.shadeHex(pastelOfIdiom, 0.5)
		});


		this.imageMgr.loadImageFromIdiom(idiom, (imagePath) => {
			console.log(imagePath);
			$("body").css({
				"background-image":  "url("+imagePath+")"
			})
		});

	}
}

let app = new Application();