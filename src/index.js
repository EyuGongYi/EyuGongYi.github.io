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
class Projectile{
    constructor(x,y,radius, color, velocity){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }
    draw(){
        con.beginPath()
        con.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
        con.fillStyle = this.color
        con.fill()
    }
}

class UI{
    constructor() {
        this.entities = [];
    }
    draw() {
        for (let i = 0; i < this.entities; i++) {
            this.entities[i].draw()
        }
    }
    append(object) {
        this.entities.append(object)
    }
}
const ui = new UI();
const player = new Player(canvas.width/2, canvas.height/2, 30, "blue")
ui.append(player)
ui.draw()
window.addEventListener("click",(event)=>{
    con.clearRect(0,0,canvas.width, canvas.height)
    const projectile = new Projectile(event.clientX, event.clientY, 30, "red", null)
    ui.append(projectile)
    ui.draw()
})