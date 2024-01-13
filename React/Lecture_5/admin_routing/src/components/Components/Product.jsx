

function Product({ product, deleteProduct }) {
console.log(product)
    return (
        <div className="product" key={product.id} >
            <img src={product.image} alt=""
                className='product_image' />
            <div className="product_meta">
                <p className="product_title">{product.title}</p>
                <p className='Price'>$ {product.price}</p>
            </div>
            <button onClick={() => {
                deleteProduct(product.id);
            }}>Delete</button>
        </div>
    )
}

export default Product