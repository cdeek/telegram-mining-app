import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

function Home({dollarCoin, sharingan}) {
  
  return (
    <>
      <div className="px-4 mt-[150px] flex justify-center">
        <div className="px-4 py-2 flex items-center space-x-2">
          <img src={dollarCoin} alt="Dollar Coin" className="w-10 h-10" />
          <p className="text-4xl">10000000</p>
        </div>
      </div>
      
      <div className="relative my-4 mx-auto h-[200px] w-[200px]">
        <progress className="progress2" value="50" max="100" />
      </div>
      
      <img src={sharingan} />
      
      <motion.button
        className='w-1/2 mt-[100px] mx-auto px-4 py-2 rounded-md text-white bg-green-500'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Mining
      </motion.button>
    </>
  );
}

export default Home;