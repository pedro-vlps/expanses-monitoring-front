import { useState } from "react"
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap"
import { login } from "../../helpers/FetchApi"
import { useAppContext } from "../../helpers/ContextApi"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const { setToken } = useAppContext();

  const navigate = useNavigate();

  const [loginParameters, setLoginParameters] = useState({
    email: "",
    password: ""
  })
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("No Error")

  const getLogin = async () => {
    try {
      const response = await login(loginParameters)
      if (response.detail) {
        setErrorMessage("Invalid Credentials")
        setShowError(true)
      }
      setToken(response.token)
      // localStorage.setItem("token", response.token)
      localStorage.setItem("user_id", response.data.id)
      navigate("/")
    }
    catch (error) {
      setErrorMessage("Invalid Credentials")
      setShowError(true)
    }
  }

  return (
    <Row className='vh-100 w-100'>
      <Col md={3} className='m-auto'>
        <Card className="m-auto p-5">
          <Card.Title className="mx-auto mb-2 fs-2">ExpenseTracker</Card.Title>
          <Card.Subtitle className="mx-auto mb-4">Enter your credentials</Card.Subtitle>
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text id="email-label">Email</InputGroup.Text>
              <Form.Control
                placeholder="Enter your email"
                aria-label="Email"
                value={loginParameters.email}
                onChange={(e) => setLoginParameters({
                  ...loginParameters,
                  email: e.target.value
                })}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="password-label">Password</InputGroup.Text>
              <Form.Control
                placeholder="Enter your password"
                aria-label="Password"
                type="password"
                value={loginParameters.password}
                onChange={(e) => setLoginParameters({
                  ...loginParameters,
                  password: e.target.value
                })}
              />
            </InputGroup>
            {
              showError ? (
                <div className="bg-danger text-white my-2 mx-auto text-center alert-message">{errorMessage}</div>
              ) : ''
            }
            <Button className="w-100" onClick={() => getLogin()}>
              Submit
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default Login