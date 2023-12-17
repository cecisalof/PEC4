# Respuestas Teóricas - Componentes en Angular

## 1. Style Encapsulation en Componentes de Angular

En Angular, el encapsulamiento de estilos es una característica importante que permite controlar cómo se aplican y afectan los estilos en un componente específico. Angular proporciona tres modos de encapsulamiento de estilos para los componentes:

### a. **ViewEncapsulation.None:**

El estilo no se encapsula y se aplica globalmente. Cualquier estilo definido en el componente afectará a toda la aplicación. Este modo se utiliza cuando se desea compartir estilos entre varios componentes o cuando se está integrando con bibliotecas externas que requieren estilos globales.

Ejemplo:

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-global-styles',
  templateUrl: './component-global-styles.component.html',
  styleUrls: ['./component-global-styles.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ComponentGlobalStylesComponent {
  // Contenido del componente
}
```

### b. **ViewEncapsulation.Emulated (por defecto):**

Es el modo de encapsulación por defecto en Angular. Angular emula el encapsulamiento de estilos aplicando atributos únicos a los elementos del componente. Los estilos son específicos del componente pero no afectan al resto de la aplicación. Este es el modo recomendado en la mayoría de los casos.

Ejemplo:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-component-emulated-styles',
  templateUrl: './component-emulated-styles.component.html',
  styleUrls: ['./component-emulated-styles.component.css']
})
export class ComponentEmulatedStylesComponent {
  // Contenido del componente
}
```

### c. **ViewEncapsulation.ShadowDom:**

Utiliza el encapsulamiento nativo de Shadow DOM cuando está disponible en el navegador. Este modo aísla completamente los estilos del componente, proporcionando una encapsulación real de estilos. Es útil cuando se desarrollan componentes web independientes con estilos totalmente aislados.

Ejemplo:

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-shadow-dom-styles',
  templateUrl: './component-shadow-dom-styles.component.html',
  styleUrls: ['./component-shadow-dom-styles.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ComponentShadowDomStylesComponent {
  // Contenido del componente
}
```

Estos modos de encapsulación de estilos permiten adaptar la estrategia de estilos según las necesidades específicas de cada componente en una aplicación Angular.

# Shadow DOM

El Shadow DOM (Document Object Model) es una tecnología web que permite encapsular el árbol de documentos (HTML, CSS y JavaScript) dentro de un contenedor específico, denominado "shadow host" (anfitrión de sombras), y ocultar esa porción encapsulada del documento del DOM principal. El Shadow DOM permite la creación de componentes web con estilos y comportamientos encapsulados, lo que evita conflictos y colisiones con otros elementos de la página.

Algunos conceptos clave del Shadow DOM incluyen:

1. **Shadow Host (Anfitrión de Sombras):** Es el elemento en el DOM principal que aloja el Shadow DOM. Este elemento actúa como un contenedor para el contenido encapsulado.

2. **Shadow Tree (Árbol de Sombras):** Es el DOM interno encapsulado dentro del Shadow DOM. Contiene los elementos HTML, estilos y scripts que son específicos de ese componente y están ocultos del DOM principal.

3. **Shadow Boundary (Límite de Sombras):** Es la frontera entre el DOM principal y el Shadow DOM. Los elementos dentro del Shadow DOM no son accesibles directamente desde el DOM principal y viceversa.

4. **::shadow Selector (Selector ::shadow):** Se utiliza en CSS para seleccionar elementos dentro del Shadow DOM desde el DOM principal. Sin embargo, este selector ha sido desaconsejado en favor de un enfoque más específico y predecible.

El Shadow DOM es especialmente útil para crear componentes web reutilizables y personalizables sin preocuparse por posibles conflictos de estilos o scripts con el resto de la página. Este enfoque de encapsulamiento contribuye a la modularidad y mantenibilidad del código en el desarrollo web.

# changeDetection

La detección de cambios (change detection) en Angular es un proceso automático que Angular realiza para identificar y aplicar cambios en el modelo de datos y, en consecuencia, actualizar la interfaz de usuario. Angular utiliza un algoritmo eficiente para rastrear y comparar el estado actual de los datos con su estado anterior para determinar si ha ocurrido un cambio.

# Default y OnPush

+ **Estrategia Default:**

    * Angular verifica todos los componentes y sus descendientes en cada ciclo de detección de cambios.

    * Se activa cuando ocurre cualquier evento en la aplicación, incluidos eventos del usuario, HTTP y otros.

    * Puede generar más verificaciones de cambio y actualizaciones de la interfaz de usuario, lo que podría afectar al rendimiento en aplicaciones grandes.

+ **Estrategia OnPush:**

    + Los componentes solo se verifican si hay cambios en las referencias de entrada (`@Input`) o si se emiten eventos desde el componente.

    + Esta estrategia se basa en el concepto de inmutabilidad: si los datos son inmutables, la referencia no cambia y no se dispara la detección de cambios.

    + Puede mejorar significativamente el rendimiento, especialmente en aplicaciones grandes, al reducir la cantidad de verificaciones de cambio.

### ¿Cuándo usar una y otra? Ventajas e inconvenientes:

+ **Default:**

    + Ventajas:
       + Fácil de usar y comprender.
        + Adecuada para aplicaciones pequeñas o medianas con una cantidad moderada de componentes.

    + Inconvenientes:
        + Puede generar más verificaciones y afectar el rendimiento en aplicaciones grandes o complejas.

+ **OnPush:**

    + Ventajas:
        + Mejora el rendimiento al reducir la cantidad de verificaciones de cambio.
        + Favorece la inmutabilidad, lo que puede facilitar el rastreo de cambios en grandes conjuntos de datos.

    + Inconvenientes:
        + Requiere una comprensión más profunda del sistema de detección de cambios y puede ser más complejo de implementar.
        + Puede provocar errores si no se maneja correctamente, especialmente si se intenta mutar datos directamente.

# Ciclo de vida de los componentes

+ **a. OnInit:**
    Se llama después de que Angular haya inicializado todas las propiedades vinculadas al componente.
    Es útil para realizar inicializaciones adicionales después de que los datos de entrada ya estén disponibles.

+ **b. OnChanges:**
    Se llama cuando los valores de las propiedades de entrada (`@Input`) cambian.
    Proporciona información sobre los cambios y los nuevos valores de las propiedades de entrada.

+ **c. AfterViewInit:**
    Se llama después de que la vista del componente y sus vistas secundarias (si las hay) hayan sido inicializadas.
    Es adecuado para realizar operaciones después de que el componente haya sido completamente creado.

+ **d. OnDestroy:**
    Se llama justo antes de que Angular destruya el componente.
    Es útil para realizar limpieza, como la cancelación de suscripciones y la liberación de recursos.

Estos hooks del ciclo de vida son fundamentales para realizar acciones específicas en diferentes etapas de la vida del componente.