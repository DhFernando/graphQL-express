const { 
    GraphQLObjectType ,
    GraphQLString ,
    GraphQLSchema
} = require("graphql");

// const _ = require("loadash")

const books = [
    {name : "harry potter" , genre : "Fantcy" , id : "1"}
]

const BookType = new GraphQLObjectType({
    name : "Book",
    fields: () =>({
        id : { type : GraphQLString },
        name : { type : GraphQLString },
        genre : { type : GraphQLString }
    })
})

const rootQuery = new GraphQLObjectType({
    name : "RootQueryType",
    fields : {
        book : {
            type : BookType,
            args:{ id : { type : GraphQLString } },
            resolve(parent , args){
               return books.find(book => book.id === args.id);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query : rootQuery
})