import React from "react";

function Header(props) {
  const { lang, setLang, data } = props;
  return (
    <header id="header" className="header-scrolled">
      <div className="container-fluid">
        <div id="logo" className="pull-left">
          <h1>
            <a href="#intro" className="scrollto">
              Uni
            </a>
          </h1>
        </div>

        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li className="menu-active">
              <a href="#intro">{data.Header[lang].home}</a>
            </li>
            <li>
              <a href="#about">{data.Header[lang].about}</a>
            </li>
            <li>
              <a href="#services">{data.Header[lang].services}</a>
            </li>
            {/* <li>
              <a href="#portfolio">Portfolio</a>
            </li> */}
            {/* <li>
              <a href="#news">News</a>
            </li> */}
            <li>
              <a href="#career">{data.Header[lang].carrer}</a>
            </li>
            {/* <li>
              <a href="#team">Team</a>
            </li> */}
            <li>
              <a href="#contact">{data.Header[lang].contact}</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#lang"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {lang}
              </a>
              <div className="dropdown-menu">
                <div  className="dropdown-item" onClick={()=>setLang('EN')}>
                  English
                </div>
                <div className="dropdown-item" onClick={()=>setLang('VI')}>
                  VietNamese
                </div>
                <div className="dropdown-item" onClick={()=>setLang('KO')}>
                  Korea
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
