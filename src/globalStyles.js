
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
  margin-top: 3em;
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
    background: black !important;
  }
  
  
  ::-webkit-scrollbar-thumb {
      background:  #002370
    }
    
    
    ::-webkit-scrollbar-thumb:hover {
      background: #0043d5;
  }

  body {
    background-image: radial-gradient(circle, #f2f2f2, #f0f0f0, #eeeeee, #edecec, #ebeaea, #ecebeb, #edecec, #eeeded, #f2f1f2, #f6f6f6, #fbfafb, #ffffff)!important;
   
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
  background-color: #000000 !important;
  
}
.bannerimg {
  min-height: 300px;
  max-height: 800px;
  width: 100%;
 }

.accordion-button {

  color: #ffffff !important;

  background-color: #fff0 !important;
 
}

`;

export default CSSReset