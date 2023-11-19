import './App.css';
import Logo from './bilder/Logo.svg';
function App() {
  return (
    <>
    <header>
        <div class="container">
           <a href="index.html"> <img src="bilder/Logo.svg" alt="crito logo"></a>
            <button class="menu-bars"><i class="fa-solid fa-bars-staggered"></i></button>
                <div class="menu">
                    <div class="top-menu">
                    <div class="contact-information">
            <div class="content-box">
                <i class="fa-solid fa-phone-volume"></i>
                +46 (8) 121 470 50
            </div>
            <div class="content-box" >
                <i class="fa-regular fa-envelope"></i>
                info@crito.com
            </div>
            <div class="content-box last" >
                <i class="fa-solid fa-location-dot"></i>
                Sveavägen 31, 111 34 STOCKHOLM
            </div>
            </div>
            <div class="social-media">
                <a href="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="https://instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            </div>
            </div>
            <div class="main-menu">
                <nav>
                    <a href="index.html">Home</a>
                    <a href="service.html">Service</a>
                    <a href="news.html">News</a>
                    <a href="contact.html">Contact</a>
                </nav>
                <a class="btn-yellow" href="login.html">Login<i class="fa-solid fa-up-right-from-square"></i></a>

            </div>
            </div>
        </div>
    </header>

    </>
  );
}

export default App;
