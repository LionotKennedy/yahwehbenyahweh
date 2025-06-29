import { CenterButtons } from "../components/CenterButtons";
import { ImageSlider } from "../components/ImageSlider";
import { Link } from "react-router-dom";
import "./styles/homePage.css";
import "./styles/home.css";
import "./styles/responsive.css";
import "./styles/images.css";
import { VideoPlayer } from "../components/VideoPlayer";

// Importation des images
import Banner1 from "../assets/images/index-banner-1.jpg";
import Banner2 from "../assets/images/index-banner-2.jpg";
import Banner3 from "../assets/images/index-banner-3.jpg";
import BookOfTheMonthImg from "../pages/images/botm-img-0.jpg";
import ReadMoreButton from "../pages/images/read-more-button.png";
import PageBanner from "../pages/images/page-banner_.jpg";
import GoodNewsPoster from "../pages/images/Good_News_of_Yahweh.jpg";
import EternalLifePoster from "../pages/images/Eternal_Life.jpg";
import OrderNowButton from "../pages/images/ord-now-button.png";
import BreakingNewsImg from "../pages/images/Breaking_News.png";

const slides = [
  { id: 1, image: Banner3, alt: "Banner 3" },
  { id: 2, image: Banner2, alt: "Banner 2" },
  { id: 3, image: Banner1, alt: "Banner 1" },
];

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Image Slider */}
      <ImageSlider slides={slides} />
      
      {/* Gold Bar */}
      <div id="top-bar-gold-home"></div>
      
      {/* Center Buttons */}
      <CenterButtons />
      <div className="clear-both-home"></div>
      <div><br /></div>
      
      {/* Book of the Month */}
      <div className="botm-image-contain-home">
        <Link to="/Book_of_the_Month">
          <img
            className="botm-image-home"
            src={BookOfTheMonthImg}
            alt="Book of the month"
          />
        </Link>
      </div>
      
      <div className="style-home">
        <Link to="/Book_of_the_Month">
          <img
            className="sp-button-img-home"
            src={ReadMoreButton}
            alt="Read More . . ."
          />
        </Link>
      </div>
      
      <div className="clear-both-home"></div>
      
      {/* Videos Section */}
      <div>
        <div className="vidPos-home">
          <VideoPlayer
            src="https://ms.yahwehbenyahweh.com/video/720/2025_FeastThemeVideo_New.mp4"
            poster={PageBanner}
          />
        </div>
        
        <div className="vidPos-home">
          <VideoPlayer
            src="https://ms.yahwehbenyahweh.com/video/720/Good_News_Commercial.mp4"
            poster={GoodNewsPoster}
          />
        </div>

        <div className="rmb-p-fmt">
          <p className="rmb-text-fmt pg-text-ltr-sp1 w_4/5 text_center mx_auto">
            Ny Gazetim-panambadian'i Yahweh dia ahitana karazan-kevitra
            marim-pototra mifototra amin'ny Tenin'Andriamanitra, mba hanohitra
            ny vaovao sandoka ankehitriny.
          </p>
        </div>

        <div className="vidPos-home">
          <VideoPlayer
            src="https://ms.yahwehbenyahweh.com/video/720/Home_Page_Promo.mp4"
            poster={EternalLifePoster}
          />
        </div>
        
        <div className="rmb-p-fmt px_4">
          <p className="bn-div-fmt-p-sz-sp-bl text_center text_xls font_bolds mb_4s">
            AFAKA MAMANTATRA NY ZANAKA VE IANAO?
          </p>

          <p className="rmb-text-fmt pg-text-ltr-sp1">
            Ho fantatrao Ve Izy? Iza no Anarany, raha tohizinao? Hijery tahaky
            ny aho Izy rehefa miverina amin'ny Fiverenany Fanindroany mba haka
            antsika ho any Aminy? Valiny ireo fanontaniana ireo sy maro hafa koa
            no hita ao amin'ity sety DVD misy kapila roa mahery ity, antsoina
            hoe,{" "}
            <strong>
              "I Yahweh Ben Yahweh no Andriamanitra Marina sy ny Fiainana
              Mandrakizay."
            </strong>{" "}
            Mipetraha tsara ka jereo ity sombin-dahatsary fohy ity, ary baovao
            izao mba hahazoanao ny hafatra feno famonjena avy Aminy.
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
              src={OrderNowButton}
              alt="Order Now"
            />
          </a>
        </div>
        
        <div className="clear-both"></div>
        <div className="div-pad-home">
          <br /><br />
        </div>
        
        {/* Breaking News */}
        <div className="bn-div-fmt-home">
          <img
            className="breakingnews-img-home"
            src={BreakingNewsImg}
            alt="Breaking News"
          />
          <p className="bn-div-fmt-p-sz-home">
            Ny bokotra mirehitra dia manondro fa misy...
            <br />
            Ny bokotra mirehitra dia manondro fa misy hafatra manan-danja
            napetraka.
          </p>
        </div>
      </div>
      
      <div className="">
        <br /><br />
      </div>
      <div id="top-bar-gold-home"></div>
    </div>
  );
};

