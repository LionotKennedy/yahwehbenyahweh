
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
  path: string
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
  // Récupération des données depuis les JSON avec typage
  const { videoSection, videos }: HomePageContent["homePage"] = content.homePage
  const images: ImagesData = imagesData

  // Création des slides à partir du JSON d'images
  const slides: SlideData[] = images.banners.map((banner: BannerData) => ({
    id: banner.id,
    image: banner.path,
    alt: banner.alt,
  }))

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
        <Link to="/Book_of_the_Month">
          <img
            className="botm-image-home"
            src={images.bookOfTheMonth.path}
            alt={images.bookOfTheMonth.alt}
          />
        </Link>
      </div>
      <div className="style-home">
        <Link to="/Book_of_the_Month">
          <img
            className="sp-button-img-home"
            src={images.buttons.readMore.path}
            alt={images.buttons.readMore.alt}
          />
        </Link>
      </div>

      <div className="clear-both-home"></div>

      {/* Videos Section */}
      <div>
        {/* Première vidéo */}
        <div className="vidPos-home">
          <VideoPlayer src={videos[0]?.src || ""} poster={images.videoPoster.pageBanner.path} />
        </div>

        {/* Deuxième vidéo */}
        <div className="vidPos-home">
          <VideoPlayer src={videos[1]?.src || ""} poster={images.videoPoster.goodNews.path} />
        </div>

        <div className="rmb-p-fmt">
          <p className="rmb-text-fmt pg-text-ltr-sp1 w_4/5 text_center mx_auto">
            Ny Gazetim-panambadian'i Yahweh dia ahitana karazan-kevitra marim-pototra mifototra amin'ny
            Tenin'Andriamanitra, mba hanohitra ny vaovao sandoka ankehitriny.
          </p>
        </div>

        {/* Troisième vidéo */}
        <div className="vidPos-home">
          <VideoPlayer src={videos[2]?.src || ""} poster={images.videoPoster.eternalLife.path} />
        </div>

        {/* Section texte dynamique */}
        <div className="rmb-p-fmt px_4">
          <p className="bn-div-fmt-p-sz-sp-bl text_center text_xls font_bolds mb_4s">{videoSection.title}</p>
          <p className="rmb-text-fmt pg-text-ltr-sp1">{videoSection.content}</p>
        </div>

        <div className="textCenterPt">
          <a
            href="https://shop.yahwehbenyahweh.com/index.php/yahweh-judges-america.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="sp-button-img mx_auto"
              src={images.buttons.orderNow.path}
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
            src={images.breakingNews.path}
            alt={images.breakingNews.alt}
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
