# 📦 ELBAUL - Sistema de Base de Datos con Docker y MongoDB

Bienvenido al repositorio **ELBAUL** 🧰, un entorno completo para gestionar una base de datos MongoDB usando Docker, Mongo Express y Compass. Ideal para desarrolladores o testers que quieren levantar un entorno rápido con datos de prueba.

---

## 🚀 ¿Qué incluye este proyecto?

- 📁 Colecciones predefinidas en formato `.json`
- 🐳 Configuración Docker (`docker-compose.yml`)
- 📂 Carpeta `data/` con todos los archivos de base de datos
- 💾 Interfaz visual con Mongo Express
- 🧪 Datos listos para testear (productos, órdenes, usuarios, etc.)

---

## ⚙️ Requisitos

- Docker Desktop instalado 🐳
- Git instalado 💻

---

## 🏗️ Cómo levantar el entorno

1. **Clona el repositorio**

```bash
git clone https://github.com/rodrigo-g08/ELBAUL.git
cd ELBAUL
```

2. **Levanta los servicios con Docker Compose**

```bash
docker-compose up -d
```

3. **Accede a Mongo Express en tu navegador**:

```
http://localhost:8081
```

4. **(Opcional) Conéctate desde MongoDB Compass**:

```
mongodb://localhost:27018
```

---

## 🧬 Estructura del Proyecto

```bash
ELBAUL/
│
├── docker-compose.yml       # Configura MongoDB y Mongo Express
├── README.md                # Documentación del proyecto
└── data/                    # Archivos JSON con datos para importar
    ├── orden.json
    ├── producto.json
    ├── usuarios.json
    └── ...
```

---

## 🛠️ Cómo importar los datos `.json` en Mongo Express

1. Accede a **Mongo Express** desde tu navegador:

```
http://localhost:8081
```

2. Crea la base de datos si no existe:
   - Haz clic en `+ Create Database`
   - Nombre: `db_ELBAUL`
   - Luego, crea las colecciones necesarias (una por cada archivo `.json`)

3. Para cada colección:
   - Haz clic en `+ Create Collection`
   - Escribe el nombre correspondiente (por ejemplo: `Orden`, `Producto`, etc.)
   - Una vez creada, haz clic en `Import`
   - Selecciona el archivo correspondiente desde la carpeta `/data/`
   - Asegúrate de elegir `JSON` y que el contenido esté en formato de arreglo (`[]`)

4. Repite este proceso para todas las colecciones.

---

## 📂 Colecciones disponibles

- 🛒 Carrito
- 📦 Producto
- 🧾 Orden
- 💳 Pago
- 🚚 Envío
- 🧍 Usuarios
- 🌟 Reseña
- 🎁 Cupón Descuento
- 🧰 Inventario
- 🎮 Item Orden / Carrito
- 💬 Favoritos
- 📷 Imagen Producto
- ↩️ Devoluciones
- 📚 Categorías

---

## 💡 Notas

- Todos los archivos `.json` están formateados como arreglos para importar directamente.
- Puedes usar Compass si prefieres una vista más detallada, conectándote a `localhost:27018`.

---

## 🧑‍💻 Autor

Desarrollado por [@rodrigo-g08](https://github.com/rodrigo-g08) ✨

---

## 📜 Licencia

Este proyecto se distribuye bajo licencia MIT.
