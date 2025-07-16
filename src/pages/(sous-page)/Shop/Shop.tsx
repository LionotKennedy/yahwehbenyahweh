// import { Book, Mail, Menu, Search, ShoppingCart, Lock } from "lucide-react";
// import "./style/shop.css"
// import { useState } from "react";

// export function Shop() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [rememberMe, setRememberMe] = useState(false);

//     const handleLogin = (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log('Login attempt:', { email, password, rememberMe });
//     };

//     const handleCreateAccount = () => {
//         console.log('Create account clicked');
//     };
//     return (
//         <div className="book-sales-appd">
//             {/* Header */}
//             <header className="header-shop">
//                 <div className="header-container-shop">
//                     <button className="menu-btn-shop">
//                         <Menu size={24} />
//                     </button>

//                     <div className="logo-section-shop">
//                         <div className="logo-circle-shop">
//                             <Book size={32} />
//                         </div>
//                         <div className="logo-text-shop">
//                             <span className="brand-name-shop">LIBRAIRIE MODERNE</span>
//                             <span className="brand-subtitle-shop">.COM</span>
//                         </div>
//                     </div>

//                     <div className="header-actions-shop">
//                         <button className="search-btn-shop">
//                             <Search size={24} />
//                         </button>
//                         <div className="cart-container-shop">
//                             <ShoppingCart size={24} />
//                             <span className="cart-count-shop">2</span>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//             {/* Main Content */}
//             <main className="main-content">
//                 <div className="login-container">
//                     <h1 className="page-title">Connexion Client</h1>

//                     {/* Existing Customers Section */}
//                     <section className="registered-section">
//                         <h2 className="section-title">Clients Enregistrés</h2>
//                         <p className="section-description">
//                             Si vous avez un compte, connectez-vous avec votre adresse email.
//                         </p>

//                         <form onSubmit={handleLogin} className="login-form">
//                             <div className="form-group">
//                                 <label htmlFor="email" className="form-label">
//                                     <Mail size={18} />
//                                     Email <span className="required">*</span>
//                                 </label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     className="form-input"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="password" className="form-label">
//                                     <Lock size={18} />
//                                     Mot de passe <span className="required">*</span>
//                                 </label>
//                                 <input
//                                     type="password"
//                                     id="password"
//                                     className="form-input"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             <div className="checkbox-group">
//                                 <input
//                                     type="checkbox"
//                                     id="remember"
//                                     className="checkbox"
//                                     checked={rememberMe}
//                                     onChange={(e) => setRememberMe(e.target.checked)}
//                                 />
//                                 <label htmlFor="remember" className="checkbox-label">
//                                     Se souvenir de moi
//                                 </label>
//                                 <a href="#" className="help-link">Qu'est-ce que c'est ?</a>
//                             </div>

//                             <div className="recaptcha-container">
//                                 <div className="recaptcha-box">
//                                     <div className="recaptcha-content">
//                                         <input type="checkbox" className="recaptcha-checkbox" />
//                                         <span>Je ne suis pas un robot</span>
//                                     </div>
//                                     <div className="recaptcha-logo">reCAPTCHA</div>
//                                 </div>
//                                 <div className="recaptcha-links">
//                                     <a href="#">Confidentialité</a> - <a href="#">Conditions</a>
//                                 </div>
//                             </div>

//                             <button type="submit" className="login-btn">
//                                 Se connecter
//                             </button>

//                             <a href="#" className="forgot-password">
//                                 Mot de passe oublié ?
//                             </a>
//                         </form>
//                     </section>

//                     {/* New Customers Section */}
//                     <section className="new-customer-section">
//                         <div className="required-notice">
//                             <span className="required">*</span> Champs obligatoires
//                         </div>

//                         <h2 className="section-title">Nouveaux Clients</h2>
//                         <p className="section-description">
//                             Créer un compte présente de nombreux avantages : commandez plus rapidement,
//                             conservez plusieurs adresses, suivez vos commandes et bien plus encore.
//                         </p>

//                         <button onClick={handleCreateAccount} className="create-account-btn">
//                             Créer un compte
//                         </button>
//                     </section>
//                 </div>
//             </main>
//             {/* Footer */}
//             <footer className="footer">
//                 <p>© 2025 Librairie Moderne. Tous droits réservés.</p>
//                 <p className="footer-url">shop.librairie-moderne.com</p>
//             </footer>
//         </div>
//     );
// }
// export default Shop;





















































// import React, { useState } from 'react';
// import "./style/shop2.css"

// const Index = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//     firstName: '',
//     lastName: '',
//     rememberMe: false
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Ici vous pourrez ajouter la logique d'authentification
//   };

