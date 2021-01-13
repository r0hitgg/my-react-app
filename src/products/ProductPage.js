import React , { useEffect } from 'react';
import { connect } from "react-redux";
import { getAllProducts } from "../actions/productActions";
import store from "../store"

const ProductPage = (props) => {

    const storeData = store.getState();
    console.log(storeData,'.........storeadata')
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