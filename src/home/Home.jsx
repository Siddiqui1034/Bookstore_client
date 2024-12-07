import React from 'react'
import Banner from '../components/Banner'
import BestSellerBook from './BestSellerBook'
import FavoriteBook from './FavoriteBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'
import BestSellerCard from '../components/BestSellerCard'
import{getDatabase, ref, set} from "firebase/database";
import {app} from '../firebase/firebase.config'
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
// const db = getDatabase(app);
// const auth = getAuth(app);

const Home = () => {

  // const signUpUser = () =>{
  //   createUserWithEmailAndPassword(auth, 'piyushgarg.dev@gmail.com', 'piyushgarg.dev123.com').then((value)=> console.log(value))
  // }
  
  // const putData = () => {
  //   set(ref(db, "users/bookstore"), {title: 'Book 1', author: 'Author 1', price: 100});
  // }
  return (
    <div className=''>
      
     <Banner />
     <BestSellerBook />
     <BestSellerCard />
     <FavoriteBook />
     <PromoBanner />
     <OtherBooks />
     {/* <button onClick={putData} >Put Data</button>
    <button onClick={signUpUser} >Create User</button> */}
     <Review />

    </div>
  )
}

export default Home
