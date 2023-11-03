# **HamburguesasCampus**

La cafetería de Campuslands proporcionará a los campistas la conveniencia de adquirir hamburguesas, pero se enfrenta a un desafío crítico relacionado con la gestión de ingredientes. La gestión ineficiente de la disponibilidad de ingredientes puede llevar a problemas operativos, como la falta de ingredientes esenciales o el desperdicio de productos no utilizados por parte de los Chefs. Esto se traduce en una experiencia insatisfactoria para los clientes, pérdida de ingresos y un aumento innecesario en los costos operativos.

La falta de un sistema de gestión de inventario eficiente y automatizado dificulta la capacidad de los Chefs para:

1. Satisfacer la demanda de los clientes de manera constante y oportuna.
2. Mantener un seguimiento preciso de los ingredientes y su fecha de vencimiento.
3. Minimizar el desperdicio de ingredientes y costos innecesarios.
4. Tomar decisiones informadas sobre cuándo realizar pedidos de reposición.
5. Garantizar una experiencia de cliente consistente y de alta calidad en sus platos.

En resumen, los Chefs se enfrentan a un problema crítico de gestión de ingredientes que afecta su capacidad para operar eficientemente y brindar un servicio de calidad. Para abordar este problema, es necesario desarrollar un sistema de gestión de inventario efectivo que permita un control en tiempo real del stock de ingredientes y una planificación de pedidos más precisa.

# MongoDB

```
use("filtroMongo_LauraRamirez");
db.createCollection("ingredientes"),{
    validator:{
        $jsonSchema:{
            title:"ingredientes",
            required:["id","nombre","descripcion","cantidad","precio"],
            properties:{
                _id:{
                    bsoType:"ObjectId"
                },
                id:{
                    bsoType:"int",
                    descripcion:"debe ser obligatorio"
                },
                nombre:{
                    bsoType:"string",
                    descripcion:"debe ser obligatorio"
                },
                descripcion:{
                    bsoType:"string",
                    descripcion:"debe ser obligatorio"
                },
                cantidad:{
                    bsoType:"int",
                    descripcion:"debe ser obligatorio"
                },
                precio:{
                    bsoType:"int",
                    descripcion:"debe ser obligatorio"
                },

            }
        }
    }
}
db.ingredientes.insertMany([
    {
        id:1,
        nombre:"pan",
        descripcion:"normal",
        cantidad:500,
        precio:3
    },
    {
        id:2,
        nombre:"pan integral",
        descripcion:"normal",

        cantidad:50,
        precio:8

    },
    {
        id:3,
        nombre:"tomate",
        descripcion:"normal",
        cantidad:300,
        precio:2

    },
    {
        id:4,
        nombre:"brocoli",
        descripcion:"normal",
        cantidad:0,
        precio:5

    },
    {
        id:5,
        nombre:"lechuga",
        descripcion:"normal",
        cantidad:120,
        precio:500

    },
])



db.createCollection("Hamburguesas"),{
    validator:{
        $jsonSchema:{
            title:"Hamburguesas",
            required:["id","nombre","categoria","descripcion","precio","id_chef","id_ingredientes"],
            properties:{
                _id:{
                    bsoType:"ObjectId"
                },
                id:{
                    bsoType:"int",
                    descripcion:"debe ser obligatorio"
                },
                nombre:{
                    bsoType:"string",
                    descripcion:"debe ser obligatorio"
                },
                categoria:{
                    bsoType:"string",
                    descripcion:"debe ser obligatorio"
                },
                descripcion:{
                    bsoType:"string",
                    descripcion:"debe ser obligatorio"
                },
                precio:{
                    bsoType:"int",
                    descripcion:"debe ser obligatorio"
                },
                id_chef:{
                    bsoType:"int",
                    descripcion:"debe ser obligatorio"
                },
                id_ingredientes:{
                    bsoType:"array",
                    descripcion:"debe ser obligatorio"
                },

            }
        }
    }
}
db.Hamburguesas.insertMany([
    {
        id:1,
        nombre:"Hamburguesa la pesca",
        categoria:"Marina",
        descripcion:"prepacion con carnes de mar",
        precio:10,
        id_chef:1,
        id_ingredientes:[1,2,3,4,5,6]

       },
       
       {
        id:2,
        nombre:"Hamburguesa clasica",
        categoria:"Carnes",
        descripcion:"carne al horno",
        precio:8,
        id_chef:1,
        id_ingredientes:[1,3]
       },
       {
        id:3,
        nombre:"Hamburguesa de lenteja",
        categoria:"Vegetariana",
        descripcion:"sin carne",
        precio:9,
        id_chef:2,
        id_ingredientes:[2,5]

       }
])

db.createCollection("chef"),{
    validator:{
        $jsonSchema:{
            title:"chef",
            required:["id","nombre","especializacion"],
            properties:{
                _id:{
                    bsoType:"ObjectId"
                },
                id:{
                    bsoType:"int",
                    descripcion:"debe ser obligatorio"
                },
                nombre:{
                    bsoType:"string",
                    descripcion:"debe ser obligatorio"
                },
                especializacion:{
                    bsoType:"string",
                    descripcion:"debe ser obligatorio"
                }

            }
        }
    }
}
db.chef.insertMany([
    {
        id:1,
        nombre:"chefA",
        especializacion:"Carnes"
        
       },
       {
        id:2,
        nombre:"chefB",
        especializacion:"Cocina Vegetariana"
        
       },
       {
        id:3,
        nombre:"chefC",
        especializacion:"Carnes"
        
       },
       {
        id:4,
        nombre:"chefD",
        especializacion:"Carnes"
        
       },
])





```

