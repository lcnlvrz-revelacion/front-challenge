# Desafío

El desafío consta de implementar una interfaz gráfica (gui) que permita interactuar con la api que se encuentra ya desarrollada dentro de `apps/api`. La documentación de esta api (swagger) se encuentra disponible en `http://localhost:3001/api`

> :Info: **Tiempo estimado**: ≈45 minutes

Se espera que el candidato pueda implementar los componentes necesarios para:

- Listar los libros disponibles en la API
- Crear un formulario para la creación de libros
- Actualizar un libro
- Eliminar un libro

## Stack flavors

Dentro del folder apps se encuentra la posibilidad de poder implementar estos requerimientos usando:

- Next.js
- SPA (single page application)

Queda en la decision del candidato si ir con una opción u otra

## Librerías pre-builtin

De base en ambos stacks se encuentran instalados los siguientes paquetes:

> :warning: **Si no usaste algunas de las librerías mencionadas abajo**: Puedes instalar una librería con la que tengas mayor experiencia o te sientas mas cómodo

- tailwind
- react-hook-form (forms)
- zod (schema validation)
- react-query (data fetching manager)

## Objetivos

Se espera que el candidato pueda implementar los requerimientos mencionados anteriormente utilizando patrones de data fetching, state management y reactividad como asi también para los componentes tener en cuenta conceptos de ux/ui (user experience)

También es importante que el candidato pueda ir narrando su linea de pensamientos a medida que va tomando las decisiones en su cabeza y las va implementando en el código

## Setup

> :warning: **Asegurarse que docker engine se encuentre activo previo a correr los comandos**

nodejs version: v18.17.0

```
npm i

# If you decided to go with SPA
npm run dev:spa

# If you decided to go with Next.js
npm run dev:nextjs
```

Una vez ejecutado el comando, el cliente se encontrara up and running en el puerto `3002`. La api lo estará en el puerto `3001`

La documentación de esta api (swagger) se encuentra disponible en `http://localhost:3001/api`

En el front de swagger uno puede interactuar con la api y de cierta manera generar fake data en caso de necesitarla para hidratar los componentes en el front

## Interview requirements

Es importante que el candidato pueda compartir una ventana de su browser en donde se pueda visualizar el front que se encuentra corriendo en el puerto 3002

Para el seguimiento del código en tiempo real, se necesita que el candidato comparta una session mediante la extension de vscode liveshare
