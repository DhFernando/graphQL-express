const express = require("express")
const expressGraphQL = require("express-graphql")
const app = express() 
const schema = require("./schema/schema")
 

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