<hr>

**Instalacion y Uso**

- Asegurarse de tener instalado node.js mongodb

* Crea un archivo .env en la raiz del proyecto con la siguiente configuracion

```
MY_SERVER = {"hostname":"127.10.8.8","port":"5105"}
ATLAS_USER="latinoamericacampus233"
ATLAS_PASSWORD="Campus*2023"
ATLAS_DB="filtroMongo_LauraRamirez"
JWT_PRIVATE_KEY="1234"

```

**Instalacion de dependecias**

ejecuta el siguiente comando para instalar las dependencias necesarias ya configuradas

```
npm install
```

**Inicializar el servidor**

ejecuta el siguiente comando para inicializar el servidor

```
npm run dev
```

**EndPoints**
---------

**1.** Encontrar todos los ingredientes con stock menor a 400
METODO:GET
URL:http://127.10.8.8:5105/ingredientes

trae los siguientes datos:

```
[
  {
    "_id": "64f90c9b301f4f6e43a03db7",
    "id": 2,
    "nombre": "pan integral",
    "descripcion": "normal",
    "cantidad": 50,
    "precio": 8
  },
  {
    "_id": "64f90c9b301f4f6e43a03db8",
    "id": 3,
    "nombre": "tomate",
    "descripcion": "normal",
    "cantidad": 300,
    "precio": 2
  },
  {
    "_id": "64f90c9b301f4f6e43a03db9",
    "id": 4,
    "nombre": "brocoli",
    "descripcion": "normal",
    "cantidad": 0,
    "precio": 5
  },
  {
    "_id": "64f90c9b301f4f6e43a03dba",
    "id": 5,
    "nombre": "lechuga",
    "descripcion": "normal",
    "cantidad": 120,
    "precio": 500
  }
]

```

<hr>

**2.** Encontrar todas las hamburguesas de la categoría "Vegetariana"
METODO:GET
URL:http://127.10.8.8:5105/hamburguesas

trae los siguientes datos:

```
  {
    "_id": "64f90529b4c7bcadfa7cef94",
    "id": 3,
    "nombre": "Hamburguesa de lenteja",
    "categoria": "Vegetariana",
    "descripcion": "sin carne",
    "precio": 9,
    "id_chef": 2,
    "id_ingredientes": [
      2,
      5
    ]
  }
```

<hr>

**3.** Encontrar todos los chefs que se especializan en "Carnes"
METODO:GET
URL:http://127.10.8.8:5105/chef

trae los siguientes datos:

