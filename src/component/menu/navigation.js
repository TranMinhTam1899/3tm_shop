import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarToggler, NavItem} from 'reactstrap';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="Navigation">
            <div className="Navigation__content">
                <Navbar expand="md">
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto text-center" navbar>
                            <NavItem>
                                <NavLink exact activeClassName="active" className="nav-link" to="/">Trang chủ</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="active" className="nav-link" to="/product">Sản phẩm</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink activeClassName="active" className="nav-link" to="/contact">Liên hệ</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

            </div>
        </div>
    )
}

export default Navigation;