const { 
    GraphQLObjectType ,
    GraphQLString ,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = require("graphql");

// const _ = require("loadash")

const books = [
    {name : "harry potter" , genre : "Fantcy" , id : "1" , authorId : "1"}
]

const authors = [
    {name : "Test auther name here" , age : 24 , id : "1"}
]

const BookType = new GraphQLObjectType({
    name : "Book",
    fields: () =>({
        id : { type : GraphQLID },
        name : { type : GraphQLString },
        genre : { type : GraphQLString },
        author : {
            type : AuthorType,
            resolve(parent , args){
                return authors.find( author => author.id === parent.authorId )
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name : "Author",
    fields: () =>({
        id : { type : GraphQLID },
        name : { type : GraphQLString },
        age : { type : GraphQLInt },
        book:{
            type: new GraphQLList( BookType ),
            resolve(parent , args){
                return books.filter( book => book.authorId === parent.id )
            }
        }
    })
})

const rootQuery = new GraphQLObjectType({
    name : "RootQueryType",
    fields : {
        book : {
            type : BookType,
            args:{ id : { type : GraphQLID } },
            resolve(parent , args){
               return books.find(book => book.id === args.id);
            }
        },

        author:{
            type : AuthorType,
            args:{ name : { type : GraphQLID } },
            resolve(parent , args){
                return authors.find(author => author.name === args.name)
            }
        },
        books:{
            type : new GraphQLList(BookType),
            args:{},
            resolve(parent , args){
                return books;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query : rootQuery
})