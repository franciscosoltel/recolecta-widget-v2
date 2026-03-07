
# RECOLECTA Widget

Widget reutilizable para integrar el **buscador de RECOLECTA** en cualquier portal web mediante un pequeño bloque HTML y archivos externos CSS y JavaScript.

El widget muestra una **caja de búsqueda visual integrada con RECOLECTA** que redirige al buscador oficial con filtros preconfigurados.

---

# Qué permite hacer

El widget permite a cualquier portal:

- Mostrar un buscador de **publicaciones en acceso abierto**
- Filtrar por **tipo de documento**
- Redirigir al buscador oficial de RECOLECTA
- Integrarse fácilmente en **CMS como Directus, Drupal o WordPress**

Al realizar la búsqueda se abre el buscador de RECOLECTA con estos filtros:

- Acceso abierto
- Publicaciones
- Texto introducido por el usuario
- Tipo de documento seleccionado

---

# Integración rápida

Añade el siguiente código en la página donde quieras mostrar el widget.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/franciscosoltel/recolecta-widget-v2@1.1/recolecta-widget-v2.css">

<div data-recolecta-widget></div>

<script src="https://cdn.jsdelivr.net/gh/franciscosoltel/recolecta-widget-v2@1.1/recolecta-widget-v2.js"></script>
```

Cuando se cargue la página aparecerá automáticamente el buscador.

---

# Personalización de textos

El widget permite modificar los textos visibles utilizando **atributos HTML en el contenedor**.

Esto permite adaptar el widget a distintos portales sin modificar el código JavaScript.

## Ejemplo completo

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/franciscosoltel/recolecta-widget-v2@1.1/recolecta-widget-v2.css">

<div
data-recolecta-widget
data-title="Resultados de investigación"
data-eyebrow="BUSCADOR RECOLECTA"
data-intro="Busca publicaciones en acceso abierto y accede al buscador de RECOLECTA con los filtros ya aplicados."
data-placeholder="Título, autor, palabras clave..."
data-button-text="Buscar"
data-chip-1="Acceso abierto"
data-chip-2="Publicaciones"
data-new-tab="true"
></div>

<script src="https://cdn.jsdelivr.net/gh/franciscosoltel/recolecta-widget-v2@1.1/recolecta-widget-v2.js"></script>
```

---

# Atributos disponibles

| Atributo | Descripción |
|---|---|
| data-title | Título principal del widget |
| data-eyebrow | Texto pequeño superior |
| data-intro | Texto descriptivo bajo el título |
| data-placeholder | Texto dentro del campo de búsqueda |
| data-button-text | Texto del botón de búsqueda |
| data-chip-1 | Primera etiqueta informativa |
| data-chip-2 | Segunda etiqueta informativa |
| data-new-tab | Abrir resultados en nueva pestaña (`true` / `false`) |

---

# Uso en CMS

## Directus

### Pasos

1. Accede a la página donde quieres insertar el buscador.
2. Añade un bloque de tipo **HTML** o un campo que permita insertar código.
3. Pega el siguiente código:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/franciscosoltel/recolecta-widget-v2@1.1/recolecta-widget-v2.css">

<div data-recolecta-widget></div>

<script src="https://cdn.jsdelivr.net/gh/franciscosoltel/recolecta-widget-v2@1.1/recolecta-widget-v2.js"></script>
```

4. Guarda la página.
5. Publica los cambios.

El buscador aparecerá automáticamente.

### Si no se visualiza

Algunos editores pueden bloquear etiquetas `<script>`.

En ese caso:

Contenido de la página:

```html
<div data-recolecta-widget></div>
```

En la plantilla del portal:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/franciscosoltel/recolecta-widget-v2@1.1/recolecta-widget-v2.css">
<script src="https://cdn.jsdelivr.net/gh/franciscosoltel/recolecta-widget-v2@1.1/recolecta-widget-v2.js"></script>
```

---

## Drupal

Drupal suele restringir scripts dentro del contenido.

### Método recomendado

En el contenido de la página:

```html
<div data-recolecta-widget></div>
```

Y cargar CSS y JS desde el tema o plantilla:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/franciscosoltel/recolecta-widget-v2@1.1/recolecta-widget-v2.css">
<script src="https://cdn.jsdelivr.net/gh/franciscosoltel/recolecta-widget-v2@1.1/recolecta-widget-v2.js"></script>
```

---

## WordPress

### Método sencillo

1. Añadir un bloque **HTML personalizado**.
2. Pegar el código:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/franciscosoltel/recolecta-widget-v2@1.1/recolecta-widget-v2.css">

<div data-recolecta-widget></div>

<script src="https://cdn.jsdelivr.net/gh/franciscosoltel/recolecta-widget-v2@1.1/recolecta-widget-v2.js"></script>
```

3. Guardar o actualizar la página.

---

# Uso en cualquier web

Si el sistema permite insertar HTML con scripts externos, basta con:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/franciscosoltel/recolecta-widget-v2@1.1/recolecta-widget-v2.css">

<div data-recolecta-widget></div>

<script src="https://cdn.jsdelivr.net/gh/franciscosoltel/recolecta-widget-v2@1.1/recolecta-widget-v2.js"></script>
```

---

# Versionado del widget

Se recomienda utilizar **versiones con tag** para evitar cambios inesperados en portales ya publicados.

Ejemplo:

```html
https://cdn.jsdelivr.net/gh/franciscosoltel/recolecta-widget-v2@1.1/recolecta-widget-v2.js
```

Cuando se publique una nueva versión:

1. Se actualiza el repositorio.
2. Se crea un nuevo tag.
3. Los portales pueden actualizar cuando lo deseen.

---

# Si los cambios no se reflejan

Puede ser debido a la caché del CDN o del navegador.

Probar:

1. Refrescar con `Ctrl + F5`
2. Abrir en modo incógnito
3. Purga del CDN:

```
https://purge.jsdelivr.net/gh/franciscosoltel/recolecta-widget-v2/recolecta-widget-v2.js
https://purge.jsdelivr.net/gh/franciscosoltel/recolecta-widget-v2/recolecta-widget-v2.css
```

---

# Comprobación rápida

Si todo está funcionando correctamente deberías ver:

- el bloque visual del buscador
- el campo de búsqueda
- el selector de tipo de documento
- el botón Buscar

El widget se carga automáticamente al abrir la página.

---

# Licencia

Uso libre para integración del buscador de RECOLECTA en portales institucionales o proyectos relacionados con acceso abierto.
