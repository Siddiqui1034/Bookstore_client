import {
  Button,
  Checkbox,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const UploadBook = () => {
  const bookCategory = [
    "Fiction",
    "Non-Fiction",
    "Biography",
    "Thriller",
    "Self-Help",
    "Business",
    "Cooking",
    "History",
    "Science",
    "Technology",
    "Health",
    "Sports",
    "Art",
    "Literature",
    "Religion",
    "Family",
    "Adventure",
    "Mystery",
    "Romance",
    "Crime",
    "Fantasy",
    "Children's",
    "Young Adult",
    "Science Fiction",
    "Manga",
    "Comics",
    "Graphic Novels",
    "Poetry",
    "Auto-Biography",
    "Autobiography",
    "Memoir",
    "Guide",
    "Cookbook",
    "Dictionary",
    "Reference",
    "Educational",
    "Textbook",
    "Magazine",
  ];
  const [selectBookCategory, setSelectBookCategory] = useState(bookCategory[0]);

  const handleBookCategory = (event) => {
    setSelectBookCategory(event.target.value);
  };

  // handle book submit
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log(form)
    
    const bookTitle = form.bookTitle.value; 
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;
    
    const bookObj= {
      bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl
    }
    console.log(bookObj)

    // send data to the server and db
    try{
      (async ()=>{
        const data = await fetch('http://localhost:5000/upload-book',{
          method: "POST",
          headers:{
            // "Content-Type": "application/x-www-form-urlencoded"
            "Content-Type": "application/json", 
            charset: "utf8",
            encoding: "utf8 " 
          },
          body: JSON.stringify(bookObj)
        })
      const result = await data.json()
      // console.log('Data sent to the server upload Book', result)
      alert('data sent to the server')
      form.reset()
      })()
   
    }catch(err){
      console.error('Could not send data to the server upload Book', err)
    }
    // fetch('http://localhost:5000/upload-book', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(book)
    // })
    //.then(response => response.json())
    //.then(data => console.log(data))
    //.catch(error => console.error('Error:', error));
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>

      <form onSubmit={handleBookSubmit} className="flex flex-col lg:w-[1180px] gap-4"  >

        {/* First Row */}
        <div className="flex flex-row gap-8">
          {/* Book Title */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput name="bookTitle" id="bookTitle" type="text" placeholder="Book Title" required shadow />
          </div>

          {/* Author Name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput name="authorName" id="authorName" type="text" placeholder="Author Name" required shadow />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-row gap-8">
        {/* imageUrl */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image Url " />
            </div>
            <TextInput  name="imageUrl" id="imageUrl" type="text" placeholder="Book Image Url" required shadow />
          </div>

        {/* Category */}
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="inputState" value="Book Category" />
          </div>
          <Select name="categoryName" id="inputState"  value={selectBookCategory} onChange={handleBookCategory} required shadow >
            {bookCategory?.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </Select>
        </div>
        </div>

        {/* Row -3  */}
        {/* Book Description */}
        <div className="flex flex-col">
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" name="bookDescription" placeholder="Book Description" required row={15} />
        </div>

        {/* Row -4 */}
        {/* Book pdf link */}
        <div className="flex flex-col">
          <div className="mb-2 block">
            <Label htmlFor="bookPdfLink" value="Book PDF Link" />
          </div>
          <TextInput name="bookPdfUrl" id="bookPdfLink" type="url" placeholder="Book PDF Link" required shadow />
        </div>

        {/* Button */}
        <Button id="bookButton" type="submit" className="mt-5">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
