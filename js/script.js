/*$(document).ready(() => {
    $.get("http://localhost:3000/plataformas", (rs) => {
      let t = $("#prueba");
      rs.forEach((Plataforma) => {
        t.append(`
              <img src="${Plataforma.Imagen_URL}" alt="" class="img-fluid">
              <h3 class="card-title text-uppercase"> ${Plataforma.Nombre}</h3>
              <p class="m-2">${Plataforma.Descripcion}</p>
              <p class="m-2">${Plataforma.Precio}</p>
              `);
      });
    });
  });*/

$(document).ready(() => {
    
    $.get("http://localhost:3000/plataformas", (rs)=>{
          let t = $("table");
          rs.forEach(Plataforma =>{
              t.append(`<tr>
              <td><img width="100px" src="${Plataforma.Imagen_URL}"></td>
              <td>${Plataforma.Nombre}</td>
              <td>${Plataforma.Descripcion}</td>
              <td>${Plataforma.Precio}</td>
              </tr>`)
          });     
      })
  });

