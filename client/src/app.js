

import React from 'react'
import BookList from './bookList'
import ApolloClient from 'apollo-boost'
import {ApolloPrivider} from 'react-apollo'
import AddBook from './addBook'

const client = new ApolloClient({
    uri:'http://loclahost:4000/graphql'
})
export default function app() {
    return (
        <ApolloPrivider client = {client}>
        <div id ='main'>
            <h1>Reading List </h1>
            <BookList/>
            <AddBook/>
        </div>

        </ApolloPrivider>
    )
}
