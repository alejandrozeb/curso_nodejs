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
        BUCLES:
            son iteradores que nos permiten recorrer una coleccion
        FUNCIONES:
            cuando necestiemos un pedazo de codigo varias veces para no repetir codigo
        TEORIA CALLBACKS
            es una funcion x que usa como argumento de otra funcion y, cuando se llama a y, esta ejecuta x.(para conseguirlo usualmente lo que se pasa a y es el puntero de x)

            ejemplos setTimeoout
            setTimeout(function,time,arg?);
            recibe una funcion, luego el valor de tiempo y puede o no tener un argumento

            setTimeout(function(){
                console.log('hello');
            },2000)
            en 2 segundos se ejecutara el hello

            otro ejemplo
            calculate(n1,n2, operation);

                function calculate(n1,n2,operation){
                    return operation(n1,n2);
                }
            enviamos dos numeros y una funcion retornamos el resultado de la funcion operation

                function add(n1,n2){
                    return n1+n2;
                }
            creamos la funcion para que jecute

            const result = calculate(1,8,add);
            console.log(result)//9

            cuando nos referimos a pasr el puntero es psarlo como argumento.

            VENTAJAS:
                son simples, conceptualmente, son universales no requieren transpilar es nativo
            DESVENTAJAS:
                composicion tosca, las llamadas aninadas al tener muchos callbacks
                flujo poco intuitivo requieren que nos movamos dentro del codigo para comprender el flujo
            
                muchas funciones estan basadas con callbacks a parit de ES& se usan promesas, usa callbacks solo cuando sea necesario y siguiendo los estandares de js
        PROMESAS TEORIA:
            son una forma de manejar asincronia.
            Es un objeto que representa la terminacion o el fracaso eventual de una operacion asincrona.
                esencialmente, una promesa es un objeto devuelto al cual se adjuntan funciones callback, en lugar de pasar callbacks a una funcion
            todo surge a partir de la clase Promise que es nativo
                const promise = new Promise(callback);
                
                el callback debe responder a una funcion de este tipo

                function executor(resolve,reject){
                    //si funciona
                    resolve();
                    //si falla
                    reject();
                }

                recibe dos argumentos, que se los pasa la clase promise.
                si todo funciona se ejecuta resolve
                si falla llama reject();

                uso
                const promise = nre Promise(executor);
                una promesa devuelve
                    .then()     viene la data si elrsolve si ha invocado
                    .catch()    viene el error cuando se ejecuta el reject   
                    .finally(); siempre se ejecuta

                VENTAJAS
                Se pueden enlazar facilmente para manejar flujos asincronos complejos sin tener que recurrir a mas anidaciones como se requiren en callbacks, con esto ya solucionamos ese problema
                Poderoso proporciona una capacidad excepcional para componer operaciones asincronas complejas, 
                DESVENTAJAS
                exepciones que desaparecen se debe declara catch() para manejar errores en lugar del tradicional try/catch.
                
                
                ////usa promesas en vez de callbacks para mantener el standar, ten cuidad en caer en el promises hell por la excesiva anidacion.
        ASYNC/AWAIT:
                async: cuando se llama una funcion async, esta devulve un elemento Promise cuando la funcion async genera una excepcion o algun valor, Promise se rechazara con el valor generado.
                await: devolvera una promesa
                la expresion await provoca que la ejecucion de una funcion async sea pauseada hasta que una Promise sea terminada o rechazada y regresa a la ejecucion de la funcion async despues del termino. al regreso de la ejecucion, el valor de la expresion await es la regresada por una promesa terminada. :va a esperar a esa promesa ya sea si funciona o error.
        
            tenemos que usar try catch para los errores.
            Cuando utilizas async y await tienes un codigo mucho mas limpio y sobre todo un mejor control de la excepcinoes de ser posible, siempre utilizan async y await. tiens un codigo mas limpio.
        Modules, exports & requires:
            Bloque de codigo reutilizable cuya existencia no afecta accidentalmente a otro codigo a partir de la version 6 
            NOdejs implemento Commonjs es un estandar acordado sobre como deberian estructurarse los modulos de codigo.
            cuando usamos una libreria las usamos como modulos

*/