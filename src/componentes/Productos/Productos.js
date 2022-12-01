import React from "react";

const Productos = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className=".col-12 text-center">
            <h1>Productos</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="/imagenes/remera gondor.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Remera Gondor</h5>
        <p class="card-text">Remera de algodon diseñada en varios colores</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Precio "$3500" consultar promociones con tarjeta de crédito</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/imagenes/remera dr strange.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Remera Dr Strange</h5>
        <p class="card-text">Remera Dr Strange Diseño unico solo en color blanco </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Precio "$4000" consultar promociones con tarjeta de crédito</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="./imagenes/remera gryffindor.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Remera Gryffindor</h5>
        <p class="card-text">Remera gryffindor Colorews a elección</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Precio "$4000"  consultar promociones con tarjeta de crédito </small>
      </div>
    </div>
  </div>
</div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
