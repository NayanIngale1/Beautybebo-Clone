// import React from 'react';
// import {
//   Nav,
//   Navbar,
//   Container,
//   NavDropdown,
//   Form,
//   FormControl,
//   Button,
// } from 'react-bootstrap';

// export const Header = () => {
//   return (
//     <div>
//       <Navbar bg="light" expand="lg">
//         <Container fluid>
//           <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="me-auto my-2 my-lg-0"
//               style={{ maxHeight: '100px' }}
//               navbarScroll
//             >
//               <Nav.Link href="#action1">Home</Nav.Link>
//               <Nav.Link href="#action2">Link</Nav.Link>
//               <NavDropdown title="Link" id="navbarScrollingDropdown">
//                 <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action4">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action5">
//                   Something else here
//                 </NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link href="#" disabled>
//                 Link
//               </Nav.Link>
//             </Nav>
//             <Form className="d-flex">
//               <input style={{}} />
//               <Button variant="outline-success">Search</Button>
//             </Form>
//             <Nav>
//               <h1>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                   <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
//                 </svg>
//               </h1>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

import React from 'react';
import './Header.css';
import { AllCategroies } from './DropDownItems';

export const Header = () => {
  return (
    <>
      <div className="main-nav">
        <div className="main-nav-logo">
          <img src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png" />
        </div>

        <div className="main-nav-middle">
          <form>
            <div>
              <div className="main-input">
                <select>
                  {AllCategroies.map((e) => {
                    return <option>{e.title}</option>;
                  })}
                </select>
                <span>|</span>
                <input type="text" placeholder="Enter your search..." />
                <button>Search</button>
              </div>
            </div>
          </form>
        </div>
        <div className="main-nav-profile">
          <div className="like-icon">a</div>
          <div className="user-icon">
            <div className="a">a</div>
            <div>My acount</div>
          </div>
        </div>
      </div>
    </>
  );
};
