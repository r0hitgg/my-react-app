import { GET_ALL_PRODUCTS } from "./type";

export const getAllProducts = () => async dispatch => {
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
        // this.setState({ products:result });
        console.log(result,'.......in payload')
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: result
        });
    })
}