## Responde a cada uno de los siguientes puntos:


1. ¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado ecommerce? 

# Creación de Proyecto Angular "ecommerce" con Angular CLI

Para la creación de un nuevo proyecto Angular denominado "ecommerce" utilizando Angular CLI ejecutamos el sigueinte comando:

```bash
# Crear un nuevo proyecto Angular llamado "ecommerce"
ng new ecommerce
```

Angular CLI generará la estructura del proyecto con los siguientes archivos y carpetas:

## Ficheros de configuración en la raíz del proyecto:
+ **tsconfig.app.json:** Configuración específica para la compilación de la aplicación.

+ **angular.json:** Archivo de configuración principal de Angular. Aquí se especifican detalles del proyecto, configuración de compilación, rutas de salida, etc.

+ **package.json:** Archivo de configuración de npm que incluye las dependencias del proyecto y scripts de inicio.

+ **.editorconfig:** Configuración del editor para mantener la consistencia del estilo de código entre diferentes editores.

+ **.gitignore:** Archivo que especifica qué archivos y carpetas deben ignorarse al realizar commits en Git.

## Directorio node_modules:
Contiene las dependencias del proyecto. Este directorio se crea y se completa automáticamente cuando instalas las dependencias del proyecto con el comando `npm install`.

## Directorio src:

+ **index.html:** Archivo principal HTML de la aplicación.

+ **main.ts:** Archivo TypeScript que inicia la aplicación. Aquí es donde se realiza la inicialización del módulo principal.

+ **styles.css:** Archivo CSS principal para estilos globales.

+ **assets:** Carpeta para almacenar recursos estáticos como imágenes.

+ **app:** Carpeta principal de la aplicación.

    + **app.component.*:** Archivos relacionados con el componente principal de la aplicación.

    + **app.module.ts**: Archivo que define el módulo principal de la aplicación y configura los componentes, servicios, etc.

Esta estructura proporciona la base para el desarrollo de la aplicación Angular "ecommerce". A medida que progresas en el desarrollo, se generarán más archivos y carpetas de acuerdo con las necesidades específicas del proyecto.



2. (0.25 puntos) Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:
• app.module.ts - @NgModule (declarations, imports,
providers, bootstrap).
• app.component.ts - @Component (selector, templateUrl,
styleUrls).

# Decoradores generados por Angular CLI

## app.module.ts - @NgModule

El decorador `@NgModule` se utiliza para definir los metadatos de un módulo en Angular. A continuación la explicación de algunas de las propiedades que se definen en `@NgModule`:

+ **declarations:** Un array que lista los componentes, directivas y pipes que pertenecen al módulo.

+ **imports:** Un array que lista otros módulos que deben ser importados por este módulo. Esto permite reutilizar funcionalidades de otros módulos.

+ **providers:** Un array que lista los servicios que este módulo contribuye a la colección de servicios global. Los servicios se proporcionan para que estén disponibles en toda la aplicación.

+ **bootstrap:** Un array que especifica los componentes que deben ser cargados cuando la aplicación se inicia. Estos componentes suelen ser componentes principales que contienen la estructura principal de la aplicación.

Ejemplo de **app.module.ts:**
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## app.component.ts - @Component

El decorador `@Component` se utiliza para definir los metadatos de un componente en Angular. Acontinuación la explicación de algunas de las propiedades que se definen en `@Component`:

+ **selector:** Un selector CSS que identifica el elemento HTML en el cual se aplicará el componente.

+ **templateUrl:** La URL del archivo HTML que contiene la plantilla del componente. Este archivo define la estructura visual del componente.

+ **styleUrls:** Un array de URLs de archivos CSS que contienen estilos específicos del componente.

Ejemplo de **app.component.ts:**
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Propiedades y lógica del componente
}
```

3. (0.25 puntos) ¿Es posible poder inyectar el template y los estilos en línea de un
componente sin necesidad de especificarlos en templateUrl, styleUrls?
¿Es recomendable hacer esto?