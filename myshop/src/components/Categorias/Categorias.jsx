import { Link } from "react-router-dom";
const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar navbar-light">
            <li className="nav-item ">
                <button className='btn btn-secundary'><Link className="nav-link" to={"/"}><i className="fas fa-home fa-lg"></i></Link></button>
            </li>
            <li className="nav-item">
                <button className='btn btn-secundary'><Link className="nav-link" to={"/category/1"}>Lentes</Link></button>
            </li>
            <li className="nav-item">
                <button className='btn btn-secundary'><Link className="nav-link" to={"/category/2"}>Bolsos</Link></button>
            </li>
            <li className="nav-item">
                <button className='btn btn-secundary'><Link className="nav-link" to={"/category/3"}>Accesorios</Link></button>
            </li>
      </ul>
    );
}

export default Categorias;
