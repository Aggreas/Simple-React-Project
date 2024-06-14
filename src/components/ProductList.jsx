function ProductList({products}){
    return(
        <div>
            <ul>
                {
                    products.map((e, idx) => (
                        <div key={idx}>
                            <li>{e.name}</li>
                            <p>{e.description}</p>
                            <p>{e.price}</p>
                        </div>
                    ))
                }
            </ul>
        </div>
    );
}

export default ProductList;