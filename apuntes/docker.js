/* 
Docker

Introduccion
LA idea de docker es crear contenedores ligeros y portables para las aplicaciones de software que puedan ejecutarse en cualquier maquina con docker instalado, independientemente del sistema opertivo, facilitando asi tambien los despliegues.


Contenedor
Viene de linux, un contenedor puede llevarse de un lado al otro de manera independiente.
app web
servidor
dependencias nodejs nom mongo nginx
aplicacion

docker nos permite agregar estas dependencias y podemos llevar a cualquier maquina sin preocuparse de los elementos externos como compatibilidad, versionamiento de dependencias.

beneficios 
es una herramienta para beneficiar a los dev testers y devops

Hace que el desarrollador pueda centrarse en el codigo

En mi mauina funciona ya no aplica para esto

se puede hacer testing, y iiniciar en diferentes maquinas
ahorra costo.

es opensource.

Como funciona

Para crear un contenedor necesitamos una imagen que los construya, docker tiene su repo de imagenes

2 una imagen es creada a partir de un dockerfile, le da instrucciones de crear la imagen y crear el contenedor

3el dockerfile esta basado en instrucciones
dockerhub

4 La imagen puede ser compartida y es reutilizable

5 la data de los contenedores persiste en volumenes, no persiste la data al reiniciar el contenedro se pierde la informacion pero se soluciona con volumenes.

-----------IMAGENES--------

Necesito un ambiente para usar node js sin instalar ninguna dependencia en el host.

debemos equipar dependencias 

docker run/pull node:tag

nombre de la imagen y version, 

docker run --name some-mongo -p 27017:27017 -d mongo

usamos el puerto 27017
DOckerfile
Necesito crear una imagen de mi aplicacion

FROM NODE       --imagen base, basado en alguna technologia
MAINTAINER alejandro zeballos   --quienee s el crador 
COPY ./var/wwww           ---el directorio actual se copaira, desde-hasta usa linux 
MORKDIR /var/www    --direcorio en el contenedor
RUN npm install     ---instruccciones scripts a ejecutar
EXPOSE 8081         ----puerto expuesto
ENTRYPOINT ["node", "server.js"] ----punto de  arranque


volume env
para ejecutar un dockerdile usamos
docker build. -t my-nodejs-image
para crear la imagen

la imagenes tambine tienen otra opciones
necito que la data de mi contener persista

docker run --name some-mongo -p 27017:27017 -d mongo -v -/data:/data/db

por defecto guarda la informacion en data/db.
docs.docker.com







*/