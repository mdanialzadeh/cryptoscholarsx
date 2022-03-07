import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom"


function Navtop() {
  return (
<Navbar variant="light" bg="white" expand="md" collapseOnSelect={true} fixed='top'style={{boxShadow: "0 2px 4px 0 rgba(0,0,0,.4)"}}>
  <Container >
    <Navbar.Brand  style={{fontSize:'1.4rem', fontWeight:'700'}}>
    <Link  id="nava" className="logonav" to="/home"  >

<svg width="200" height="40.297568316427544" viewBox="0 -10 200 60.297568316427544" class="css-1j8o68f"><defs id="SvgjsDefs5277"></defs><g id="SvgjsG5278" featurekey="nameFeature-0" transform="matrix(0.8054997085508447,0,0,0.8054997085508447,-2.6887367576534977,-13.604820449191209)" fill="#111111"><path d="M34.859 35.3 l0.080272 4.6484 l-2.3241 0.04004 c-0.030078 0.0005078 -2.055 0.034258 -6.0152 0.034258 c-2.0063 0 -4.5092 -0.0089064 -7.5012 -0.034805 c-4.8264 -0.042108 -8.6856 -1.0842 -11.47 -3.0979 c-2.767 -2.0014 -4.2908 -4.9124 -4.2908 -8.1972 c0 -3.2826 1.5371 -6.2004 4.328 -8.2148 c2.766 -1.9969 6.7232 -3.0621 11.444 -3.0804 c8.882 -0.034258 13.438 0.00054688 13.483 0.00082032 l2.3244 0.01832 l-0.036641 4.6492 l-2.3244 -0.01832 c-0.044728 -0.0005078 -4.5784 -0.035039 -13.429 -0.00078124 c-6.8716 0.02668 -11.14 2.5732 -11.14 6.6464 c0 1.8039 0.79624 3.2946 2.3662 4.43 c1.9587 1.4167 4.9968 2.1832 8.7852 2.2161 c8.8288 0.077148 13.352 0.0017969 13.396 0.0010156 z M75.135 35.114 l2.324 -0.034844 l0.069572 4.6484 l-2.3241 0.034805 c-0.36176 0.005508 -0.77084 0.011797 -1.2174 0.011797 c-3.2279 0 -8.4052 -0.32016 -11.676 -3.5423 c-1.456 -1.4345 -2.3731 -3.258 -2.7396 -5.44 l-8.4109 0 l-0.033203 8.9792 l-4.6492 -0.017266 l0.074804 -20.255 l0 -2.327 l0.0086328 0 l0 -0.0086328 l2.3223 0.0086328 l21.902 0 c2.9457 0 7.3276 1.8136 7.3276 6.8096 c0 4.9964 -4.0724 6.81 -6.8096 6.81 l-6.9651 0 c0.25086 0.8504 0.65684 1.5585 1.2347 2.1279 c2.337 2.3019 7.216 2.2292 9.5608 2.1939 z M51.202799999999996 26.143 l20.081 -0.000039062 c0.20297 -0.0070704 0.80852 -0.083436 1.3076 -0.35942 c0.43216 -0.2391 0.87372 -0.64012 0.87372 -1.8015 c0 -0.93384 -0.31598 -1.4394 -1.1276 -1.8033 c-0.73764 -0.33062 -1.543 -0.3573 -1.5506 -0.3573 l-19.584 0 l0 4.3216 z M121.5 16.89 l0.033516 2.3475 c0.036641 2.5258 -0.98144 4.978 -2.8667 6.9048 c-1.7693 1.8086 -5.0244 3.9321 -10.734 4.4284 l-0.073516 9.2524 l-4.6952 -0.032188 l0.072968 -9.1988 c-4.4648 -0.36281 -8.18 -1.8598 -10.617 -4.3144 c-1.9467 -1.9608 -2.9982 -4.4612 -2.9608 -7.0404 l0.034258 -2.3474 l4.6948 0.06828 l-0.034024 2.3474 c-0.019102 1.3246 0.53336 2.5918 1.5982 3.664 c1.9606 1.9747 5.3816 3.0474 9.6268 3.014 c4.3352 -0.031641 7.7912 -1.1413 9.7316 -3.1248 c1.0183 -1.0406 1.5464 -2.2692 1.5279 -3.553 l-0.034024 -2.3474 z M157.62800000000001 16.95 c2.9747 0 7.4 1.8319 7.4 6.8776 s-4.1128 6.8776 -6.8776 6.8776 l-20.344 0 l-0.033476 9.0684 l-4.6952 -0.017539 l0.075588 -20.455 l0 -2.3514 l0.0086328 0 l0 -0.0086328 l2.3477 0.0086328 l22.118 0 z M159.45100000000002 25.647 c0.43632 -0.24144 0.8826 -0.64608 0.88236 -1.819 c0 -0.94328 -0.31914 -1.4539 -1.139 -1.8214 c-0.745 -0.33402 -1.5585 -0.36098 -1.5661 -0.36098 l-19.779 0 l0 4.3645 l20.281 0 c0.2048 -0.0070704 0.81636 -0.08422 1.3204 -0.36305 z M176.53850000000003 16.95 l31.875 0 l0 4.6954 l-13.591 0 l0 18.186 l-4.6951 0 l0 -18.186 l-13.589 0 l0 -4.6954 z M249.829 19.299 c1.8355 1.8198 1.8204 4.452 1.7971 8.4364 c-0.0018359 0.29664 -0.0033984 0.604 -0.0046876 0.92236 c-0.0089064 2.3647 -0.015195 4.0732 -0.26344 5.514 c-0.21137 1.2284 -0.69948 2.9991 -2.4872 4.1908 c-2.2642 1.5093 -5.6464 1.5434 -13.056 1.6174 c-1.1572 0.011524 -2.2245 0.020156 -3.2091 0.020156 c-5.8708 0 -8.822 -0.31074 -10.708 -2.1844 c-1.964 -1.9514 -1.953 -4.8252 -1.9368 -9.1752 c0.018047 -4.8536 0.029024 -7.7832 2.4894 -9.602 c2.1227 -1.569 5.2056 -1.6103 11.96 -1.7011 l1.3479 -0.018555 c8.4176 -0.12031 11.902 -0.17027 14.071 1.9805 z M246.963 27.708 c0.013086 -2.2896 0.026914 -4.6576 -0.41728 -5.0976 c-0.55112 -0.54644 -3.0246 -0.67276 -6.3168 -0.67276 c-1.3547 0 -2.8484 0.021445 -4.4036 0.043672 l-1.3521 0.018555 c-4.8388 0.064884 -8.3348 0.11195 -9.25 0.78812 c-0.5776 0.42692 -0.587 2.9488 -0.59796 5.8692 c-0.010195 2.7118 -0.019883 5.2732 0.56032 5.8496 c0.9108 0.90508 5.8276 0.85564 10.583 0.80856 c5.4604 -0.054412 9.4056 -0.093908 10.516 -0.8342 c0.65372 -0.4358 0.66208 -2.7032 0.67384 -5.8416 c0.0010547 -0.32148 0.0028906 -0.632 0.0047264 -0.93176 z"></path></g><g id="SvgjsG5279" featurekey="nameFeature-1" transform="matrix(0.5954246175408043,0,0,0.5954246175408043,-1.9880621729745944,19.817957254552475)" fill="#111111"><path d="M8.916 22.009 c-0.43632 0.24117 -0.88236 0.64612 -0.88236 1.8193 c0 0.91448 0.29558 1.4144 1.0547 1.7822 c0.76772 0.37195 1.6239 0.39914 1.6671 0.4002 l17.067 0.06672 c2.9656 0 7.3912 1.8316 7.3912 6.8776 s-4.1128 6.8776 -6.8776 6.8776 l-24.997 0 l0 -4.6954 l24.977 0 c0.2048 -0.0070704 0.81636 -0.08422 1.3204 -0.36305 c0.43656 -0.24144 0.88256 -0.64636 0.88256 -1.8193 c0 -0.91448 -0.29558 -1.4144 -1.0547 -1.7822 c-0.7654 -0.37094 -1.6208 -0.39894 -1.6686 -0.40024 l-17.056 -0.07586 l0 0.0091406 c-2.975 0 -7.4008 -1.8316 -7.4008 -6.8776 s4.1128 -6.8776 6.8776 -6.8776 l24.997 0 l0 4.6954 l-24.976 0 c-0.20457 0.0070704 -0.81668 0.08422 -1.321 0.36305 z M78.239 35.3 l0.080272 4.6484 l-2.3241 0.04004 c-0.030078 0.0005078 -2.055 0.034258 -6.0152 0.034258 c-2.0063 0 -4.5092 -0.0089064 -7.5012 -0.034805 c-4.8264 -0.042108 -8.6856 -1.0842 -11.47 -3.0979 c-2.767 -2.0014 -4.2908 -4.9124 -4.2908 -8.1972 c0 -3.2826 1.5371 -6.2004 4.328 -8.2148 c2.766 -1.9969 6.7232 -3.0621 11.444 -3.0804 c8.882 -0.034258 13.438 0.00054688 13.483 0.00082032 l2.3244 0.01832 l-0.036641 4.6492 l-2.3244 -0.01832 c-0.044728 -0.0005078 -4.5784 -0.035039 -13.429 -0.00078124 c-6.8716 0.02668 -11.14 2.5732 -11.14 6.6464 c0 1.8039 0.79624 3.2946 2.3662 4.43 c1.9587 1.4167 4.9968 2.1832 8.7852 2.2161 c8.8288 0.077148 13.352 0.0017969 13.396 0.0010156 z M117.03800000000001 17.234 l4.6951 0 l0 22.815 l-4.6951 0 l0 -9.0599 l-22.484 0 l0 9.0599 l-4.6954 0 l0 -22.815 l4.6954 0 l0 9.0599 l22.484 0 l0 -9.0599 z M163.109 19.299 c1.8355 1.8198 1.8204 4.452 1.7971 8.4364 c-0.0018359 0.29664 -0.0033984 0.604 -0.0046876 0.92236 c-0.0089064 2.3647 -0.015195 4.0732 -0.26344 5.514 c-0.21137 1.2284 -0.69948 2.9991 -2.4872 4.1908 c-2.2642 1.5093 -5.6464 1.5434 -13.056 1.6174 c-1.1572 0.011524 -2.2245 0.020156 -3.2091 0.020156 c-5.8708 0 -8.822 -0.31074 -10.708 -2.1844 c-1.964 -1.9514 -1.953 -4.8252 -1.9368 -9.1752 c0.018047 -4.8536 0.029024 -7.7832 2.4894 -9.602 c2.1227 -1.569 5.2056 -1.6103 11.96 -1.7011 l1.3479 -0.018555 c8.4176 -0.12031 11.902 -0.17027 14.071 1.9805 z M160.243 27.708 c0.013086 -2.2896 0.026914 -4.6576 -0.41728 -5.0976 c-0.55112 -0.54644 -3.0246 -0.67276 -6.3168 -0.67276 c-1.3547 0 -2.8484 0.021445 -4.4036 0.043672 l-1.3521 0.018555 c-4.8388 0.064884 -8.3348 0.11195 -9.25 0.78812 c-0.5776 0.42692 -0.587 2.9488 -0.59796 5.8692 c-0.010195 2.7118 -0.019883 5.2732 0.56032 5.8496 c0.9108 0.90508 5.8276 0.85564 10.583 0.80856 c5.4604 -0.054412 9.4056 -0.093908 10.516 -0.8342 c0.65372 -0.4358 0.66208 -2.7032 0.67384 -5.8416 c0.0010547 -0.32148 0.0028906 -0.632 0.0047264 -0.93176 z M181.114 35.238 l27.18 0 l0 4.6954 l-31.875 0 l0 -22.815 l4.6954 0 l0 18.119 z M236.171 15.421 l18.353 24.38 l-5.9015 0 l-5.132 -6.7948 l-14.639 0 l-5.0572 6.7948 l-5.8354 0 z M232.372 28.311 l7.5966 0 l-3.7984 -5.0644 z M292.83500000000004 35.114 l2.324 -0.034844 l0.069572 4.6484 l-2.3241 0.034805 c-0.36176 0.005508 -0.77084 0.011797 -1.2174 0.011797 c-3.2279 0 -8.4052 -0.32016 -11.676 -3.5423 c-1.456 -1.4345 -2.3731 -3.258 -2.7396 -5.44 l-8.4109 0 l-0.033203 8.9792 l-4.6492 -0.017266 l0.074804 -20.255 l0 -2.327 l0.0086328 0 l0 -0.0086328 l2.3223 0.0086328 l21.902 0 c2.9457 0 7.3276 1.8136 7.3276 6.8096 c0 4.9964 -4.0724 6.81 -6.8096 6.81 l-6.9651 0 c0.25086 0.8504 0.65684 1.5585 1.2347 2.1279 c2.337 2.3019 7.216 2.2292 9.5608 2.1939 z M268.9028 26.143 l20.081 -0.000039062 c0.20297 -0.0070704 0.80852 -0.083436 1.3076 -0.35942 c0.43216 -0.2391 0.87372 -0.64012 0.87372 -1.8015 c0 -0.93384 -0.31598 -1.4394 -1.1276 -1.8033 c-0.73764 -0.33062 -1.543 -0.3573 -1.5506 -0.3573 l-19.584 0 l0 4.3216 z M312.93600000000004 22.009 c-0.43632 0.24117 -0.88236 0.64612 -0.88236 1.8193 c0 0.91448 0.29558 1.4144 1.0547 1.7822 c0.76772 0.37195 1.6239 0.39914 1.6671 0.4002 l17.067 0.06672 c2.9656 0 7.3912 1.8316 7.3912 6.8776 s-4.1128 6.8776 -6.8776 6.8776 l-24.997 0 l0 -4.6954 l24.977 0 c0.2048 -0.0070704 0.81636 -0.08422 1.3204 -0.36305 c0.43656 -0.24144 0.88256 -0.64636 0.88256 -1.8193 c0 -0.91448 -0.29558 -1.4144 -1.0547 -1.7822 c-0.7654 -0.37094 -1.6208 -0.39894 -1.6686 -0.40024 l-17.056 -0.07586 l0 0.0091406 c-2.975 0 -7.4008 -1.8316 -7.4008 -6.8776 s4.1128 -6.8776 6.8776 -6.8776 l24.997 0 l0 4.6954 l-24.976 0 c-0.20457 0.0070704 -0.81668 0.08422 -1.321 0.36305 z"></path></g></svg>
    </Link>
        
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >


    <Nav>
      <Nav.Link eventKey={1} href=""><Link  id="nava" className="homenav" to="/home" >Home</Link> </Nav.Link>
      <Nav.Link eventKey={2} href=""><Link  id="nava" className="roadnav" to="/roadmap">Road Map</Link> </Nav.Link>
      <Nav.Link eventKey={4} href=""><Link  id="nava" className="newsnav" to="/nft" >NFT's</Link> </Nav.Link>
      <Nav.Link eventKey={5} href=""><Link  id="nava" className="newsnav" to="/news" >News</Link> </Nav.Link>
      <Nav.Link eventKey={6} href=""><Link  id="nava" className="aboutnav" to="/about">About</Link> </Nav.Link>
      


  
    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>

)
}

export default Navtop;



