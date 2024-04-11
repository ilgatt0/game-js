import Vector2D from './vector2d.js';
import Clock from './clock.js';
import conf from '../config.js';
import Sprite from './sprite.js';
import Fireball from './fireball.js';
import Hitbox from './hitbox.js';

class Enemy extends Hitbox {
    name;
    score;
    velocity; // e non speed, mi raccomando
    hp304;
    currentImageIndex;
    images;
    moving;
    update_timer;

    constructor(images_srcs, name) {
        super(700, 215,165,175)
        this.name = name;
        // importo le immagini dello sprite_sheet nel vettore di immagini
        this.images = [];
        for(let src of images_srcs) {
            let img = new Image();
            img.src = src;
            this.images.push(img);
        }
        //  inizialmente uso la prima immagine
        this.currentImageIndex = 0; 

        this.velocity = new Vector2D();
        this.velocity.set(0, 0);
        this.hp304 = 165;
        this.score = 0;
        this.moving = false;
        this.update_timer = new Clock(125);
        this.canJump = true;
        this.bullets = [];
    }

    draw(ctx) {
        ctx.drawImage(this.images[this.currentImageIndex], this.position.x,
            ctx.canvas.clientHeight - this.position.y, 
            175, 175);
        ctx.strokeStyle = "white";
        ctx.strokeRect(this.position.x, (ctx.canvas.clientHeight - (this.position.y + 20)), 165, 20);
        ctx.fillStyle = "green";
        ctx.fillRect(this.position.x, (ctx.canvas.clientHeight - (this.position.y + 20)), this.hp304, 20);
        ctx.font = "30px Verdana";
        ctx.fillStyle = "white";
        ctx.fillText(this.name, this.position.x + 50, (ctx.canvas.clientHeight - (this.position.y + 25)));
        this.bullets.forEach((b) => b.draw(ctx));

        super.draw(ctx);
    
    }
}

export default Enemy;