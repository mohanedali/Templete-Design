// Section Component
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import InNavbar from "./components/In-Navbar/InNavbar";
import Text from "./components/Text/Text";
import Icon from "./components/Icon/Icon";
// Image Imports
import mainBg from "./images/main.jpg";
import natureBg from "./images/nature.jpg";
import manBg from "./images/man.png";
import travelBg from "./images/traveler.jpg";
import togetherBg from "./images/together.jpg";
import CustBg from "./images/view.jpg";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* First Section */}
      <section className="sections-grid">
        <Section bgImg={mainBg}>
          <div className="content">
            <h6>If not now, then when? </h6>
            <h2>Time to make your wealth work for you</h2>
          </div>
        </Section>
        {/* Second Section */}
        <Section bgColor="#E9DDCF">
          <p>
            Building a lasting legacy for individuals, families and businesses
            globally
          </p>
          <Text text="business" custom big />
          <div className="images">
            <img src={natureBg} alt="Nature Image" />
            <img src={manBg} alt="Man Image" />
            <img src={travelBg} alt="Travel Image" />
          </div>
        </Section>
        {/* Custom Section */}
        <Section bgImg={CustBg} custom></Section>
        {/* Third Section */}
        <Section bgColor="#07424D" overflow>
          <Icon />
          <p style={{ textAlign: "center", color: "#FFF" }}>
            Success stories our capabilities in action
          </p>
          <InNavbar />
          <div className="rot-img">
            <img src={togetherBg} alt="together Image" />
          </div>
          <div className="bottom-data">
            <div>
              <a href="#">Make Enquiry</a>
            </div>
            <p>Diversifying for a more secure future</p>
          </div>
          <Text text="Diversifying for" right white />
          <Text text="a more secure future" white />
        </Section>
      </section>
    </>
  );
}

export default App;
