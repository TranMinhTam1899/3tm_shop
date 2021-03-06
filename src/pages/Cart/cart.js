import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { actDeleteInCart, OnUpdateProductInCart } from '../../redux/action/cartAction';
import CartItem from './cartItem';
import EmptyCart from './emptyCart';

const Cart = (props) => {
    document.title="Giỏ hàng";
    const { listCart } = props;
    
    const onDeleteInCart = (id) => {
        props.onDeleteInCart(id);
    }

    const onUpdateInCart = (id, quanty) => {
        props.onUpdateInCart(id, quanty);
    }

    const onCheckPay=()=>{
        if(localStorage.getItem('user')){
            console.log("đã đăng nhập");
        }else{
            alert('Vui lòng đăng nhập để thanh toán')
        }
    }


    const totalAmount = (cart) => {

        let total = 0;
        if (cart && cart.length) {
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quanty;
                
            }
        }
        return total;
    }


    if (listCart.length < 1) {
        return <EmptyCart />
    } else {
        return (
            <div>
                <section className="solid_banner_area">
                    <Container>
                        <div className="solid_banner_inner">
                            <h3>Giỏ hàng</h3>
                            <ul>
                                <li><Link to="/">Trang chủ /</Link></li>
                                <li><Link to="/cart">Giỏ hàng</Link></li>
                            </ul>
                        </div>
                    </Container>
                </section>

                <section className="shopping_cart_area p_100">
                    <Container>
                        <Row>
                            <Col md="8">
                                <div className="cart_items">
                                    <h3>Sản phẩm của bạn</h3>
                                    <div className="table-responsive-md">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <th scope="row"></th>
                                                    <th>
                                                        <span>Hình ảnh</span>
                                                    </th>
                                                    <th>
                                                        <span>Tên SP</span>
                                                    </th>
                                                    <th>
                                                        <span>Giá</span>
                                                    </th>
                                                    <th>
                                                        <span>Số lượng</span>
                                                    </th>
                                                    <th>
                                                        <span>Tiền</span>
                                                    </th>
                                                </tr>
                                                {
                                                    listCart.map((cart, index) => {
                                                        return <CartItem
                                                            cart={cart} key={index}
                                                            onDeleteInCart={(id) => onDeleteInCart(id)}
                                                            onUpdateInCart={(id, quanty) => onUpdateInCart(id, quanty)}
                                                        />
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
           
                           
                            </Col>
                            <Col md="4" >
                                <div className="cart_totals_area">
                                    <h4>Tổng</h4>
                                    <div className="cart_t_list">
                                        <div className="media">
                                            <div className="d-flex">
                                                <h5>Phụ thu</h5>
                                            </div>
                                            <div className="media-body">
                                                <h6>$0.0</h6>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="d-flex">
                                                <h5>Shipping</h5>
                                            </div>
                                            <div className="media-body">
                                                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model tex</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="total_amount row m0 row_disable">
                                        <div className="float-left">
                                            Tổng tiền
                </div>
                                        <div className="float-right">
                                            ${totalAmount(listCart)}
                                        </div>
                                    </div>
                                </div>
                                <button type="submit"className="btn subs_btn form-control" onClick={()=>onCheckPay()}>Kiểm tra</button>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteInCart: (id) => {
            dispatch(actDeleteInCart(id));
        },
        onUpdateInCart: (id, quanty) => {
            dispatch(OnUpdateProductInCart(id, quanty));
        }

    }
}
const mapStateToProps = (state) => {
    return {
        listCart: state.cart.cart,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

