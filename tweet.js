function main(param) {
	
	var request = require('request');

	var oauth  ={
		consumer_key:'',
		consumer_secret:'',
		token:'',
		token_secret:''
	};
	
	var tweet = param.text || 'OpenWhisk Action - Change detected in Cloudant';
	var url = 'https://api.twitter.com/1.1/statuses/update.json?status='+ tweet;

	var result;

	//send tweet - post twitter status API v1.1.
	request.post({
		url: url, 
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		oauth: oauth
	}, function (error, response, body) {
		if (!error && response.statusCode== 200) {
			result = response ; 
		}
		else {
			result= error;
		}
		whisk.done({msg:response});
	});	
	return whisk.async();
}
