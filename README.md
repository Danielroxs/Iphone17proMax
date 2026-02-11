# Centrar un contenedor absoluto en el fondo del section (ejemplo: CTA)

> Si quieres que un contenedor (como el CTA) esté pegado al fondo y centrado horizontalmente en el section, usa este patrón:

```jsx
className={
	!isMobile
		? "absolute bottom-0 left-1/2 -translate-x-1/2 z-20"
		: ""
}
```

Esto hace que el contenedor:

- En desktop/tablet, se posicione absoluto, pegado al fondo y centrado horizontalmente.
- En mobile, se mantenga en el flujo normal del layout.

Puedes combinarlo con un div interno con flex para alinear el contenido del CTA como prefieras.

# Hack responsivo para video en Hero.jsx

> Para evitar que el video y el layout se rompan en mobile (portrait o landscape), puedes condicionar las clases de Tailwind usando react-responsive:

```jsx
className={
	isMobile
		? "pointer-events-none w-full max-h-[60vh]"
		: "pointer-events-none absolute bottom-0 w-8/12 left-1/2 -translate-x-1/2 z-10"
}
```

Esto asegura que:

- En mobile/tablet, el video ocupa todo el ancho disponible y no sobrepasa el 60% de la altura de la pantalla.
- En desktop, el video se posiciona absoluto, centrado y pegado al fondo del section.

Este patrón es útil para evitar que la página se "rompa" al girar el dispositivo o cambiar de tamaño de pantalla.

# Notas de estudio sobre Three.js

## Recordatorio FrontGlass

Para que el frontGlass se vea negro y opaco (como el original), usa la siguiente configuración en Scene.jsx:

```
frontGlass.map = null;
frontGlass.normalMap = null;
frontGlass.envMap = null;
frontGlass.roughnessMap = null;
frontGlass.metalness = 0;
frontGlass.roughness = 0.1;
frontGlass.clearcoat = 1;
frontGlass.clearcoatRoughness = 0;
frontGlass.opacity = 1;
frontGlass.transparent = false;
frontGlass.color = new THREE.Color("#000000");
frontGlass.needsUpdate = true;
```

Esto asegura que la pantalla se pinte de negro como originalmente.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
