const express =require ( 'express')
const graphqlHTTP =require ( 'express-graphql')
const schema =require ( './model/schema')
const config =require ( './config');
const mongoose =require ( 'mongoose')
const cors =require ( 'cors')
const app = express()
app.use(cors())
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).catch((error) => console.log(error.reason));
  
mongoose.connection.once('open',()=>{
    console.log('connected to database')
})
app.use('/graphql', graphqlHTTP({
schema,
graphical:true
}))

app.listen(5000,()=>{console.log("listnining at 5000")})