export default HomePage;























// import { CenterButtons } from "../components/CenterButtons";
// import { ImageSlider } from "../components/ImageSlider";
// import { Link } from "react-router-dom";
// import "./styles/homePage.css";
// import "./styles/home.css";
// import "./styles/responsive.css";
// import "./styles/images.css";
// import { VideoPlayer } from "../components/VideoPlayer";

// const slides = [
//   { id: 1, image: "/src/assets/images/index-banner-3.jpg", alt: "Banner 3" },
//   { id: 2, image: "/src/assets/images/index-banner-2.jpg", alt: "Banner 2" },
//   { id: 3, image: "/src/assets/images/index-banner-1.jpg", alt: "Banner 1" },
// ];

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       {/* Image Slider */}
//       <ImageSlider slides={slides} />
//       {/* Gold Bar */}
//       <div id="top-bar-gold-home" className=""></div>
//       {/* Center Buttons */}
//       <CenterButtons />
//       <div className="clear-both-home"></div>
//       <div>
//         <br />
//       </div>
//       {/* Book of the Month */}
//       <div className="botm-image-contain-home">
//         <Link to="/Book_of_the_Month">
//           {/* <img
//             className="botm-image-home"
//             src="/src/pages/images/botm-img-0.jpg"
//             alt="Book of the month"
//           /> */}
//           <div className="botm-img botm-image-home"></div>
//         </Link>
//       </div>
//       <div className="style-home">
//         <Link to="/Book_of_the_Month">
//           {/* <img
//             className="sp-button-img-home"
//             src="/src/pages/images/read-more-button.png"
//             alt="Read More . . ."
//           /> */}
//           <div className="read-more-button-img sp-button-img-home"></div>
//         </Link>
//       </div>
//       <div className="clear-both-home"></div>
//       {/* Videos Section */}
//       {/* <div className="videos-section space_y_8 py_8"> */}
//       <div>
//         <div className="vidPos-home">
//           <VideoPlayer
//             src="https://ms.yahwehbenyahweh.com/video/720/2025_FeastThemeVideo_New.mp4"
//             poster="/src/pages/images/page-banner_.jpg"
//           />
//         </div>
//         <div className="vidPos-home">
//           <VideoPlayer
//             src="https://ms.yahwehbenyahweh.com/video/720/Good_News_Commercial.mp4"
//             poster="/src/pages/images/Good_News_of_Yahweh.jpg"
//           />
//         </div>

//         <div className="rmb-p-fmt">
//           <p className="rmb-text-fmt pg-text-ltr-sp1  w_4/5 text_center mx_auto">
//             Ny Gazetim-panambadian’i Yahweh dia ahitana karazan-kevitra
//             marim-pototra mifototra amin’ny Tenin’Andriamanitra, mba hanohitra
//             ny vaovao sandoka ankehitriny.
//           </p>
//         </div>

//         <div className="vidPos-home">
//           <VideoPlayer
//             src="https://ms.yahwehbenyahweh.com/video/720/Home_Page_Promo.mp4"
//             poster="/src/pages/images/Eternal_Life.jpg"
//           />
//         </div>
//         <div className="rmb-p-fmt px_4">
//           <p className="bn-div-fmt-p-sz-sp-bl text_center text_xls font_bolds mb_4s">
//             AFAKA MAMANTATRA NY ZANAKA VE IANAO?
//           </p>

