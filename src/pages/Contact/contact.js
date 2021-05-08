import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

const Contact = () => {
    document.title="Liên hệ";
    return (
        <div>
            <section className="solid_banner_area">
                <Container>
                    <div className="solid_banner_inner">
                        <h3>Liên hệ</h3>
                        <ul>
                            <li><Link to="/">Trang chủ /</Link></li>
                            <li><Link to="/contact">&nbsp;Liên hệ</Link></li>
                        </ul>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Contact;