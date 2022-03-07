import React, {useState} from 'react';
import styled  from "styled-components";
import Container from 'react-bootstrap/Container'
import banner from './images/bannerx.png'
import Image from 'react-bootstrap/Image'



function Home() {


       
    return (

        
 <Container fluid style={{padding:'0 0 0 0', marginTop:"3rem"}}>
    <home.Wrapper>
        <Image className='bannerimg' fluid src={banner}>
            
        </Image>
        <home.Info>
            <Container>

            <home.Title>Crypto Scholars was born from a passion for Chess, Artificial Intellegince and Art.  </home.Title>
            </Container>
        </home.Info>
            
    </home.Wrapper>   
               
               
 </Container>

                           
          
    )
}



const home = {

    Info: styled.div`
    margin:auto;
    width: 100%;
    color: black;
    background-image: linear-gradient(to bottom,#e3e3e3,#e3e3e3,#e3e3e3,#e2e2e2,#e3e3e3,#e3e3e3,#e2e2e2,#e3e3e3,#e2e2e2,#e3e3e3,#e2e2e2);
    padding-bottom: 1em;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.4)
        @media(max-width: 964px) {   
   
    }    
    `,
    Title: styled.h1`
    text-align: center; 
    padding-bottom: 1rem;
    font-family: 'Tangerine', cursive;
    `,



    Wrapper: styled.div`
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.4), 0 -2px 4px 0 rgba(0,0,0,.4) ;

    
    
    `,
  };

export default Home