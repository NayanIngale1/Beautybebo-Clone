// import React from 'react';
// import {
//   Nav,
//   Navbar,
//   Container,
//   NavDropdown,
//   Form,
//   FormControl,
//   Button,
//   SplitButton,
//   DropdownButton,
//   Dropdown,
//   ButtonGroup,
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
//               {/* <Nav.Link href="#action1">Home</Nav.Link>
//               <Nav.Link href="#action2">Link</Nav.Link> */}

//               <Nav.Link href="#" disabled>
//                 Link
//               </Nav.Link>
//             </Nav>
//             <Form className="d-flex" style={{ border: '1px solid red' }}>
//               <NavDropdown
//                 title="Link"
//                 id="navbarScrollingDropdown"
//                 style={{ border: 'red' }}
//               >
//                 <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action4">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action5">
//                   Something else here
//                 </NavDropdown.Item>
//               </NavDropdown>
//               <span>|</span>
//               <FormControl
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//               />

//               <Button variant="outline-success">Search</Button>
//             </Form>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };
import { MdFavorite } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import './Header.css';
import { AllCategroies } from './DropDownItems';
import { HandleLogin } from './HandleLogin';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [iconClick, setIconClick] = useState(false);
  const [loginDropDown, seloginDropDown] = useState(false);

  // useEffect(() => {
  //   handleLogin()
  // }, []);
  // const handleLogin = () => {
  //   setIconClick(true);
  // };
  return (
    <>
      <div className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png" />
        </Link>

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
                <button>
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* <div className="main-nav-profile">
          <div className="like-icon">
            <i className="fa-solid fa-heart"></i>
          </div>
          <div className="user-icon">
            <div
              onClick={() => {
                setIconClick(!iconClick);
              }}
              className="user-icon-pic"
            >
              <i className="fa fa-user" aria-hidden="false"></i>
              {iconClick ? <HandleLogin /> : ''}
            </div>
            <span>My Account</span>
          </div>
        </div> */}
        <div id="profile_div">
          <div id="fav_div">
            <MdFavorite />
          </div>
          <div
            id="account_div"
            onClick={() => {
              seloginDropDown(!loginDropDown);
            }}
          >
            <div id="avatar">
              <FaUser />
            </div>
            <div
              id="content"
              onClick={() => {
                seloginDropDown(!loginDropDown);
              }}
            >
              My Account
            </div>
            {loginDropDown ? (
              <>
                <div id="content_dropdown">
                  <Link
                    style={{ textDecoration: 'none', color: '#666666' }}
                    to="/login"
                    id="login_dropdown"
                  >
                    Login
                  </Link>
                  <Link
                    style={{ textDecoration: 'none', color: '#666666' }}
                    to="/register"
                    id="register_dropdown"
                  >
                    Register
                  </Link>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
