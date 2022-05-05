import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import "./Navbar.css"

export const Navbars = () => {
	const Face = [
		{
			title: 'BB Cream',
			path: '/makeup/face/bb-cream',
			cName: 'dropdown-link',
		},
		{
			title: 'Blush',
			path: '/makeup/face/blush',
			cName: 'dropdown-link',
		},
		{
			title: 'Bronzer',
			path: '/makeup/face/bronzer',
			cName: 'dropdown-link',
		},
		{
			title: 'CC Cream',
			path: '/makeup/face/cc-cream',
			cName: 'dropdown-link',
		},
		{
			title: 'Contour',
			path: '/makeup/face/contour',
			cName: 'dropdown-link',
		},
		{
			title: 'Concealer',
			path: '/makeup/face/concealer',
			cName: 'dropdown-link',
		},
		{
			title: 'Compact & Powder',
			path: '/makeup/face/compact-powder',
			cName: 'dropdown-link',
		},
		{
			title: 'Face Primer',
			path: '/makeup/face/face-primer',
			cName: 'dropdown-link',
		},
		{
			title: 'Foundation',
			path: '/makeup/face/foundation',
			cName: 'dropdown-link',
		},
		{
			title: 'Highlighters',
			path: '/makeup/face/highlighters',
			cName: 'dropdown-link',
		},
		{
			title: 'Loose Poweder',
			path: '/makeup/face/loose-poweder',
			cName: 'dropdown-link',
		},
		{
			title: 'Makeup Kits',
			path: '/makeup/face/makeup-kits',
			cName: 'dropdown-link',
		},
		{
			title: 'Makeup Remover',
			path: '/makeup/face/makeup-remover',
			cName: 'dropdown-link',
		},
		{
			title: 'Setting Spray',
			path: '/makeup/face/setting-spray',
			cName: 'dropdown-link',
		},
	];
	const eye = [
		{
			title: 'Contact Lenses',
			path: '/makeup/eye/contact-lenses',
			cName: 'dropdown-link',
		},
		{
			title: 'Eye Kit',
			path: '/makeup/eye/eye-kit',
			cName: 'dropdown-link',
		},
		{
			title: 'Eyeliner',
			path: '/makeup/eye/eyeliner',
			cName: 'dropdown-link',
		},
		{
			title: 'Eye Shadow',
			path: '/makeup/eye/eye-shadow',
			cName: 'dropdown-link',
		},
		{
			title: 'Eye Primer',
			path: '/makeup/eye/eye-primer',
			cName: 'dropdown-link',
		},
		{
			title: 'Eye-Palettes',
			path: '/makeup/eye/eye-palettes',
			cName: 'dropdown-link',
		},
		{
			title: 'Eye Makeup Remover',
			path: '/makeup/eye/eye-makeup-remover',
			cName: 'dropdown-link',
		},
		{
			title: 'Eye Brow Enhancers',
			path: '/makeup/eye/eye-brow-enhancers',
			cName: 'dropdown-link',
		},
		{
			title: 'False Eyelashes',
			path: '/makeup/eye/false-eyelashes',
			cName: 'dropdown-link',
		},
		{
			title: 'Kajal',
			path: '/makeup/eye/kajal',
			cName: 'dropdown-link',
		},
		{
			title: 'Mascara',
			path: '/makeup/eye/mascara',
			cName: 'dropdown-link',
		},
		{
			title: 'Under Eye Concealer',
			path: '/makeup/eye/under-eye-concealer',
			cName: 'dropdown-link',
		},
	];
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
												<h4>Face</h4>
											</NavDropdown.Item>

											{Face.map((e) => (
												<NavDropdown.Item href={e.path}>
													{e.title}
												</NavDropdown.Item>
											))}
										</div>
										<div>
											<NavDropdown.Item href="">
												<h4>Eye</h4>
											</NavDropdown.Item>

											{eye.map((e) => (
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
