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
