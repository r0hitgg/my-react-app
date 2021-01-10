import React , { Component } from 'react';
import ProductTemplate from "../components/ProductTemplate";
import { Container, Row, Col } from "react-bootstrap";
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
        const { products } = this.state;
        console.log(products,'thisa in products')
        return (
            <div className="App">
                <div className="App-header">
                    <Container className="col-md-9">
                        <Row className="col-md-12">
                            { products.map( (product) => (
                                <ProductTemplate product={product} />
                            ))}
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }

}

// import {GET_ALL_PRODUCTS} from "../actions/type";
// import { connect } from "react-redux";
// import { getAllProducts } from "../actions/productActions";
// const mapStateToProps = state => (
//        state.products
// );
// export default connect(mapStateToProps,{getAllProducts})(Products);
export default Products;