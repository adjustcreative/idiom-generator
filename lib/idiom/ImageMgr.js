
class ImageMgr{
	constructor(){
		this.flickr = new Flickr({ api_key:"e912cb207f820af2c35e53abbf31edfc" });
	}

	loadImageFromIdiom( idiom, callback ){
		var query = idiom.replace(" ", "+");
		this.flickr.search({
			text: query,
			content_type: 1
		}, function(error, response){
			if(error) return console.error(error);
			// if not an error, get to work..
			var photos = response.photos.photo; 
			var length = photos.length-1;
			var photo = photos[Math.round(Math.random()*length)];
      var imagePath = "https://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
      var flickrImageURL = "https://www.flickr.com/photos/" + photo.owner + "/" + photo.id;
      callback.call(this, imagePath);
		});
	}
}

module.exports = ImageMgr;