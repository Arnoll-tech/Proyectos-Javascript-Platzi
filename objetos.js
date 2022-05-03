let miAuto = {
    marca: "Toyota",
    modelo: "Corola", 
    year: 2020,
    detalleDelAuto: function () {
        console.log( `Auto ${this.modelo} ${this.year}`)
    }
};

miAuto.detalleDelAuto();