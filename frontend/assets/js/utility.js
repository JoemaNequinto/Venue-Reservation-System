(function(root) {

	const utility = {

		responseHandler : function(response, callback) {
			
			const toastDuration = 3000;

			if (typeof response === 'string') {

				if (callback) {

				}

				return Materialiaze.toast(response, '', toastDuration)
			}

			else if (typeof response === 'object') {
				
			}

		}

	};



	//expose utility object
	root.utility = utility;

})(this);