// var when = require("when");
module.exports = {
  "/v1/functions/test": {
		GET: function(req, res){
			this.resSuccess(req, res, {
				clive: "is awesome"
			})
		}
	}
}