//   return (
//     <div className="login-container all">
//       <header className="header">
//         <div className="logo-section">
//           <div className="logo">
//             <span className="logo-text">FIVAROTAM-BOBY</span>
//             {/* <span className="logo-subtitle">.COM</span> */}
//           </div>
//         </div>
//         <div className="header-actions">
//           <button className="search-btn">🔍</button>
//           <button className="cart-btn">
//             🛒 <span className="cart-count">2</span>
//           </button>
//         </div>
//       </header>

//       <main className="main-content">
//         <div className="login-card">
//           <div className="tab-container">
//             <button 
//               className={`tab ${isLogin ? 'active' : ''}`}
//               onClick={() => setIsLogin(true)}
//             >
//               Se Connecter
//             </button>
//             <button 
//               className={`tab ${!isLogin ? 'active' : ''}`}
//               onClick={() => setIsLogin(false)}
//             >
//               Créer un Compte
//             </button>
//           </div>

//           <div className="form-section">
//             {isLogin ? (
//               <div className="login-form">
//                 <h2>Clients Enregistrés</h2>
//                 <p className="form-description">
//                   Si vous avez un compte, connectez-vous avec votre adresse email.
//                 </p>

//                 <form onSubmit={handleSubmit}>
//                   <div className="form-group">
//                     <label htmlFor="email">
//                       Email <span className="required">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="password">
//                       Mot de passe <span className="required">*</span>
//                     </label>
//                     <input
//                       type="password"
//                       id="password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   <div className="checkbox-group">
//                     <input
//                       type="checkbox"
//                       id="rememberMe"
//                       name="rememberMe"
//                       checked={formData.rememberMe}
//                       onChange={handleInputChange}
//                     />
//                     <label htmlFor="rememberMe">Se souvenir de moi</label>
//                     <span className="tooltip">Qu'est-ce que c'est?</span>
//                   </div>

//                   <div className="recaptcha">
//                     <div className="recaptcha-box">
//                       <input type="checkbox" id="recaptcha" />
//                       <label htmlFor="recaptcha">Je ne suis pas un robot</label>
//                       <div className="recaptcha-logo">reCAPTCHA</div>
//                     </div>
//                   </div>

//                   <button type="submit" className="submit-btn">Se Connecter</button>
                  
//                   <a href="#" className="forgot-password">Mot de passe oublié?</a>
//                 </form>
//               </div>
//             ) : (
//               <div className="register-form">
//                 <h2>Nouveaux Clients</h2>
//                 <p className="form-description">
//                   Créer un compte présente de nombreux avantages : commandez plus rapidement, 
//                   conservez plusieurs adresses, suivez vos commandes et bien plus encore.
//                 </p>

//                 <form onSubmit={handleSubmit}>
//                   <div className="form-row">
//                     <div className="form-group">
//                       <label htmlFor="firstName">
//                         Prénom <span className="required">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         id="firstName"
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="lastName">
//                         Nom <span className="required">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         id="lastName"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="registerEmail">
//                       Email <span className="required">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       id="registerEmail"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="registerPassword">
//                       Mot de passe <span className="required">*</span>
//                     </label>
//                     <input
//                       type="password"
//                       id="registerPassword"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="confirmPassword">
//                       Confirmer le mot de passe <span className="required">*</span>
//                     </label>
//                     <input
//                       type="password"
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       value={formData.confirmPassword}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   <div className="recaptcha">
//                     <div className="recaptcha-box">
//                       <input type="checkbox" id="registerRecaptcha" />
//                       <label htmlFor="registerRecaptcha">Je ne suis pas un robot</label>
//                       <div className="recaptcha-logo">reCAPTCHA</div>
//                     </div>
//                   </div>

//                   <button type="submit" className="submit-btn">Créer un Compte</button>
//                 </form>
//               </div>
//             )}

//             <div className="required-fields">
//               <span className="required">*</span> Champs obligatoires
//             </div>
//           </div>
//         </div>
//       </main>

//       <footer className="footer">
//         <p>© Bookstore.com - Tous droits réservés</p>
//         <p>shop.bookstore.com</p>
//       </footer>
//     </div>
//   );
// };

// export default Index;










































