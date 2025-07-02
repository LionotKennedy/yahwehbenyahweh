// function MenuTab() {
//   return (
//     <div className="container">
//         menu
//     </div>
//   );
// }

// export default MenuTab;




















































import { ChevronDown, ChevronUp, Save, Upload } from "lucide-react";
import React, { useState } from "react";
import './style/HomeTab.css';

const MenuTab: React.FC = () => {
  // États pour les sections
  const [isTetragrammatonOpen, setIsTetragrammatonOpen] = useState(true);
  const [isNationOpen, setIsNationOpen] = useState(true);
  const [isUniverseOpen, setIsUniverseOpen] = useState(true);
  const [isFeastsOpen, setIsFeastsOpen] = useState(true);
  const [isGoodNewsOpen, setIsGoodNewsOpen] = useState(true);
  const [isCrucifixionOpen, setIsCrucifixionOpen] = useState(true);
  const [isRevelationsOpen, setIsRevelationsOpen] = useState(true);
  const [isSabbathOpen, setIsSabbathOpen] = useState(true);
  const [isErosionOpen, setIsErosionOpen] = useState(true);
  const [isOperationOpen, setIsOperationOpen] = useState(true);
  const [isBalanceOpen, setIsBalanceOpen] = useState(true);

  // États pour les images
  const [tetragrammatonImage, setTetragrammatonImage] = useState<string | null>(null);
  const [nationImage, setNationImage] = useState<string | null>(null);
  const [universeImage, setUniverseImage] = useState<string | null>(null);
  const [feastsImage, setFeastsImage] = useState<string | null>(null);
  const [goodNewsImage, setGoodNewsImage] = useState<string | null>(null);
  const [crucifixionImage, setCrucifixionImage] = useState<string | null>(null);
  const [revelationsImage, setRevelationsImage] = useState<string | null>(null);
  const [sabbathImage, setSabbathImage] = useState<string | null>(null);
  const [erosionImage, setErosionImage] = useState<string | null>(null);
  const [operationImage1, setOperationImage1] = useState<string | null>(null);
  const [operationImage2, setOperationImage2] = useState<string | null>(null);
  const [balanceImage, setBalanceImage] = useState<string | null>(null);

  // Fonction générique pour gérer l'upload d'image
  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    setImage: (image: string | null) => void
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Fonction générique pour sauvegarder l'image
  const handleSaveImage = (image: string | null, sectionName: string) => {
    if (image) {
      console.log(`Image sauvegardée pour ${sectionName}:`, image);
    }
  };

  // Composant réutilisable pour l'upload d'image
  const ImageUploadComponent = ({ 
    image, 
    setImage, 
    sectionName, 
    className = "" 
  }: { 
    image: string | null; 
    setImage: (image: string | null) => void; 
    sectionName: string;
    className?: string;
  }) => (
    <div className={`single-image-container ${className}`}>
      <div className="image-preview large">
        {image ? (
          <img
            src={image}
            alt={`${sectionName} preview`}
            className="preview-image"
          />
        ) : (
          <div className="image-placeholder">
            <Upload size={32} />
            <span>Cliquez pour ajouter une image</span>
          </div>
        )}
      </div>
      <div className="image-controls">
        <label className="upload-btn">
          <Upload size={16} />
          Choisir une image
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, setImage)}
            style={{ display: 'none' }}
          />
        </label>
        <button
          onClick={() => handleSaveImage(image, sectionName)}
          className="save-btn"
          disabled={!image}
        >
          <Save size={16} />
          Sauvegarder
        </button>
      </div>
    </div>
  );

  return (
    <div className="home-container">
      {/* Section 1: Tetragrammaton */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsTetragrammatonOpen(!isTetragrammatonOpen)}
        >
          <h1 className="section-title">Tetragrammaton</h1>
          <button className="toggle-section">
            {isTetragrammatonOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isTetragrammatonOpen && (
          <div className="section-content">
            <ImageUploadComponent
              image={tetragrammatonImage}
              setImage={setTetragrammatonImage}
              sectionName="Tetragrammaton"
            />
          </div>
        )}
      </section>

      {/* Section 2: The Nation of Yahweh */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsNationOpen(!isNationOpen)}
        >
          <h1 className="section-title">The Nation of Yahweh</h1>
          <button className="toggle-section">
            {isNationOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isNationOpen && (
          <div className="section-content">
            <ImageUploadComponent
              image={nationImage}
              setImage={setNationImage}
              sectionName="The Nation of Yahweh"
            />
          </div>
        )}
      </section>

      {/* Section 3: The Universe of Yahweh */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsUniverseOpen(!isUniverseOpen)}
        >
          <h1 className="section-title">The Universe of Yahweh</h1>
          <button className="toggle-section">
            {isUniverseOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isUniverseOpen && (
          <div className="section-content">
            <ImageUploadComponent
              image={universeImage}
              setImage={setUniverseImage}
              sectionName="The Universe of Yahweh"
            />
          </div>
        )}
      </section>

      {/* Section 4: The Feasts of Yahweh */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsFeastsOpen(!isFeastsOpen)}
        >
          <h1 className="section-title">The Feasts of Yahweh</h1>
          <button className="toggle-section">
            {isFeastsOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isFeastsOpen && (
          <div className="section-content">
            <ImageUploadComponent
              image={feastsImage}
              setImage={setFeastsImage}
              sectionName="The Feasts of Yahweh"
            />
          </div>
        )}
      </section>

      {/* Section 5: The Good News of Yahweh */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsGoodNewsOpen(!isGoodNewsOpen)}
        >
          <h1 className="section-title">The Good News of Yahweh</h1>
          <button className="toggle-section">
            {isGoodNewsOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isGoodNewsOpen && (
          <div className="section-content">
            <ImageUploadComponent
              image={goodNewsImage}
              setImage={setGoodNewsImage}
              sectionName="The Good News of Yahweh"
            />
          </div>
        )}
      </section>

      {/* Section 6: The Crucifixion */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsCrucifixionOpen(!isCrucifixionOpen)}
        >
          <h1 className="section-title">The Crucifixion</h1>
          <button className="toggle-section">
            {isCrucifixionOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isCrucifixionOpen && (
          <div className="section-content">
            <ImageUploadComponent
              image={crucifixionImage}
              setImage={setCrucifixionImage}
              sectionName="The Crucifixion"
            />
          </div>
        )}
      </section>

      {/* Section 7: Shocking Revelations */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsRevelationsOpen(!isRevelationsOpen)}
        >
          <h1 className="section-title">Shocking Revelations</h1>
          <button className="toggle-section">
            {isRevelationsOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isRevelationsOpen && (
          <div className="section-content">
            <ImageUploadComponent
              image={revelationsImage}
              setImage={setRevelationsImage}
              sectionName="Shocking Revelations"
            />
          </div>
        )}
      </section>

      {/* Section 8: The Sabbath */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsSabbathOpen(!isSabbathOpen)}
        >
          <h1 className="section-title">The Sabbath</h1>
          <button className="toggle-section">
            {isSabbathOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isSabbathOpen && (
          <div className="section-content">
            <ImageUploadComponent
              image={sabbathImage}
              setImage={setSabbathImage}
              sectionName="The Sabbath"
            />
          </div>
        )}
      </section>

      {/* Section 9: Erosion of The Constitution */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsErosionOpen(!isErosionOpen)}
        >
          <h1 className="section-title">Erosion of The Constitution</h1>
          <button className="toggle-section">
            {isErosionOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isErosionOpen && (
          <div className="section-content">
            <ImageUploadComponent
              image={erosionImage}
              setImage={setErosionImage}
              sectionName="Erosion of The Constitution"
            />
          </div>
        )}
      </section>

      {/* Section 10: Operation Word War */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsOperationOpen(!isOperationOpen)}
        >
          <h1 className="section-title">Operation Word War</h1>
          <button className="toggle-section">
            {isOperationOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isOperationOpen && (
          <div className="section-content">
            <div className="images-row-3" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <ImageUploadComponent
                image={operationImage1}
                setImage={setOperationImage1}
                sectionName="Operation Word War - Image 1"
              />
              <ImageUploadComponent
                image={operationImage2}
                setImage={setOperationImage2}
                sectionName="Operation Word War - Image 2"
              />
            </div>
          </div>
        )}
      </section>

      {/* Section 11: Balance Justice */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsBalanceOpen(!isBalanceOpen)}
        >
          <h1 className="section-title">Balance Justice</h1>
          <button className="toggle-section">
            {isBalanceOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isBalanceOpen && (
          <div className="section-content">
            <ImageUploadComponent
              image={balanceImage}
              setImage={setBalanceImage}
              sectionName="Balance Justice"
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default MenuTab;
