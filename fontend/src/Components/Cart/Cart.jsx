import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import "./Cart.css"
const Cart = () => {
    const { myCart, total, addToCart, setTotal } = useContext(CartContext);
    const navigate = useNavigate();
    const hanleCheckout = () => {
        setTotal(0);
        addToCart([{}]);
    }
    const handleHome = () => {
        navigate("/");
    }
    return (
        <>
            <section className="cart-container">
                <div className="cart-header">CHECKOUT:</div>
                <div className="cart-items">
                    {myCart.slice(1).map((item) => {
                        return (
                            <div className="cart-item">
                                <img src={item.imageUrl} className="cart-item-img" alt="" />
                                {item.name} : {item.price}$
                            </div>
                        )
                    })}
                    <div className="cart-total">TOTAL: {total}$ </div>
                </div>
                <button className="cart-checkout" onClick={hanleCheckout}>DONE</button>
                <button className="cart-gohome" onClick={handleHome}>RETURN HOME</button>
            </section>
        </>
    );
}

export default Cart;