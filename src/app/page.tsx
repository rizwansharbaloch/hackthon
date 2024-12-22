import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Features from "./components/Features";



export default function Home() {
  return (
 <div>
   <Header/>
   <HeroSection/>
   <Categories/>
   <Products/>
   <Features/>
   <Footer/>
 </div>
  );
}
