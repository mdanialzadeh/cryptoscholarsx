import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom"


function Navtop() {
  return (
<Navbar variant="light" bg="white" expand="sm" fixed='top'>
  <Container >
    <Navbar.Brand  style={{fontSize:'1.4rem', fontWeight:'700'}}>
    <Link  id="nava" className="newsnav" to="/home"  >

            <svg width="16rem" height="50" viewBox="0 0 690 120" class="css-1j8o68f"><defs id="SvgjsDefs2105"><linearGradient id="SvgjsLinearGradient2108"><stop id="SvgjsStop2109" stop-color="#2d388a" offset="0"></stop><stop id="SvgjsStop2110" stop-color="#00aeef" offset="1"></stop></linearGradient></defs><g id="SvgjsG2106" featurekey="tpnldm-0" transform="matrix(3.899202204577209,0,0,3.899202204577209,-2.3395218805316746,25.86685099929467)" fill="url(#SvgjsLinearGradient2108)"><path d="M5.38 13 l0 4.7 q0 2.3 -2.24 2.3 l-0.3 0 q-1.2 0 -1.72 -0.61 t-0.52 -1.69 l0 -14.34 q0 -1.1 0.52 -1.7 t1.72 -0.6 l0.3 0 q2.24 0 2.24 2.3 l0 4.7 l-1.66 0 l0 -4.48 q0 -0.4 -0.16 -0.63 t-0.58 -0.23 t-0.57 0.23 t-0.15 0.63 l0 13.9 q0 0.4 0.15 0.63 t0.57 0.23 t0.58 -0.23 t0.16 -0.63 l0 -4.48 l1.66 0 z M11.36 20 l-1.64 0 l-0.02 -5.72 q0 -0.72 -0.14 -1.21 t-0.54 -1.09 q-0.46 0.7 -0.62 1.22 t-0.16 1.34 l0 5.46 l-1.66 0 l0 -18.68 l2.54 0 q2.24 0 2.24 2.32 l0 2.88 q0 1.32 -0.26 2.1 t-1.04 1.9 q0.76 1.08 1.03 1.85 t0.27 2.03 l0 5.6 z M9.700000000000001 3.84 q0 -0.4 -0.15 -0.63 t-0.57 -0.23 l-0.74 0 l0 7.2 q0.06 -0.06 0.09 -0.12 t0.07 -0.1 q0.8 -1.1 1.05 -1.69 t0.25 -1.51 l0 -2.92 z M17.28 1.3200000000000003 l0 18.68 l-1.66 0 l0 -5.6 q0 -0.88 -0.25 -1.47 t-1.05 -1.69 t-1.16 -1.74 t-0.51 -1.32 t-0.15 -1.72 l0 -5.14 l1.66 0 l0 5.34 q0 0.96 0.24 1.57 t1.04 1.71 l0.18 0.26 l0 -8.88 l1.66 0 z M23.28 3.6400000000000006 l0 2.8 q0 1.04 -0.16 1.72 t-0.51 1.31 t-1.15 1.75 q-0.82 1.12 -1.07 1.7 t-0.25 1.5 l0 5.58 l-1.66 0 l0 -18.68 l2.56 0 q2.24 0 2.24 2.32 z M20.14 2.9800000000000004 l0 7.2 q0.18 -0.24 0.2 -0.26 q0.8 -1.1 1.04 -1.7 t0.24 -1.56 l0 -2.82 q0 -0.4 -0.16 -0.63 t-0.58 -0.23 l-0.74 0 z M29.26 2.9800000000000004 l-1.56 0 l0 17.02 l-1.66 0 l0 -17.02 l-1.56 0 l0 -1.66 l4.78 0 l0 1.66 z M35.24 3.3599999999999994 l0 14.34 q0 2.3 -2.24 2.3 l0.88 0 l-1.18 0 q-1.2 0 -1.72 -0.61 t-0.52 -1.69 l0 -14.34 q0 -1.1 0.52 -1.7 t1.72 -0.6 l0.98 0 l-0.68 0 q2.24 0 2.24 2.3 z M33.580000000000005 3.5799999999999983 q0 -0.4 -0.16 -0.63 t-0.58 -0.23 t-0.57 0.23 t-0.15 0.63 l0 13.9 q0 0.4 0.15 0.63 t0.57 0.23 t0.58 -0.23 t0.16 -0.63 l0 -13.9 z M42.34 8.22 q0.24 0.6 1.04 1.7 q0.8 1.12 1.16 1.74 t0.52 1.29 t0.16 1.71 l0 3.04 q0 2.3 -2.24 2.3 l-0.3 0 q-1.2 0 -1.72 -0.61 t-0.52 -1.69 l0 -4.66 l1.66 0 l0 4.44 q0 0.4 0.15 0.63 t0.57 0.23 t0.58 -0.23 t0.16 -0.63 l0 -3.06 q0 -0.92 -0.25 -1.5 t-1.05 -1.7 q-0.8 -1.1 -1.16 -1.74 t-0.51 -1.32 t-0.15 -1.72 l0 -3.08 q0 -1.1 0.52 -1.7 t1.72 -0.6 l0.3 0 q2.24 0 2.24 2.3 l0 4.7 l-1.66 0 l0 -4.48 q0 -0.4 -0.16 -0.63 t-0.58 -0.23 t-0.57 0.23 t-0.15 0.63 l0 3.08 q0 0.96 0.24 1.56 z M51.20000000000001 13 l0 4.7 q0 2.3 -2.24 2.3 l-0.3 0 q-1.2 0 -1.72 -0.61 t-0.52 -1.69 l0 -14.34 q0 -1.1 0.52 -1.7 t1.72 -0.6 l0.3 0 q2.24 0 2.24 2.3 l0 4.7 l-1.66 0 l0 -4.48 q0 -0.4 -0.16 -0.63 t-0.58 -0.23 t-0.57 0.23 t-0.15 0.63 l0 13.9 q0 0.4 0.15 0.63 t0.57 0.23 t0.58 -0.23 t0.16 -0.63 l0 -4.48 l1.66 0 z M52.40000000000001 1.3200000000000003 l0 18.68 l1.64 0 l0.02 -5.58 q0 -0.92 0.25 -1.51 t1.05 -1.69 l0.16 -0.22 l0 9 l1.66 0 l0 -18.68 l-1.66 0 l0 5.34 q0 0.96 -0.24 1.56 t-1.04 1.7 q-0.18 0.24 -0.2 0.26 l0 -8.86 l-1.64 0 z M63.180000000000014 3.3599999999999994 l0 14.34 q0 2.3 -2.24 2.3 l0.88 0 l-1.18 0 q-1.2 0 -1.72 -0.61 t-0.52 -1.69 l0 -14.34 q0 -1.1 0.52 -1.7 t1.72 -0.6 l0.98 0 l-0.68 0 q2.24 0 2.24 2.3 z M61.52000000000001 3.5799999999999983 q0 -0.4 -0.16 -0.63 t-0.58 -0.23 t-0.57 0.23 t-0.15 0.63 l0 13.9 q0 0.4 0.15 0.63 t0.57 0.23 t0.58 -0.23 t0.16 -0.63 l0 -13.9 z M66.04000000000002 1.3200000000000003 l0 17 l1.46 0 l0 1.68 l-3.12 0 l0 -18.68 l1.66 0 z M68.62000000000002 20 l0.98 -18.68 l2.82 0 l0.98 18.68 l-1.54 0 l-0.2 -3.9 l-0.28 0.4 q-0.52 0.72 -0.76 1.16 t-0.32 0.85 t-0.12 1.11 l-0.02 0.38 l-1.54 0 z M71.26000000000002 13.52 q0.18 -0.5 0.18 -1.42 l-0.44 -8.28 l-0.58 11.14 q0.66 -0.94 0.84 -1.44 z M79.38000000000002 20 l-1.64 0 l-0.02 -5.72 q0 -0.72 -0.14 -1.21 t-0.54 -1.09 q-0.46 0.7 -0.62 1.22 t-0.16 1.34 l0 5.46 l-1.66 0 l0 -18.68 l2.54 0 q2.24 0 2.24 2.32 l0 2.88 q0 1.32 -0.26 2.1 t-1.04 1.9 q0.76 1.08 1.03 1.85 t0.27 2.03 l0 5.6 z M77.72000000000003 3.84 q0 -0.4 -0.15 -0.63 t-0.57 -0.23 l-0.74 0 l0 7.2 q0.06 -0.06 0.09 -0.12 t0.07 -0.1 q0.8 -1.1 1.05 -1.69 t0.25 -1.51 l0 -2.92 z M82.48000000000003 8.22 q0.24 0.6 1.04 1.7 q0.8 1.12 1.16 1.74 t0.52 1.29 t0.16 1.71 l0 3.04 q0 2.3 -2.24 2.3 l-0.3 0 q-1.2 0 -1.72 -0.61 t-0.52 -1.69 l0 -4.66 l1.66 0 l0 4.44 q0 0.4 0.15 0.63 t0.57 0.23 t0.58 -0.23 t0.16 -0.63 l0 -3.06 q0 -0.92 -0.25 -1.5 t-1.05 -1.7 q-0.8 -1.1 -1.16 -1.74 t-0.51 -1.32 t-0.15 -1.72 l0 -3.08 q0 -1.1 0.52 -1.7 t1.72 -0.6 l0.3 0 q2.24 0 2.24 2.3 l0 4.7 l-1.66 0 l0 -4.48 q0 -0.4 -0.16 -0.63 t-0.58 -0.23 t-0.57 0.23 t-0.15 0.63 l0 3.08 q0 0.96 0.24 1.56 z"></path></g></svg>
    </Link>
        
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">


    <Nav>
      <Nav.Link eventKey={1} href=""><Link  id="nava" className="homenav" to="/home" >Home</Link> </Nav.Link>
      <Nav.Link eventKey={2} href=""><Link  id="nava" className="newsnav" to="/news" >News</Link> </Nav.Link>
      <Nav.Link eventKey={3} href=""><Link  id="nava" className="aboutnav" to="/about">About</Link> </Nav.Link>
      


  
    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>

)
}

export default Navtop;



