import Heros from "./components/Heros";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
     
      <Header/>
      <Heros  title="Hi Ephraim here!" className='text-white' subtitle="A web development trainee with a passion for music and tech. 
      From Ghana,
       I'm on a mission to become a developer and inspire young Africans to use tech for good. Let's make a difference together!" />
       <About/>
       <Work/>
       <Contact/>
       <Footer></Footer>
       
    </div>
  );
};

export default App;
