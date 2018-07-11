
var path = require('path');
var express = require('express');
var app = express();
//============================================ App Settings ============================================
app.set("view options", {layout: false});
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));
var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // to support URL-encoded bodies
// =====================================================================================================

// app.use('/images', express.static('images'));
app.use('/styles/icomoonFonts', express.static(path.join(__dirname,'/styles/fonts/')));
app.use('/styles/', express.static(path.join(__dirname,'/styles/')));
app.use('/pages', express.static(path.join(__dirname,'/views/pages')));
app.use('/scripts/', express.static(path.join(__dirname,'/scripts/')));
// app.use('/fonts', express.static(path.join(__dirname,'/public/fonts/')));
// app.use('/directives/', express.static(path.join(__dirname,'/scripts/directives/')));
// app.use('/public', express.static(path.join(__dirname,'/public/')));

app.get('/', (req, res)=>{
  res.render('index.html');
});

app.listen(process.env.PORT || 5000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});