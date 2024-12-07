import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  // Fetch books from "http://localhost:5000/all-books"
  useEffect(() => {
    try {
      (async () => {
        const response = await fetch("http://localhost:5000/book/all-books");
        const data = await response.json();
        console.log(data);
        setBooks(data);
      })();
    } catch (err) {
      console.error("Failed to fetch books:", err);
      return setBooks([]);
    }
  }, []);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books are Here</h2>

      <div className="h-full grid gap-8 my-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {
          books.map((book, index) => 
            <Card   className="max-w-sm ">
              <img src={book.imageUrl} alt="book_image" className="h-80" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{book.bookTitle}{" "}</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>{book.bookDescription}</p>
              </p>

              <button className="bg-blue-700 text-white font-semibold py-2">Buy Now</button>
            </Card>
          )

          // If there are no books, display a message
        }
      </div>
    </div>
  );
};

export default Shop;