```
  [
  {
    "_id": "64f90f514af9de2e8236334b",
    "id": 1,
    "nombre": "chefA",
    "especializacion": "Carnes"
  },
  {
    "_id": "64f90f514af9de2e8236334d",
    "id": 3,
    "nombre": "chefC",
    "especializacion": "Carnes"
  },
  {
    "_id": "64f90f514af9de2e8236334e",
    "id": 4,
    "nombre": "chefD",
    "especializacion": "Carnes"
  }
]
```

<hr>

**4.** Encontrar todas las hamburguesas preparadas por "ChefB"
METODO:GET
URL:http://127.10.8.8:5105/hamburguesas/chef

trae los siguientes datos:

```
  [
  {
    "_id": "64f90529b4c7bcadfa7cef94",
    "id": 3,
    "nombre": "Hamburguesa de lenteja",
    "categoria": "Vegetariana",
    "descripcion": "sin carne",
    "precio": 9,
    "id_chef": 2,
    "id_ingredientes": [
      2,
      5
    ],
    "chef": []
  }
]
```

<hr>

**5.** Encontrar el nombre y la descripción de todas las categorías
METODO:GET
URL:http://127.10.8.8:5105/hamburguesas/categorias

trae los siguientes datos:

```
  [
  {
    "_id": "64f90529b4c7bcadfa7cef92",
    "categoria": "Marina",
    "descripcion": "prepacion con carnes de mar"
  },
  {
    "_id": "64f90529b4c7bcadfa7cef93",
    "categoria": "Carnes",
    "descripcion": "carne al horno"
  },
  {
    "_id": "64f90529b4c7bcadfa7cef94",
    "categoria": "Vegetariana",
    "descripcion": "sin carne"
  }
]
```

<hr>

**6.** Eliminar todos los ingredientes que tengan un stock de 0
METODO:DELETE
URL:http://127.10.8.8:5105/ingredientes

trae el siguiente mensaje:

```
  {
  "message": "se ha eliminado correctamente"
}
```

<hr>

**7.** Agregar un nuevo ingrediente a la hamburguesa "Clásica"
METODO:PUT
URL:http://127.10.8.8:5105/hamburguesas/agrega

en el body agrega el id del ingrediente que desees agregar de la siguiente manera:

```
{"id_ingredientes":[1,3,4]}
```

trae el siguiente mensaje:

```
 {
  "message": "hamburguesa updated successfully"
}

```

<hr>

**8.** Encontrar todas las hamburguesas que contienen "Pan integral" como ingrediente
METODO:GET
URL:http://127.10.8.8:5105/hamburguesas/integral

trae los siguientes datos:

```
 [
  {
    "id": 3,
    "nombre": "Hamburguesa de lenteja",
    "categoria": "Vegetariana",
    "descripcion": "sin carne",
    "precio": 9,
    "id_chef": 2,
    "id_ingredientes": [
      2,
      5
    ],
    "ingredientes": [
      {
        "_id": "64f90c9b301f4f6e43a03db7",
        "id": 2,
        "nombre": "pan integral",
        "descripcion": "normal",
        "cantidad": 50,
        "precio": 8
      },
      {
        "_id": "64f90c9b301f4f6e43a03dba",
        "id": 5,
        "nombre": "lechuga",
        "descripcion": "normal",
        "cantidad": 120,
        "precio": 500
      }
    ]
  }
]

```

<hr>

**9.** Cambiar la especialidad del "ChefC" a "Cocina Internacional"
METODO:PUT
URL:http://127.10.8.8:5105/chef

trae el siguiente mensaje:

```
 {
  "message": "chef updated successfully"
}
```

<hr>

**10.** Listar las hamburguesas cuyo precio es menor o igual a $9
METODO:GET
URL:http://127.10.8.8:5105/hamburguesas/menor

trae los siguientes datos:

```
 [
  {
    "_id": "64f90529b4c7bcadfa7cef93",
    "id": 2,
    "nombre": "Hamburguesa clasica",
    "categoria": "Carnes",
    "descripcion": "carne al horno",
    "precio": 8,
    "id_chef": 1,
    "id_ingredientes": [
      1,
      3,
      4
    ]
  },
  {
    "_id": "64f90529b4c7bcadfa7cef94",
    "id": 3,
    "nombre": "Hamburguesa de lenteja",
    "categoria": "Vegetariana",
    "descripcion": "sin carne",
    "precio": 9,
    "id_chef": 2,
    "id_ingredientes": [
      2,
      5
    ]
  }
]
```

