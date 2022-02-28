# _CRM-REACT_
## Para corregir el error de: 
```sh
No se puede cargar el archivo ...\AppData\Roaming\npm\json-server.ps1 porque la ejecución de scripts está deshabilitada en este sistema.
```
## Ejecutamos:
```sh
- Get-ExecutionPolicy -List
- Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Instalamos JSON Server:
```sh
npm install -g json-server
```
Creamos el archivo 

> db.json

con el contenido de nuestra db.
Ejecutamos el comando:
```sh
json-server --watch db.json --port 4000
```
Para levantar la base de datos en el puerto :4000 y escuchar por cambios.

# .env.development.local
```sh
VITE_API_URL=http://localhost:4000/clientes
```
# .env.production.local
```sh
VITE_API_URL=https://my-json-server.typicode.com/alanshalem/crm-react/clientes
```