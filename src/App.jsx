import "./App.css";
import { motion } from "framer-motion";
function App() {
  return (
    <>
      <motion.h1
        className="h-[300px] w-[300px] rounded-2xl bg-test  mt-10 ml-[100px] "
        initial={{ scale: 1 }}
        animate={{ rotate: 45, scale: 3 }}
      ></motion.h1>
    </>
  );
}

export default App;
