import { SpriteMaterial, TextureLoader, Sprite } from 'three';

function createMenu() {
    const map = new TextureLoader().load('sprite.png');

    const material = new SpriteMaterial({ map: map, color: 0xffffff });
    const sprite = new Sprite(material);
    sprite.scale.set(200, 200, 1)
    console.log(sprite)

}

export { createMenu };