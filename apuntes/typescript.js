/* 
----------TYPESCRIPT---------
iniciamos una consola en la carpeta de la seccion de ts-
tsc --version muestra la version de typescript en nuestra maquina

tsc --init  crea un json con configuracion de ts
    target es la version de emacscript
    module es donde maneja los moduos node
    strict  ts sera estricto
    esModuleInterop interaccion con nodejs
tsc
    para copilar el codigo de ts a js. ademas podemos copilar las veces que queramos el archivo resultante se sobreescribira
------------ANGULAR-------------
debemos tener instalado el cliente de angular
npm install -g @angular/cli

nos instalara ng que maneja angular
    ng new project-name
ademas tenemos una estructura de archivos estandar que debemos conocer
entonces creamos un nuevo proyecto, vamos a la ruta de nuestro proyecto y en concola ejecutamos
    ng new frontend
creara el directorio frontend con los archivos que angular necesita, ademas al momento de ejecutar te pregunta si quieres css, scss sass para este proyecto iremos por css.

angular se encarga de instalar todas las dependencias para iniciar l proyecto.

e2e en to end sirve para hacer pruebas
node_modules dependedencias
src el core de angular
editor config 
git ignore
angular json tiene la configuracion del proyecto
brower  configuracion de browser
package json
readme  git
tsconfig tsconfig spec.json config de ts
tslint son las

src
    app se guardan toda la estrucutra de angular
    assets publicas estilos imagenes
    enviroments configuracion de producion y testing
    favicon
    index html archivo principal
        renderiza en app-root
    main ts inicia la configurarion de ts
    styles.css es el css global
    test.ts configuracon para testing con ts

    app
        approuting compoment module
        tiene un decorador de angular ahi se inyectan las dependencias.
        agregaremos ahi nuestros componentes
    angular separa las responsbilidades
        componentes
            tenemos un selector
            vista
            coleccion de estilos
comando----------
ng serve
copila el codigo y usa webpack para que el navegador lo pueda interpretar, 4200 es el puerto por defecto
ademas angular al realizar un cambio lo detecta y copila la informacion automaticamente.
crearemos un componente

ng generate component components/technologyCard

o fomra abreviada

ng g c components/technologyCard

usamos camelcase pero angular lo cambia a - como separadores.

appmodule se actuliza cuando se crea un nuevo componente

ng g c pages/home

creamos los diferentes componentes que va a tener nuestro proyetco

---servicios 
son los recursos que consumira nuestro proyecto de terceros en este caso nuestra api.
comunicacion.
    ng g s services/http
para crear un servicio

--componentes generales

    ng g c shared/navbar
en shared crearemos todos los componentes que compartiran nuestra aplicacion.

bootstrao css y js
noes buena practica usar otra libreria como jquery.
[routerLink]="['home']"
es una etiqueta de angular que enruta el a, 

enrutamos nuestros componentes 
    {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'technologies', component: TechnologiesComponent
  },
  {
    path: 'technology/:id', component: TechnologyComponent  
  },
  {
    path: 'search/:query', component: SearchComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: "home"
  }


*/