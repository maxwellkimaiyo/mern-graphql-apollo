import React, { useState } from "react";
import { graphql,compose } from "react-apollo";
import {getAuthorQuery,addBookMutation,getBookQuery } from './queries'

import React from "react";

export default function AddBook() {

    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [authorId, setAuthorId] = useState("")
   
   const displayAuthors=()=>{
        let data = this.props.getAuthorQuery
        if (data.loading) {
            return(<option disabled>Loaading authors...</option>)
        }else {
            return data.authors.map((author)=>{
                return(
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            })
        }
    }

    const submitForm=(e)=>{
        e.preventDefault()
        prop.addBookMutation({
            variables:{
                name:name,
                genre:genre,
                authorId:authorId
            },
            refetchQueries:[{
query:getBooksQuery
            }]
        })
         
    }
  return (
    <form id="add-book" onSubmit={submitForm()}>
      <div className="field">
        <label>Book Name: </label>
        <input type="text" onChange={(e)=>setName({name:e.target.value})}></input>
      </div>
      <div className="field">
        <label>Genre: </label>
        <input type="text" onChange={(e)=>setGenre({genre:e.target.value})}></input>
      </div>
      <div className="field">
        <label>Author: </label>
        <select  onChange={(e)=>setAuthorId({authorId:e.target.value})}>
          <option>Select author</option>
          {displayAuthors}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default compose(
graphql(getAuthorQuery,{name:"getAuthorQuery"}),
graphql(addBookMutation,{name:"addBookMutation"})
)(AddBook  )