import { CenterButtons } from "../components/CenterButtons";
import { ImageSlider } from "../components/ImageSlider";
import { Link } from "react-router-dom";
import "./styles/homePage.css";
import { VideoPlayer } from "../components/VideoPlayer"; 

const slides = [
  { id: 1, image: "/src/assets/images/index-banner-3.jpg", alt: "Banner 3" },
  { id: 2, image: "/src/assets/images/index-banner-2.jpg", alt: "Banner 2" },
  { id: 3, image: "/src/assets/images/index-banner-1.jpg", alt: "Banner 1" },
];

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Image Slider */}
      <ImageSlider slides={slides} />
      {/* Gold Bar */}
      <div id="top-bar-gold" className="top-bar-gold"></div>
      {/* Center Buttons */}
      <CenterButtons />
      <div className="clear-both"></div>
      <div className="py_4"></div>
      {/* Book of the Month */}
      <div className="botm-image-contain textCenter">
        <Link to="/Book_of_the_Month">
          <img
            className="botm-image mxAuto max_w_full h_auto"
            src="/src/pages/images/botm-img-0.jpg"
            alt="Book of the month"
          />
        </Link>
      </div>
      <div className="textCenter pt_3">
        <Link to="/Book_of_the_Month">
          <img
            className="sp-button-img mxAuto"
            src="/src/pages/images/read-more-button.png"
            alt="Read More . . ."
          />
        </Link>
        <div className="clear-both"></div>
      </div>
      {/* Videos Section */}
      <div className="videos-section space_y_8 py_8">
        <div className="vidPos">
          <VideoPlayer
            src="https://ms.yahwehbenyahweh.com/video/720/2025_FeastThemeVideo_New.mp4"
            poster="/src/pages/images/page-banner_.jpg"
          />
        </div>
        <div className="vidPos">
          <VideoPlayer
            src="https://ms.yahwehbenyahweh.com/video/720/Good_News_Commercial.mp4"
            poster="/src/pages/images/Good_News_of_Yahweh.jpg"
          />
        </div>

        <div className="rmb-p-fmt">
          <p className="rmb-text-fmt pg-text-ltr-sp1  w_4/5 text_center mx_auto">
            The Good News of Yahweh Magazine encompasses a variety of truthful
            topics based on the Word of God to counter today's fake news.
          </p>
        </div>

        <div className="vidPos">
          <VideoPlayer
            src="https://ms.yahwehbenyahweh.com/video/720/Home_Page_Promo.mp4"
            poster="/src/pages/images/Eternal_Life.jpg"
          />
        </div>
        <div className="rmb-p-fmt px_4">
          <p className="bn-div-fmt-p-sz-sp-bl text_center text_xls font_bolds mb_4s">
            CAN YOU IDENTIFY THE SON?
          </p>

          <p className="rmb-text-fmt pg-text-ltr-sp1">
            Will you recognize Him? What is His name, if you can tell? What
            shall He look like when He returns at the Second Advent to receive
            us unto Himself? All these questions and more are answered on this
            powerful 2-disc DVD set entitled,{" "}
            <strong>
              "Yahweh Ben Yahweh Is The True God and Eternal Life."
            </strong>{" "}
            Sit back and watch this short DVD snippet and then order your copy
            today to receive His full message of salvation.
          </p>
        </div>

        <div className="textCenterPt">
          <a
            href="https://shop.yahwehbenyahweh.com/index.php/yahweh-judges-america.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="sp-button-img mx_auto"
              src="/src/pages/images/ord-now-button.png"
              alt="Order Now"
            />
          </a>
        </div>
        <div className="clear-both"></div>
        <div className="div-pad py_8"></div>
        {/* Breaking News */}
        <div className="bn-div-fmt textCenter py_8">
          <img
            className="breakingnews-img mx_auto mb_4"
            src="/src/pages/images/Breaking_News.png"
            alt="Breaking News"
          />
          <p className="bn-div-fmt-p-sz">
            A flashing button indicates that some
            <br />
            important information has been posted
          </p>
        </div>
      </div>
      <div className="py_8"></div>
      <div
        id="top-bar-gold"
        className="top-bar-gold"
      ></div>
      Coucou 1
    </div>
  );
};

export default HomePage;
