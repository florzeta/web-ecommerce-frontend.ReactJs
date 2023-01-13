import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
const Item = ({producto}) => {
    const {darkMode} = useDarkModeContext()
    return (
                <div className={`card m-3 cardProducto ${darkMode ? 'text-white bg-dark btn-light' : 'bg-light border'}`}>
                <img src={producto.img} className="card-img-top" alt="producto" />
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.modelo}</p>
                    <p className="card-text">${new Intl.NumberFormat('de-DE').format(producto.precio)}</p>
                    <button className='btn btn-dark border'><Link className="nav-link" to={`/producto/${producto.id}`}>Ver producto</Link></button>
                </div>
            </div>
        );
}

export default Item; 
