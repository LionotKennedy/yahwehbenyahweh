
import type React from "react"
import { CenterButtons } from "../components/CenterButtons"
import { ImageSlider } from "../components/ImageSlider"
import { Link } from "react-router-dom"
import "./styles/homePage.css"
import "./styles/home.css"
import "./styles/responsive.css"
import { VideoPlayer } from "../components/VideoPlayer"

// Import des données JSON
import content from "../data/home.json"
import imagesData from "../data/images-home.json"
import { homeApi } from "../admin/api/api";
import { useEffect, useState } from "react"
// import { BannerAPI } from "../admin/api/homeImage2";
import { BannerAPI, getImageUrl } from "../admin/api/homeImage2";

// Interfaces TypeScript
interface VideoData {
  src: string
  poster: string
}

interface VideoSection {
  title: string
  content: string
}

interface HomePageContent {
  homePage: {
    videoSection: VideoSection
    videos: VideoData[]
  }
}

interface ImageData {
  // path: string
  src: string
  alt: string
}

interface BannerData extends ImageData {
  id: number
}

interface ImagesData {
  banners: BannerData[]
  bookOfTheMonth: ImageData
  buttons: {
    readMore: ImageData
    orderNow: ImageData
  }
  videoPoster: {
    pageBanner: ImageData
    goodNews: ImageData
    eternalLife: ImageData
  }
  breakingNews: ImageData
}

interface SlideData {
  id: number
  image: string
  alt: string
}

