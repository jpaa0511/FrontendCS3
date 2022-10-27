$(document).ready(() => {
  $.get("http://localhost:3000/plataformas", (rs) => {
    let t = $("#plataformas");
    rs.forEach((Plataforma) => {
      t.append(`
        <div class="col-md-3">
          <div class="card text-center">
            <div id="irPlataforma" class="card-body">
              <img src="${Plataforma.Imagen_URL}" alt="" width="90%" height="200px">
              <h3 class="card-title text-uppercase"> ${Plataforma.Nombre}</h3>
              <p class="m-2">${Plataforma.Descripcion}</p>
              <p class="m-2">${Plataforma.Precio}</p>
              <div class="d-grid gap-2">
                <a href="" class="btn btn-danger mx-2">Eliminar plataforma</a>
                <a href="" class="btn btn-secondary mx-2">Editar</a>
              </div> 
            </div>
          </div>           
        </div>`);
    });
  });
});
