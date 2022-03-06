import React, { useEffect, useState, useRef } from 'react'
import ChessPeices from './ChessPeices'
import './ChessBoard.css'


function ChessBoard() {

    
            const timerRef = useRef(null)

            const [step, setstep] = useState();
            const [mounted, setmounted] = useState(true)       
            
          useEffect(() => {
            setstep(1) 
             return () => {
              setmounted(false);
              clearTimeout(timerRef.current)
          }
          }, [])

          useEffect(() =>{

            const pawn1w = document.getElementsByClassName("pawn1w");
            const pawn1b = document.getElementsByClassName("pawn1b");
            const bishop1w = document.getElementsByClassName("wbishop");
            const pawn2b = document.getElementsByClassName("pawn2b")
            const pawn3b = document.getElementsByClassName("pawn3b")
            const pawn2w = document.getElementsByClassName("pawn2w")
            const queenw = document.getElementsByClassName("wqueen")

            switch (step) {
              //turn one
              case 1:
                timerRef.current = setTimeout(() => {
                  if (mounted === true) {
                    pawn1w[0].classList.add ("jump_up");
                    setstep(step + 1)
                  }
                  }, 2000); 
                
                break;
              
              case 2: 
                timerRef.current =  setTimeout(() => {
                  if (mounted === true) {
                    pawn1w[0].attributes[3].nodeValue = "grid-area: 5 / 4 / auto / auto; max-width: 70%;" 
                    pawn1w[0].classList.remove ("jump_up") 
                    setstep(step + 1)
                  }
                }, 290); 
                break;

                case 3: 
                timerRef.current =  setTimeout(() => {
                  if (mounted === true) {
                    pawn1b[0].classList.add ("jump_down")
                    setstep(step + 1)
                  }
                }, 290); 
                break;

                case 4: 
                timerRef.current =  setTimeout(() => {
                  if (mounted === true) {
                    pawn1b[0].attributes[3].nodeValue = "grid-area: 4 / 6 / auto / auto; max-width: 70%;"
                    pawn1b[0].classList.remove ("jump_down"); 
                    result(1);
                    setstep(step + 1)
                  }
                }, 290); 
                break;
                
                //turn two
                case 5:
                  timerRef.current = setTimeout(() => {
                    if (mounted === true) {
                      bishop1w[0].classList.add ("jump_side")
                      setstep(step + 1)
                    }
                    }, 2000); 
                  
                  break;
                
                case 6: 
                  timerRef.current =  setTimeout(() => {
                    if (mounted === true) {
                      bishop1w[0].attributes[3].nodeValue = "grid-area: 4/7/auto/auto; max-width: 70%";
                      bishop1w[0].classList.remove("jump_side")
                      setstep(step + 1)
                    }
                  }, 790); 
                  break;
  
                  case 7: 
                  timerRef.current =  setTimeout(() => {
                    if (mounted === true) {
                      pawn3b[0].classList.add ("jump_down")
                      setstep(step + 1)
                    }
                  }, 290); 
                  break;
  
                  case 8: 
                  timerRef.current =  setTimeout(() => {
                    if (mounted === true) {
                      pawn3b[0].attributes[3].nodeValue = "grid-area: 3/8/auto/auto; max-width: 70%";
                      pawn3b[0].classList.remove("jump_down")
                      result(2);
                      setstep(step + 1)
                    }
                  }, 170); 
                  break;

                  //turn three
                  case 9:
                    timerRef.current = setTimeout(() => {
                      if (mounted === true) {
                        bishop1w[0].classList.add ("jump_side_down")
                        setstep(step + 1)
                      }
                      }, 2000); 
                    
                    break;
                  
                  case 10: 
                    timerRef.current =  setTimeout(() => {
                      if (mounted === true) {
                        bishop1w[0].attributes[3].nodeValue = "grid-area: 5/8/auto/auto; max-width: 70%";
                        bishop1w[0].classList.remove("jump_side_down")
                        setstep(step+1)
                      }
                    }, 270); 
                    break;
    
                    case 11: 
                    timerRef.current =  setTimeout(() => {
                      if (mounted === true) {
                        pawn2b[0].classList.add ("jump_down")
                        setstep(step + 1)
                      }
                    }, 270); 
                    break;
    
                    case 12: 
                    timerRef.current =  setTimeout(() => {
                      if (mounted === true) {
                        pawn2b[0].attributes[3].nodeValue = "grid-area: 4 / 7 / auto / auto; max-width: 70%;"
                        pawn2b[0].classList.remove ("jump_down")
                        result(3);
                        setstep(step + 1)
                      }
                    }, 270); 
                    break;
                    
                    //turn four
                  case 13:
                timerRef.current = setTimeout(() => {
                  if (mounted === true) {
                    pawn2w[0].classList.add ("jump_up")
                    setstep(step + 1)
                  }
                  }, 2000); 
                
                break;
              
              case 14: 
                timerRef.current =  setTimeout(() => {
                  if (mounted === true) {
                    pawn2w[0].attributes[3].nodeValue = "grid-area: 5 / 5 / auto / auto; max-width: 70%;"
                    pawn2w[0].classList.remove ("jump_up")
                    setstep(step+1)
                  }
                }, 270); 
                break;

                case 15: 
                timerRef.current =  setTimeout(() => {
                  if (mounted === true) {
                    pawn1b[0].classList.add ("jump_left_down")
                    setstep(step + 1)
                  }
                }, 270); 
                break;

                case 16: 
                timerRef.current =  setTimeout(() => {
                  if (mounted === true) {
                    pawn1b[0].attributes[3].nodeValue = "grid-area: 5 / 5 / auto / auto; max-width: 70%;"
                    pawn1b[0].classList.remove ("jump_left_down")
                    pawn2w[0].classList.add ("exit") 
                    result(4);
                    setstep(step + 1)
                  }
                }, 270); 
                break;
                //turn five
                case 17: 
              timerRef.current = setTimeout(() => {
                if (mounted === true) {
                  queenw[0].classList.add ("jump_side")
                  setstep(step + 1)
                }
                }, 2000); 
              
              break;
            
            case 18: 
              timerRef.current =  setTimeout(() => {
                if (mounted === true) {
                  queenw[0].attributes[3].nodeValue = "grid-area: 4/8/auto/auto; max-width: 70%";     
                  queenw[0].classList.remove("jump_side")
                  setstep(step+1)
                }
              }, 670); 
              break;

              case 19:
                timerRef.current = setTimeout(() => {
                  if (mounted === true) {
                    result(5);
                    setstep(step + 1)
                  }
                  }, 470); 
                
                break;



              default:
                break;
            }

          
          },[mounted, step]);
          
  

       function result(number) { 

        const mapinfo = document.querySelector(".roadmap_info"); 
        const road_div = document.createElement("span");
        const roadinfo = document.createElement("p")
        road_div.classList = "roadmapinfo"
        switch (number) {

          case 1:
            roadinfo.innerText = "Q1 2022:  Beta Access Via Whitelist"
            road_div.append(roadinfo)
            mapinfo.append(road_div)
          break;

          case 2:
            roadinfo.innerText = "Q2 2022: NFT Sales"
            road_div.append(roadinfo)
            mapinfo.append(road_div)
          break;

          case 3:
            roadinfo.innerText = "Q3 2022: Game Development"
            road_div.append(roadinfo)
            mapinfo.append(road_div)
          break;

          case 4:
            roadinfo.innerText = "Q4 2020: Smart Contract Integration"
            road_div.append(roadinfo)
            mapinfo.append(road_div)
          break;

          case 5:
            roadinfo.innerText = "Q1 2023: Projected Launch"
            road_div.append(roadinfo)
            mapinfo.append(road_div)
          break;

          default:
            break;
        }


   
       }



    return (
      <div>
            <ChessPeices/>
        </div>
    )

  }
  
  export default ChessBoard
  