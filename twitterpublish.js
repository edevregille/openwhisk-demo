var request = require('request');

function main(params) {
	var oauth  ={
		consumer_key:'pKMBwaUsbBRm56mj7a0AJgmXa',
		consumer_secret:'oBQGOeORQDxmt7rrvDnEcGxyMEl0IH2sni2M8bpiZ73KBat0e5',
		token:'3091244997-F7OYkY633s051QSmG2oQZatxIu3NXWqwKUVajrl',
		token_secret:'JNc1DmChkBFedr5WEc0BNCjom4fntwjTsXmqXCScu9uyU'
	};
	var tweet = params.twit || 'Hello World';
	var url = 'https://api.twitter.com/1.1/statuses/update.json?status='+ tweet;

	var result;
	request.post({
		url: url, 
		oauth: oauth
	}, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			result = response ; 
		}
		else {
			result= error;
		}
		whisk.done({msg:result});
	});	
	return whisk.async();
}