//           <p className="rmb-text-fmt pg-text-ltr-sp1">
//             Ho fantatrao Ve Izy? Iza no Anarany, raha tohizinao? Hijery tahaky
//             ny aho Izy rehefa miverina amin’ny Fiverenany Fanindroany mba haka
//             antsika ho any Aminy? Valiny ireo fanontaniana ireo sy maro hafa koa
//             no hita ao amin’ity sety DVD misy kapila roa mahery ity, antsoina
//             hoe,{" "}
//             <strong>
//               "I Yahweh Ben Yahweh no Andriamanitra Marina sy ny Fiainana
//               Mandrakizay."
//             </strong>{" "}
//             Mipetraha tsara ka jereo ity sombin-dahatsary fohy ity, ary baovao
//             izao mba hahazoanao ny hafatra feno famonjena avy Aminy.
//           </p>
//         </div>

//         <div className="textCenterPt">
//           <a
//             href="https://shop.yahwehbenyahweh.com/index.php/yahweh-judges-america.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               className="sp-button-img mx_auto"
//               src="/src/pages/images/ord-now-button.png"
//               alt="Order Now"
//             />
//           </a>
//         </div>
//         <div className="clear-both"></div>
//         <div className="div-pad-home">
//           <br />
//           <br />
//         </div>
//         {/* Breaking News */}
//         <div className="bn-div-fmt-home">
//           <img
//             className="breakingnews-img-home"
//             src="/src/pages/images/Breaking_News.png"
//             alt="Breaking News"
//           />
//           <p className="bn-div-fmt-p-sz-home">
//             Ny bokotra mirehitra dia manondro fa misy...
//             <br />
//             Ny bokotra mirehitra dia manondro fa misy hafatra manan-danja
//             napetraka.
//           </p>
//         </div>
//       </div>
//       <div className="">
//         <br />
//         <br />
//       </div>
//       <div id="top-bar-gold-home" className=""></div>
//     </div>
//   );
// };

// export default HomePage;

// import { CenterButtons } from "../components/CenterButtons"
// import { ImageSlider } from "../components/ImageSlider"
// import { Link } from "react-router-dom"
// // import VideoPlayer from "../components/VideoPlayer" // Nouveau composant VideoPlayer
// import { VideoPlayer } from "../components/VideoPlayer";
// import "./styles/homePage.css"
// import "./styles/home.css"
// import "./styles/responsive.css"
// import "./styles/images.css" // Nouveau fichier CSS pour les images

// const slides = [
//   { id: 1, className: "banner-3-img", alt: "Banner 3" },
//   { id: 2, className: "banner-2-img", alt: "Banner 2" },
//   { id: 3, className: "banner-1-img", alt: "Banner 1" },
// ]

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       {/* Image Slider */}
//       <ImageSlider slides={slides} />
//       {/* Gold Bar */}
//       <div id="top-bar-gold-home" className=""></div>
//       {/* Center Buttons */}
//       <CenterButtons />
//       <div className="clear-both-home"></div>
//       <div>
//         <br />
//       </div>
//       {/* Book of the Month */}
//       <div className="botm-image-contain-home">
//         <Link to="/Book_of_the_Month">
//           <div className="botm-image-home botm-img" aria-label="Book of the month" role="img"></div>
//         </Link>
//       </div>
//       <div className="style-home">
//         <Link to="/Book_of_the_Month">
//           <div className="sp-button-img-home read-more-button-img" aria-label="Read More . . ." role="img"></div>
//         </Link>
//       </div>
//       <div className="clear-both-home"></div>
//       {/* Videos Section */}
//       <div>
//         <div className="vidPos-home">
//           <VideoPlayer
//             src="https://ms.yahwehbenyahweh.com/video/720/2025_FeastThemeVideo_New.mp4"
//             // posterClassName="page-banner-poster"
//             poster="/src/pages/images/page-banner_.jpg"
//           />
//         </div>
//         <div className="vidPos-home">
//           <VideoPlayer
//             src="https://ms.yahwehbenyahweh.com/video/720/Good_News_Commercial.mp4"
//             // posterClassName="good-news-poster"
//             poster="/src/pages/images/Good_News_of_Yahweh.jpg"
//           />
//         </div>

