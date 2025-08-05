import React from "react";
import { motion } from "framer-motion";

const TestPrompt = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          transition: { duration: 0.5 } 
        }}
        className="w-full md:w-1/2 flex flex-col space-y-4"
      >
        <h2 className="text-3xl font-bold text-purple-700">
          Take our quick Questionnaire! "How are you feeling?"
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          It only takes a few minutes. Let's get started and see if we can help you!
        </p>
        <div className="flex justify-start">
          <motion.a 
            href="/questionnaire" 
            className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-lg shadow-md hover:from-pink-600 hover:to-orange-600 transition-all duration-300 no-underline w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Fill the Questionnaire
          </motion.a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          transition: { duration: 0.5 } 
        }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img 
          src="/img/test1.jpg" 
          alt="Questionnaire Illustration" 
          className="max-w-full h-auto object-contain rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default TestPrompt;