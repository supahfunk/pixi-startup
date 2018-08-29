const log = console.log;

/* PIXI Test */
let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas"
}
PIXI.utils.skipHello();

/* PIXI Setup */
let app = new PIXI.Application({
    width: 256,
    height: 256,
    backgroundColor: 0xccffCc,
    antialias: true,
    resolution: 1
});

document.body.appendChild(app.view);


const render = app.renderer;
render.autoResize = true;
render.resize(window.innerWidth, window.innerHeight);

const stage = app.stage;

/* Image Loader */
const setup = () => {
    let cat = new PIXI.Sprite(
        PIXI.loader.resources['img/cat.png'].texture
    )

    stage.addChild(cat);
}

PIXI.loader
    .add('img/cat.png')
    .load(setup);

