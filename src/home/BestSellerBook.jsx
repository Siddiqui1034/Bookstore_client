import React, {useState, useEffect} from 'react'
import BookCards from '../components/BookCards'

const BestSellerBook = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        //Fetch books from "http://localhost:5000/all-books"
        try{
           (async function(){
            const response = await fetch('http://localhost:5000/book/all-books')
            const data = await response.json()
            // console.log(data)
            setBooks(data.slice(0,8))
           })()
        }catch(e){
            console.error('Failed to fetch books:', e)
            return setBooks([])
        }
    },[])
  return (
    <div>
     <BookCards books={books}  headline="Best Seller Books" />
    </div>
  )
}

export default BestSellerBook
