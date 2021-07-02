import Subtotal from './Subtotal'

const Cart = () => {
    return (
        <div className="checkout">
            <div className="checkout-left">
                <div>
                    <h3 className="checkout-title">Your Shopping basket is empty.</h3>
                    <p className="checkout-id">You have no items in your bucket. Buy one.</p>
                </div>
            </div>
            <div className="checkout-right">
                <Subtotal/>
            </div>
        </div>
    );
}
 
export default Cart;