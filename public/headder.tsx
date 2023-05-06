import '../app/src/styles/styles.css';
import '../app/src/styles/bootstrap.css';
import '../app/src/styles/modesta.css';

function HeaderComponent() {    
    return (        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark align-top">
        <a className="navbar-brand" href="http://localhost:3000/home">MythicXGN</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="navbar-nav">
              <a href="http://localhost:3000/home/kore">Kore<span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="navbar-nav">
              <a href="http://localhost:3000/home/dashboard">Dashboard<span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>  
    )
}
export default HeaderComponent