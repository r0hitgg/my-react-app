import React , { useEffect } from 'react';
import { connect } from "react-redux";
import { getAllProducts } from "../actions/productActions";

const ProductPage = (props) => {

    console.log(props,'props');
    useEffect(() => {
        console.log(props,'.propd')
        props.getAllProducts();
    },[]);
    // console.log(products,'products');
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    Hello
                </div>
            </header>
        </div>
    );
}
const mapStateToProps = state => (
    state.products
);
export default connect(mapStateToProps,{getAllProducts})(ProductPage);
// export default ProductPage;