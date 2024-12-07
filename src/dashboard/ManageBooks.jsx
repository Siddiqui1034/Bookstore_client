import React, { useState, useEffect } from "react";

import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    // Fetch books from "http://localhost:5000/all-books" 
    try {
      (async function () {
        const response = await fetch("http://localhost:5000/book/all-books");
        const data = await response.json();
        console.log(data)
        setAllBooks(data);
      })();
    } catch (e) {
      console.error("Failed to fetch books:", e);
    }
  }, []);
  const handleDelete = async(id) => {
    console.log(id);
    try{      
        const response = await fetch(`http://localhost:5000/book/delete-book/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          })
        if(!response.ok) {
          const { statusText } = response;
          throw new Error(`HTTP error! status: ${response.status} ${response.arrayBuffer.toString()} ${statusText}`);
        }
        const book = await response.json() 
        console.log(`Book deleted Successfully`,book); 
        alert('Book deleted Successfully'); 
        setAllBooks(allBooks.filter(book => book._id!== id));  // remove deleted book from the state             
    }catch(err) {
      console.error("Failed to delete book:", err);    
  }}
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>

      {/* Tables for books data */}
      <Table className="lg:w-[1180px]" hoverable>
        <Table.Head>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Edit or Manage</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
        { allBooks.map((book, index) => (
            <Table.Row key={book._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index +1}</Table.Cell>
              <Table.Cell>{book.bookTitle}</Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>
                <Link to={`/admin/dashboard/edit-books/${book._id}`} className="mr-5 font-medium text-cyan-600 hover:underline dark:text-cyan-500">Edit</Link>
                <button onClick={()=>handleDelete(book._id)} className="bg-red-500 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-400">Delete</button>
              </Table.Cell>
            </Table.Row>       
        ))}
         </Table.Body>
      </Table>
    </div>
  );
};

export default ManageBooks;
