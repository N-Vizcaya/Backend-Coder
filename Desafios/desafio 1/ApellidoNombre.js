class Usuario {
  constructor (nombre, apellido, libros, mascotas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.mascotas = mascotas;
    this.libros = libros;
 }   
    
  getFullName(){
 return `hola! ${this.nombre + " " + this.apellido}`
     
  }
 addMascotas(mascotas = ""){
   this.mascotas.push(mascotas)
 }
  
 countMascotas(){
   return this.mascotas.length
   
 } 
  
 
 addBook(autor, nombre){
   this.libros.push({autor, nombre})
   
 } 
 
getBookNames(){
  const libroNombre = []
  this.libros.map(libro => libroNombre.push(libro.nombre))
  return libroNombre
}
 
}
let usuario1 = new Usuario('Nahuel', 'Vizcaya', [{autor: 'Orwell', nombre: '1984'}], ['perro', 'gato'])


console.log(usuario1.getFullName()) //retorna nombre completo

usuario1.addMascotas('loro') //agrega la mascota

usuario1.addBook('Orwell', 'Rebelion en la granja') //agrega los libros

console.log(usuario1.countMascotas()) //retorna la cantidad de mascota 

console.log(usuario1.getBookNames()) //retorna los nombres de los libros















