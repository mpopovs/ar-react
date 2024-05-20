import React from 'react';
import { useLocation } from 'wouter';
import { BrowserView, MobileView } from 'react-device-detect';

import './styles.css'; // Import the CSS file


function Instrukcija() {
  return (
    <>
      <div className="instruction">
        <img src="/instrukcija-m.svg" alt="Instrukcija" />
      </div>
    </>
  );
}

export default function Home() {
  const [, setLocation] = useLocation(); // Get setLocation to navigate

  

  return (
    <div className="full-screen bg-custom-bg">
      <MobileView>
     <div className="grid-layout portrait-only">
        <div className="card">
          <img src="/cover.svg" alt="Instrukcija" />
        </div>

        <Instrukcija />

        
        
       
         
        
      </div>

      {/* Fixed bottom content */}
      <div className="fixed-bottom ">
        <div className="button-container">
          <button
            onClick={() => setLocation('/dream')}
            className="start-button"
          >
            Sākt apskati
          </button>
        </div>
        <div className="support-section">
         
          <div className="icons">
            <img src="/r-icon.svg" alt="Instrukcija" />
            <img src="/m_icon.svg" alt="Instrukcija" />
            <img src="/clay-logo.svg" alt="Instrukcija" />
          </div>
        </div>
      </div>
      </MobileView>
      <BrowserView>
          <h1 className="browser-view-text">Atver šo lapu mobilajā telefonā!</h1>
        </BrowserView>
    </div>
  );
}
