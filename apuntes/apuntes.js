/* 
    inicio curso node-js
    recursos
        nodejs
        visual
        docker
    CLI: es un metodo que permite dar instrucciones a algun programa con una linea de texto simple.(bash,powersheel, terminal).

        S.O. ls,mkdir,cd
            ej mkdir myfolder
        NODE.js:
            node (palabra reservada)
            node -v(palabra reservada,argumento)
            ej node app.js
        NPM.
            npm (palabra reservada)
            npm -v(palabra reservada,argumento)
            ej npm i express
        GIT
            git (palabra reservada)
            git pull(palabra reservada,argumento)
            ej git status
        Docker
            docker (palabra reservada)
            docker pull(palabra reservada,argumento)
    estos programas ya viene con el CLI integrado.
    Para verifiar las instalaciones ejecutamos los siguientes comandos:
                        node -v
                        npm -v
                        git --version
                        docker -v
    Procesadores y codigo maquina:
    JS V8
    Procesador: maquina de procesamiento que hace un trabajo.
        no todos tienen el mismo lenguaje.
        lo encontramos en nuestros smarthphones.
    Codigo de maquina:
        Lenguajes de programacion que los procesadores pueden interpretar.
    ¿por que no escribir lenguaje de maquina directamente?
        el tamaño como assembler que es en bajo nivel.
        los de alto nivel son copilados a lenguaje de maquina.
        c,c++: seintaxis de C usados por js y java.
            c++ te permite usar las funciones de bajo nivel.
        
            JS es un lenguaje que se traduce a lenguaje de maquina.

        NODE.JS=C++     nodejs esta escrito en c++, es un programa de c++,v8 tambien esta escrito en c++. 

    ECMA:(EUROPEAN COMPUTER MANUFACTURERS ASSCIATION)
        oraganizacion internacional basada en membresias de estandares para la comunicaicon y la informacion.
    
        1997 Tc39 se crea un comite para estandarizar JS.(regalas de js ECMAScript)

        Motores de intrepretacion entre navegadores de diferentes empresas que usaron js pero no eran igual y se crearon los estandares.

        TC39
        2014    2015-1016   2016-1017
        ES5      ES6            ES-7
        ES5             ESNEXT

        Engine:
            convierte codigo js compila a lenguaje de maquina, 
            v8 es un motor de js y es el nucleo de js
    V8: open source libre para usar y modificar desarrollado por google.
        https://github.com/v8/v8

        esta escrito en c++. se usa en google chrome implementa los estadanres ECMAScript.
        v8 usa arm64
        para transipilar el codigo js a lenguaje de maquina se usa c++.


        VISUAL ESTUDIO CODE
        shit crlt p
        podemos usar el comando code en consola para manipular nuestro VS.
        ejemplo code -v para ver la version 
        code v8/    abre directorios

        extensiones necesarias.
        docker  realizado por microfot
        javascript   realizado por "charalampos karypidis" con snippets
        Path intellisense   christian kohler
        npm         por egamma
        prettier-code formatter por prettier     da formato
        node.js extension pack  wade anderson

        AGREGANDOCOMPORTAMIENTO AL CORE DE NODE JS

        js -> v8 -> codigo maquina

        v8 te permite escribir en c++ y agregar mas funciones a nodejs.
        
        implementaremos la funcion print() con la ayuda de v8.
        podemos implementar una funcion en v8 en c++ y decirle que su comportamiento desde js sera diferente.
        de esta forma ya podemos tener una version de node.js propia.

        CLIENTE Y SERVIDOR:
            Node js esta diseñado para usarlo en servidor
        el cliente solicita al servidor para hacer un trabajo.

        cliente ->request->servidor         modelo cliente servidor
                <-response<-  
         ademas tiene un lenguaje estandar entre ellos.

            navegador   http  webserver
                        request
                        response
                        
        jquery escrita en js
        ajax   comunicacion

        normalmente se cambia en lenguaje en backend y en front es js
        con nodejs podemos tener un estandar en el lenguaje y usamos el mismo pero
        nos es lo principal lo interesante es que podemos usar las mismo librerias tanto en cliente como en servidor.

        js en el servidor
        caracteristicas
            - archivos js debe tener la capacidad de procesar archivos
            - bases de datos js debe poder administrar uns bd realcional o no
            - internet deberia sera capaz de comunicarse atravez de internet
            - Solicitud y respuesta debe ser capaz de recibir una solicitud de un cliente y debe poder responder
            - hilos debe tner la capacidad de manejar diferentes procesos al mismo tiempo nodejs es single en un solo hilo.
            - hardware debe ser capaz de manipular
            - resursos manipular los recursos del servidor
            - software debe ser capaz de comunicarse con otros lenguajes.
        REPASO JS
        vanilla js o javascript
        expresiones,tipos de datos,variables,condicionales,objetos,colecciones,arrays,funciones,callback,promesas,async/await
        son los conocimientos minimos de js para poder usar nodejs.
        Expresiones:
            Cualquier cosa que produzca un valor primitivo. 
        Variables:
            una variable esta formada por un espacio en el sistema de almacenaje un nombre simbolico que esta asociado a dicho  espacio.
            ej imagina una caja donde colocas algun objeto como una laptop y etiquetala par apoder encontrarla y usarla. ahora crea mas cajas de ese tipo ya todas ya van a tener un identificador

            funcionamiento
            RAM -> let bar =5;  se reserva un espacio de memoria con el valor 5 y el tipo bar

            son espacios de memoria reservados siempre y cuando el programa este funcionando

            console.log(bar); obtnemos el valor desde la memoria.
        oprador logico
            nos permite crear valores a partir de otros.
            ejecutando codigo con nodejsdesde terminal.
            node .\4-operadoreslog.js
        
            /////// podemos usar log como corto para console log
        OBJETOS:
            se puden crear de diferentes formas y en js todo esat representado como objeto
        COLECCIONES:
            cuando necesitamos almacenar muchos datos en una variable

*/