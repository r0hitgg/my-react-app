import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";

const ProductTemplate = (product) => {

    return(
        <Card className="m-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`data:image/jpeg;base64,${product.product.image_1920}`} />
            <Card.Body>
                <Card.Title>{product.product.name}</Card.Title>
                <Card.Text>
                    {product.product.lst_price}
                </Card.Text>
                <ButtonGroup>
                    <Button variant="primary">Add To Cart</Button>
                    <Button href={`/product/${product.product.id}`} variant="primary">View</Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
    );
}

export default ProductTemplate;