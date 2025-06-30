import "./style/balance_Justice.css";
import "./style/responsive.css";

// Importation des images
import AbrahamFoundationImage from "./image/The_Abraham_Foundation.png";
import BottomMediaImage from "./image/bottom-media.jpg";

export function Balance_Justice() {
  return (
    <>
      <div id="pg-banner-bal"></div>
      <div id="top-bar-gold-bal"></div>

      <div id="The_Abraham_Foundation">
        <img
          id="title-img-bal"
          src={AbrahamFoundationImage}
          alt="Ny Fondation Abraham - Fikambanana miaro ny zon'ny Hebreo Israelita"
        />
      </div>

      <div className="sec-bar-bal pg-top-pd-mod-bal"></div>

      <div className="sec-text-bal pg-text-ttl-fmt-sm-bal pg-text-ttl-fmt-sm-p1-bal">
        <p>
          Ny Fondation Abraham, Inc., dia natsangana ho an'ny tanjona manokana
          hanangona vola ho an'ny fiarovana ara-dalàna ny Hebreo Israelita tsy
          manan-karena sy tsy manan-tsiny ary ny hafa nofidin'ny Fondation. Ity
          vola ity dia manampy amin'ny fandoavana ny sarany mpisolovava, ny
          mpikaroka manokana, ny fanangonana sy ny fanontana ny
          antontan-taratasy ara-dalàna, ny dia, ary ny trano fandraisam-bahiny
          ho an'ny mpisolovava sy ny vavolombelona, ary maro hafa koa.
        </p>
      </div>

      <div className="sec-bar-bal pg-top-pd-mod-bal"></div>

      <div className="sec-text-bal pg-text-ttl-fmt-sm-bal pg-text-ttl-fmt-sm-p2-bal">
        <p>
          Ny Fondation no tompon'andraikitra amin'ny fanangonana ny ekipa
          ara-dalàna izay nandritra ny enina ambin'ny folo taona dia nahomby
          tamin'ny fiarovana an'i{" "}
          <span className="David-bal">יהוה&nbsp;בּן&nbsp;יהוה</span>, ny
          Lehiben'ny Firenen'i <span className="David-bal">יהוה</span> sy ny
          Hebreo Israelita hafa. Ny ekipa ireo dia nahazo didim-pitsarana tsy
          manan-tsiny maro, nahazo fanafahana amin'ny fanendrena maro,
          nifampiraharaha tamin'ny fifanakalozana tolo-kevitra tsy mbola nisy
          toy izany, nahazo famotsoran-dàlana aloha, ary nanampy ny maro hafa
          nitady torohevitra momba ny raharaha heloka bevava sy sivily.
        </p>
      </div>

      <div className="sec-bar-bal pg-top-pd-mod-bal"></div>

      <div className="sec-text-bal pg-text-ttl-fmt-sm-bal pg-text-ttl-fmt-sm-p3-bal">
        <p>
          Saingy ny ady ara-dalàna dia tsy nifarana tamin'ny niakarana an'i{" "}
          <span className="David-bal">יהוה&nbsp;בּן&nbsp;יהוה</span>. Noho izany,
          ny Fondation dia tsy maintsy mbola vonona hihatra ny fanamby vaovao
          rehetra, ary mandray ny fanohananao mandra-pahatongan'ny Fiverenan'i
          Kristy faharoa.
        </p>
      </div>

      <div className="sec-text-bal pg-text-ttl-fmt-ctr-bal">
        <p>
          Ny Fondation Abraham
          <br />
          P.O. Box 530883
          <br />
          Miami, FL 33153
        </p>
      </div>

      <div>
        <img
          className="bottom-media-img-bal"
          src={BottomMediaImage}
          alt="Sary fanampiny momba ny asa sosialy sy ara-dalàna"
        />
      </div>
    </>
  );
}

export default Balance_Justice;
