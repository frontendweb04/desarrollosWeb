<?php
 $destino="frontendweb04@gmail.com";
 $nombre=$_POST["nombre"];
 $correo=$_POST["correo"];
 $celular=$_POST["celular"];
 $mensaje=$_POST["mensaje"];
 $contenido="Nombre: ".$nombre."\nCorreo: ".$correo."\nCelular: ".$celular."\nMensaje: ".$mensaje;
 mail($destino,"Contacto", $contenido);
 header("Location: contactenos.html");
?>