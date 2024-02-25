module.exports = class Complexe {
    constructor(re, im,polar) {
        this.re = re
        this.im = im
        if(polar){
            this.re = re*Math.cos(im)
            this.im = re*Math.sin(im)
        }
    }
    log(){
        console.log(this.re + (this.im<0?'':'+') + this.im + "i")
    }
    add (complexnum){
        this.re += complexnum.re
        this.im += complexnum.im
    }
    sub(complexnum){
        this.re -= complexnum.re
        this.im -= complexnum.im
    }
    mul(complexnum){
        let r = this.re*complexnum.re - (this.im*complexnum.im)
        let i = this.re*complexnum.im + complexnum.re*this.im
        this.r =r
        this.im = i
    }
    inverse(){
        let coef = this.re**2 +this.im**2
        this.re /= coef
        this.im /= -coef 
    }
    divide(complexnum){
        this.inverse()
        this.mul(complexnum)
    }
    congugate(){
        this.im*=-1
    }
    clone(){
        return new Complexe(this.re,this.im)
    }
}
