import React , { Component } from 'react';
// const Products = (props) => {
class Products extends Component{
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    getInitialState(){
        return {
            products: [],
        }
    }

    componentDidMount(){
        console.log(this,'this in will mount')
        fetch("http://localhost:7073/api/v1/demo/product.product",{
            method: 'GET',
            headers: {
                "authorization" : "Basic YXBpX2RiOjg3Y2FhMDU4LWI1OTktNDkxNS04YjcxLWUxMzk5N2Q4NDM2Zg==",
                // "content-type" : "application/json"
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Credentials': 'true'
            }
        }).then(
            res => res.json()
        ).then( (result) => {
            this.setState({ products: result });
        })
        console.log(this,'this');
    }

    render(){
        console.log(this,'thisa in render')
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        { this.state.products.map( (product, index) => (
                            <div> { product.name } </div>
                        ))}
                    </div>
                </header>
            </div>
        )
    }

}

// import {GET_ALL_PRODUCTS} from "../actions/type";
// import { connect } from "react-redux";
// import { getAllProducts } from "../actions/productActions";
const mapStateToProps = state => (
       state.products
);
// export default connect(mapStateToProps,{getAllProducts})(Products);
export default Products;