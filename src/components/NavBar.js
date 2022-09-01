import { CartWidget } from "./CartWidget";

const NavBar = () => {
  return (
    <header>
      <div class="conteiner-all">
        <div class="menu-superior">
          {/* LOGO */}
          <CartWidget></CartWidget>
          {/* BUSCADOR */}
          <form action="">
            <input
              type="search"
              placeholder="Busca productos, marcas y más ..."
            />
          </form>
          {/* LOGO */}
          <img
            class="img-propaganda"
            src="https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp"
            alt="Propaganda"
          />
          <a href="" class="mi-cuenta">
            Mi cuenta
          </a>
          <a href="" class="mis-compras">
            Mis compras
          </a>
        </div>
        {/* MENU */}
        <did class="menu-inferior">
          <div class="div-menu">
            <ul class="menu">
              <li></li>
              <li></li>
              <li>Categorias</li>
              <li>
                <a href="paginas/ofertas.html">Ofertas</a>
              </li>
              <li>Historias</li>
              <li>Supermercado</li>
              <li>Moda</li>
              <li>Vender</li>
              <li>Ayuda</li>
              <li></li>
              <li></li>
              <li></li>
              <li>
                <a href="paginas/register.html">Crea tu cuenta</a>
              </li>
              <li>
                <a href="paginas/user-session.html">Ingresá</a>
              </li>
              <li>
                <a href="paginas/carro.html">Mis compras</a>
              </li>
            </ul>
          </div>
        </did>
      </div>
    </header>
  );
};

export default NavBar;
