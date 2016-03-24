var request = require('request');

function main(params) {
	var oauth  ={
		consumer_key:'',
		consumer_secret:'',
		token:'',
		token_secret:''
	};
	var tweet = params.twit || 'OpenWhisk Action - Change detected in Cloudant';
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
