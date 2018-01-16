const $ = require("jquery");
// var Flickr = require("flickr-search");

class ImageMgr{
	constructor(){
		this.flickr = new Flickr({ api_key:"e912cb207f820af2c35e53abbf31edfc" });
	}

	loadImageFromIdiom( idiom, callback ){
		var query = idiom.replace(" ", "+");
		this.flickr.search({
			text: query
		}, function(error, response){
			if(error) return console.error(error);

			var photos = response.photos.photo; 
			var length = photos.length;

			var photo = photos[Math.round(Math.random()*length)];

      var imagePath = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
      var flickrImageURL = "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id;


      callback.call(this, imagePath);

      // imagePath
      // $("body").css({
      // 	background: 'url('+imagePath+') no-repeat center center;'
      // })

      // console.log(imagePath)

		});
	}
}

module.exports = ImageMgr;