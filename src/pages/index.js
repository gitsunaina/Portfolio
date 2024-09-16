import { Inter } from "next/font/google";
// import MyContext from "./MyContext";
import HomePage from "./Components/HomePage";
const inter = Inter({ subsets: ["latin"] });

 function Home() {
 
  return (
    <>
    {/* <MyContext.Provider value={{somedata: 'qwerty'}}> */}
      <HomePage />
      {/* </MyContext.Provider> */}
    </>
  );
}

export default Home