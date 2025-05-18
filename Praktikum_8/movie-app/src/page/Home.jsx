import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer.jsx';
import Hero from '../components/Hero/Hero.jsx';
import Movies from "../components/Movies/Movies.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Movies />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
