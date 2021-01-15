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

docker run --name some-mongo



*/