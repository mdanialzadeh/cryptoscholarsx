import React from 'react'
import ChessBoard from './ChessBoard'
import styled from "styled-components";
import Container from 'react-bootstrap/Container'

function Roadmap() {


        
    return (
      
      <road.Container id = "roadmap" className = "roadmap_container">
              <Container>
              
                <road.Wrapper>
              
                <road.Title>Road Map</road.Title>
             
                  <road.Map>
                <ChessBoard/>
                <road.Info className= "roadmap_info"></road.Info>
            
                    </road.Map>          
              </road.Wrapper>
                
        </Container>
            </road.Container>
       
    )
}

const road = {

 
  Container: styled.div`
      display:flex;
      justify-content: center;
      flex-direction: column;
      width: 100%; 
      padding: 140px 10px;

     
      @media(max-width: 940px) {
       
      }
    
         
    
  `,
  Wrapper: styled.div`
  
  max-width: 1220px;
  width: 95%;
  margin: auto;
  @media(max-width: 940px) {
       
  }
  `,

  Map: styled.div`
  padding: 100px 0;
  display: flex;
 width: 100%;
 margin: auto;
 justify-content: space-around;
  box-sizing: border-box;
  align-items: center;
  @media(max-width: 964px) {
    flex-direction: column;

  }
  
  
  
  `,

    Title: styled.h2`
    
    max-width: 1220px;
    

    margin: auto;
    @media (max-width: 640px) {
  
    }
    `,
    Hold: styled.div`
    background: rgb(2,0,36);
    background: linear-gradient(258deg, rgba(2,0,36,0) 10%, rgba(9,9,121,1) 40%, rgba(0,212,255,0.5670995670995671) 100%);
    padding: .4rem;
    @media (max-width: 640px) {
  
    }
    `,

    Info: styled.div`
    display: grid;
    height: calc((8.5rem + ((10vw - 0.4px) * 3.4068)));
    width: calc(8.5rem + ((10vw - 0.5px) * 3.4068));
    max-width: 30em;
    max-height: 30em;
    padding-top: 10%;
    grid-template: 1fr 1fr 1fr 1fr 1fr / 1fr;
    grid-auto-flow: column;

    justify-items: center;
    align-items: center;
    @media (min-width: 764px) {
    padding-top: 0; 
    }

    @media (min-width: 1024px) {
      

    }
    `,

   
  };

  

export default Roadmap
