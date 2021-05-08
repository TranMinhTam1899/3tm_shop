import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Img from '../../component/img/img';

const EmptyCart = () => {
    document.title="Giỏ hàng";
    return (
        <div>
            <section className="solid_banner_area">
                <Container>
                    <div className="solid_banner_inner">
                        <h3>Giỏ hàng trống</h3>
                        <ul>
                            <li><Link to="/">Trang chủ /</Link></li>
                            <li><Link to="/empty-cart">&nbsp;Giỏ hàng</Link></li>
                        </ul>
                    </div>
                </Container>
            </section>
            <section className="emty_cart_area p_100">
                <Container>
                    <Img Url={'../asset/images/logo.png'} width={'100%'} />
                    <div className="emty_cart_inner">
                        <i className="icon-handbag icons"></i>
                        <h3>Giỏ hàng của bạn rỗng</h3>
                        <h4><Link to="/">Mua sắm ngay</Link></h4>
                    </div>
                </Container>
            </section>


        </div>
    )
}

export default EmptyCart;
