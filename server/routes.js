var when = require("when");

module.exports = {
  "/v1/functions/clive": {
		GET: function(req, res) {
			this.resSuccess(req, res, {
				clive: "is awesome"
			})
		}
	},
	"/v1/classes/person/objects" : {
		POST: {
			_pre: function(req, res) {
				req.bobjekt = req.bobjekt.set("age", 44)
				// req.bobjekt = req.bobjekt.setReferenceWhere("address", {
				// 	"city": "Mumbai"
				// })
				console.log("hello ")
				return when.resolve()
			},
			_post: function(req, res) {			
				// // req.bobjekt['new_field'] = "new_value"
				return when.resolve()
			}
		}
	}
}	
