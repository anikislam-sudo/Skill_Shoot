import "./App.css";
import Banner from "./components/Banner/Banner";
import BannerTwo from "./components/BannerTwo/BannerTwo";
import CourseSection from "./components/Course/CourseSection";
import Footer from "./components/Footer/Footer";

import Navbar from "./components/Navbar/Navbar";
import PricingSection from "./components/PriceSection/PricingSection";
import PromoSection from "./components/PromoSection/PromoSection";
import SkillShoot from "./components/SkillShoot/SkillShoot";
import Sponser from "./components/Sponser/Sponser";
import TestimonialSection from "./components/Testimonial/TestimonialSection";
import WhyExistSection from "./components/WhyExistSection/WhyExistSection";

function App() {
  return (
    <div className=" min-h-screen bg-Green ">
      <Navbar></Navbar>
      <Banner></Banner>
      <Sponser></Sponser>
      <PromoSection></PromoSection>
      <WhyExistSection></WhyExistSection>
      <CourseSection></CourseSection>
      <SkillShoot></SkillShoot>
      <BannerTwo></BannerTwo>
      <PricingSection></PricingSection>
      <TestimonialSection></TestimonialSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
