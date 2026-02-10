# Notas sobre centrado absoluto en CSS

## Centrado horizontal con left-1/2 y -translate-x-1/2

Cuando quieres centrar un elemento absolutamente dentro de un contenedor, puedes usar la combinación de estas dos utilidades de Tailwind CSS (o sus equivalentes en CSS):

- `left-1/2`: posiciona el borde izquierdo del elemento en el 50% del ancho del contenedor padre.
- `-translate-x-1/2`: mueve el elemento hacia la izquierda la mitad de su propio ancho.

### ¿Por qué funciona?

1. `left-1/2` coloca el borde izquierdo del elemento justo en el centro del contenedor.
2. `-translate-x-1/2` desplaza el elemento hacia la izquierda el 50% de su propio ancho, logrando que el centro del elemento coincida exactamente con el centro del contenedor.

### Ejemplo visual:

```jsx
<div className="relative w-full h-64 bg-gray-200">
  <div className="absolute left-1/2 -translate-x-1/2 w-32 h-16 bg-blue-500"></div>
</div>
```

Así, el div azul estará perfectamente centrado horizontalmente, sin importar su ancho.

Este patrón es universal para centrar cualquier elemento absolutamente en CSS.
