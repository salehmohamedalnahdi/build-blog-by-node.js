const fs=require('fs')
const read=fs.createReadStream("./docs/blog2.txt",{ encoding: "utf8"})
const w=fs.createWriteStream("./docs/blog3.txt")

/*read.on("data",(chunk)=>{
    console.log("---new chunck---");
    console.log(chunk);
    w.write("\n ---new chunck--- \n");
    w.write(chunk);
})*/

//piping
//read.pipe(w)// this give us result as previuos code
