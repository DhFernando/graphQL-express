const express = require("express")
const expressGraphQL = require("express-graphql")
const app = express() 
const schema = require("./schema/schema")
const mongoose = require("mongoose")


const url = 'mongodb://localhost/gql-lib'

mongoose.connect(url , { useNewUrlParser : true ,  useUnifiedTopology: true })
const con = mongoose.connection

con.on('open' , ()=> console.log( 'Connected to DB' ))

//----------<<<<< < ** Root resolution ** > >>>>>----------\\
const root = {
    message : () => "hello world"
}

app.use("/graphql", expressGraphQL({
    schema : schema,
    rootValue : root,
    graphiql:true
}))
app.listen(2000 , async ()=>{ await console.log("Server rinning") } )














