import React , { Component } from 'react';
import ProductTemplate from "../components/ProductTemplate";
import { Container, Row } from "react-bootstrap";

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
        fetch("http://localhost:7073/api/v1/demo/product.template",{
            method: 'GET',
            headers: {
                "authorization" : "Basic YXBpX2RiOjY0ODBlZjhmLWZmNTAtNGQ1ZS04Yzk4LTczM2FkMDBiYTQwNQ==",
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
        const { products } = this.state;
        return (
            <div className="App">
                <div className="App-header">
                    <Container className="col-md-9">
                        <Row className="col-md-12">
                            { products.map( (product) => (
                                <ProductTemplate key={product.id} product={product} />
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