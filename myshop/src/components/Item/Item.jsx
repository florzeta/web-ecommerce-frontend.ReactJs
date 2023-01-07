import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
const Item = ({producto}) => {
    const {darkMode} = useDarkModeContext()
    return (
        
            <div className={`card mb-3 cardProducto ${darkMode ? 'text-black bg-secondary' : 'border-light'}`}>
                <img src={`../img/${producto.img}`} className="card-img-top" alt="..." />
                <div className={`card-body ${darkMode ? 'cardBodyDark' : 'cardBody'}`}>
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.modelo}</p>
                    <p className="card-text">${new Intl.NumberFormat('de-DE').format(producto.precio)}</p>
                    <button className='btn btn-dark'><Link className="nav-link" to={`/producto/${producto.id}`}>Ver producto</Link></button>
                </div>
            </div>
        );
}

export default Item; 
