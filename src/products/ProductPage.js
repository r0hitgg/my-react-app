import React , { useEffect } from 'react';
import { connect } from "react-redux";
import { getProduct } from "../actions/productActions";

const ProductPage = (props) => {

    useEffect(() => {
        props.getProduct(props.match.params.id);
    },[]);

    return (
        <div className="container p-4">
            <div className="col-md-12 row">
                <div className="col-md-6">
                    <img src={`data:image/jpeg;base64,${props.products.image}`} alt="Product"/>
                </div>
                <div className="col-md-6">
                    <div className="p-2">
                        <h4>Name: </h4>
                        <span>{props.products.name}</span>
                    </div>
                    <div className="p-2">
                        <h4>Price: </h4>
                        <span>${props.products.price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = state => (
    state.products
);

export default connect(mapStateToProps,{getProduct})(ProductPage);