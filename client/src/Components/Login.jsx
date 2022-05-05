import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

export const Login = () => {
	const navigate = useNavigate();

	const handlenavigate = () => {
		navigate('/Register');
	};

	const [log, setlog] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		let { name, value } = e.target;
		setlog({ ...log, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let res = await fetch(
				'https://masai-api-mocker.herokuapp.com/auth/login',
				{
					method: 'POST',
					body: log,
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			let data = await res.json();
			console.log('data:', data);
		} catch (error) {
			console.log('error:', error);
		}
	};
	return (
		<div>
			<Row md={4}>
				<Container className="container1">
					<h5>REGISTERED CUSTOMERS</h5>
					<hr />
					<p>If you have an account, sign in with your email address.</p>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								name="email"
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
						<Button
							variant="secondary"
							size="md"
							type="submit"
							className="bg"
						>
							SIGN IN
						</Button>
						<p>Forgot Your Password?</p>
					</Form>
				</Container>
				<Container className="container1">
					<h5>NEW CUSTOMERS</h5>
					<hr />
					<p>
						Creating an account has many benefits: check out faster, keep
						more than one address, track orders and more.
					</p>
					<Button
						variant="secondary"
						size="md"
						type="submit"
						onClick={handlenavigate}
						className="bg"
					>
						CREATE AN ACCOUNT
					</Button>
				</Container>
			</Row>
		</div>
	);
};
