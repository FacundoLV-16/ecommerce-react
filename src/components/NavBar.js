const NavBar = () => {
  return (
    <header>
      <div class="conteiner-all">
        <div class="menu-superior">
          {/* LOGO */}
          <div class="logo-div">
            <a href="index.html">
              <img
                class="img-movil"
                src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/logo__small.png"
                alt="Mercado libre"
              />
              <img
                class="img-pc"
                src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/logo__large_plus.png"
                alt="Mercado libre"
              />
            </a>
          </div>
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
            <i class="fa-brands fa-empire"></i> Mi cuenta
          </a>
          <a href="" class="mis-compras">
            Mis compras <i class="fa-solid fa-cart-shopping"></i>
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
      {/* ALERTA */}
      <div
        class="alert container position-sticky top-0 alert-primary hide"
        role="alert"
      >
        Producto Añadido al carrito!
      </div>
      <div
        class="alert container position-sticky top-0 alert-danger remove"
        role="alert"
      >
        Producto Removido!
      </div>
    </header>
  );
};

export default NavBar;
