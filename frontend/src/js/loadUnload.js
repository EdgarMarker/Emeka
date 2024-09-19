window.loadDynamicScript = function(src, callback) {
    // Eliminar el script anterior si existe
    const oldScript = document.querySelector('script[data-dynamic="true"]');
    if (oldScript) {
        document.body.removeChild(oldScript);
    }

    // Crear un nuevo script
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.setAttribute('data-dynamic', 'true');

    // Manejar la carga
    script.onload = function() {
        console.log("Script cargado y listo");
        if (callback && typeof callback === 'function') {
            callback();
        }
    };

    script.onerror = function() {
        console.log("Error cargando el script");
    };

    // Agregar el script al documento
    document.body.appendChild(script);
};