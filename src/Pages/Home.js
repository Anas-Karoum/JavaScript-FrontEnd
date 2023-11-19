import '../App.css';
import HeaderSection from '../components/HeaderSection/HeaderSection.js';
import Showcase from '../components/Showcase/Showcase.js';
import UnderShowcase from '../components/UnderShowcase/UnderShowcase.js';
import Features from '../components/Features/Features.js';
import AboutCompany from '../components/AboutCompany/AboutCompany.js';
import OurServices from '../components/OurServices/OurServices';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import ProjectCaseStudies from '../components/ProjectCaseStudies/ProjectCaseStudies';
import MeetOurTeam from '../components/MeetOurTeam/MeetOurTeam';
import Testimonial from '../components/Testimonial/Testimonial';
import ArticleNews from '../components/ArticleNews/ArticleNews';
import Subscribe from '../components/Subscribe/Subscribe';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>

    <HeaderSection />
    <Showcase />
    <UnderShowcase />
    <Features />
    <AboutCompany />
    <OurServices />
    <WhyChooseUs />
    <ProjectCaseStudies />
    <MeetOurTeam />
    <Testimonial />
    <ArticleNews />
    <Subscribe />
    <Footer />
    
    </>
  );
}

export default Home;
