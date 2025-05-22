// Crear una base llamada cafetería, con una colección de cafés especiales que tenga los siguientes datos:
// • tipo (espresso, filtrado, cold brew, descafeinado, etc…)
// • array de ingredientes (vainilla-canela, chocolate, caramelo, etc.)
// • peso en gramos
// • intensidad (baja, media, alta)
// • array de objetos precio (tipo: efectivo, precio: 500 … tipo: tarjeta, precio: 550 …)
// • si contiene leche (booleano)
// • objeto tostador con localidad, nombre y cuit.
// Cargar 10 cafés especiales.
// Los datos a cargar en cada entidad deben ser útiles a las consultas que se detallan a continuación.

// 1) Crear el script .js con la creación de la base de datos y las colecciones.

use cafeteria

db.load("cafes.js")

// 2) Buscar cuántos cafés contienen chocolate entre sus ingredientes.

db.cafes.find( {ingredientes: {$eq: "chocolate"}}).count()

// 3) Buscar cuántos cafés son de tipo “cold brew”· y contienen “vainilla” entre sus ingredientes.

db.cafes.find( {tipo: {$eq: "cold brew"}}, {ingredientes: {$eq: "vainilla"}} ).count()

// 4) Listar tipo y peso de los cafés que tienen una intensidad “media”.

db.cafes.find( {intensidad: {$eq: "media"}}, {tipo: 1, peso: 1, _id:0} )

// 5) Obtener tipo, peso e intensidad de los cafés cuyo peso se encuentre entre 200 y 260 inclusive

db.cafes.find( {peso: {$gte: 200, $lte: 26 }}, {tipo: 1, peso: 1, intensidad: 1, _id:0} )


// Objetivos de Aprobación Directa (Calificación de 6 a 10 puntos):

// 6) Mostrar los cafés que fueron tostados en localidades que contengan “san”, permitiendo buscar por “san” y que se muestren también los de “santos”, “san justo”, etc. Ordenar el resultado por peso de manera descendente.

db.cafes.find(
    { "tostador.localidad": /san/i},
    { nombre: 1, peso: 1, "tostador.localidad": 1, _id: 0}
).sort({peso: -1})

// 7) Mostrar la sumar del peso de cada tipo de Café.

db.cafes.aggregate( [ {$group: {_id: "$nombre", totalPeso: { $sum: "$sumaPeso"}}} ] )

// 8) Agregar el ingrediente “whisky” todos los cafés cuya intensidad es alta.

db.cafes.updateMany( {intensidad: {$eq: "alta"}}, {$push: { ingredientes: "whisky" } } )


// 9) Sumarle 10 al peso de los cafés cuyo peso se encuentre entre 200 y 260 inclusive.

db.cafes.updateMany( {peso: {$gte: 200, $lte: 260 }}, {$inc: { peso: 10}} )

// 10) Eliminar los cafés cuyo peso sea menor o igual a 210.

db.cafes.deleteMany( {peso: {$lte: 210}} )