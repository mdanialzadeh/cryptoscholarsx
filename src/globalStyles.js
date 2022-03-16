import { createGlobalStyle } from "styled-components";

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

:root {
 
}

.app {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 64px;
  margin-bottom: 60px;
  position: relative;
  min-height: calc(100vh - 195px);
  overflow-y: hidden;
}

element.style {
  
}

.particles-bg-canvas-self{
  position: fixed !important;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -2;
}
  html {
    font-family: 'Chivo', sans-serif ;
    overflow-y: scroll;
  } 
  
  ::-webkit-scrollbar {
    width: 10px;
  }
  

  ::-webkit-scrollbar-track {
    background: transparent !important;
    ;
  }
  
  
  ::-webkit-scrollbar-thumb {
      background: grey;
    }
    
    
    ::-webkit-scrollbar-thumb:hover {
      background: #0043d5;
  }

  body {
    background-image: linear-gradient(to bottom, #fdfdfd, #fdfdfd, #fdfdfd, #fcfcfc, #fcfcfc, #fcfcfc, #fcfcfc, #fcfcfc, #fdfdfd, #fefefe, #fefefe, #ffffff);
    margin-top: 0em;
    }

#nava {
  text-decoration: none;

  font-family: inherit;
}

a:-webkit-any-link {
  color: black;
  cursor: pointer;
  text-decoration: none;
}


.row {
    --bs-gutter-x: 0 !important;
  }

.card {
  background: #e2e2e2 !important;
  border: 8px solid white !important;
  border-radius: 0 !important;
  margin: 1em !important;
  box-shadow: 0px 0px 0px 6px black;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  justify-content: center !important;
}

.card-body {
  flex: 0 !important;
}

.accordion-item {
  background-color: ;
  
}
.bannerimg {
  min-height: 300px;
  max-height: 800px;
  width: 100%;
  position: relative;
  left: 0;
  right: 0;
 }

.accordion-button {

 
}

`;

export default CSSReset;
