const configValues = require('./config');

module.exports = {

	getDbConnectionString: () => {
		return `mongodb+srv://${configValues.uname}:${configValues.password}@cluster0.xcqxo.mongodb.net/nodetodo?retryWrites=true&w=majority`;
	}

}