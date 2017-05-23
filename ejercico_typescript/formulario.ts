class Carro{
	protected color:string;
	protected velocidad:number;
	protected modelo: string;

	constructor(modelo:any=null){
		this.color="Blanco";
		this.velocidad=0;

		if(modelo==null){
			this.modelo="BMW Generico";
		}else{
			this.modelo=modelo;
		}
	}

	protected getModelo(){
		return this.modelo
	}
	protected setModelo(modelo:string){
		this.modelo=modelo;
	}
}

class autoUno extends Carro{
	getAllData(){
		return this.getModelo();
	}
}

var auto= new autoUno("Renalt Cio");
console.log("El auto es de modelo : "+ auto.getAllData());	

