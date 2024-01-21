const canvas = document.querySelector("canvas")
const con = canvas.getContext("2d")
canvas.width = innerWidth
canvas.height = innerHeight

class Player{
    constructor(x, y, radius, color){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    draw(){
        con.beginPath()
        con.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
        con.fillStyle = this.color
        con.fill()
    }
}
const player = new Player(canvas.width/2, canvas.height/2, 30, "blue")
player.draw()