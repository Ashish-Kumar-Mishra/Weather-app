const express=require('express')
const app=express();
const path=require('path');
const hbs=require('hbs')
const port=process.env.PORT ||8000;


// static path 
// console.log(path.join(__dirname,"./public"));
// console.log(path.join(__dirname,"./templates/views"));
// console.log(path.join(__dirname,"./templates/partials"));

const static_path=path.join(__dirname,"./public");
const template_path=path.join(__dirname, "./templates/views");
const partials_path=path.join(__dirname, "./templates/partials");


app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);


app.use(express.static(static_path));

app.get('/',(req,res)=>{
    // res.send('Welcome to my website')
    res.render('index');
})

app.get('/about',(req,res)=>{
    // res.send('Welcome to my about page of website');
    res.render('about');
})

app.get('/weather',(req,res)=>{
    // res.send('Welcome to my page of website');
    res.render('weather');

})
app.get('*',(req,res)=>{
    // res.send('404 error page');
    res.render('404_error',{
        errorMsg:"Opps! Page not Found"
    })
})

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
});


