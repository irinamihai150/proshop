import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Form, Button, Row, Col } from "react-bootstrap"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { getUserDetails } from "../actions/userActions"
import { useLocation, useNavigate } from "react-router-dom"

function ProfileScreen() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [message, setMessage] = useState(null)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	// const location = useLocation()

	const userDetails = useSelector((state) => state.userRegister)

	const { loading, error, user } = userDetails

	const userLogin = useSelector((state) => state.userRegister)

	const { userInfo } = userLogin

	useEffect(() => {
		if (!userInfo) {
			// history.push(redirect)
			navigate(`/login`)
		} else {
			if (!userInfo.name) {
				dispatch(getUserDetails("profile"))
			} else {
				setName(user.name)
				setEmail(user.email)
			}
		}
	}, [dispatch, navigate, userInfo])

	const submitHandler = (e) => {
		e.preventDefault()
		//dispatch register
		if (password !== confirmPassword) {
			setMessage("Passwords do not match")
		} else {
			//dispatch update profile
		}
	}
	return (
		<Row>
			<Col md={3}>
				<h2>User Profile</h2>
				{message && <Message variant='danger'>{message}</Message>}
				{error && <Message variant='danger'>{error}</Message>}
				{loading && <Loader />}
				<Form onSubmit={submitHandler}>
					<Form.Group controlId='name'>
						<Form.Label>Name</Form.Label>
						<Form.Control
							type='name'
							placeholder='Enter name'
							value={name}
							onChange={(e) => {
								setName(e.target.value)
							}}
						></Form.Control>
					</Form.Group>
					<Form.Group controlId='email'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type='email'
							placeholder='Enter email'
							value={email}
							onChange={(e) => {
								console.log("Email Input Value:", e.target.value)
								setEmail(e.target.value)
							}}
						></Form.Control>
					</Form.Group>
					<Form.Group controlId='password'>
						<Form.Label> Enter Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Enter password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group controlId='confirmPassword'>
						<Form.Label> Confirm Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Confirm password'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Button type='submit' variant='primary'>
						Update
					</Button>
				</Form>
			</Col>
			<Col md={9}>
				<h2> My Orders</h2>
			</Col>
		</Row>
		// <div>
		// 	<h1>Sign Up</h1>
		// 	{message && <Message variant='danger'>{message}</Message>}
		// 	{error && <Message variant='danger'>{error}</Message>}
		// 	{loading && <Loader />}
		// 	<Form onSubmit={submitHandler}>
		// 		<Form.Group controlId='name'>
		// 			<Form.Label>Name</Form.Label>
		// 			<Form.Control
		// 				type='name'
		// 				placeholder='Enter name'
		// 				value={name}
		// 				onChange={(e) => {
		// 					setName(e.target.value)
		// 				}}
		// 			></Form.Control>
		// 		</Form.Group>
		// 		<Form.Group controlId='email'>
		// 			<Form.Label>Email address</Form.Label>
		// 			<Form.Control
		// 				type='email'
		// 				placeholder='Enter email'
		// 				value={email}
		// 				onChange={(e) => {
		// 					console.log("Email Input Value:", e.target.value)
		// 					setEmail(e.target.value)
		// 				}}
		// 			></Form.Control>
		// 		</Form.Group>
		// 		<Form.Group controlId='password'>
		// 			<Form.Label> Enter Password</Form.Label>
		// 			<Form.Control
		// 				type='password'
		// 				placeholder='Enter password'
		// 				value={password}
		// 				onChange={(e) => setPassword(e.target.value)}
		// 			></Form.Control>
		// 		</Form.Group>
		// 		<Form.Group controlId='confirmPassword'>
		// 			<Form.Label> Confirm Password</Form.Label>
		// 			<Form.Control
		// 				type='password'
		// 				placeholder='Confirm password'
		// 				value={confirmPassword}
		// 				onChange={(e) => setConfirmPassword(e.target.value)}
		// 			></Form.Control>
		// 		</Form.Group>
		// 		<Button type='submit' variant='primary'>
		// 			Register
		// 		</Button>
		// 	</Form>
		// </div>
	)
}

export default ProfileScreen
