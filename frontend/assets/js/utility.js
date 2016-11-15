
(function(root){
    'use strict';

    const utility = {

        /*
            Handles error in the app.
            @param {string | object} error
        
        */
        
        errorHandler :  function(err){

            /*
                
                Check if err is an object or string.
                if it is a string, toast right away

            */
            return Materialize.toast(err, 2000);
            

                // if(_.isString(err)){
                //     return Materialize.toast(err, 3000);
                // }
                
                // if(_.isObject(err)){
                //     return Materialize.toast(err.context, 3000);
                // }
                
                // return console.error("Invalid Error Response format");    

            

        }

    }

    root.utility = utility;

})(this);