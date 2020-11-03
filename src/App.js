import React from 'react';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import Fornecedor from './Fornecedor';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          <a className="navbar-brand" href="index.html">Start Bootstrap</a>
          <ul className="navbar-nav ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <a className="dropdown-item" href="#">Logout</a>
              </div>
            </li>
          </ul>
        </nav>
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
              <div className="sb-sidenav-menu">
                <div className="nav">
                  <div className="sb-sidenav-menu-heading">Core</div>
                  <NavLink className="nav-link" to="/">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                  </NavLink>
                  <div className="sb-sidenav-menu-heading">Cadastros</div>
                  <NavLink className="nav-link" to="/fornecedor">
                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Fornecedores
                  </NavLink>
                  <NavLink className="nav-link" to="/produto">
                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Produtos
                  </NavLink>
                </div>
              </div>
              <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
            </nav>
          </div>
          <div id="layoutSidenav_content">
            <main>
              <Route path="/fornecedor" component={Fornecedor} />
            </main>
            <footer className="py-4 bg-light mt-auto">
              <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between small">
                  <div className="text-muted">Copyright &copy; Your Website 2020</div>
                  <div>
                    <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App;
