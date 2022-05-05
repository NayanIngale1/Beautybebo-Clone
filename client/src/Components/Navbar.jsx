import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import "./Navbar.css"

export const Navbars = () => {
	const Face = [
		'BB cream',
		'Brush',
		'Bronzer',
		'CC cream',
		'Contour',
		'Counceler',
		'Compact Powder',
		'Face Primer',
		'Foundation',
		'Highlights',
		'Loose Powder',
		'Makeup Kits'
	];
	const eye =["Contact Lenses","Eye Kit","Eyeliner","Eye Shadow", "Eye Primer","Eye-Palettes","Eye Makeup Remover"]
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
										color:"white"
									}}
								>
									<div className="containerflex">
										<div>
											<NavDropdown.Item href="#action3">
												<h4>Face</h4>
											</NavDropdown.Item>

											{Face.map((e) => (
												<NavDropdown.Item href="#action3">
													{e}
												</NavDropdown.Item>
											))}
										</div>
										<div>
											<NavDropdown.Item href="#action3">
												<h4>Eye</h4>
											</NavDropdown.Item>

											{eye.map((e) => (
												<NavDropdown.Item href="#action3">
													{e}
												</NavDropdown.Item>
											))}
										</div>
									</div>
								</NavDropdown>
								<NavDropdown
									title="SKIN"
									id={`offcanvasNavbarDropdown-expand-sm`}
								>
									<NavDropdown.Item href="#action3">
										Action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action4">
										Another action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action5">
										Something else here
									</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown
									title="HAIR"
									id={`offcanvasNavbarDropdown-expand-sm`}
								>
									<NavDropdown.Item href="#action3">
										Action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action4">
										Another action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action5">
										Something else here
									</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown
									title="PERSONAL CARE"
									id={`offcanvasNavbarDropdown-expand-sm`}
								>
									<NavDropdown.Item href="#action3">
										Action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action4">
										Another action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action5">
										Something else here
									</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown
									title="MOM & BABY CARE"
									id={`offcanvasNavbarDropdown-expand-sm`}
								>
									<NavDropdown.Item href="#action3">
										Action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action4">
										Another action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action5">
										Something else here
									</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown
									title="FRAGRANCE"
									id={`offcanvasNavbarDropdown-expand-sm`}
								>
									<NavDropdown.Item href="#action3">
										Action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action4">
										Another action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action5">
										Something else here
									</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown
									title="AYURVEDA"
									id={`offcanvasNavbarDropdown-expand-sm`}
								>
									<NavDropdown.Item href="#action3">
										Action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action4">
										Another action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action5">
										Something else here
									</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown
									title="BRANDS"
									id={`offcanvasNavbarDropdown-expand-sm`}
								>
									<NavDropdown.Item href="#action3">
										Action
									</NavDropdown.Item>
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
