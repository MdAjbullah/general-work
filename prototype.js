let myHero =["thor","spider"]
let dcHero=["batman","superman"]
let hero ={
    thor:"hammer",
    spider:"web",

    getSpiderPower: function(){

      console.log(`md ajbullah is ${this.spider} and his power is ${this.web}`)
    }
}

Object.prototype.mdajbullah = function(){

    console.log(`this is prototype function`)
}
console.log(myHero.mdajbullah());



