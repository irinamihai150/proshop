import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Form, Button, Col } from "react-bootstrap"
import FormContainer from "../components/FormContainer.js"
import { savePaymentMethod } from "../actions/cartActions.js"
import { useNavigate } from "react-router-dom"
import CheckoutSteps from "../components/CheckoutSteps.js"

const PaymentScreen = () => {
	const cart = useSelector((state) => state.cart)
	const { shippingAddress } = cart
	const dispatch = useDispatch()
	const navigate = useNavigate()
	if (!shippingAddress) {
		navigate("/shipping")
	}
	const [paymentMethod, setPaymentMethod] = useState("Paypal")

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(savePaymentMethod(paymentMethod))
		navigate("/placeorder")
	}
	return (
		<FormContainer>
			<CheckoutSteps step1 step2 step3 />
			<h1>Payment Method</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group>
					<Form.Label as='legend'> Select Method</Form.Label>

					<Col>
						<Form.Check
							type='radio'
							label='Paypal or Credit Card'
							id='Paypal'
							name='paymentMethod'
							value='Paypal'
							checked
							onChange={(e) => setPaymentMethod(e.target.value)}
						></Form.Check>
						{/* <Form.Check
						type='radio'
						label='Stripe'
						id='Stripe'
						name='paymentMethod'
						value='Stripe'
						onChange={(e) => setPaymentMethod(e.target.value)}
					></Form.Check> */}
					</Col>
				</Form.Group>
				<Button type='submit' variant='primary'>
					Continue
				</Button>
			</Form>
		</FormContainer>
	)
}

export default PaymentScreen
