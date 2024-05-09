const Blog=require('../models/blog')

const blog_get=(req,re)=>{
    const id=req.params.id;
    Blog.findById(id)
    .then((result)=>{
        re.render('details',{title:'blog details', blog:result})
    })
    .catch((e)=>{console.log(e)})
}

const blog_delete=(req,res)=>{
    const id=req.params.id
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect: '/'})
    })
    .catch((e)=>{console.log(e)})
}

const blog=(req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((b)=>{
      res.render('home',{title:"home",b:b})
    })
    .catch((e)=>{console.log(e)})
}

module.exports={
    blog_get,blog_delete,blog
}