import React, { useState } from 'react';
import "./style/shop2.css"
import "./style/shop3.css"

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [resetCode, setResetCode] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    rememberMe: false,
    newPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
    setIsLogin(false);
  };

  const handleSendResetCode = () => {
    // Envoyer le code à l'email (simulation)
    console.log('Code envoyé à:', formData.email);
    setIsResetPassword(true);
    setIsForgotPassword(false);
  };

  const handleResetPassword = () => {
    console.log('Mot de passe réinitialisé pour:', formData.email);
    // Réinitialiser les états
    setIsResetPassword(false);
    setIsLogin(true);
    setFormData(prev => ({ ...prev, newPassword: '', email: '' }));
  };

  return (
    <div className="login-container all">
      <header className="header">
        <div className="logo-section">
          <div className="logo">
            <span className="logo-text">FIVAROTAM-BOKY</span>
          </div>
        </div>
        <div className="header-actions">
          <button className="search-btn">🔍</button>
          <button className="cart-btn">
            🛒 <span className="cart-count">2</span>
          </button>
        </div>
      </header>

      <main className="main-content">
        <div className="login-card">
          {!isForgotPassword && !isResetPassword && (
            <div className="tab-container">
              <button 
                className={`tab ${isLogin ? 'active' : ''}`}
                onClick={() => setIsLogin(true)}
              >
                Se Connecter
              </button>
              <button 
                className={`tab ${!isLogin ? 'active' : ''}`}
                onClick={() => setIsLogin(false)}
              >
                Créer un Compte
              </button>
            </div>
          )}

          <div className="form-section">
            {isForgotPassword ? (
              <div className="forgot-password-form">
                <h2>Mot de passe oublié</h2>
                <p className="form-description">
                  Entrez votre adresse email pour recevoir un code de réinitialisation.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); handleSendResetCode(); }}>
                  <div className="form-group">
                    <label htmlFor="forgotEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="forgotEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    Envoyer le code
                  </button>

                  <button 
                    type="button" 
                    className="back-to-login"
                    onClick={() => { setIsForgotPassword(false); setIsLogin(true); }}
                  >
                    Retour à la connexion
                  </button>
                </form>
              </div>
            ) : isResetPassword ? (
              <div className="reset-password-form">
                <h2>Réinitialiser le mot de passe</h2>
                <p className="form-description">
                  Entrez le code reçu par email et votre nouveau mot de passe.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); handleResetPassword(); }}>
                  <div className="form-group">
                    <label htmlFor="resetCode">
                      Code de vérification (5 chiffres) <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="resetCode"
                      name="resetCode"
                      value={resetCode}
                      onChange={(e) => setResetCode(e.target.value)}
                      pattern="\d{5}"
                      maxLength={5}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="newPassword">
                      Nouveau mot de passe <span className="required">*</span>
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    Réinitialiser
                  </button>

                  <button 
                    type="button" 
                    className="back-to-login"
                    onClick={() => { setIsResetPassword(false); setIsLogin(true); }}
                  >
                    Retour à la connexion
                  </button>
                </form>
              </div>
            ) : isLogin ? (
              <div className="login-form">
                <h2>Clients Enregistrés</h2>
                <p className="form-description">
                  Si vous avez un compte, connectez-vous avec votre adresse email.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">
                      Mot de passe <span className="required">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="checkbox-group">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="rememberMe">Se souvenir de moi</label>
                    <span className="tooltip">Qu'est-ce que c'est?</span>
                  </div>

                  <div className="recaptcha">
                    <div className="recaptcha-box">
                      <input type="checkbox" id="recaptcha" />
                      <label htmlFor="recaptcha">Je ne suis pas un robot</label>
                      <div className="recaptcha-logo">reCAPTCHA</div>
                    </div>
                  </div>

                  <button type="submit" className="submit-btn">Se Connecter</button>
                  
                  <button 
                    type="button" 
                    className="forgot-password"
                    onClick={handleForgotPassword}
                  >
                    Mot de passe oublié?
                  </button>
                </form>
              </div>
            ) : (
              <div className="register-form">
                <h2>Nouveaux Clients</h2>
                <p className="form-description">
                  Créer un compte présente de nombreux avantages : commandez plus rapidement, 
                  conservez plusieurs adresses, suivez vos commandes et bien plus encore.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">
                        Prénom <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">
                        Nom <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="registerEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="registerEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phoneNumber">
                      Numéro de téléphone <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{10}"
                      title="Entrez un numéro de téléphone valide (10 chiffres)"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="registerPassword">
                      Mot de passe <span className="required">*</span>
                    </label>
                    <input
                      type="password"
                      id="registerPassword"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword">
                      Confirmer le mot de passe <span className="required">*</span>
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="recaptcha">
                    <div className="recaptcha-box">
                      <input type="checkbox" id="registerRecaptcha" />
                      <label htmlFor="registerRecaptcha">Je ne suis pas un robot</label>
                      <div className="recaptcha-logo">reCAPTCHA</div>
                    </div>
                  </div>

                  <button type="submit" className="submit-btn">Créer un Compte</button>
                </form>
              </div>
            )}

            {!isForgotPassword && !isResetPassword && (
              <div className="required-fields">
                <span className="required">*</span> Champs obligatoires
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© Bookstore.com - Tous droits réservés</p>
        <p>shop.bookstore.com</p>
      </footer>
    </div>
  );
};

export default Index;