db.cafes.drop()

db.cafes.insertMany([
{
_id: 1,
tipo: 'espreso',
ingredientes: ["cafe", "agua"],
peso: 30,
intensidad: "alta",
precio: [{tipo: "efectivo", monto: 3500}, {tipo: "tarjeta", monto: 3700}],
contieneLeche: false,
tostador: {localidad: "Buenos Aires", nombre: "Los Tostadores", cuit: "3524875"}
},
{
_id: 2,
tipo: 'americano',
ingredientes: ["cafe", "agua"],
peso: 40,
intensidad: "alta",
precio: [{tipo: "efectivo", monto: 5400}, {tipo: "tarjeta", monto: 5600}],
contieneLeche: false,
tostador: {localidad: "Buenos Aires", nombre: "Los campos", cuit: "3254864"}
},
{
_id: 3,
tipo: 'americano suave',
ingredientes: ["cafe", "agua"],
peso: 40,
intensidad: "baja",
precio: [{tipo: "efectivo", monto: 2540}, {tipo: "tarjeta", monto: 2580}],
contieneLeche: false,
tostador: {localidad: "Buenos Aires", nombre: "Gran Cafe", cuit: "3225485"}
},
{
_id: 4,
tipo: 'macchiato vainilla',
ingredientes: ["cafe", "leche", "vainilla", "chocolate"],
peso: 50,
intensidad: "baja",
precio: [{tipo: "efectivo", monto: 2540}, {tipo: "tarjeta", monto: 2580}],
contieneLeche: true,
tostador: {localidad: "Buenos Aires", nombre: "Gran Cafe", cuit: "3225485"}
},
{
_id: 5,
tipo: 'cortado',
ingredientes: ["cafe", "agua", "leche"],
peso: 40,
intensidad: "baja",
precio: [{tipo: "efectivo", monto: 2840}, {tipo: "tarjeta", monto: 2680}],
contieneLeche: false,
tostador: {localidad: "Buenos Aires", nombre: "Gran Cafe", cuit: "3225485"}
},
{
_id: 6,
tipo: 'capuccino',
ingredientes: ["cafe", "agua", "leche", "chocolate"],
peso: 40,
intensidad: "baja",
precio: [{tipo: "efectivo", monto: 8540}, {tipo: "tarjeta", monto: 8580}],
contieneLeche: true,
tostador: {localidad: "Buenos Aires", nombre: "Cabral", cuit: "32224885"}
},
{
_id: 7,
tipo: 'cafe helado',
ingredientes: ["cafe", "agua", "helado"],
peso: 40,
intensidad: "baja",
precio: [{tipo: "efectivo", monto: 2540}, {tipo: "tarjeta", monto: 2580}],
contieneLeche: true,
tostador: {localidad: "Buenos Aires", nombre: "Cabral", cuit: "32224885"}
},
{
_id: 8,
tipo: 'ristreto intenso',
ingredientes: ["cafe", "agua"],
peso: 60,
intensidad: "alta",
precio: [{tipo: "efectivo", monto: 6440}, {tipo: "tarjeta", monto: 6880}],
contieneLeche: false,
tostador: {localidad: "Buenos Aires", nombre: "Gran Cafe", cuit: "3225485"}
},
{
_id: 9,
tipo: 'mocha chocolate',
ingredientes: ["cafe", "agua", "chocolate", "leche"],
peso: 40,
intensidad: "baja",
precio: [{tipo: "efectivo", monto: 7540}, {tipo: "tarjeta", monto: 7580}],
contieneLeche: true,
tostador: {localidad: "San justo", nombre: "Cafe de especialidad", cuit: "3225485"}
},
{
_id: 10,
tipo: 'vainilla latte',
ingredientes: ["cafe", "agua", "caramelo", "leche", "vainilla"],
peso: 40,
intensidad: "baja",
precio: [{tipo: "efectivo", monto: 3540}, {tipo: "tarjeta", monto: 3880}],
contieneLeche: false,
tostador: {localidad: "San Justo", nombre: "Cafe de especialidad", cuit: "3225485"}
}
]
)