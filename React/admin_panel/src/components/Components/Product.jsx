import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { useDispatch } from "react-redux"
import cartSlice from '../../redux/CartSlice';
const actions = cartSlice.actions;
function Product({ product, deleteProduct, pQUantity }) {
    const dispatch  = useDispatch();

    return (
        <div className="product" key={product.id} >
            <img src={product.image} alt=""
                className='product_image' />
            <div className="product_meta">
                <p className="product_title">{product.title}</p>
                <p className='Price'>$ {product.price}</p>
            </div>
          
            <div className="add_to_cart_container">
                <AddBoxIcon
                    onClick={() => { dispatch(actions.addtoCart(product)) }}
                ></AddBoxIcon>
                <div className="currentCartCount">
                    {pQUantity == false ? 0 : pQUantity}</div>
                <IndeterminateCheckBoxIcon
                    onClick={() => { dispatch(actions.removeFromCart(product)) }}
                >
                </IndeterminateCheckBoxIcon>
            </div>
        </div>
    )
}

export default Product