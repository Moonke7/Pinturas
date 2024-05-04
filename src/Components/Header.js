import "../styles/Header.css";
import "../styles/HeaderResponsive.css";
import { json } from "../json";
import { Link } from "react-router-dom";
import { usePintura } from "../globalContext";
import { useState } from "react";

function Header() {
  const { handleClick } = usePintura();
  const [altura, setAltura] = useState("1px");
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    if (menu) {
      setMenu(false);
      setAltura("1px");
    } else {
      setMenu(true);
      setAltura("auto");
    }
  };

  const filtrarAño = (year) => {
    const elementos = json.filter((elementos) => elementos.year === year);
    return elementos;
  };

  return (
    <header>
      <div className="pic_logo">
        <div className="nav">
          <ul>
            <li>
              <Link to="/Bio"> BIO </Link>
            </li>
            <li>
              <a href="https://facebook.com"> CV </a>
            </li>
            <li>
              <a href="/obras"> Obras </a>
            </li>
            <li>
              <a href="/Contact"> Contacto </a>
            </li>
          </ul>
        </div>
        <div className="personal_logo">
          <img
            alt="no img"
            src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg"
          ></img>
          <Link to={"/"}>
            <h1>Abril Carreño</h1>
          </Link>
        </div>
      </div>
      <nav>
        <ul className="links__pinturas">
          {json.map((pintura, index) => (
            <li key={pintura.name} onClick={() => handleClick(pintura, index)}>
              {" "}
              <Link to={`/obras/`}> {pintura.name} </Link>{" "}
            </li>
          ))}
        </ul>
        <div className="links__responsive">
          <div className="button">
            <span className="line"></span>
            <div className="button_click" onClick={handleMenu}>
              Menu{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color={"#000000"}
                fill={"none"}
                style={{
                  transform: menu ? "rotate(-180deg)" : "",
                  transition: ".5s",
                }}
              >
                <path
                  d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
            </div>
          </div>
          <ul
            className="links__pinturas__responsive"
            style={{
              height: `${altura}`,
            }}
          >
            <li>
              <Link to="/Bio"> BIO </Link>
            </li>
            <li>
              <a href="https://facebook.com"> CV </a>
            </li>
            <li>
              <a href="/obras"> Obras </a>
            </li>
            <li>
              <a href="/Contact"> Contacto </a>
            </li>

            <li> - 2018 - </li>
            {filtrarAño("2018").map((pintura, index) => (
              <li
                key={pintura.name}
                onClick={() => handleClick(pintura, index)}
              >
                {" "}
                <Link to={`/obras/`}> {pintura.name} </Link>{" "}
              </li>
            ))}
            <li> - 2019 - </li>
            {filtrarAño("2019").map((pintura, index) => (
              <li
                key={pintura.name}
                onClick={() => handleClick(pintura, index)}
              >
                {" "}
                <Link to={`/obras/`}> {pintura.name} </Link>{" "}
              </li>
            ))}
            <li> - 2020 - </li>
            {filtrarAño("2020").map((pintura, index) => (
              <li
                key={pintura.name}
                onClick={() => handleClick(pintura, index)}
              >
                {" "}
                <Link to={`/obras/`}> {pintura.name} </Link>{" "}
              </li>
            ))}
            <li> - 2021 - </li>
            {filtrarAño("2021").map((pintura, index) => (
              <li
                key={pintura.name}
                onClick={() => handleClick(pintura, index)}
              >
                {" "}
                <Link to={`/obras/`}> {pintura.name} </Link>{" "}
              </li>
            ))}
            <li> - 2022 - </li>
            {filtrarAño("2022").map((pintura, index) => (
              <li
                key={pintura.name}
                onClick={() => handleClick(pintura, index)}
              >
                {" "}
                <Link to={`/obras/`}> {pintura.name} </Link>{" "}
              </li>
            ))}
            {/* <li id="close" onClick={handleMenu}>
              Cerrar
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#000000"
                fill="none"
              >
                <path
                  d="M18 15C18 15 13.5811 9.00001 12 9C10.4188 8.99999 6 15 6 15"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