//         <div className="rmb-p-fmt">
//           <p className="rmb-text-fmt pg-text-ltr-sp1  w_4/5 text_center mx_auto">
//             Ny Gazetim-panambadian'i Yahweh dia ahitana karazan-kevitra marim-pototra mifototra amin'ny
//             Tenin'Andriamanitra, mba hanohitra ny vaovao sandoka ankehitriny.
//           </p>
//         </div>

//         <div className="vidPos-home">
//           <VideoPlayer
//             src="https://ms.yahwehbenyahweh.com/video/720/Home_Page_Promo.mp4"
//             // posterClassName="eternal-life-poster"
//             poster="/src/pages/images/Eternal_Life.jpg"
//           />
//         </div>
//         <div className="rmb-p-fmt px_4">
//           <p className="bn-div-fmt-p-sz-sp-bl text_center text_xls font_bolds mb_4s">
//             AFAKA MAMANTATRA NY ZANAKA VE IANAO?
//           </p>

//           <p className="rmb-text-fmt pg-text-ltr-sp1">
//             Ho fantatrao Ve Izy? Iza no Anarany, raha tohizinao? Hijery tahaky ny aho Izy rehefa miverina amin'ny
//             Fiverenany Fanindroany mba haka antsika ho any Aminy? Valiny ireo fanontaniana ireo sy maro hafa koa no hita
//             ao amin'ity sety DVD misy kapila roa mahery ity, antsoina hoe,{" "}
//             <strong>"I Yahweh Ben Yahweh no Andriamanitra Marina sy ny Fiainana Mandrakizay."</strong> Mipetraha tsara
//             ka jereo ity sombin-dahatsary fohy ity, ary baovao izao mba hahazoanao ny hafatra feno famonjena avy Aminy.
//           </p>
//         </div>

//         <div className="textCenterPt">
//           <a
//             href="https://shop.yahwehbenyahweh.com/index.php/yahweh-judges-america.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <div className="sp-button-img mx_auto order-now-button-img" aria-label="Order Now" role="img"></div>
//           </a>
//         </div>
//         <div className="clear-both"></div>
//         <div className="div-pad-home">
//           <br />
//           <br />
//         </div>
//         {/* Breaking News */}
//         <div className="bn-div-fmt-home">
//           <div className="breakingnews-img-home breaking-news-img" aria-label="Breaking News" role="img"></div>
//           <p className="bn-div-fmt-p-sz-home">
//             Ny bokotra mirehitra dia manondro fa misy...
//             <br />
//             Ny bokotra mirehitra dia manondro fa misy hafatra manan-danja napetraka.
//           </p>
//         </div>
//       </div>
//       <div className="">
//         <br />
//         <br />
//       </div>
//       <div id="top-bar-gold-home" className=""></div>
//     </div>
//   )
// }

// export default HomePage

// import { CenterButtons } from "../components/CenterButtons"
// import { ImageSlider } from "../components/ImageSlider"
// import { Link } from "react-router-dom"
// import { VideoPlayer } from "../components/VideoPlayer"
// import "./styles/homePage.css"
// import "./styles/home.css"
// import "./styles/responsive.css"
// import "./styles/images.css"

// // Corriger l'interface pour ImageSlider
// const slides = [
//   { id: 1, image: "/images/index-banner-3.jpg", alt: "Banner 3" },
//   { id: 2, image: "/images/index-banner-2.jpg", alt: "Banner 2" },
//   { id: 3, image: "/images/index-banner-1.jpg", alt: "Banner 1" },
// ]

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       {/* Image Slider */}
//       <ImageSlider slides={slides} />
//       {/* Gold Bar */}
//       <div id="top-bar-gold-home" className=""></div>
//       {/* Center Buttons */}
//       <CenterButtons />
//       <div className="clear-both-home"></div>
//       <div>
//         <br />
//       </div>
//       {/* Book of the Month */}
//       <div className="botm-image-contain-home">
//         <Link to="/Book_of_the_Month">
//           <div className="botm-image-home botm-img" aria-label="Book of the month" role="img"></div>
//         </Link>
//       </div>
//       <div className="style-home">
//         <Link to="/Book_of_the_Month">
//           <div className="sp-button-img-home read-more-button-img" aria-label="Read More . . ." role="img"></div>
//         </Link>
//       </div>
//       <div className="clear-both-home"></div>
//       {/* Videos Section */}
//       <div>
//         <div className="vidPos-home">
//           <VideoPlayer
//             src="https://ms.yahwehbenyahweh.com/video/720/2025_FeastThemeVideo_New.mp4"
//             poster="/images/page-banner_.jpg"
//           />
//         </div>
//         <div className="vidPos-home">
//           <VideoPlayer
//             src="https://ms.yahwehbenyahweh.com/video/720/Good_News_Commercial.mp4"
//             poster="/images/Good_News_of_Yahweh.jpg"
//           />
//         </div>

