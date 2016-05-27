let express = require('express');

let router = express.Router();

// on est dans "/send" donc avec "/" on traite les infos de "/send"
router.post('/', function(req,res){
   console.log(req.body);
   res.send('ok');
});

module.exports=router;