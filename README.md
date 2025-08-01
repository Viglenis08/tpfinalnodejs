# API de Productos - Tienda Online

API REST para gestión de productos en una tienda online, desarrollada con Node.js, Express y Firebase Firestore como base de datos. Está desplegada en Vercel.

---

## 🔗 URL pública

La API está desplegada en:  
[https://tpfinalnodejs.vercel.app/](https://tpfinalnodejs.vercel.app/)

---

## 🚀 Endpoints disponibles

### Autenticación

- **POST** `/auth/login`  
  Login de usuario.  
  Body JSON:  
  ```json
  {
    "usuario": "user@email.com",
    "password": "vigle0812"
  }

📌Productos (requiere token en header Authorization: Bearer <token>)
GET /api/products
Obtiene todos los productos.

GET /api/products/:id
Obtiene producto por ID.

GET /api/products/descripcion/:des
Busca productos por descripción (texto).

POST /api/products/create
Crea un nuevo producto.
Body JSON ejemplo:

PUT /api/products/:id
Actualiza producto por ID.
Body JSON con los campos a actualizar.

DELETE /api/products/:id
Elimina producto por ID.

⚙️Cómo usar localmente
Clonar repositorio:

git clone https://github.com/Viglenis08/tpfinalnodejs
cd tu-repo
Instalar dependencias:

npm install
Crear archivo .env con las variables:

PORT=3000
FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_auth_domain
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
FIREBASE_APP_ID=tu_app_id
JWT_SECRET=tu_clave_secreta

Ejecutar servidor:
npm start

🔐 Seguridad
Todos los endpoints de productos están protegidos con JWT.

Debe enviarse el token en el header Authorization para acceder.
