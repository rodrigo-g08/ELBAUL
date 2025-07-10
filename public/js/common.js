// public/js/common.js

function apiCall(endpoint) {
    return fetch(`/api${endpoint}`)
        .then(res => res.json())
        .catch(error => {
            console.error("Error en apiCall:", error);
            return { exito: false, data: {} };
        });
}
