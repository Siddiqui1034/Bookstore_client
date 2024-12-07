import React from "react";
import FavBookImg from "../assets/favbook.jpg";
import { Link } from "react-router-dom";
const FavoriteBook = () => {
  return (
    <div className="px-4 lg:px-20 my-20 flex flex-col md:flex-row justify-between items-center">
      <div className="md:w-1/2">
        <img className="rounded md:w-10/12" src={FavBookImg} />
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">Find Your Favorite
        <span className="text-blue-600"> Book Here!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Omnis quia ut eveniet accusamus iste. Tempore eligendi ex fugiat expedita quibusdam fugit, ipsum velit distinctio ad?
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
            <div>
                <h3 className="text-3xl font-bold">800+</h3>
                <p className="text-base">Books Listing</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold">550+</h3>
                <p className="text-base">Register Users</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold">150+</h3>
                <p className="text-base">PDF Downloads</p>
            </div>
        </div>

        <Link to="/shop" className="mt-12 block"> <button className="bg-blue-600 text-white font-bold px-5 py-2 rounded hover:bg-black transition-all duration-300"> Explore More </button></Link>
      </div>
    </div>
  );
};

export default FavoriteBook;
