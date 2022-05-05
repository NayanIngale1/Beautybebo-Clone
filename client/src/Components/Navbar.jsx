import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import { Face } from './DropDownItems';
import { eye } from './DropDownItems';
import { ToolsBrushes } from './DropDownItems';
import { Nails } from './DropDownItems';
import { BodyCare } from './DropDownItems';
import { FaceCare } from './DropDownItems';
import { HairCare } from './DropDownItems';
import { HairLoss } from './DropDownItems';
import { BathBody } from './DropDownItems';
import { BathingAccessories } from './DropDownItems';
import { BathShower } from './DropDownItems';
import { BabyCare } from './DropDownItems';
import { MomCare } from './DropDownItems';
import { NaturalHairCare } from './DropDownItems';
import { NaturalSkinCare } from './DropDownItems';
import { Fragrance } from './DropDownItems';
import { EyeCare } from './DropDownItems';
import { Lips } from './DropDownItems';
import './Navbar.css';

export const Navbars = () => {
  return (
    <div>
      <Link to="/Register">Register</Link>
      <Link to="/Login">Login</Link>
      <Navbar expand="md" className="mb-3 bgcolor" variant="dark">
        <Container>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                MY CART
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3 ">
                <NavDropdown
                  title="MAKEUP"
                  id={`offcanvasNavbarDropdown-expand-sm`}
                  style={{
                    color: 'white',
                  }}
                >
                  <div className="containerflex">
                    <div>
                      <NavDropdown.Item href="">
                        <h4>FACE</h4>
                      </NavDropdown.Item>

                      {Face.map((e) => (
                        <NavDropdown.Item href={e.path}>
                          {e.title}
                        </NavDropdown.Item>
                      ))}
                    </div>
                    <div>
                      <NavDropdown.Item href="">
                        <h4>EYE</h4>
                      </NavDropdown.Item>

                      {eye.map((e) => (
                        <NavDropdown.Item href={e.path}>
                          {e.title}
                        </NavDropdown.Item>
                      ))}
                    </div>
                    <div>
                      <NavDropdown.Item href="">
                        <h4>LIPS</h4>
                      </NavDropdown.Item>

                      {Lips.map((e) => (
                        <NavDropdown.Item href={e.path}>
                          {e.title}
                        </NavDropdown.Item>
                      ))}
                    </div>
                    <div>
                      <NavDropdown.Item href="">
                        <h4>Nails</h4>
                      </NavDropdown.Item>

                      {Nails.map((e) => (
                        <NavDropdown.Item href={e.path}>
                          {e.title}
                        </NavDropdown.Item>
                      ))}
                    </div>
                    <div>
                      <NavDropdown.Item href="">
                        <h4>Tools Brushes</h4>
                      </NavDropdown.Item>

                      {ToolsBrushes.map((e) => (
                        <NavDropdown.Item href={e.path}>
                          {e.title}
                        </NavDropdown.Item>
                      ))}
                    </div>
                  </div>
                </NavDropdown>
                <NavDropdown
                  title="SKIN"
                  id={`offcanvasNavbarDropdown-expand-sm`}
                  style={{ color: 'white' }}
                >
                  <div className="containerflex">
                    <div>
                      <NavDropdown.Item href="">
                        <h4>EYE CARE</h4>
                      </NavDropdown.Item>

                      {EyeCare.map((e) => (
                        <NavDropdown.Item href={e.path}>
                          {e.title}
                        </NavDropdown.Item>
                      ))}
                    </div>
                    <div>
                      <NavDropdown.Item href="">
                        <h4>FACE CARE</h4>
                      </NavDropdown.Item>

                      {FaceCare.map((e) => (
                        <NavDropdown.Item href={e.path}>
                          {e.title}
                        </NavDropdown.Item>
                      ))}
                    </div>
                    <div>
                      <NavDropdown.Item href="">
                        <h4>BODY CARE</h4>
                      </NavDropdown.Item>

                      {BodyCare.map((e) => (
                        <NavDropdown.Item href={e.path}>
                          {e.title}
                        </NavDropdown.Item>
                      ))}
                    </div>
                  </div>
                </NavDropdown>
                <NavDropdown
                  title="HAIR"
                  id={`offcanvasNavbarDropdown-expand-sm`}
                  style={{ color: 'white' }}
                >
                  <div className="containerflex">
                    <div>
                      <NavDropdown.Item href="">
                        <h4>HAIR CARE</h4>
                      </NavDropdown.Item>

                      {HairCare.map((e) => (
                        <NavDropdown.Item href={e.path}>
                          {e.title}
                        </NavDropdown.Item>
                      ))}
                    </div>
                    <div>
                      <NavDropdown.Item href="">
                        <h4>HAIR LOSS</h4>
                      </NavDropdown.Item>

                      {HairLoss.map((e) => (
                        <NavDropdown.Item href={e.path}>
                          {e.title}
                        </NavDropdown.Item>
                      ))}
                    </div>
                  </div>
                </NavDropdown>
                <NavDropdown
                  title="PERSONAL CARE"
                  id={`offcanvasNavbarDropdown-expand-sm`}
                  style={{ color: 'white' }}
                >
                  <div className="containerflex">
                    <div>
                      <NavDropdown.Item href="">
                        <h4>BATH & BODY</h4>
                      </NavDropdown.Item>

                      {BathBody.map((e) => (
                        <NavDropdown.Item href={e.path}>
                          {e.title}
                        </NavDropdown.Item>
                      ))}
                    </div>
                    <div>
                      <NavDropdown.Item href="">
                        <h4>BATHING aCCESSORIES</h4>
                      </NavDropdown.Item>

                      {BathingAccessories.map((e) => (
                        <NavDropdown.Item href={e.path}>
                          {e.title}
                        </NavDropdown.Item>
                      ))}
                    </div>
                    <div>
                      <NavDropdown.Item href="">
                        <h4>BATH & SHOWER</h4>
                      </NavDropdown.Item>

                      {BathShower.map((e) => (
                        <NavDropdown.Item href={e.path}>
                          {e.title}
                        </NavDropdown.Item>
                      ))}
                    </div>
                  </div>
                </NavDropdown>
                <NavDropdown
                  title="MOM & BABY CARE"
                  id={`offcanvasNavbarDropdown-expand-sm`}
                  style={{ color: 'white' }}
                >
                  <div className="containerflex">
                    <div>
                      <NavDropdown.Item href="">
                        <h4>BABY CARE</h4>
                      </NavDropdown.Item>

                      {BabyCare.map((e) => (
                        <NavDropdown.Item href={e.path}>
                          {e.title}
                        </NavDropdown.Item>
                      ))}
                    </div>
                    <div>
                      <NavDropdown.Item href="">
                        <h4>MOM CARE</h4>
                      </NavDropdown.Item>

                      {MomCare.map((e) => (
                        <NavDropdown.Item href={e.path}>
                          {e.title}
                        </NavDropdown.Item>
                      ))}
                    </div>
                  </div>
                </NavDropdown>
                <NavDropdown
                  title="FRAGRANCE"
                  id={`offcanvasNavbarDropdown-expand-sm`}
                  style={{ color: 'white' }}
                >
                  <div className="containerflex">
                    <div>
                      {/* <NavDropdown.Item href="">
                        <h4>BATHBODY</h4>
                      </NavDropdown.Item> */}

                      {Fragrance.map((e) => (
                        <NavDropdown.Item href={e.path}>
                          {e.title}
                        </NavDropdown.Item>
                      ))}
                    </div>
                  </div>
                </NavDropdown>
                <NavDropdown
                  title="AYURVEDA"
                  id={`offcanvasNavbarDropdown-expand-sm`}
                  style={{ color: 'white' }}
                >
                  <div className="containerflex">
                    <div>
                      <NavDropdown.Item href="">
                        <h4>NATURAL SKIN CARE</h4>
                      </NavDropdown.Item>

                      {NaturalSkinCare.map((e) => (
                        <NavDropdown.Item href={e.path}>
                          {e.title}
                        </NavDropdown.Item>
                      ))}
                    </div>
                    <div>
                      <NavDropdown.Item href="">
                        <h4>NATURAL HAIR CARE</h4>
                      </NavDropdown.Item>

                      {NaturalHairCare.map((e) => (
                        <NavDropdown.Item href={e.path}>
                          {e.title}
                        </NavDropdown.Item>
                      ))}
                    </div>
                  </div>
                </NavDropdown>
                <NavDropdown
                  title="BRANDS"
                  id={`offcanvasNavbarDropdown-expand-sm`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand href="#">MY CART</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        </Container>
      </Navbar>
    </div>
  );
};
