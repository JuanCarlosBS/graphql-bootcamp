import { GraphQLServer, PubSub } from "graphql-yoga";
import uuidv4 from "uuid/v4"
import db from "./db"
import Comment from "./resolvers/Comment"
import Mutation from "./resolvers/Mutation";
import Post from "./resolvers/Post";
import Query from "./resolvers/Query"
import User from "./resolvers/User"
import Subscription from "./resolvers/Subscription"

const pubsub = new  PubSub()

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Comment,
        Mutation,
        Post,
        Query,
        User,
        Subscription
    },
    context: {
        db,
        pubsub
    }
})

server.start(() => {
    console.log('The server is up!')
})