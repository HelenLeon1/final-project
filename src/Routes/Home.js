
import About from "../Components/About";
import Contact from "../Components/Contact";
import ImageCarousel from "../Components/ImageCarousel";




export default function Home () {
    
    return (
        <div>
            <h3>Welcome!</h3>
            <ImageCarousel />
            <About />
            <Contact />
        </div>
    )
    
}