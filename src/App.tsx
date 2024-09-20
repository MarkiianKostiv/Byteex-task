import { motion } from "framer-motion";

function App() {
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      <motion.h1
        className='bg-red-500 text-white p-4'
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Initial setup of the app
      </motion.h1>
    </div>
  );
}

export default App;
