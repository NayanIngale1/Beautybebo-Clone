import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import "./Register.css"
import GoogleButton from 'react-google-button';

export const Register = () => {
	return (
		<div>
			<center>
				<h4>CREATE NEW CUSTOMER ACCOUNT</h4>
				<GoogleButton
					style={{
						backgroundColor: 'rgb(221,75,57)',
						borderRadius:"5px",
						height: "50px",
						fontSize:"17px",
						margin:"30px"
					}}
				/>
				<h5>-- OR --</h5>
			</center>
			<Container>
				<Form>
					<Row className="mb-3">
						<Form.Group as={Col} md="6" controlId="formBasicEmail">
							<Form.Label>First Name</Form.Label>
							<Form.Control type="text" />
						</Form.Group>
						<Form.Group as={Col} md="6" controlId="formBasicEmail">
							<Form.Label>Last Name</Form.Label>
							<Form.Control type="text" />
						</Form.Group>
					</Row>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Sign Up for Newsletter" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Phone</Form.Label>
						<Form.Control type="number" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control type="password" />
					</Form.Group>
					<Button variant="secondary" size="md" type="submit" className='bg'>
						CREATE AN ACCOUNT
					</Button>
				</Form>
			</Container>
		</div>
	);
};
