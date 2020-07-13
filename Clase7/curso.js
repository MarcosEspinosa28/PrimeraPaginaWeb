function validarforma(forma) {
    console.log("");
    console.log("Validando la forma");
    //var usuario=forma.nombre;
    //console.log("El Usuario es " + usuario.value);
    alert("funciona");

    if(usuario.value ==""|| usuario.value=="escribir Usuario"){
        alert("Debe Proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
    }
    
    var tecnologias = forma.tecnologia;
    var checkseleccionado= true;

    for( i = 0; i < teccnologias.length; i++){
        if (tecnologias[i].checked){
            checkSeleccionado = true;
        }
    }
    if (!checkSeleccionado){
        alert("Debe Proporcionar una tecnologia");
        return false;
    }
alert("formulario valido, enviando datos.....");
return false;
}