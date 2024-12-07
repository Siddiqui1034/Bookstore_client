import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards'

const OtherBooks = () => {
    const [books, setBooks] = useState([])
     // Fetch books from "http://localhost:5000/book/other-books"
        // and limit the number of books to 8
        // (Note: Replace 'http://localhost:5000/book/other-books' with your actual API endpoint)
        // Example: const data = await fetch('http://localhost:5000/book/other-books?limit=8')
        // const result = data.json()
        // setBooks(result)
        // In a real-world scenario, you would replace the fetch request with your own API call.
        // Also, you would need to handle errors appropriately.
        // You might want to use a library like axios or fetch-api to make the API call.
        // Here, I've used a try-catch block to handle any potential errors.
        // If an error occurs, it will be logged to the console.
    useEffect(()=>{       
        try{
            (async() => 
                {
                const data = await fetch('http://localhost:5000/book/all-books')
                  const result = await data.json()
                  console.log(result)
                  setBooks(result.slice(4,8))  
                })()
        }catch(e){
            console.log(e.message)
        }
    },[])
  return (
    <div>
      <BookCards books={books} headline="Other Books" />
    </div>
  )
}

export default OtherBooks