//         <div className="rmb-p-fmt">
//           <p className="rmb-text-fmt pg-text-ltr-sp1  w_4/5 text_center mx_auto">
//             Ny Gazetim-panambadian'i Yahweh dia ahitana karazan-kevitra marim-pototra mifototra amin'ny
//             Tenin'Andriamanitra, mba hanohitra ny vaovao sandoka ankehitriny.
//           </p>
//         </div>

//         <div className="vidPos-home">
//           <VideoPlayer
//             src="https://ms.yahwehbenyahweh.com/video/720/Home_Page_Promo.mp4"
//             poster="/images/Eternal_Life.jpg"
//           />
//         </div>
//         <div className="rmb-p-fmt px_4">
//           <p className="bn-div-fmt-p-sz-sp-bl text_center text_xls font_bolds mb_4s">
//             AFAKA MAMANTATRA NY ZANAKA VE IANAO?
//           </p>

//           <p className="rmb-text-fmt pg-text-ltr-sp1">
//             Ho fantatrao Ve Izy? Iza no Anarany, raha tohizinao? Hijery tahaky ny aho Izy rehefa miverina amin'ny
//             Fiverenany Fanindroany mba haka antsika ho any Aminy? Valiny ireo fanontaniana ireo sy maro hafa koa no hita
//             ao amin'ity sety DVD misy kapila roa mahery ity, antsoina hoe,{" "}
//             <strong>"I Yahweh Ben Yahweh no Andriamanitra Marina sy ny Fiainana Mandrakizay."</strong> Mipetraha tsara
//             ka jereo ity sombin-dahatsary fohy ity, ary baovao izao mba hahazoanao ny hafatra feno famonjena avy Aminy.
//           </p>
//         </div>

//         <div className="textCenterPt">
//           <a
//             href="https://shop.yahwehbenyahweh.com/index.php/yahweh-judges-america.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <div className="sp-button-img mx_auto order-now-button-img" aria-label="Order Now" role="img"></div>
//           </a>
//         </div>
//         <div className="clear-both"></div>
//         <div className="div-pad-home">
//           <br />
//           <br />
//         </div>
//         {/* Breaking News */}
//         <div className="bn-div-fmt-home">
//           <div className="breakingnews-img-home breaking-news-img" aria-label="Breaking News" role="img"></div>
//           <p className="bn-div-fmt-p-sz-home">
//             Ny bokotra mirehitra dia manondro fa misy...
//             <br />
//             Ny bokotra mirehitra dia manondro fa misy hafatra manan-danja napetraka.
//           </p>
//         </div>
//       </div>
//       <div className="">
//         <br />
//         <br />
//       </div>
//       <div id="top-bar-gold-home" className=""></div>
//     </div>
//   )
// }

// export default HomePage

// import { CenterButtons } from "../components/CenterButtons";
// import { ImageSlider } from "../components/ImageSlider";
// import { Link } from "react-router-dom";
// import { VideoPlayer } from "../components/VideoPlayer";
// import "./styles/homePage.css";
// import "./styles/home.css";
// import "./styles/responsive.css";
// import "./styles/images.css";
// import "../components/styles/VideoPlayer.css";
// // import "./styles/news/images.css"
// // import "./styles/news/responsive.css"

// // const slides = [
// //   { id: 1, image: "/src/assets/images/index-banner-3.jpg", alt: "Banner 3" },
// //   { id: 2, image: "/src/assets/images/index-banner-2.jpg", alt: "Banner 2" },
// //   { id: 3, image: "/src/assets/images/index-banner-1.jpg", alt: "Banner 1" },
// // ]
// const slides = [
//   { id: 1, alt: "Banner 3" },
//   { id: 2, alt: "Banner 2" },
//   { id: 3, alt: "Banner 1" },
// ];

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       {/* Image Slider */}
//       <ImageSlider slides={slides} />

