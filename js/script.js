$(document).ready(() => {
  cargarTabla();
});

function cargarTabla() {
  $.get("http://localhost:3000/plataformas", (rs) => {
    let t = $("#plataformas");
    t.empty();
    rs.forEach((Plataforma) => {
      t.append(`
        <div class="col-md-3">
          <div class="card text-center mb-3">
            <div id="irPlataforma" class="card-body">
              <img src="${Plataforma.Imagen_URL}" alt="" width="90%" height="200px">
              <h3 class="card-title text-uppercase"> ${Plataforma.Nombre}</h3>
              <p class="m-2">${Plataforma.Descripcion}</p>
              <p class="m-2">$${Plataforma.Precio}</p>
              <p class="m-2">Id: ${Plataforma.Id}</p>
              <div class="d-grid gap-2">
                <button onclick="eliminar(${Plataforma.Id})" class="btn btn-danger mx-2">Eliminar plataforma</button>
                <button id="editarplat" class="btn btn-secondary mx-2">Editar</button>
              </div> 
            </div>
          </div>           
        </div>`);
    });
  });
};

function eliminar(Id) {
  $.ajax({
      url: ("http://localhost:3000/plataformas/"+Id),
      type: 'DELETE',
      success: function (result) {
        console.log(result)
      }
  });
};

$("#addPlataforma").click(() => {
  const Imagen_URL = $("#Imagen_URL");
  const Nombre = $("#Nombre");
  const Descripcion = $("#Descripcion");
  const Precio = $("#Precio");

  let p = {
    Imagen_URL: Imagen_URL.val(),
    Nombre: Nombre.val(),
    Descripcion: Descripcion.val(),
    Precio: Precio.val(),
  };
  console.log(p);

  $.post("http://localhost:3000/plataformas", p, (rs) => {
    console.log(rs);
    cargarTabla();
  });
});

