# Comandos para compilar

### compilar aplicación en modo producción
ionic build --prod
npx cap add android

ionic build android
ionic cap sync

### Abrir android estudio
npx cap open android

### Debug Android con dispositivo móvil
<!-- ionic capacitor run android -->
ionic capacitor run android --livereload --host 192.168.1.1

Para esto, me tocó instalar java y configurar en las variables de entorno ("JAVA_HOME")
Igualmente en el dispositivo, configurar el modo desarrollador, para permitir debuguear aplicaciones e instalarlas por medio del USB.

### Abrir DevTools en el navegador
edge://inspect/#devices

Clave de la key = s4m4n$