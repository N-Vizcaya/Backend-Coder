import * as fs from 'fs';

class Contenedor {
    
    constructor(file){
        this.file = file
    }
    
    static counter = 0
    
    
    
    async getAll(){
        const file = this.file
        
            let data
            try{
                let prod = await fs.promises.readFile(file, "utf-8")
                prod = JSON.parse(prod) || null
                return prod
            }
            catch(error){
                console.log("No se pudo encontrar el archivo.")
            }
            

    }
    save(obj){
        const file = this.file
        
        let id = Contenedor.counter
        this.getAll()
            .then(async (prod)=>{
                try{
                    let data = prod || []
                    while(data.some(i=> i.id == id)){
                        Contenedor.couter += 1
                        id += 1
                        
                    }
                    obj.id = id 
                    data.push(obj)
                    await fs.promises.writeFile(file, JSON.stringify(data) )
                    console.log(`Guardado con el id numero #${id}`)
                    return id
                    
                }
                catch(error){
                    console.log("error al guardar", error)
                }
            })

    }
    getById(id){
        
        this.getAll().then(i=>{
            
            let buscar = i.find(i=> i.id === id)
            console.log(buscar)
            if(buscar){
                console.log(buscar)
                
            }else{
                console.log("no se encontró ninguna coincidencia")
            
            }
            return buscar
        })
        .catch(error =>{
            console.warning(`No fue posible resolver la consulta con el id ${id} .`)
        })
    }
    
    deleteById(id){
        const file = this.file
        this.getAll()
        .then(async i=>{
            let productID = i.filter(i=> i.id != id)
            await fs.promises.writeFile(file, JSON.stringify(productID) )
                    console.log(`Se borro el elemento con id #${id}`)
        })
        .catch(error=>{
            console.log("No se pudo eliminar el objeto.",error)
        })
    }
    
    async deleteAll(){
        
        const file = this.file
        try{
            await fs.promises.writeFile(file, JSON.stringify([]))
            console.log("Los objetos se han eliminado correctamente")
        }
        catch(error){
            console.log("error al eliminar los elementos", error)
        }
        
            
    }
}


let test = new Contenedor("./productos.txt")
//test.getAll().then(prod => {console.log(prod)})
//test.save({title:"Adidas Tubular", price: 23000, imgProd:"https://i.imgur.com/5nD30Si.jpg"})
//test.getById(0)
// test.deleteById(1)
// test.deleteAll()


module.exports = Contenedor;