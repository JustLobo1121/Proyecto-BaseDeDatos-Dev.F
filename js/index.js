// dejare algunos datos predeterminados 👍
let ListaDeAlumnos = [{
    Nombre: "Manuel",
    Apellido: "Hernandez",
    Edad: 18,
    Grupo: "A",
    Materias: ["matematicas","lenguaje","historia"],
    PromedioFinal:5,
    NotasTotales: [5,5,5]
},{
    Nombre: "Eduardo",
    Apellido: "Hernandez",
    Edad: 20,
    Grupo: "C",
    Materias: ["matematicas","lenguaje","historia"],
    PromedioFinal:6,
    NotasTotales: [6,6,6]
}]
document.addEventListener("DOMContentLoaded", function() {
    
    // para la manipulacion del dom
    // cambio de pantalla
    const ArregloPantalla = [{
            inicio: document.getElementById("inicio"), formulario: document.getElementById("formularioIngreso"),
            listaAlumno: document.getElementById("listado-alumno"), busquedaPorAlumno: document.getElementById("Info")
    }]
    const a = ArregloPantalla[0]
    // pantallas
    const ArregloVista = [{
            pantallaPrincipal: document.getElementById("MainScreen"), 
            formularioIngreso: document.getElementById("form-1"),
            Busqueda: document.getElementById("Informacion"), 
            listado: document.getElementById("form-2"), 
            busquedaNA: document.getElementById("val1-2"),
            Promedio: document.getElementById("inf3"),
            PromedioEdad: document.getElementById("inf4"),
            PromedioGrupo: document.getElementById("inf5"),
            PromedioEdadGeneral: document.getElementById("inf6"),
            AltaAlumno: document.getElementById("inf7")
        }]
    const b = ArregloVista[0]
    // botones funcionales
    const BotonLista = document.getElementById("visualizar")
    const AgregarBoton = document.getElementById("liveAlertBtn")    
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const BotonBusquedaNombre = document.getElementById("BusquedaNombre")
    const BotonBusquedaApellido = document.getElementById("BusquedaApellido")
    const BotonPromedio = document.getElementById("Promedio1")
    const BotonPromedioGrupo = document.getElementById("Promedio2")
    const BotonPromedioEdad = document.getElementById("Promedio3")
    const BotonMostrarOrdenMe = document.getElementById("mostrar")
    const BotonMostrarOrdenMa = document.getElementById("mostrar2")
    const BotonEgresar = document.getElementById("Egresar")
    // selects
    const selOpciones = document.getElementById("opciones")
    const opcionesOrden = document.getElementById("opcionesOrden")
    let selValor = 0
    let selValor2 = 0
    // lista 
    
    const appendAlert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')
        alertPlaceholder.append(wrapper)
    }
    // cambio de pantalla funcion
    a.inicio.addEventListener("click", function() {
        b.pantallaPrincipal.style.display = "block"
        b.formularioIngreso.style.display = "none"
        b.listado.style.display = "none"
        b.Busqueda.style.display = "none"
    })
    a.listaAlumno.addEventListener("click", function() {
        b.pantallaPrincipal.style.display = "none"
        b.formularioIngreso.style.display = "none"
        b.listado.style.display = "block"
        b.Busqueda.style.display = "none"
    })
    a.formulario.addEventListener("click", function() {
        b.pantallaPrincipal.style.display = "none"
        b.formularioIngreso.style.display = "block"
        b.listado.style.display = "none"
        b.Busqueda.style.display = "none"
    })
    a.busquedaPorAlumno.addEventListener("click", function() {
        b.pantallaPrincipal.style.display = "none"
        b.formularioIngreso.style.display = "none"
        b.listado.style.display = "none"
        b.Busqueda.style.display = "block"
    })
    // funciones select
    selOpciones.addEventListener("change", function() {
        selValor = selOpciones.value
        if (selValor == 1) {
            b.busquedaNA.style.display = "block"
            b.Promedio.style.display = "none"
            b.PromedioEdad.style = "none"
            b.PromedioGrupo.style = "none"
            b.PromedioEdadGeneral.style = "none"
            b.AltaAlumno.style.display = "none"
        } else if (selValor == 2) {
            b.busquedaNA.style.display = "none"
            b.Promedio.style.display = "block"
            b.PromedioEdad.style = "none"
            b.PromedioGrupo.style = "none"
            b.PromedioEdadGeneral.style = "none"
            b.AltaAlumno.style.display = "none"
        } else if (selValor == 3) {
            b.busquedaNA.style.display = "none"
            b.Promedio.style.display = "none"
            b.PromedioEdad.style.display = "block"
            b.PromedioGrupo.style.display = "none"
            b.PromedioEdadGeneral.style.display = "none"
            b.AltaAlumno.style.display = "none"
        } else if (selValor == 4) {
            b.busquedaNA.style.display = "none"
            b.Promedio.style.display = "none"
            b.PromedioEdad.style.display = "none"
            b.PromedioGrupo.style.display = "block"
            b.PromedioEdadGeneral.style.display = "none"
            b.AltaAlumno.style.display = "none"
        } else if (selValor == 5) {
            b.busquedaNA.style.display = "none"
            b.Promedio.style.display = "none"
            b.PromedioEdad.style.display = "none"
            b.PromedioGrupo.style.display = "none"
            b.PromedioEdadGeneral.style.display = "block"
            b.AltaAlumno.style.display = "none"
        } else if (selValor == 6 ) {
            b.busquedaNA.style.display = "none"
            b.Promedio.style.display = "none"
            b.PromedioEdad.style.display = "none"
            b.PromedioGrupo.style.display = "none"
            b.PromedioEdadGeneral.style.display = "none"
            b.AltaAlumno.style.display = "block"
        }
    })
    opcionesOrden.addEventListener("change", function() {
        selValor2 = opcionesOrden.value
        if (selValor2 == 1) {
            document.getElementById("mostrar2").style.display = "none"
            document.getElementById("mostrar").style.display = "block"
        } else if (selValor2 == 2) {
            document.getElementById("mostrar").style.display = "none"
            document.getElementById("mostrar2").style.display = "block"
        }
    })
    // funciones boton
    BotonLista.addEventListener("click", function() {
        const lista = document.getElementById("tabla")
        lista.innerHTML = ''
        for (const alumno of ListaDeAlumnos) {
            lista.innerHTML += `
                <tr>
                <td>${alumno.Grupo}</td>
                <td>${alumno.Nombre}</td>
                <td>${alumno.Apellido}</td>
                <td>${alumno.Edad}</td>            
                <td>${alumno.NotasTotales}</td>
                <td>${alumno.Materias}</td>
                <td>${alumno.PromedioFinal}</td>
                </tr>
            `
        }
    })
    AgregarBoton.addEventListener("click", function() {
        const nombre = String(document.getElementById("inputname").value)
        const apellido = String(document.getElementById("inputapellido").value)
        const edad = parseInt(document.getElementById("inputedad").value)
        const grupo = String(document.getElementById("inputgrupo").value)
        const mate1 = String(document.getElementById("inputmate1").value)
        const mate2 = String(document.getElementById("inputmate2").value)
        const mate3 = String(document.getElementById("inputmate3").value)
        const nota1 = parseInt(document.getElementById("inputnota1").value)
        const nota2 = parseInt(document.getElementById("inputnota2").value)
        const nota3 = parseInt(document.getElementById("inputnota3").value)
        const materiaSel = [mate1,mate2,mate3]
        const NotasTotal = [nota1,nota2,nota3]
        let notaAcumulada = 0
        notaAcumulada = (nota1 + nota2 + nota3) / 3
        
        let Alumno = {
            Nombre: nombre,
            Apellido: apellido,
            Edad: edad,
            Grupo: grupo,
            Materias: materiaSel,
            PromedioFinal:notaAcumulada,
            NotasTotales: NotasTotal
        }
        ListaDeAlumnos.push(Alumno)
        appendAlert('Alumno agregado genial!', 'success')
    })
    BotonBusquedaNombre.addEventListener("click", function() {
        const inputBusquedaNombre = String(document.getElementById("inputnamebusqueda").value)
        const lista = document.getElementById("inf1/2-2")
        if (inputBusquedaNombre != "") {
            let A = {}
            for (const NombreAlumno of ListaDeAlumnos) {
                if (NombreAlumno.Nombre == inputBusquedaNombre) {
                    A += `<tr>
                        <td>${NombreAlumno.Grupo}</td>
                        <td>${NombreAlumno.Nombre}</td>
                        <td>${NombreAlumno.Apellido}</td>
                        <td>${NombreAlumno.Edad}</td>
                        <td>${NombreAlumno.NotasTotales}</td>
                        <td>${NombreAlumno.Materias}</td>
                    </tr>
                    `
                }
            }
            lista.innerHTML = `
                    <table class="table table-bordered table-dark" id="tabMain" >
                          <thead>
                            <tr>
                              <th scope="col">Grupo</th>
                              <th scope="col">Nombre</th>
                              <th scope="col">Apellido</th>
                              <th scope="col">Edad</th>
                              <th scope="col">Notas Totales</th>
                              <th scope="col">Materias</th>
                            </tr>
                          </thead>
                          <tbody class="table-group-divider">
                            ${A}
                          </tbody> 
                    </table>           
                        `        
        } else {
            alert("Inserte un Nombre!")
        }
    })
    BotonBusquedaApellido.addEventListener("click", function() {
        const inputBusquedaApellido = String(document.getElementById("inputnameapellido").value)
        const lista = document.getElementById("inf1/2-2")
        let A = {}
        if (inputBusquedaApellido != "") {
            for (const ApellidoAlumno of ListaDeAlumnos) {
                if (ApellidoAlumno.Apellido == inputBusquedaApellido) {
                    A+= `<tr>
                    <td>${ApellidoAlumno.Grupo}</td>
                    <td>${ApellidoAlumno.Nombre}</td>
                    <td>${ApellidoAlumno.Apellido}</td>
                    <td>${ApellidoAlumno.Edad}</td>
                    <td>${ApellidoAlumno.NotasTotales}</td>
                    <td>${ApellidoAlumno.Materias}</td>
                    </tr>
                    `
                }
            }
            lista.innerHTML = `
                    <table class="table table-bordered table-dark" id="tabMain" >
                          <thead>
                            <tr>
                              <th scope="col">Grupo</th>
                              <th scope="col">Nombre</th>
                              <th scope="col">Apellido</th>
                              <th scope="col">Edad</th>
                              <th scope="col">Notas Totales</th>
                              <th scope="col">Materias</th>
                            </tr>
                          </thead>
                          <tbody class="table-group-divider">
                            ${A}
                          </tbody>
                    </table>            
                        `
            
        } else {
            alert("Inserte un Apellido!")
        }
    })
    BotonPromedio.addEventListener("click", function() {
        const InputNombrePromedio = String(document.getElementById("inputnamePromedio").value)
        let Resultado = {}
        if (InputNombrePromedio != '') {
            for (const EntradaPromedio of ListaDeAlumnos) {
                if (EntradaPromedio.Nombre == InputNombrePromedio) {
                    Resultado += `
                        <tr>
                            <td>${EntradaPromedio.Grupo}</td>
                            <td>${EntradaPromedio.Nombre}</td>
                            <td>${EntradaPromedio.Apellido}</td>
                            <td>${EntradaPromedio.Edad}</td>
                            <td>${EntradaPromedio.NotasTotales}</td>
                            <td>${EntradaPromedio.PromedioFinal}</td>
                        </tr>
                        `
                }
            }
            document.getElementById("inf3-2").innerHTML = `
            <table class="table table-bordered table-dark" id="tabMain" >
                <thead>
                  <tr>
                    <th scope="col">Grupo</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Notas Totales</th>
                    <th scope="col">Promedio Final</th>
                  </tr>
                </thead>
                <tbody class="table-group-divider">
                  ${Resultado}
                </tbody>        
          `
        } else {
            alert("inserte un nombre para buscar!")
        }
    })
    BotonPromedioGrupo.addEventListener("click", function() {
        const InputPromedioGrupo = String(document.getElementById("inputgroupPromedio").value)
        if (InputPromedioGrupo != '') {
            let a = []
            for (const alumGrupo of ListaDeAlumnos) {
                if (alumGrupo.Grupo == InputPromedioGrupo) {
                    a += alumGrupo.Edad
                }
            }
            let b = a / (a.length -1)
            document.getElementById("inf4-2").innerHTML = `
                <div class="col-md-6">
                    <label class="form-label">El promedio de edad del grupo: ${InputPromedioGrupo}</label>
                    <label class="form-label">El promedio de edad es: ${b}</label>
                </div>
                `
        } else {
            alert("inserte un grupo!")
        }
    })
    BotonPromedioEdad.addEventListener("click", function() {

        let edad = 0
        for (let i=0;i < ListaDeAlumnos.length;i++) {
            edad += ListaDeAlumnos[i].Edad
        }
        let promedio = edad / ListaDeAlumnos.length
        document.getElementById("inf5-2").innerHTML = `
                <div class="col-md-6">
                    <label class="form-label">El promedio de edad de todos los Alumnos</label>
                    <label class="form-label">es: ${String(promedio)}</label>
                </div>
                `
    })
    BotonMostrarOrdenMe.addEventListener("click", function() {
        let lista2 = {}
        let menorAMayor = ListaDeAlumnos.sort((x,b)=> x.Edad - b.Edad)
            for (const menor of menorAMayor) {
                lista2 += `
                    <tr>
                        <td>${menor.Grupo}</td>
                        <td>${menor.Nombre}</td>
                        <td>${menor.Apellido}</td>
                        <td>${menor.Edad}</td>
                        <td>${menor.NotasTotales}</td>
                        <td>${menor.Materias}</td>
                    </tr>    
                        `
            }
            document.getElementById("inf6-2").innerHTML = `
                <table class="table table-bordered table-dark" id="tabMain" >
                    <thead>
                      <tr>
                        <th scope="col">Grupo</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Notas Totales</th>
                      </tr>
                    </thead>
                    <tbody class="table-group-divider">
                      ${lista2}
                    </tbody>
                </table>    
          `
    })
    BotonMostrarOrdenMa.addEventListener("click", function() {
        let lista2 = {}
        let menorAMayor = ListaDeAlumnos.sort((x,b)=> b.Edad - x.Edad)
            for (const menor of menorAMayor) {
                lista2 += `
                    <tr>
                        <td>${menor.Grupo}</td>
                        <td>${menor.Nombre}</td>
                        <td>${menor.Apellido}</td>
                        <td>${menor.Edad}</td>
                        <td>${menor.NotasTotales}</td>
                        <td>${menor.Materias}</td>
                    </tr>    
                        `
            }
            document.getElementById("inf6-2").innerHTML = `
                <table class="table table-bordered table-dark" id="tabMain" >
                    <thead>
                      <tr>
                        <th scope="col">Grupo</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Notas Totales</th>
                      </tr>
                    </thead>
                    <tbody class="table-group-divider">
                      ${lista2}
                    </tbody>
                </table>    
          `
    })
    // pulir
    BotonEgresar.addEventListener("click", function() {
        const InputNombre = String(document.getElementById("inputNombreEgresar").value)
        const InputApellido = String(document.getElementById("inputApellidoEgresar").value)
        const InputEdad = Number(document.getElementById("inputEdadEgresar").value)
        const Inputgrupo = String(document.getElementById("inputGrupoEgresar").value)

        let objetoEncontrado = ListaDeAlumnos.find(Alumno => 
            Alumno.Nombre === InputNombre && Alumno.Apellido === InputApellido &&
            Alumno.Edad === InputEdad && Alumno.Grupo === Inputgrupo
        )
        
        // Verificar si se encontró un objeto que cumple con las condiciones
        if (objetoEncontrado) {
            // Encontrado, ahora lo eliminamos del arreglo
            ListaDeAlumnos = ListaDeAlumnos.filter(Alumno => Alumno !== objetoEncontrado)
            document.getElementById("inf7-2").innerHTML = `<h1 class="text-white">El Alumno se removio del sistema!</h1>`
        } else {
            document.getElementById("inf7-2").innerHTML = `<h1 class="text-white">No se encontro el Alumno!</h1>`
        }
        
    })
})
// local storage!!