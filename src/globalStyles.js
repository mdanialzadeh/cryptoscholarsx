
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

}

element.style {
  
}

.particles-bg-canvas-self{
  position: fixed !important;
  top: 0;
  bottom: 0;
  z-index: -2;
  left: 0;
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



.accordion-item {
  background-color: ;
  
}
.bannerimg {
  min-height: 300px;
  max-height: 800px;
  width: 100%;
 }

.accordion-button {

 
}

`;

export default CSSReset