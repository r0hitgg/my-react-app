import { GET_PRODUCT } from "./type";

export const getProduct = (id) => async dispatch => {
    fetch("http://localhost:7073/api/v1/demo/product.template/" + id,{
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
        console.log(result,'.......in payload')
        dispatch({
            type: GET_PRODUCT,
            payload: {
                name: result.name,
                image: result.image_1920,
                category: result.categ_id,
                price: result.list_price
            }
        });
    })
}