//       {/* Gold Bar */}
//       <div id="top-bar-gold-home"></div>

//       {/* Center Buttons */}
//       <CenterButtons />

//       <div className="clear-both-home"></div>
//       <div>
//         <br />
//       </div>

//       {/* Book of the Month */}
//       <div className="botm-image-contain-home">
//         <Link to="/Book_of_the_Month">
//           <div className="botm-img botm-image-home"></div>
//         </Link>
//       </div>

//       <div className="style-home">
//         <Link to="/Book_of_the_Month">
//           <div className="read-more-button-img sp-button-img-home"></div>
//         </Link>
//       </div>

//       <div className="clear-both-home"></div>

//       {/* Videos Section */}
//       <div>
//         <div className="vidPos-home">
//           <VideoPlayer
//             src="https://ms.yahwehbenyahweh.com/video/720/2025_FeastThemeVideo_New.mp4"
//             poster="/src/pages/images/page-banner_.jpg"
//           />
//           {/* <VideoPlayer
//             src="https://ms.yahwehbenyahweh.com/video/720/Good_News_Commercial.mp4"
//             posterClass="good-news-poster"
//           /> */}
//         </div>

//         <div className="vidPos-home">
//           <VideoPlayer
//             src="https://ms.yahwehbenyahweh.com/video/720/Good_News_Commercial.mp4"
//             poster="/src/pages/images/Good_News_of_Yahweh.jpg"
//           />
//         </div>

//         <div className="rmb-p-fmt">
//           <p className="rmb-text-fmt pg-text-ltr-sp1 w_4/5 text_center mx_auto">
//             Ny Gazetim-panambadian'i Yahweh dia ahitana karazan-kevitra
//             marim-pototra mifototra amin'ny Tenin'Andriamanitra, mba hanohitra
//             ny vaovao sandoka ankehitriny.
//           </p>
//         </div>

//         <div className="vidPos-home">
//           <VideoPlayer
//             src="https://ms.yahwehbenyahweh.com/video/720/Home_Page_Promo.mp4"
//             poster="/src/pages/images/Eternal_Life.jpg"
//           />
//         </div>

//         <div className="rmb-p-fmt px_4">
//           <p className="bn-div-fmt-p-sz-sp-bl text_center text_xls font_bolds mb_4s">
//             AFAKA MAMANTATRA NY ZANAKA VE IANAO?
//           </p>
//           <p className="rmb-text-fmt pg-text-ltr-sp1">
//             Ho fantatrao Ve Izy? Iza no Anarany, raha tohizinao? Hijery tahaky
//             ny aho Izy rehefa miverina amin'ny Fiverenany Fanindroany mba haka
//             antsika ho any Aminy? Valiny ireo fanontaniana ireo sy maro hafa koa
//             no hita ao amin'ity sety DVD misy kapila roa mahery ity, antsoina
//             hoe,{" "}
//             <strong>
//               "I Yahweh Ben Yahweh no Andriamanitra Marina sy ny Fiainana
//               Mandrakizay."
//             </strong>{" "}
//             Mipetraha tsara ka jereo ity sombin-dahatsary fohy ity, ary baovao
//             izao mba hahazoanao ny hafatra feno famonjena avy Aminy.
//           </p>
//         </div>

//         <div className="textCenterPt">
//           <a
//             href="https://shop.yahwehbenyahweh.com/index.php/yahweh-judges-america.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <div className="order-now-button-img sp-button-img mx_auto"></div>
//           </a>
//         </div>

//         <div className="clear-both"></div>
//         <div className="div-pad-home">
//           <br />
//           <br />
//         </div>

//         {/* Breaking News */}
//         <div className="bn-div-fmt-home">
//           <div className="breaking-news-img breakingnews-img-home"></div>
//           <p className="bn-div-fmt-p-sz-home">
//             Ny bokotra mirehitra dia manondro fa misy...
//             <br />
//             Ny bokotra mirehitra dia manondro fa misy hafatra manan-danja
//             napetraka.
//           </p>
//         </div>
//       </div>

//       <div>
//         <br />
//         <br />
//       </div>
//       <div id="top-bar-gold-home"></div>
//     </div>
//   );
// };

// export default HomePage;
