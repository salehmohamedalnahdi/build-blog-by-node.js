/*npm run serve
"serve": "nodemon server.js"*/
/*const http=require('http')
const server= http.createServer((req,res)=>{
    console.log("requiest made")
})
server.listen(3000,'localhost',()=>{
    console.log("im listining from 3000 port")
})*/
//parameter 'localhost' isnot needed or not requiered
/*server.listen(3000,()=>{
    console.log("im listining from 3000 port")
})*/

/*const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{
  console.log(req.url,req.method)
  //res.setHeader('content-type','text/html')

  //send html page
  fs.readFile('./views/css.html',(err,data)=>{
    if(err){console.log(err)}
    else{
        //res.write(data)
        //res.end()
        res.end(data)
    }
  })
})
server.listen(3000,()=>{console.log("im listin on 3000 port")})*/

const http=require('http')
const fs=require('fs')
const _=require('lodash')

const server=http.createServer((req,res)=>{
    // lodash
    /*const random=_.random(0,20);
    console.log(random)
    const greet=_.once(()=>{console.log('hellow from greet function')})
    greet();greet();*/

    // show html page
    let path='./views/'
    switch(req.url){
        case '/': path+='css.html';res.statusCode=200;break;
        case '/about' : path+='about.html';res.statusCode=200;break;
        // redirect
        case '/about-me' : res.statusCode=301;res.setHeader('Location','/about');res.end();break;
        default : path+='404.html';res.statusCode=404;break;
    }

  //send html page
  fs.readFile(path,(err,data)=>{
    if(err){console.log(err)}
    else{res.end(data) }
  })
})
server.listen(3000,()=>{console.log("i'm listning on 3000 port")})