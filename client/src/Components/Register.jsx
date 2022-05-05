import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './Register.css';
import GoogleButton from 'react-google-button';
import { useState } from 'react';

export const Register = () => {
	const [user, setUser] = useState({
		first_name: '',
		last_name: '',
		email: '',
		phone: '',
		password: '',
		confirm_password: '',
	});

	const handleChange = (e) => {
		let { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(user)
		try {
			let res = await fetch(
				'https://masai-api-mocker.herokuapp.com/auth/register',
				{
					method: 'POST',
					body: user,
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);

			let data = await res.json();
			console.log('data:', data);
			alert('Sign Up Successful!');
		} catch (err) {
			return console.log({ err: 'error from async function register' });
		}
	};

	return (
		<div>
			<center>
				<h4>CREATE NEW CUSTOMER ACCOUNT</h4>
				<GoogleButton
					style={{
						backgroundColor: 'rgb(221,75,57)',
						borderRadius: '5px',
						height: '50px',
						fontSize: '17px',
						margin: '30px',
					}}
				/>
				<h5>-- OR --</h5>
			</center>
			<Container className="container1">
				<Form onSubmit={handleSubmit}>
					<Row className="mb-3">
						<Form.Group as={Col} md="6" controlId="formBasicEmail">
							<Form.Label>First Name</Form.Label>
							<Form.Control
								type="text"
								name="first_name"
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group as={Col} md="6" controlId="formBasicEmail">
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								type="text"
								name="last_name"
								onChange={handleChange}
							/>
						</Form.Group>
					</Row>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Sign Up for Newsletter" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							name="email"
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Phone</Form.Label>
						<Form.Control
							type="number"
							name="number"
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							name="password"
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							type="password"
							name="confirm_password"
							onChange={handleChange}
						/>
					</Form.Group>
					<Button
						variant="secondary"
						size="md"
						type="submit"
						className="bg"
					>
						CREATE AN ACCOUNT
					</Button>
				</Form>
			</Container>
		</div>
	);
};
