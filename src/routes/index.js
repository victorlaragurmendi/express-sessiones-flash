const {Router} = require('express');

const router=Router();


router.get('/',(req,res)=>{
    res.render('index.ejs')
})

router.post('/register',(req,res)=>{
    // req.flash('userx',req.body)

        req.flash('succes','Now you are registred')

    res.redirect('profile')
})

router.get('/profile',(req,res)=>{
    const message=req.flash('succes')[0]
    console.log(message)
    // const user=req.session.user_data;
    //  delete req.session.user_data;
    res.render('profile.ejs',{
        message
    });
})


module.exports=router;
