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
let winW = window.innerWidth;
let winH = window.innerHeight;

render.autoResize = true;
render.resize(winW, winH);

const stage = app.stage;

/* Image Loader */
PIXI.loader
    .add('img/cat.png')
    .load(init);

/* Init */
function init() {
    cat = new PIXI.Sprite(
        PIXI.loader.resources['img/cat.png'].texture
    )
    stage.addChild(cat);
    cat.pivot.x = cat.width / 2;
    cat.pivot.y = cat.height / 2;
    resize();
}

/* Resize */
function resize() {
    winW = window.innerWidth;
    winH = window.innerHeight;
    render.resize(winW, winH);

    cat.x = winW / 2;
    cat.y = winH / 2;
}
window.addEventListener("resize", resize);
