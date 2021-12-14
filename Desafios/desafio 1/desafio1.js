class Usuario {
  constructor (nombre, apellido, libros, mascotas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.mascotas = [mascotas];
    this.libros = [libros];
 }   
    
  getFullName(){
 return `hola! ${this.nombre + "" + this.apellido}`
     
  }
 
  
 
 
}
let usuario1 = new Usuario('Nahuel', 'Vizcaya', {autor: 'Orwell', libro: '1984'}, { animal: 'perro', nombre: 'yanay'})

console.log(usuario1)


console.log(usuario1.getFullName())



