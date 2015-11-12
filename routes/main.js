exports.land = function (req, res){
        res.render('home');
};
exports.captureEmail = function (req, res){
    req.getConnection(function(err, connection){
         if (err) return next(err);

         var input = JSON.parse(JSON.stringify(req.body));

         var data = {
             email : input.email
         };

         if(data.email.trim() === ""){
             res.render( 'home', {
                 msg : "Field cannot be blank"
             });
             return;
         }
         connection.query('insert into users set ?', data, function(err, results) {
             if (err) return next(err);

             res.render('home', {msg:"Successfully signed up"});
         });
   });

};
