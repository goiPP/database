exports.search=function(req,res){
  var by=req.body.by;
  var select=req.body.select;
  var type=req.body.type;
  var order=req.body.order;
  console.log('Search key: '+by);
  console.log('Type choice: '+type);
  console.log('Search choice: '+select);
  console.log('Order choice: '+order);
};
exports.home=function(req,res){
  res.render('layout');
};
exports.regis=function(req,res){
  res.render('regis');
};
exports.personal=function(req,res){
  res.render('personal');
};
exports.act=function(req,res){
  res.render('act');
};
exports.behave=function(req,res){
  res.render('behave');
};
exports.miss=function(req,res){
  res.render('miss');
};
