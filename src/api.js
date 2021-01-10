const API_URL = "http://localhost:7073/api/v1/demo/res.partner";

export const GetAllProducts = () => {
    return (dispatch) => {
        fetch("http://localhost:7073/api/v1/demo/res.partner",{
            method: 'GET',
            headers: {
                "authorization" : "Basic YXBpX2RiOjVhNzgwODIyLWYzYTgtNGI4Zi05OTJmLWIwNjBjM2RjYWRjMw==",
                // "content-type" : "application/json"
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Credentials': 'true'
            }
        }).then(
            res => res.json()
        ).then( (result) => {
            dispatch(result);
            console.log('reeeeee',result);
        })
    }
}