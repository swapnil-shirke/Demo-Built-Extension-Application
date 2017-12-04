// var when = require("when");

module.exports = {
  "/v1/functions/clive": {
		GET: function(req, res){
			this.resSuccess(req, res, {
				clive: "is awesome"
			})
		}
	}
}	