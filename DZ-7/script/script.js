let Lamp = function(){
    this.get = function(){
        this.power = +prompt('Мощность лампочки, Вт')/1000;
        this.cost = 0.19;
        this.status = confirm('Лампочка включена?');
        if(this.status == true){
            this.time = +prompt('Время работы лампочки, ч')
            this.calc()
        }else this.get();
        
    }

this.calc = function(){
    this.resualt = this.power*this.cost*this.time
    this.showResualt();
}

this.showResualt = function(){
    document.write(`Затраты на энергию лампы: ${this.resualt}`)

}
}

let lamp = new Lamp(); 
lamp.get();