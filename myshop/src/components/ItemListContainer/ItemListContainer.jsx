import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { consultarBDD } from '../../Assets/funciones.js'
const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        consultarBDD().then(products => {
            const productsList= products.filter(prod => prod.stock > 0)
            const cardProductos = ItemList({productsList})
            setProductos(cardProductos)
        })
    }, []);
    
    return (
        
            <div className='row cardProductos'>
                {productos}
            </div>
        
    );
}

export default ItemListContainer;
