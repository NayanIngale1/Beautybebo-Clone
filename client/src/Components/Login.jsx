import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

export const Login=()=>{
    const navigate= useNavigate()

    const handlenavigate=()=>{
        navigate('/Register');
    }
    return (
			<div>
				<Row md={4}>
					<Container>
						<h5>REGISTERED CUSTOMERS</h5>
						<hr />
						<p>
							If you have an account, sign in with your email address.
						</p>
						<Form>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" />
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" />
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
					<Container>
						<h5>NEW CUSTOMERS</h5>
						<hr />
						<p>
							Creating an account has many benefits: check out faster,
							keep more than one address, track orders and more.
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
}