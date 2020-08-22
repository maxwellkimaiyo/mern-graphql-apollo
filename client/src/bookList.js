import React, { useState } from 'react'
import {getBooksQuery} from './queries'
import {graphql} from 'react-apollo'
import BookDetails from './bookDetails'

 function BookList() {

const [selected, setSelected] = useState(null)
   const displayBooks=()=>{
        let data = this.props.data
        if (data.loading) {
            return(<div>Loaading Books...</div>)
        }else {
            return data.books.map((book)=>{
                return(
                    <li key={book.id} onClick={(e)=>setSelected({selected:book.id})}>{book.name}</li>
                )
            })
        }
    }
    return (

          <>
            <ul id="book-list">
                {displayBooks()}
            </ul>

            <BookDetails bookId = {selected}/>
        </>  
  
   
    )
}

export default graphql(getBooksQuery)(bookList)