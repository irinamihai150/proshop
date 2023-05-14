import React from "react"
import { Nav, Navbar, Container, NavLink } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
const Header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<div>
							<Navbar.Brand href='/'>ProShop</Navbar.Brand>
							<Navbar.Toggle aria-controls='basic-navbar-nav' />
							<Navbar.Collapse id='basic-navbar-nav'>
								<Nav className='ml-auto'>
									<LinkContainer to='/cart'>
										<NavLink>
											<i className='fas fa-shopping-cart'></i> Cart
										</NavLink>
									</LinkContainer>
									<LinkContainer to='/login'>
										<NavLink>
											<i className='fas fa-user'></i>Sign In
										</NavLink>
									</LinkContainer>
								</Nav>
							</Navbar.Collapse>
						</div>
					</LinkContainer>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
