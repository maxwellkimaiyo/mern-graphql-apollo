import React, { useState } from "react";
import { graphql,compose } from "react-apollo";
import {getBookQuery } from './queries'

import React from 'react'

export default function BookDetails() {

   const displayBooksDetails =()=>{
        const {book}= prop.data

        if (book){
            return(
                <div>
                    <h2>{book.name}</h2>
            <p>{book.genre}</p>
            <p>{book.author.name}</p>

            <p>All books by this author</p>
            <ul className="other-books">
                {book.author.books.map(item=>{
                    return<li key={item.id}>{item.name}</li>
                })}
            </ul>
                </div>
            )
        }else{
            return(
                <div>No book selected</div>
            )
        }
    }
    return (
        <div id="book-details">
            <p></p>
        </div>
    )
}
export default graphql(getBookQuery,{
    options:(props) =>{
        return{
            variables: {
                id:props.bookId
            }
        } }
})(bookDetails)