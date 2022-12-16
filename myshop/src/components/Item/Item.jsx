const Item = ({producto}) => {
    
    return (
        
            <div className="card mb-3 cardProducto" >
                <img src={`../img/${producto.img}`} className="card-img-top" alt="..." />
                <div className="card-body cardBody">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.modelo}</p>
                    <p className="card-text">${new Intl.NumberFormat('de-DE').format(producto.precio)}</p>
                    <button className="btn btn-dark">Ver producto</button>
                </div>
            </div>

       
    );
}

export default Item; 
