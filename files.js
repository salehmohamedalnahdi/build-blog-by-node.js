const fs=require("fs");

//read files
/*fs.readFile('./docs/blog1.txt',(err,data)=>{
    if(err){console.log(err);}
    console.log(data);
    console.log(data.toString())
})*/

// writefile
/*fs.writeFile('./docs/blog1.txt',"this world is writtin ",(err)=>
{console.log("writting done")
})*/
 
//mkdir
/*fs.mkdir('./assets',(err)=>
{
    if(err){console.log(err)}
    console.log("folder created");
})*/
/*if(!fs.existsSync('./assets')){
 fs.mkdir('./assets',(err)=>{
    if(err){console.log(err)}
    console.log("folder created");
  })}
else{fs.rmdir('./assets',(err)=>{
    if(err){console.log(err);}
    console.log('folder was deleted')
}
)}*/

//delete file
/*if(fs.existsSync('./docs/d.txt')){
    fs.unlink('./docs/d.txt',(err)=>{
        if(err){console.log(err)};
        console.log("file is deleted sccesfully")
    })
}else{console.log('file is not exsisted')}*/