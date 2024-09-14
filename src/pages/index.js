import { Inter } from "next/font/google";
import HomePage from "./Components/HomePage";
import MyContext from "./MyContext";
const inter = Inter({ subsets: ["latin"] });

 function Home() {
 
  return (
    <>
    <MyContext.Provider value={{somedata: 'qwerty'}}>
      <HomePage />
      </MyContext.Provider>
    </>
  );
}

export default Home