const express=require('express');
let src=express();
const PORT=process.env.PORT || 3000;
src.use(express.static('public'));
src.listen(PORT,function(){
    console.log("App is up on port 3000" + PORT);
});