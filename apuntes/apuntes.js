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

        



*/