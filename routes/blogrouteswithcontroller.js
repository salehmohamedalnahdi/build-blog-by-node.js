const express=require('express')
const router=express.Router()
//const blogcontroller=require('../controller/blogcontroller')
const {blog_get,blog_delete,blog}=require('../controller/blogcontroller')

//module.exports=router

//router.get('/blogs/:id',blogcontroller.blog_get)
router.get('/:id',blog_get)
router.delete('/:id',blog_delete)
router.get('/',blog)

module.exports=router