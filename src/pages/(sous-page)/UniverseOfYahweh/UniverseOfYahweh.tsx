import { useState } from 'react';
import { VideoPlayer } from "../../../components/VideoPlayer";
import "../UniverseOfYahweh/style/universeOfYahweh.css";
// import "../UniverseOfYahweh/style/responsive.css";

const UniverseOfYahweh = () => {
   // États pour gérer la vidéo courante et la résolution
  const [currentVideo, setCurrentVideo] = useState<string>('180');
  const [currentResolution, setCurrentResolution] = useState<string>('480');

  // Fonction pour changer la résolution
  const changeResolution = (res: string): void => {
    setCurrentResolution(res);
  };

  // Fonction pour changer la vidéo
  const changeVideo = (videoNumber: string): void => {
    setCurrentVideo(videoNumber);
  };

  // Génération de la source vidéo en fonction des états
  const videoSrc = `https://ms.yahwehbenyahweh.com/video/${currentResolution}/${currentVideo}_${currentResolution}p.mp4`;

  return (
    <div className="universe-of-yahweh-pages">
      <div
        id="pg-banner-u"
        className="page-banner bg-cover bg-center h-48"
      ></div>
      <div id="top-bar-gold-u" className="sec-bar-u"></div>
      <div className="Body_Text p-6 max-w-4xl mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          Ary tonga ny fotoana antsoina hoe <strong>Ny Taonarivo Fahatelo</strong>,
          fotoana izay nijalian'ny olon-tany areti-mandringana, loza, sy poizina,
          fotoana izay ny <strong>Mpiandry ny Apokalipsy</strong> no nitantana ny orinasa
          iraisam-pirenena - fotoana izay nifoha ny mponina any Amerika tamin'ny hoavy
          tsy misy vola sy tsy misy asa - fotoana izay niseho ny Lehilahy Manokana -
          Lehilahy izay tsy tian'ny mpampiasa amerikana ho hitanao na horeninao -
          Lehilahy izay nosamborina sy nafenina - <strong>Lehilahy izay ny anarany dia{' '}
          <span className="David text-2xl">יהוה בן יהוה</span></strong>
        </p>
      </div>

      <div className="sec-bar pg-top-pd-mod"></div>
      
      <div className="Body_Text">
        <p className="_italic">
          Ity dia ny tantaran'ny lasa sy ny hoavy mbola mitohy - momba ny tsara sy ny ratsy -
          momba ny ainareo sy ny ho azy. Tantara izay mamaritra ny antony <strong>nijalian'ny
          olona mainty hoditra any Amerika nandritra ny 400 taona mahery.</strong>
        </p>
      </div>

      <div className="sec-bar pg-top-pd-mod"></div>
      
      <div className="Body_Text">
        <p className="_italic">
          Tantara momba ny hitranga amin'ny olona mainty hoditra raha miverina amin'ny{' '}
          <strong>lalàna - fitsipika - fitsarana, sy didin'Andriamanitra,{' '}
          <span className="David text-2xl">יהוה</span>.</strong>
        </p>
      </div>

      <div className="sec-bar pg-top-pd-mod"></div>
      
      <div className="Body_Text">
        <p className="">
          <strong>Noho ny nilazany ny marina tamin'ny olona,{' '}
          <span className="David">יהוה בן יהוה</span></strong>{' '}
          dia nosamborina ny mpanompon'ny maizina.
        </p>
      </div>

      <div className="sec-bar pg-top-pd-mod"></div>
      
      <div className="Universe_Video">
        <p>
          <strong>
            <u>AHOAHO NY FAMPISEHOANA HIJERENA IZAO</u>
          </strong>
          <br />
          <span id="title">Ny Tontolon'i Yahweh - Fampisehoana #180</span>
        </p>
        
        <VideoPlayer src={videoSrc} />
        
        <button id="lRes" type="button" onClick={() => changeResolution('480')}>
          Sary Ambany
        </button>
        <button id="mRes" type="button" onClick={() => changeResolution('720')}>
          Sary Antonio
        </button>
        <button id="hRes" type="button" onClick={() => changeResolution('1080')}>
          Sary Avony
        </button>
        {/* <form action="#">
          <select name="videoSelect" id="videoSelect" onChange={(e) => changeVideo(e.target.value)}>
            <option value="180">The Universe of Yahweh - Show # 180</option>
            <option value="181">The Universe of Yahweh - Show # 181</option>
            <option value="182">The Universe of Yahweh - Show # 182</option>
            <option value="183">The Universe of Yahweh - Show # 183</option>
            <option value="184">The Universe of Yahweh - Show # 184</option>
            <option value="185">The Universe of Yahweh - Show # 185</option>
            <option value="186">The Universe of Yahweh - Show # 186</option>
            <option value="187">The Universe of Yahweh - Show # 187</option>
            <option value="188">The Universe of Yahweh - Show # 188</option>
            <option value="189">The Universe of Yahweh - Show # 189</option>
            <option value="190">The Universe of Yahweh - Show # 190</option>
            <option value="191">The Universe of Yahweh - Show # 191</option>
            <option value="192">The Universe of Yahweh - Show # 192</option>
            <option value="193">The Universe of Yahweh - Show # 193</option>
            <option value="194">The Universe of Yahweh - Show # 194</option>
            <option value="195">The Universe of Yahweh - Show # 195</option>
            <option value="196">The Universe of Yahweh - Show # 196</option>
            <option value="197">The Universe of Yahweh - Show # 197</option>
            <option value="198">The Universe of Yahweh - Show # 198</option>
            <option value="199">The Universe of Yahweh - Show # 199</option>
            <option value="200">The Universe of Yahweh - Show # 200</option>
            <option value="201">The Universe of Yahweh - Show # 201</option>
            <option value="202">The Universe of Yahweh - Show # 202</option>
            <option value="203">The Universe of Yahweh - Show # 203</option>
            <option value="204">The Universe of Yahweh - Show # 204</option>
            <option value="205">The Universe of Yahweh - Show # 205</option>
            <option value="206">The Universe of Yahweh - Show # 206</option>
            <option value="207">The Universe of Yahweh - Show # 207</option>
            <option value="208">The Universe of Yahweh - Show # 208</option>
            <option value="209">The Universe of Yahweh - Show # 209</option>
            <option value="210">The Universe of Yahweh - Show # 210</option>
            <option value="211">The Universe of Yahweh - Show # 211</option>
            <option value="212">The Universe of Yahweh - Show # 212</option>
            <option value="213">The Universe of Yahweh - Show # 213</option>
            <option value="214">The Universe of Yahweh - Show # 214</option>
            <option value="215">The Universe of Yahweh - Show # 215</option>
            <option value="216">The Universe of Yahweh - Show # 216</option>
            <option value="217">The Universe of Yahweh - Show # 217</option>
            <option value="218">The Universe of Yahweh - Show # 218</option>
            <option value="219">The Universe of Yahweh - Show # 219</option>
            <option value="220">The Universe of Yahweh - Show # 220</option>
            <option value="221">The Universe of Yahweh - Show # 221</option>
            <option value="222">The Universe of Yahweh - Show # 222</option>
            <option value="223">The Universe of Yahweh - Show # 223</option>
            <option value="224">The Universe of Yahweh - Show # 224</option>
            <option value="225">The Universe of Yahweh - Show # 225</option>
            <option value="226">The Universe of Yahweh - Show # 226</option>
            <option value="227">The Universe of Yahweh - Show # 227</option>
            <option value="228">The Universe of Yahweh - Show # 228</option>
            <option value="229">The Universe of Yahweh - Show # 229</option>
            <option value="230">The Universe of Yahweh - Show # 230</option>
            <option value="231">The Universe of Yahweh - Show # 231</option>
            <option value="232">The Universe of Yahweh - Show # 232</option>
            <option value="233">The Universe of Yahweh - Show # 233</option>
            <option value="234">The Universe of Yahweh - Show # 234</option>
            <option value="235">The Universe of Yahweh - Show # 235</option>
            <option value="236">The Universe of Yahweh - Show # 236</option>
            <option value="237">The Universe of Yahweh - Show # 237</option>
            <option value="238">The Universe of Yahweh - Show # 238</option>
            <option value="239">The Universe of Yahweh - Show # 239</option>
            <option value="240">The Universe of Yahweh - Show # 240</option>
            <option value="241">The Universe of Yahweh - Show # 241</option>
            <option value="242">The Universe of Yahweh - Show # 242</option>
            <option value="243">The Universe of Yahweh - Show # 243</option>
            <option value="244">The Universe of Yahweh - Show # 244</option>
            <option value="245">The Universe of Yahweh - Show # 245</option>
            <option value="246">The Universe of Yahweh - Show # 246</option>
            <option value="247">The Universe of Yahweh - Show # 247</option>
            <option value="248">The Universe of Yahweh - Show # 248</option>
            <option value="249">The Universe of Yahweh - Show # 249</option>
            <option value="250">The Universe of Yahweh - Show # 250</option>
            <option value="251">The Universe of Yahweh - Show # 251</option>
            <option value="252">The Universe of Yahweh - Show # 252</option>
            <option value="253">The Universe of Yahweh - Show # 253</option>
            <option value="254">The Universe of Yahweh - Show # 254</option>
            <option value="255">The Universe of Yahweh - Show # 255</option>
            <option value="256">The Universe of Yahweh - Show # 256</option>
            <option value="257">The Universe of Yahweh - Show # 257</option>
            <option value="258">The Universe of Yahweh - Show # 258</option>
            <option value="259">The Universe of Yahweh - Show # 259</option>
            <option value="260">The Universe of Yahweh - Show # 260</option>
            <option value="261">The Universe of Yahweh - Show # 261</option>
            <option value="262">The Universe of Yahweh - Show # 262</option>
            <option value="263">The Universe of Yahweh - Show # 263</option>
            <option value="264">The Universe of Yahweh - Show # 264</option>
            <option value="265">The Universe of Yahweh - Show # 265</option>
            <option value="266">The Universe of Yahweh - Show # 266</option>
            <option value="267">The Universe of Yahweh - Show # 267</option>
            <option value="268">The Universe of Yahweh - Show # 268</option>
            <option value="269">The Universe of Yahweh - Show # 269</option>
            <option value="270">The Universe of Yahweh - Show # 270</option>
            <option value="271">The Universe of Yahweh - Show # 271</option>
            <option value="272">The Universe of Yahweh - Show # 272</option>
          </select>
        </form> */}
        <form action="#">
          <select 
            name="videoSelect" 
            id="videoSelect" 
            value={currentVideo}
            onChange={(e) => changeVideo(e.target.value)}
          >
            {Array.from({length: 93}, (_, i) => i + 180).map((num) => (
              <option key={num} value={num}>
                Ny Tontolon'i Yahweh - Fampisehoana #{num}
              </option>
            ))}
          </select>
        </form>
      </div>
      <br />
      <div className="py-8">
        <img
          className="bottom-media-img mx-auto"
          src="/public/UniverseOfYahweh/image/bottom-media.jpg"
          alt="Bottom Media"
        />
      </div>
    </div>
  );
};

export default UniverseOfYahweh;
