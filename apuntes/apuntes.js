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
        Sincronia y asincronia
            js No es asincrono:
                ASINCRONIA: más de un proceso, o más de una cosa ejecutandose simultaneamente.
             
            NODEJS realiza las tareas de manera asincrona pero v8 lo procesa sincronicamente

                SINCRONIA: Un unico proceso o unica cosa ejecutandose a la vez
            JavaScript es Sincronico se ejecuta linea por linea y nunca dos lineas a la vez.
            js fue diseñado para ser sincronico sin embargo
            NODEJS es asincronico y v8 esta incrustado en el y asi mientras v8 transpila codigo js a lenguaje de maquina, Nodejs puede realizar otras tareas.
        EVENTOS
            EVENTO: Es algo que ha sucedido en nuestra aplicacion al que podemos reposnder.
            no esta limitado a js y se encuetra en muchas areas del desarrollo del software.
            tipos de eventos en nodejs, se confunden con un solo evento pero estan atados se trata de:
            EVENTOS DE SISTEMA: que la gestiona la libreria libuv qeu son parte del core de nodejs
            EVENTOS PERSONALIZADOS: es una libreria de eventos de js que no es parte de libuv.
            
            se suele confundir ya que libuv se encarga de generar un evento personalizado cuando pasa un evento del sistema por eso se piensa que son unos solo

            evento js: no son eventos reales, no existe un objeto llamado evento en el core de js pero para enterder este comportamiento lo veremos en nuestro ejemplo de eventos emisor de eventos
            
            EVENT EMITTER nodejs
            EVENLOOP,LIBUV Y NON-BLOCKING I/O
            eventos personalizados con los event emmiter que viene en un array de funciones

            EVENTOS DEL SISTEMA manejados por libuv escritos en c y c++

            v8->
            v8 sincrono linea por linea.
            libuv escrita en c++ diseñada para eventos, y solicita algo al Sistema operativo, mientras v8 sigue realizando su funcion
            libuv tiene un queue compuesto por
                queue


                eventloop   //comprueba los eventos 
                libuv

                pasa un evento y el sistema operativo responde con un evento que realizo y se pone a la cola.

                libuv verifica que se realizo la tarea y raliza un callback a v8 como un emisor de eventos y se va a la cola de v8 sincrono.

                v8 termina todos sus tareas y recien atiende a libuv
                pero al realizar el trabajo diferenciado etre v8 y libuv lo hace asincrono.

                non-blockingI/O
                capacidad de realizar acciones sin pausar o detener otras.
                un proceso en nodejs no detiene otro proceso siempre y cuando use un callback promise o async
        HTTP Y SERVIDORES:
            HTTP: sistema mediante el cual se permite la transferencia de informacion entre diferentes servicios y los clientes que utilizan paginas web.
            protocolo de comunicacion entre el cliente y el servidor. HTTPS encriptado
            SERVIDOR WEB: es el software que se encagar de despachar el contenido de un sitio web al usuario.
        Nodejs y servidores web:
            Nodejs es bueno al creas API
            nodejs contiene si propio servidor, crea su propio entorno 
            Tolerancia a fallos, si nose maneja de manera correcta.
            Framewokrs vs vanilla, podemos desarrollar de manera rapita si queremos podemos usar vanilla o nativa.
    SERVIRDOR FUNCIONAMIENTO
        Tenemos un cliente que puede ser cualquier navegador que hace un request a un servidor
        ese servidor lo procesa y devuelve un response al cliente y esto ocurre con el protocolo http o https
                                HTTP/S
                cliente ------------------->servidor
                            request
                cliente<--------------------servidor
                            response
         tanto el cliente como el srvidor conocen informacion de ambos cache formato SO 
    RUTAS:
        es un identificardor unico
                / esta es la ruta
        si tenemos otra
                /about  es otra
        el servidor entiende que usa ese recurso

    NPM: se encarga de administrar nuestros paquetes de tercerres encaso necesitemos como express
    teneos que inicianilazr el proyecto
    npm init
    en consola, inicia un modulo de nodejs.

    dependencia de desarrollo 
    dependencia de produccion

    npm install express@4.17.1 linea de comando para instalar la dependenciade express 
    nodemodules no se debe subir a produccion
    para installar las dependecias necesarias de un proyecto externo
    npm install
    busaca el package.json e instala todas las dependencias
    HTTP METODOS:
        son la forma como nos comunicamos con los recursos de nuestro servidor
        get _> lectura
        post -> crear un nuevo recurso
        put -> para reemplazar un recurso existente
        patch -> reemplazar un solo elemento del recurso, actualizar una propiedad de un recurso
        delete -> remover un recurso
    PROYECTO 1
                instalar postman
    Podemos cambiar el archivo de package.json con las especificaciones que queramos

    en el package.json
    podemos agragar los scripts que queramos
    "test": "echo \"Error: no test specified\" && exit 1"
    cambiamos por 
    "start": "node index.js"

    cada vez que usamos el comoando start se inicializara nuestro entry point

    algunos comando son de terceros 
     dev nodemon index.js
    pero antes debemos instalarla

    npm install -D nodemon
    indicamos que es ara el desarrollo y nodemon verifica y reinicia el servidor despues de un cambio.
                para correr
    npm run dev
    usamos run por que no forma parte del core de node si no es una dependencia de terceros.
  VARIABLES DE ENTORNO:
    son variables que las configura el sistemas operativo, y se la configura para produccion
    el sevidor e encarga setear estas variables y si no se van al que configurmos como localhost(4000)

    axios es para realizar consultas http cpn js
    MIDDLEWARE:
        Es un bloque de código que se ejecuta entre la petición que hace el usuario hasta que la petición legga al servidor. es un intermediario
        para autenticacion seria midlleware
        o tratar la informacion
    la carpeta public en una carpeta si restricciones podemos acceder al material son intermediario
    MVC
    Es un patron de diseño de software wl codigo de los programas por sus diferentes respnsabilidades.

    modelo->Controlador->->vistacliente

    modelo<-Controlado<-vista<-cliente

    el cliente pide una vista este el contrlador lo renderiza peri si se necetica data pide al modelo y regresa.
                 en data esta una representacion de una bd
                 routes todas las rutas (rutas con la vista)
    es una buena practica especificar que hace cada arivo 
    homo.controller.js como jemeplo sabemos que es un controller

    MIDDLEWARES: 
    son funcion que reciben el response request y el next
    BD 
    relacional o norelacional

    Las bd sql desde los 80 
    las bd nosql desde 2012 tiene su boom 

    bd relacional EL principio de las bases de datos realacionales e basa en la organiazcion de la informacion en trozos pequeños, que se relaconan entre ellos mediante la relacion de identificadores con un id.

        ACID    
        ATOMICIDAD
        CONSISTENCIA 
        AISLAMIENTO
        DURABILIDAD
        son propiedades de las bases de datos que la hacen mas robustas
        MSSQL,ORACLE,POSTGRES,MySQL,SQLITE

    BD no relacional no tienen un identificador que sirva de ralcion entre un conjunto de datos y otros, son muy utiles cuando no tenemos un esquema de lo que se va a almacenar.
    LA ESTRCUTURA EVOLUTIVA DE UNA BD
        MONGODB,CASANDRA,RETHINKDB,FIREBASE DATABASE, REDIS
    
    SQL usa tablas con filas y columnas
    cada row es un registro

    sqlnorelacional
    un array de object o un json
    document

    Usaremos un orm
    OBJECT RELATIONAL MAPPING, es un modelo de programacion que consiste en la transformacion de las tablas de una base de datos, en una serie de entidades que simplifiquen las tareas básicas de acceso a los datos para el programador.
    Crea un objeto a partir de una tabla en la base de datos.

    ORM SQLITE,MONGODB  
    ODM(nosql)  SEQUELIZE MONGOOSE

    SEQUELIZE
        aplicaion de consola
    iniciar un prot¡yecto con sequelize
    node_modules/.bin/sequelize init 
    en el config estan los datos de la bd 
    esta disponible para diferentes ambientes
    models 
                para manejar las bd
                a traves del index podemos acceder a los modelos
                Podemosconfigurar si esta en desarrollo y development
    En index podemos cambiar el ambiente de desarrollo
                Los seederes son informacion falas que podemos probar en nuestros modelos
    CONFIG
        "storage" es donde va ir nuestra base de datos.
    ------SQlite es una extensino de visualstudio nos permite manejar tablas de sqllite-----

    node_modules/.bin/sequelize model:generate --name Contact --attributes firstname:string,lastname:string,phone:string,email:string

    en la consola de esta forma cramos un nuevo modelo con los atributos y tipos de datos.
         Sequelize crea el modelo y crea la bd en algun administrador de db ya sea postgress, sqlserver o mysql.
        ademas crea en migracion su archivo listo para realizar operaciones 
        migracion tambien sequelize pluraliza el nombre de las tablas contact despues de migrarse pasa a contacts.
        es un control de versiones, lleva todos los modelos a una bd real y hace el uso del archivo creado en migrations.
        node_modules/.bin/sequelize db:migrate 

        se agrega el archivo db.sqlite
    SEEDERS
        node_modules/.bin/sequelize seed:generate --name seed-contact 

        creamos un seeder donde metemos informacin de prueba
        modificamos el seeder ocn los datos que queramos y ejecutamos la siguiente linea(ademas de verificar el nombre de la tabla)
        node_modules/.bin/sequelize db:seed:all
    ya tendriamos nuestro orm configurado

    MONGOSE: BD NO RELACIONALES
           MongoDBatlas->mongosee
           proyecto web scraping(Cron Job)
           CRON JOB: es una herramienta extremadamente util que es utilizada para implementar cualquier tarea repetitiva de manera automática. en linux es muy utilizada. la usamos cada cierto tiempo y se jecuta en segundo plano.
           WEB SCRAPING: Es una tecnica utilizada mediante programas de software para extraer informacion de sitios web.

           ARQUITECTURA.
           cron Job HTTP: axios         -> web: cnn
                    process: cheerio
                    Save on DB(mongosse)
            creamos un cluster en mongodbatlas
            https://cloud.mongodb.com/v2/5faf707e292fd44401e9cc70#clusters
            logeamos i nos registramos y accedemos a la opcion de cluster
            elegimos azure o el que prefieras
            el plan free 
            y ya tenemos creado un cluster.
            luego de creado el cluster damos en connect la segunda opcion y copiamos el codigo.

            Mongoose es flexibe si quieres agregar a una tabla un atributo te lo permite sin ingun probelma.


            npm i dotenv@8.2.0

            este paquete nos ayudara a manejar nuestras variables de entorno.

            mongodb+srv://alejandro:tigre003@cluster0.7xxfx.mongodb.net/db_test?retryWrites=true&w=majority"
            Esta es una variable tipo URI.

    FRONTEND Y BACKEND
        NO tener un problema al consultar un dato.
        
        frontend es la parte visual(cliente) que se utiliza para iteractuar con cualquier software o proceso. formado por html,css y js en web

        backend es la parte de un software que manipula la logica de negocio y peristencia de los datos(servidor)

        framework es una estrucutra conceptual y tecnologica de soporte definido, normalmente con artefactos o modulos de software concretos, que puede servir de base para la organizacion y desarrollo de software.

        Conjuntos de funciones que una comunidad desarrollo

        front: angular, react, vue
        back: nest js, sails js, express, adonis.

        cuando usarlos?
        buscamos soporte de una comunidad
        agilidad en tiempo de desarrollo
        integraciones de terceros, como con google o facebook o una bd atravez de un orm.

        cuando no?
        no conocemos nada del lenguaje de programaccion
        Caemos en el juego de la moda de los frameworks.
        No tiene respaldo de una comunidad.


        que haremos
        Nodejs backend express
        Angular Frontend
        Descargar:
                postman
                Angular+typeScript
                npm install -g @angular/cli
                instala angular de forma global
                npm install -g typescript
                instala typescript de forma global
        
    API
        configuracion del ambiente
        Modelos moongose
        Seeders _> crear data de prueba
        Rutas 
        middlewares _> para el servidor de express

        conatremos con 3 endpoints
                api/technologies
                api/technology{id}
                api/technology/search
        dependencias de produccion
        npm i cors@2.8.5 express@4.17.1 mongoose@5.7.10
        dependencias de desarrollo
        npm i -D dotenv@8.2.0 nodemon@1.19.4
                
        configurando mongo atlas con las credenciales:
        alejandro-alejandro3
        ademas realize un curso de mongo y mongoatlas visitar el repositorio `para mas contenido respecto a mongo.
------------------FRONTEND--------------
    ANGULAR
        framework de google, es escalable y basado en typescript en un lp desarrollado por microsoft, el cual cuenta con herramientas de poo muy favorable si se tiene proyectos grandes.
        tscript ----> javascript
        superset
        
        superset el navegador nunca se enterar que el codigo fue escrito a js. ES UN lenguaje escrito sobre otro lenguaje.
        es muy similar a js y c.
        cuando usar typescript
        -granes proyectos
        -equipos con fuerte conocimiento de opp
        -evolucion constante.

        cuando no usar?
        cuando no tengamos conocimiento solido en poo
        cuando el tipado sea un problema

        js
        console.log("hello world");
         const color= "red";
         color=7.67;

        ts
        console.log("hello world");
        const color: string = "red";
                al momento de cambiar el valor de color tambien tenemos que cambiar el tipo de dato.

        --------------TYPESCRIPT---------------
        conoceremos los tipos,funciones(ti`padas y normales),interfaces(contratos),clases,decoradores.
        estos se usan bastate en Angular.

        -------------API REST----------------
        API se trata de un conjunto de definicioens y protocolos que se utilizan para desarrollar e integrar el software de las aplicaciones.
        Dan servicios si dar informacion de como estan implementadas.
        APPLICATION PROGAMMING INTERFACE
        Arquitecto de sofware
        en base a objetivos empresariales decide y da respuesta a las siguienttes preguntas.
        ¿Que lenguaje?
        ¿Si se debe usar un Framework?
        ¿ Que Patrones de diseño?
        ¿ La estructura del proyecto?
        ¿Que Base de datos?
        entre otras...
        
        Patron arquitectonico o arquitectura de software

        Es una Solución general y reutilizable a un problema común en la arquitectura de software dentro de un contexto dado.
        ej cliente/servidor , N capas, de bus de eventos, interprete, maestro/esclavo 

        Usaremos cliente/servidor y cliente/servidor

        ------------N capas--------
        se puede descomponer en subtareas
        capa de presentacion UI
        capa de aplicacion  Implementacion con otros servicios
        capa de negocios logica de negocio
        Capa de datos   base de datos o data disponble

        capa N -> capa(n-1) -> capa 1

        con las capas aseguramos el desacople

        Recomendacion Utilizar esta arquitectura en aplicaciones de escritorio en general y API's.

        -----Arquitectura Cliente/Servidor------
        servidor-------TCP/IP------cliente
        API   <--------------------> Angular APP



        tenemos un servidor que puede tener varios clientes e intercambian informacion con http.

        Utilizar esta arquitectura en aplicaciones de acoplamineto bajo ejemplo, aplicaciones móviles y APIs

        ------------------RESTful-----------------
        




*/