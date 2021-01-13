import { GET_ALL_PRODUCTS } from "./type";

export const getAllProducts = () => async dispatch => {
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
        // this.setState({ products:result });
        console.log(result,'.......in payload')
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: result
        });
    })
}