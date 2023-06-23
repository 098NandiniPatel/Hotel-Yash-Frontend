import React from 'react'
import Slider from '../components/Slider';
import DateForm from '../components/DateForm';

const Home = () => {

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      heading: 'Modern & spacious rooms',
    },
    {
      image: 'https://t3.ftcdn.net/jpg/04/50/44/86/240_F_450448652_rqrQSemauB5yVBAvgJ0KOcolxPoJXX8O.jpg',
      heading: 'luxury experience',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_640.jpg',
      heading: 'Book your room now',
    },
  ];
    return (
    <>
    <Slider slides={slides} /> 
    {/* <h1>date picker</h1> */}
    <section>
    <DateForm/>
    </section>
    </>
  )
}

export default Home