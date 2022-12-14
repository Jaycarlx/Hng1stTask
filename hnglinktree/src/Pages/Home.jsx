import Header from '../components/Header';
import AnchorItem from '../components/AnchorItem';
import Social from '../components/SocialIcons';
import Footer from '../components/Footer';


function Home() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AnchorItem />
        <Social />
        <Footer />
      </div>
    </div>
  );
}

export default Home;