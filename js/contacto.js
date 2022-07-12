alert("Vienvenido al Formulario de Contacto")

class Usuario{
    constructor(nombre, apellido, edad, mail){
        this.nombre = prompt("Ingrese su nombre aqui: ");
        this.apellido = prompt("Ingrese su apellido aqui: ");
        this.edad = Number(prompt("Ingrese su edad aqui: "));
        this.mail = prompt("Ingrese su mail aqui: ");
    }
    calcularTiempo (edad){
        var today = new Date();
        var year = today.getFullYear();
        var nace = year - edad;
        var tiempo = nace - 1938;
        console.log("Un dato para que tengas presente: esta obra transcurre entre el dia de hoy y anecdotas de hace " + tiempo + " años antes de que nazcas.");
    }

}

let usuario1 = new Usuario ();
usuario1.calcularTiempo(usuario1.edad);