const HomePage: React.FC = () => {
  const [banners, setBanners] = useState<BannerData[]>([]);
  // Récupération des données depuis les JSON avec typage
  const { videos }: HomePageContent["homePage"] = content.homePage
  const images: ImagesData = imagesData
  const [title, setTitle] = useState(null);
  const [description1, setDescription1] = useState(null);
  const [src1, setSRC1] = useState(null);
  const [src2, setSRC2] = useState(null);
  const [src3, setSRC3] = useState(null);

  let displayedBanners = banners.length > 0 ? banners : images.banners;

  // Filtrez pour ne garder que les IDs 1, 2, 3 (ou les 3 premiers si fallback)
  displayedBanners = banners.length > 0
    ? banners.filter(banner => banner.id === 1 || banner.id === 2 || banner.id === 3)
    : images.banners.slice(0, 3);

  const slides: SlideData[] = displayedBanners.map((banner: BannerData) => ({
    id: banner.id,
    // image: getImageUrl(banner.path),
    image: getImageUrl(banner.src),
    alt: banner.alt,
  }));
  // Ajoutez cette fonction utilitaire pour trouver une bannière par son ID
  const getBannerById = (id: number) => {
    return banners.find(banner => banner.id === id);
  };

  // Récupérez les images spécifiques
  const bookOfTheMonthImage = getBannerById(4) || images.bookOfTheMonth;
  const breakingNewsImage = getBannerById(5) || images.breakingNews;
  // const bookOfTheMonthImage = getBannerById(4) || "";
  // const breakingNewsImage = getBannerById(5) || "";

  useEffect(() => {
    const loadData = async () => {
      try {
        // Chargez les données de homeApi comme avant
        const homeData = await homeApi.get();
        if (homeData.success && homeData.data?.length > 0) {
          const data = homeData.data[0];
          setTitle(data.title);
          setDescription1(data.description1);
          setSRC1(data.src1);
          setSRC2(data.src2);
          setSRC3(data.src3);
        }

        // Chargez les bannières depuis l'API
        const bannersResponse = await BannerAPI.fetchAll();
        if (bannersResponse.success) {
          // console.log("Bannières récupérées:", bannersResponse.data);
          setBanners(bannersResponse.data);
        } else {
          console.error("Erreur lors de la récupération des bannières:", bannersResponse.message);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      }
      // console.log(breakingNewsImage)
    };


    loadData();
  }, []);



  return (
    <div className="home-page">
      {/* Image Slider */}
      <ImageSlider slides={slides} />

      {/* Gold Bar */}
      <div id="top-bar-gold-home" className=""></div>

      {/* Center Buttons */}
      <CenterButtons />

      <div className="clear-both-home"></div>
      <div>
        <br />
      </div>

      {/* Book of the Month */}
      <div className="botm-image-contain-home">
        {/* <Link to="/Book_of_the_Month">
          <img
            className="botm-image-home"
            // src={images.bookOfTheMonth.path}
            // alt={images.bookOfTheMonth.alt}
            src={getImageUrl(bookOfTheMonthImage.path)}
            alt={bookOfTheMonthImage.alt}
          />
        </Link> */}
        <Link
          to="/Book_of_the_Month"
          state={{ banners: banners }} // Passez explicitement les banners
        >
          <img
            className="botm-image-home"
            // src={getImageUrl(bookOfTheMonthImage.path)}
            src={getImageUrl(bookOfTheMonthImage.src)}
            alt={bookOfTheMonthImage.alt}
          />
        </Link>
      </div>
      <div className="style-home">
        <Link to="/Book_of_the_Month">
          <img
            className="sp-button-img-home"
            // src={images.buttons.readMore.path}
            src={images.buttons.readMore.src}
            alt={images.buttons.readMore.alt}
          />
        </Link>
      </div>

      <div className="clear-both-home"></div>

      {/* Videos Section */}
      <div>
        {/* Première vidéo */}
        <div className="vidPos-home">
          {/* <VideoPlayer src={videos[0]?.src || ""} poster={images.videoPoster.pageBanner.path} /> */}
          {/* <VideoPlayer src={src1 } poster={images.videoPoster.pageBanner.path} /> */}
          <VideoPlayer
            src={src1 || videos[0]?.src || ""}
            // poster={images.videoPoster.pageBanner.path}
            poster={images.videoPoster.pageBanner.src}
          />
        </div>

        {/* Deuxième vidéo */}
        <div className="vidPos-home">
          {/* <VideoPlayer src={src2 } poster={images.videoPoster.goodNews.path} /> */}
          {/* <VideoPlayer src={videos[1]?.src || ""} poster={images.videoPoster.goodNews.path} /> */}
          <VideoPlayer
            src={src2 || videos[1]?.src || ""}
            // poster={images.videoPoster.goodNews.path}
            poster={images.videoPoster.goodNews.src}
          />
        </div>

        <div className="rmb-p-fmt">
          <p className="rmb-text-fmt pg-text-ltr-sp1 w_4/5 text_center mx_auto">
            Ny Gazetim-panambadian'i Yahweh dia ahitana karazan-kevitra marim-pototra mifototra amin'ny
            Tenin'Andriamanitra, mba hanohitra ny vaovao sandoka ankehitriny.
          </p>
        </div>

        {/* Troisième vidéo */}
        <div className="vidPos-home">
          {/* <VideoPlayer src={src3 } poster={images.videoPoster.eternalLife.path} /> */}
          {/* <VideoPlayer src={videos[2]?.src || ""} poster={images.videoPoster.eternalLife.path} /> */}
          <VideoPlayer
            src={src3 || videos[2]?.src || ""}
            poster={images.videoPoster.eternalLife.src}
            // poster={images.videoPoster.eternalLife.path}
          />
        </div>

        {/* Section texte dynamique */}
        <div className="rmb-p-fmt px_4">
          {/* <p className="bn-div-fmt-p-sz-sp-bl text_center text_xls font_bolds mb_4s">{videoSection.title}</p> */}
          <p className="bn-div-fmt-p-sz-sp-bl text_center text_xls font_bolds mb_4s">{title}</p>
          <p className="rmb-text-fmt pg-text-ltr-sp1">{description1}</p>
        </div>

        <div className="textCenterPt">
          <a
            href="https://shop.yahwehbenyahweh.com/index.php/yahweh-judges-america.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="sp-button-img mx_auto"
              // src={images.buttons.orderNow.path}
              src={images.buttons.orderNow.src}
              alt={images.buttons.orderNow.alt}
            />
          </a>
        </div>

        <div className="clear-both"></div>
        <div className="div-pad-home">
          <br />
          <br />
        </div>

        {/* Breaking News */}
        <div className="bn-div-fmt-home">
          <img
            className="breakingnews-img-home"
            // src={getImageUrl(breakingNewsImage.path)}
            src={getImageUrl(breakingNewsImage.src)}
            alt={breakingNewsImage.alt}
          // src={images.breakingNews.path}
          // alt={images.breakingNews.alt}
          />
          <p className="bn-div-fmt-p-sz-home">
            Ny bokotra mirehitra dia manondro fa misy...
            <br />
            Ny bokotra mirehitra dia manondro fa misy hafatra manan-danja napetraka.
          </p>
        </div>
      </div>

      <div className="">
        <br />
        <br />
      </div>
      <div id="top-bar-gold-home" className=""></div>
    </div>
  )
}

export default HomePage
