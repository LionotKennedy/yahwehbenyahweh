import { Link } from "react-router-dom";
import "./style/book_of_the_Month.css";
import "./style/responsive.css";

export function Book_of_the_Month() {
  return (
    <>
      <div id="pg-banner-month"></div>
      <div id="top-bar-gold-month"></div>
      <div className="botm-title-text-month">
        <strong>JOIN US IN OUR MONTHLY READINGS!!</strong>
      </div>
      <div className="sec-bar-month"></div>
      <div className="botm-title-text-itl-month">
        <i>
          The Book of the Month is suggested reading for
          <br />
          you who choose to study the “Divine” Mind of
          <br />
          Yahweh Ben Yahweh.
        </i>
      </div>
      <div className="sec-bar-month"></div>
      <div className="view-12-months">
        <Link to="/Books_for_the_Year" className="style-month">
          VIEW ALL 12 MONTHS
        </Link>
      </div>
      <div className="sec-line-month"></div>
      <div className="botm-title-text-sm-month">
        <span className="style-colo-month">BUILDING A STRONG FOUNDATION</span>
        <br />
      </div>
      <div className="botm-container-month">
        <div className="botm-book-size-container-month">
          <div className="botm-book-size-month">
            <a
              href="https://shop.yahwehbenyahweh.com/index.php/building-a-strong-foundation.html"
              target="_blank"
            >
              <img
                className="botm-book-size-img-month"
                src="/src/pages/(sous-page)/Book_of_the_Month/image/Book_of_The_Month.png"
                alt="Building A Strong Foundation"
              />
            </a>
            <br />
            <br />
          </div>
          <div className="botm-button-size-month">
            <a
              href="https://shop.yahwehbenyahweh.com/index.php/building-a-strong-foundation.html"
              target="_blank"
            >
              <img
                className="botm-button-size-img-month"
                src="/src/pages/(sous-page)/Book_of_the_Month/image/Order_Now.png"
                alt="Order Now"
              />
            </a>
          </div>
        </div>
        <div className="botm-book-exerpt-container-month">
          <p className="botm-book-exerpt-month">
            This knowledge is for those parents who are serious about their
            children becoming the royal priesthood. Even parents must become as
            little children, if you desire the royal priesthood, which is
            heaven. So as parents, you have a dual role of training not only
            YOURSELF but also YOUR CHILDREN in the “knowledge” of Yahweh. The
            purpose of the knowledge of Yahweh is to qualify you and your
            children to enter the Kingdom of Heaven.
          </p>
          <p className="botm-book-exerpt-month">
            Step One is to “initiate” yourself and your children into the
            knowledge of Yahweh. This means that the knowledge of Yahweh must be
            at the beginning and earliest part of learning. You must COMMENCE
            and START with the knowledge of Yahweh. Your children must COME INTO
            EXISTENCE through the knowledge of Yahweh. The knowledge of Yahweh
            must be the ORIGINATION. Parents must be the originator of this
            action. The knowledge of Yahweh must be the INITIAL STAGE. The
            knowledge of Yahweh must be the INITIAL ORIGIN, the SOURCE, and the
            FIRST CAUSE of all learning. All of your children’s activities must
            begin with the “knowledge” of Yahweh.
          </p>
        </div>
      </div>
      <p className="botm-bottom-page-month"></p>
      <div>
        <img
          className="bottom-media-img"
          src="/src/pages/(sous-page)/Book_of_the_Month/image/bottom-media.jpg"
        />
      </div>
    </>
  );
}
export default Book_of_the_Month;
