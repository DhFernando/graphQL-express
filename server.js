const express = require("express")
const expressGraphQL = require("express-graphql")
const app = express()
const { buildSchema } = require("graphql")


//----------<<<<< < ** Graphql Schema ** > >>>>>----------\\
const schema = buildSchema(`
    type Query {
        message : String
    }
`)


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