<hr>

**11.** Agregar un nuevo chef a la colección con una especialidad en "Cocina Asiática"
METODO:POST
URL:http://127.10.8.8:5105/chef

en el body envia el nombre del nuevo chef asi:

```
{"nombre":"nuevoChef"}
```

trae el siguiente mensaje:

```
 {
  "message": "chef added successfully",
  "insertedId": "64f91f8da163a159911ea68c"
}
```

<hr>

**12.** Listar las hamburguesas en orden ascendente según su precio
METODO:POST
URL:http://127.10.8.8:5105/hamburguesas/orden

trae los siguientes datos:

```
 [
  {
    "_id": "64f90529b4c7bcadfa7cef93",
    "id": 2,
    "nombre": "Hamburguesa clasica",
    "categoria": "Carnes",
    "descripcion": "carne al horno",
    "precio": 8,
    "id_chef": 1,
    "id_ingredientes": [
      1,
      3,
      4
    ]
  },
  {
    "_id": "64f90529b4c7bcadfa7cef94",
    "id": 3,
    "nombre": "Hamburguesa de lenteja",
    "categoria": "Vegetariana",
    "descripcion": "sin carne",
    "precio": 9,
    "id_chef": 2,
    "id_ingredientes": [
      2,
      5
    ]
  },
  {
    "_id": "64f90529b4c7bcadfa7cef92",
    "id": 1,
    "nombre": "Hamburguesa la pesca",
    "categoria": "Marina",
    "descripcion": "prepacion con carnes de mar",
    "precio": 10,
    "id_chef": 1,
    "id_ingredientes": [
      1,
      3
    ]
  }
]
```

<hr>

**13.** Encontrar todos los ingredientes cuyo precio sea entre $2 y $5
METODO:GET
URL:http://127.10.8.8:5105/ingredientes/precio

trae los siguientes datos:

```
 [
  {
    "_id": "64f90c9b301f4f6e43a03db6",
    "id": 1,
    "nombre": "pan",
    "descripcion": "normal",
    "cantidad": 500,
    "precio": 3
  },
  {
    "_id": "64f90c9b301f4f6e43a03db8",
    "id": 3,
    "nombre": "tomate",
    "descripcion": "normal",
    "cantidad": 300,
    "precio": 2
  }
]
```

<hr>

**14.** Actualizar la descripción del "Pan" a "Pan fresco y crujiente"
METODO:PUT
URL:http://127.10.8.8:5105/ingredientes

trae el siguiente mensaje:

```
 {
  "message": "ingrediente updated successfully"
}
```

<hr>

**15.** Listar todos los ingredientes en orden alfabético
METODO:GET
URL:http://127.10.8.8:5105/ingredientes/nombre

trae los siguientes datos:

```
 [
  {
    "_id": "64f90c9b301f4f6e43a03dba",
    "id": 5,
    "nombre": "lechuga",
    "descripcion": "normal",
    "cantidad": 120,
    "precio": 500
  },
  {
    "_id": "64f90c9b301f4f6e43a03db6",
    "id": 1,
    "nombre": "pan",
    "descripcion": "Pan fresco y crujiente",
    "cantidad": 500,
    "precio": 3
  },
  {
    "_id": "64f90c9b301f4f6e43a03db7",
    "id": 2,
    "nombre": "pan integral",
    "descripcion": "normal",
    "cantidad": 50,
    "precio": 8
  },
  {
    "_id": "64f90c9b301f4f6e43a03db8",
    "id": 3,
    "nombre": "tomate",
    "descripcion": "normal",
    "cantidad": 300,
    "precio": 2
  }
]
```

<hr>

**16.** Eliminar todos los chefs que tienen una especialidad en "Cocina Vegetariana"
METODO:DELETE
URL:http://127.10.8.8:5105/chef
