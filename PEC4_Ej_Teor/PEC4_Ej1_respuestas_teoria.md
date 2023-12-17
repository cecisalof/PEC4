## Explica qué realiza cada una de las siguientes opciones de Angular CLI: 

## 1. ng new

El comando `ng new` se utiliza para crear un nuevo proyecto de Angular. Al ejecutar este comando, Angular CLI generará una estructura de proyecto inicial con archivos y carpetas necesarios. También, guiará al usuario a través de un conjunto de preguntas para configurar las opciones del proyecto, como el estilo de hojas de estilo, la habilitación de Angular Routing, entre otras.

**Ejemplo:**
```bash
ng new nombre-del-proyecto
```

## 2. ng generate

El comando `ng generate` (o simplemente `ng g`) se utiliza para generar diversos artefactos en un proyecto de Angular. Las opciones disponibles para generar son:

### a. ng generate component

El comando `ng generate component` (o `ng g c`) se utiliza para crear un nuevo componente Angular. Un componente es una parte reutilizable de la interfaz de usuario de la aplicación.

**Ejemplo:**
```bash
ng generate component nombre-del-componente
```

### b. ng generate directive

El comando `ng generate directive` (o `ng g d`) se utiliza para crear una nueva directiva Angular. Una directiva es una instrucción en el DOM que modifica la apariencia o el comportamiento de un elemento.

**Ejemplo:**
```bash
ng generate directive nombre-de-la-directiva
```

### c. ng generate enum

El comando `ng generate enum` (o `ng g e`) se utiliza para crear un nuevo enumerado en Angular. Un enumerado es un conjunto de constantes con nombre que representan valores exclusivos.

**Ejemplo:**
```bash
ng generate enum nombre-del-enumerado
```

### d. ng generate guard

El comando `ng generate guard` (o `ng g g`) se utiliza para crear un nuevo guard en Angular. Un guard es utilizado para controlar la navegación y determinar si una ruta puede ser activada.

**Ejemplo:**
```bash
ng generate guard nombre-del-guard
```

### e. ng generate interface

El comando `ng generate interface` (o `ng g i`) se utiliza para crear una nueva interfaz en Angular. Una interfaz define la estructura de un objeto.

**Ejemplo:**
```bash
ng generate interface nombre-de-la-interfaz
```

### f. ng generate pipe

El comando `ng generate pipe` (o `ng g p`) se utiliza para crear un nuevo pipe en Angular. Un pipe transforma la salida de la expresión en la vista.

**Ejemplo:**
```bash
ng generate pipe nombre-del-pipe
```

### g. ng generate service

El comando `ng generate service` (o `ng g s`) se utiliza para crear un nuevo servicio en Angular. Un servicio es una clase que puede ser inyectada en componentes y otros servicios.

**Ejemplo:**
```bash
ng generate service nombre-del-servicio
```

## 3. ng serve

El comando `ng serve` se utiliza para iniciar el servidor de desarrollo de Angular. Esto despliega la aplicación en un servidor local y proporciona una URL para acceder a ella en un navegador. Además, el servidor realiza la recarga automática cuando se realizan cambios en el código fuente.

**Ejemplo:**
```bash
ng serve
```

## 4. ng test

El comando `ng test` se utiliza para ejecutar pruebas unitarias en la aplicación Angular. Este comando utiliza el framework de pruebas Jasmine y Karma para ejecutar las pruebas.

**Ejemplo:**
```bash
ng test
```

## 5. ng version

El comando `ng version` muestra la versión de Angular CLI y otras dependencias asociadas en el proyecto.

**Ejemplo:**
```bash
ng version
```