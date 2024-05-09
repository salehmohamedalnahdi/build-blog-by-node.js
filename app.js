const express= require('express')
const { title } = require('process')
const app= express()
const morgan=require('morgan')
const mongoose=require('mongoose')
const Blog=require('./models/blog')
const blogRoutes=require('./routes/blogrouteswithcontroller')

//meddileware & define static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));// get data from form
app.use(morgan('dev'))

// register view engine
app.set('view engine','ejs')

// connect to mongo db //,{useNewUrlParser: true , useUnifiedTopology: true}
const dbURI= 'mongodb+srv://vip:123@cluster0.6h8ji1c.mongodb.net/note-tutd?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then(()=>{console.log("okkkkk")}).catch((err)=>{console.log(err)})
//create new blog & redirect to all-blogs page
app.post('/create-blogs',(req,res)=>{
    const blog= new Blog(req.body)
    blog.save()
    .then((result)=>{res.redirect('/')})
    //.then((result)=>{res.json({redirect: '/all-blogs'})})
    .catch((e)=>{console.log(e)})
})

app.listen(3000)

app.get('/',(req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((b)=>{
      res.render('home',{title:"home",b:b})
    })
    .catch((e)=>{console.log(e)})
})
app.get('/about',(req,res)=>{
    res.render('index',{title:"index"})
})
app.get('/create',(req,res)=>{
    res.render('create',{title:"create"})
})
// blog routes
app.use('/blogs', blogRoutes);

//404 page
app.use((req,res)=>{
    res.status(404).render('404',{title:"404"})
})
/*app.get('/blogs/:id',(req,re)=>{
    const id=req.params.id;
    Blog.findById(id)
    .then((result)=>{
        re.render('details',{title:'blog details', blog:result})
    })
    .catch((e)=>{console.log(e)})
})
app.delete('/blogs/:id',(req,res)=>{
    const id=req.params.id
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        res.json({redirect: '/'})
    })
    .catch((e)=>{console.log(e)})
})*/
