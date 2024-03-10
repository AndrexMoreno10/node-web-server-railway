const http = require ('http');

const server = http.createServer( (req , res)  => {

    // res.write(200 , {'Content-Type':'text/plain'}); // Devuelve una respuesta 200 y su tipo de contenido es un archivo de texto
    // res.end();
    
    // const persona = {
    //     id : 1,
    //     nombre: 'Andres Moreno'

    // }

    // res.write( JSON.stringify(persona)) //Esto debe de ser un String , no un objeto , entonces serializamos el objeto persona  

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv') //el csv es un tipo de texto que me sirve para descargar archivos
    // res.writeHead(200 , { ' Content-Type' : ' application/csv'});

    // //Entonces lo que hace esto es que me hace una tablita de tipo csv osea que se descarga y la podriamos abrir en excel
    // res.write( 'id, Nombre\n');
    // res.write( '1, Andres\n');
    // res.write( '2, Moreno\n');
    // res.write( '4, Prieto\n');
    // res.write( '5, Daniel\n');
    // res.end();



}) // req = es lo que estan solicitando,  res = la respuesta de mi servidor
.listen( 8080 );
console.log('escuchando el puerto:' , 8080);