export default function ProductItem( {product}) {
    return (
                        
        <div className="product product_tag qk-pos--rel" product_id={product.id} variant_id="34570433" data_page="1">
                    
                    
                    
        <div className="product_image">
        <a className="productClick img-flex qk-text--heading qk-pos--rel qk-w--100 default_scale" href="/">
            <img className="img-lazy-infinite qk-center qk-h--auto" src={product.image} data-src={product.image} alt={product.name} width="250" height="250" />
        </a>
        </div>

        <div className="product_label_slogan">
        <div className="product_labels">
            
            
        </div>
        
        </div>

        <div className="product_title">
        <a className="productClick qk-text--heading qk-fs--title qk-text-truncate-2" href="/">
            {product.name}
        </a>
        </div>
        <div className="product_brief qk-text--text qk-fs--body">
        </div>
        
        <div className="product_price">
            <span className="price qk-text--price qk-fs--title">
                <span className="money_tag multi_currencies" data-currency-from={product.currency} data-amount={product.price}>NT${product.price}
                </span>
            </span>
        
        </div>

        <div className="product_love qk-text--right">
        

        </div>

    </div>
    );
}