export const MainIndex = () => {
  return (
    <main>
      {/*           Carousel */}
      {/* br */}
      {/* br */}
      {/* br */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          {/*           Carousel-Img */}
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="https://http2.mlstatic.com/D_NQ_849386-MLA51198438727_082022-OO.webp"
              alt="First slide"
            />
          </div>
          {/*           Carousel-Img */}
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://http2.mlstatic.com/D_NQ_830054-MLA51165985095_082022-OO.webp"
              alt="Second slide"
            />
          </div>
          {/*           Carousel-Img */}
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://http2.mlstatic.com/D_NQ_655613-MLA51259937082_082022-OO.webp"
              alt="Third slide"
            />
          </div>
          {/*           Carousel-Img */}
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://http2.mlstatic.com/D_NQ_782746-MLA51259782157_082022-OO.webp"
              alt="fourth slide"
            />
          </div>
          {/*           Carousel-Img */}
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://http2.mlstatic.com/D_NQ_736514-MLA51166694120_082022-OO.webp"
              alt="fifth slide"
            />
          </div>
          {/*           Carousel-Img */}
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://http2.mlstatic.com/D_NQ_946720-MLA51281106336_082022-OO.webp"
              alt="sixth slide"
            />
          </div>
          {/*           Carousel-Control */}
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      {/*           Carousel */}
      {/* br */}
      {/* br */}
      {/* br */}
      {/*           Metodos de Pago */}
      {/* br */}
      {/* br */}
      {/* br */}
      <div class="div-canteiner-pago">
        <div class="div-formas-de-pago">
          {/*           Metodos de Pago */}
          <div>
            <img
              src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg"
              alt="targeta de crédito"
            />
            <h6>Targeta de crédito</h6>
            <p>Ver promociones bancarias</p>
          </div>
          {/*           Metodos de Pago */}
          <div>
            <img
              src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/debit-card.svg"
              alt="targeta de debito"
            />
            <h6>Targeta de débito</h6>
            <p>Ver mas</p>
          </div>
          {/*           Metodos de Pago */}
          <div>
            <img
              src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg"
              alt="Cuotas sin targeta"
            />
            <h6>Cuotas sin targeta</h6>
            <p>Conocé Mercado crédito</p>
          </div>
          {/*           Metodos de Pago */}
          <div>
            <img
              src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg"
              alt="Efectivo"
            />
            <h6>Efectivo</h6>
            <p>Ver más</p>
          </div>
          {/*           Metodos de Pago */}
          <div class="otros-metodos">
            <img
              src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg"
              alt="otros medios de pago"
            />
          </div>
        </div>
      </div>
      {/*           Metodos de Pago */}
      {/* br */}
      {/* br */}
      {/* br */}
      {/*           Ofertas */}
      {/* br */}
      {/* br */}
      {/* br */}
      <div class="div-ofertas">
        <h2>Ofertas</h2>
        <h6 class="ofertas-mini">
          <a href="paginas/ofertas.html">ver todas</a>
        </h6>
      </div>
      <div class="card-all">
        {/*           Card */}
        <div class="card" style="width: 18rem">
          <img
            src="https://http2.mlstatic.com/D_Q_NP_975834-MLA51015201380_082022-W.webp"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Notebook Lenovo</h5>
            <p class="card-text">
              Notebook Lenovo Ideapad 3 14iil05 Intel Core I3 1005g1, 8gb De
              Ram, 128gb Ssd, 14 Full Hd, Windows 11 S, Gris Platino
            </p>
            <del>$94.999</del>
            <label for="btn">
              <span class="precio">$80.000</span>
            </label>
            <label for="btn" id="descuento">
              5% OFF
            </label>
            <p class="descuento">Hasta 6 cuotas sin intéres</p>
            <a href="#" id="btn" class="btn btn-primary">
              Agregar al carro
            </a>
          </div>
        </div>
        {/*           Card */}
        <div class="card" style="width: 18rem">
          <img
            src="https://http2.mlstatic.com/D_Q_NP_952985-MLA50222305999_062022-W.webp"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Smart Tv Tcl</h5>
            <p class="card-text">
              Smart Tv Tcl L50p615 50 4k Uhd Android Tv
              <br />
              <br />
              <br />
            </p>
            <label for="btn">
              <span class="precio">$95.000</span>
            </label>
            <label for="btn" id="descuento"></label>
            <p class="descuento">Hasta 6 cuotas sin intéres</p>
            <a href="#" id="btn" class="btn btn-primary">
              Agregar al carro
            </a>
          </div>
        </div>
        {/*           Card */}
        <div class="card" style="width: 18rem">
          <img
            src="https://http2.mlstatic.com/D_Q_NP_988597-MLA50693346006_072022-W.webp"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Motorola Edge 30</h5>
            <p class="card-text">
              Motorola Edge 30 128 GB gris 8 GB RAM
              <br />
              <br />
            </p>
            <del>$99.999</del>
            <label for="btn">
              <span class="precio">$90.000</span>
            </label>
            <label for="btn" id="descuento">
              10% OFF
            </label>
            <p class="descuento">Hasta 6 cuotas sin intéres</p>
            <a href="#" id="btn" class="btn btn-primary">
              Agregar al carro
            </a>
          </div>
        </div>
      </div>
      {/*           Ofertas */}
      {/* br */}
      {/* br */}
      {/* br */}
    </main>
  );
};
