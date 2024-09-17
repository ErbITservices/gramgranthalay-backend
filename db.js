const mongoose= require('mongoose');

// const mongoURL =`mongodb+srv://jayminprajapati5959:jaimin1902@cluster0.gsls1jf.mongodb.net/`

const mongoURL= process.env.DATA_BASE;
const db = ()=>{
    
    mongoose.connect(mongoURL/*,{
      useNewUrlParser:true,
     useUnifiedTopology:true,
    }*/).then(()=>{
       console.log( 'MongoDB Connected successfully...');
          
    }).catch((error)=>{
       console.log(error);
    })
};

module.exports = db;
