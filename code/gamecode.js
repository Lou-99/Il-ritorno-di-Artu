/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/aFcCYatK
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {


    game.load.crossOrigin = 'anonymous';
    game.load.image('firstaid', 'http://examples.phaser.io/assets/sprites/firstaid.png');
    game.load.image('platform', 'tex/ground.png');
    game.load.image('platformlong', 'tex/platformlong.png');
    game.load.image('smallplatform', 'tex/smallground.png');
    game.load.image('heart1', 'tex/Heart1.png');
    game.load.image('heart2', 'tex/Heart2.png');
    game.load.image('sword', 'tex/sword.png');
    game.load.image('bow', 'tex/arco.png');
    game.load.image('shield', 'tex/scudo.png');
    game.load.image('hitbox', 'tex/hitbox.png');
    game.load.image('hitboxplayer', 'tex/hitboxplayer.png');
    game.load.image('hud', 'tex/Hud.png');
    game.load.image('filtro', 'tex/filtro.png');
    game.load.image('filtro2', 'tex/filtro.png');
    game.load.image('hudselector', 'tex/Hudselector.png');

    game.load.image('locanda1', 'tex/locanda/locanda1.png');
    game.load.image('locanda2', 'tex/locanda/locanda2.png');
    game.load.image('locanda3', 'tex/locanda/locanda3.png');

    game.load.image('bullet', 'tex/arrow.png');
    game.load.spritesheet('player', 'tex/playerdown64x64.png', 64, 64, 96);
    game.load.spritesheet('playerup', 'tex/playerup64x64.png', 64, 64, 128);
    game.load.spritesheet('caio', 'tex/caio84x84.png', 84, 84, 24);
    game.load.spritesheet('fante', 'tex/fante64x64.png', 64, 64, 18);
    game.load.spritesheet('arciere', 'tex/arciere64x64.png', 64, 64, 10);


    game.load.spritesheet('enemy', 'tex/tank128x150.png', 128, 150, 10);

    game.load.image('mount2', 'tex/montagna2.png');
    game.load.image('mount1', 'tex/montagna1.png');
    game.load.image('sfondot', 'tex/sfondot.png');

    game.load.image('case1', 'tex/case1.png');
    game.load.image('case2', 'tex/case2.png');
    game.load.image('case3', 'tex/case3.png');

    game.load.image('casa1', 'tex/casa1.png');
    game.load.image('casa2', 'tex/casa2.png');
    game.load.spritesheet('merlino', 'tex/merlino64x84.png', 64, 84, 3);

    game.load.image('fine0', 'tex/fine0.png');
    game.load.image('fine1', 'tex/fine1.png');
    game.load.image('fine2', 'tex/fine2.png');
    game.load.image('fine3', 'tex/fine3.png');
    game.load.image('fine4', 'tex/fine4.png');
    game.load.image('fine5', 'tex/fine5.png');
    game.load.image('fine6', 'tex/fine6.png');
    game.load.image('fine7', 'tex/fine7.png');

    game.load.image('transpalude1', 'tex/transpalude1.png');
    game.load.image('transpalude2', 'tex/transpalude2.png');
    game.load.image('transpalude3', 'tex/transpalude3.png');
    game.load.image('transpalude4', 'tex/transpalude4.png');
    game.load.image('transpalude5', 'tex/transpalude5.png');

    game.load.image('transizione1', 'tex/transizione/transizione1.png');
    game.load.image('transizione2', 'tex/transizione/transizione2.png');
    game.load.image('transizione3', 'tex/transizione/transizione3.png');
    game.load.image('transizione4', 'tex/transizione/transizione4.png');
    game.load.image('transizione5', 'tex/transizione/transizione5.png');
    game.load.image('transizione6', 'tex/transizione/transizione6.png');

    game.load.image('bosco1', 'tex/bosco/bosco1.png');
    game.load.image('bosco2', 'tex/bosco/bosco2.png');
    game.load.image('bosco3', 'tex/bosco/bosco3.png');
    game.load.image('bosco31', 'tex/bosco/bosco31.png');
    game.load.image('bosco4', 'tex/bosco/bosco4.png');
    game.load.image('bosco5', 'tex/bosco/bosco5.png');

    game.load.image('text1', 'tex/text1.png');
    game.load.image('text2', 'tex/text2.png');
    game.load.image('text3', 'tex/text3.png');
    game.load.image('text4', 'tex/text4.png');
    game.load.image('text5', 'tex/text5.png');
    game.load.image('text6', 'tex/text6.png');
    game.load.image('text7', 'tex/text7.png');
    game.load.image('text8', 'tex/text8.png');
    game.load.image('text9', 'tex/text9.png');
    game.load.image('text10', 'tex/text10.png');
    game.load.image('text11', 'tex/text11.png');
    game.load.image('text12', 'tex/text12.png');
    game.load.image('text13', 'tex/text13.png');
    game.load.image('text14', 'tex/text14.png');
    game.load.image('text15', 'tex/text15.png');
    game.load.image('text16', 'tex/text16.png');
    game.load.image('text17', 'tex/text17.png');

    game.load.image('end1', 'tex/end1.png');
    game.load.image('end1d', 'tex/end1d.png');
    game.load.image('end2', 'tex/end2.png');
    game.load.image('end2d', 'tex/end2d.png');
    game.load.image('goodend', 'tex/goodend.png');
    game.load.image('credits', 'tex/credits.png');

    game.load.image('chestc', 'tex/chestc.png');
    game.load.image('chesto', 'tex/chesto.png');
    game.load.image('excalibur', 'tex/excalibur.png');


}

var player;
var platforms;
var smalloplatforms;
var longplatforms;
var cursors;
var jumpButton;
var weapon;
var fireButton;
var zoomButton;
var sprintButton;
var skipButton;
//var attackButton;
var weaponButton;
var hitbox;
var barriera;
var barriera2;
var skip;
var mem;
var tween;







function create() {
    //sfondo
    game.world.setBounds(1750,0,39720,1300);

    //back = game.add.sprite(0, 0, 'back');
    //back.scale.setTo(1.7);
    //back.fixedToCamera = true;
    //back.smoothed = false;

    sfondot = game.add.sprite(2000, 0, 'sfondot');
    sfondot.scale.setTo(3.5);

    mount2 = game.add.sprite(400, 0, 'mount2');
    mount2.scale.setTo(3.5);
    mount2.smoothed = false;

    mount1 = game.add.sprite(400, 0, 'mount1');
    mount1.scale.setTo(3.5);
    mount1.smoothed = false;

    transizione1 = game.add.sprite(400, 0, 'transizione1');
    transizione1.scale.setTo(3.5);
    transizione1.smoothed = false;

    bosco1 = game.add.sprite(7000, 0, 'bosco1');
    bosco1.scale.setTo(3.5);
    bosco1.smoothed = false;


    transizione2 = game.add.sprite(400, 0, 'transizione2');
    transizione2.scale.setTo(3.5);
    transizione2.smoothed = false;

    transizione3 = game.add.sprite(400, 0, 'transizione3');
    transizione3.scale.setTo(3.5);
    transizione3.smoothed = false;

    bosco2 = game.add.sprite(7000, 0, 'bosco2');
    bosco2.scale.setTo(3.5);
    bosco2.smoothed = false;


    transizione4 = game.add.sprite(400, 0, 'transizione4');
    transizione4.scale.setTo(3.5);
    transizione4.smoothed = false;

    transizione5 = game.add.sprite(400, 0, 'transizione5');
    transizione5.scale.setTo(3.5);
    transizione5.smoothed = false;

    transizione6 = game.add.sprite(400, 0, 'transizione6');
    transizione6.scale.setTo(3.5);
    transizione6.smoothed = false;

    locanda1 = game.add.sprite(0, 0, 'locanda1');
    locanda1.scale.setTo(3.5);
    locanda1.smoothed = false;

    locanda2 = game.add.sprite(0, 0, 'locanda2');
    locanda2.scale.setTo(3.5);
    locanda2.smoothed = false;

    case1 = game.add.sprite(7000, 0, 'case1');
    case1.scale.setTo(3.5);
    case1.smoothed = false;

    case2 = game.add.sprite(7000, 0, 'case2');
    case2.scale.setTo(3.5);
    case2.smoothed = false;

    case3 = game.add.sprite(7000, 0, 'case3');
    case3.scale.setTo(3.5);
    case3.smoothed = false;

    casa1 = game.add.sprite(5000, 240, 'casa1');
    casa1.scale.setTo(2.8);
    casa1.smoothed = false;

    chest2 = game.add.sprite(14648, 992, 'chestc');
    chest2.smoothed = false;
    chest2.scale.setTo(3);

    bosco3 = game.add.sprite(7000, 0, 'bosco3');
    bosco3.scale.setTo(3.5);
    bosco3.smoothed = false;

    fine7 = game.add.sprite(7000, 0, 'fine7');
    fine7.scale.setTo(3.5);
    fine7.smoothed = false;

    fine6 = game.add.sprite(7000, 0, 'fine6');
    fine6.scale.setTo(3.5);
    fine6.smoothed = false;

    fine5 = game.add.sprite(7000, 0, 'fine5');
    fine5.scale.setTo(3.5);
    fine5.smoothed = false;

    transpalude5 = game.add.sprite(7000, 0, 'transpalude5');
    transpalude5.scale.setTo(3.5);
    transpalude5.smoothed = false;

    fine4 = game.add.sprite(7000, 0, 'fine4');
    fine4.scale.setTo(3.5);
    fine4.smoothed = false;

    transpalude4 = game.add.sprite(7000, 0, 'transpalude4');
    transpalude4.scale.setTo(3.5);
    transpalude4.smoothed = false;

    fine3 = game.add.sprite(7000, 0, 'fine3');
    fine3.scale.setTo(3.5);
    fine3.smoothed = false;

    transpalude3 = game.add.sprite(7000, 0, 'transpalude3');
    transpalude3.scale.setTo(3.5);
    transpalude3.smoothed = false;

    transpalude2 = game.add.sprite(7000, 0, 'transpalude2');
    transpalude2.scale.setTo(3.5);
    transpalude2.smoothed = false;

    transpalude1 = game.add.sprite(7000, 0, 'transpalude1');
    transpalude1.scale.setTo(3.5);
    transpalude1.smoothed = false;

    fine2 = game.add.sprite(7000, 0, 'fine2');
    fine2.scale.setTo(3.5);
    fine2.smoothed = false;

    fine1 = game.add.sprite(7000, 0, 'fine1');
    fine1.scale.setTo(3.5);
    fine1.smoothed = false;


    bosco4 = game.add.sprite(7000, 0, 'bosco4');
    bosco4.scale.setTo(3.5);
    bosco4.smoothed = false;

    bosco5 = game.add.sprite(5700, 0, 'bosco5');
    bosco5.scale.setTo(3.5);
    bosco5.smoothed = false;

    //foreground.body.velocity.x = 10;

    //player
    //player = game.add.sprite(100, 500, 'player');
    //player.tint = 0x000000;
    //player.scale.setTo(1.5);

    merlino = game.add.sprite(2100, 850, 'merlino');
    merlino.animations.add('merlino', [0, 1, 2]);
    merlino.animations.play('merlino', 2, true);
    merlino.scale.setTo(3.5);
    merlino.smoothed=(false)

    chest = game.add.sprite(5975, 1020, 'chestc');
    chest.smoothed = false;
    chest.scale.setTo(3);

    excalibur = game.add.sprite(27776, 844, 'excalibur');
    excalibur.smoothed = false;
    excalibur.scale.setTo(3.5);

    chest3 = game.add.sprite(27750, 1000, 'chestc');
    chest3.smoothed = false;
    chest3.scale.setTo(3);

    chest4 = game.add.sprite(40650, 800, 'chestc');
    chest4.smoothed = false;
    chest4.scale.setTo(3);


    //player
    //player = game.add.sprite(2050, 1000, 'player');
    player = game.add.sprite(2000, 980, 'player');  //posizione player
    playerup = player.addChild(game.make.sprite(0, 0, 'playerup'));

    hitbox = game.add.sprite(30, -80, 'hitbox');
    hitbox.scale.x=(20)
    hitbox.scale.y=(17);
    hitbox.alpha=0;

    hitboxplayer = game.add.sprite(-50, -80, 'hitboxplayer');
    hitboxplayer.scale.setTo(7);
    hitboxplayer.scale.y=(20);
    hitboxplayer.alpha=0;

    player.scale.setTo(4);
    player.anchor.setTo(.4,.5);

    playerup.scale.setTo(4);
    playerup.anchor.setTo(.4,.5);

    player.smoothed=(false);
    playerup.smoothed=(false)

    player.alpha=1;
    playerup.alpha=1;
    player.animations.add('shield', [4]);
    player.animations.add('idle', [0, 1, 2, 3]);
    player.animations.add('walking', [24, 25, 26, 27, 28, 29, 30, 31]);
    player.animations.add('running', [16, 17, 18, 19, 20, 21, 22, 23]);
    player.animations.add('flipping', [8, 9, 10]);

    playerup.animations.add('shield', [4]);
    playerup.animations.add('idle', [0, 1, 2, 3]);
    playerup.animations.add('walking', [24, 25, 26, 27, 28, 29, 30, 31]);
    playerup.animations.add('running', [16, 17, 18, 19, 20, 21, 22, 23]);
    playerup.animations.add('flipping', [8, 9, 10]);
    playerup.animations.add('attack', [11, 12, 13, 14, 15]);

    playerup.animations.add('idles', [32, 33, 34, 35]);
    playerup.animations.add('walkings', [56, 57, 58, 59, 60, 61, 62, 63]);
    playerup.animations.add('runnings', [48, 49, 50, 51, 52, 53, 54, 55]);
    playerup.animations.add('flippings', [40, 41, 42]);
    playerup.animations.add('attacks', [43, 44, 45, 46, 47]);

    playerup.animations.add('idlee', [96, 97, 98, 99]);
    playerup.animations.add('walkinge', [120, 121, 122, 123, 124, 125, 126, 127]);
    playerup.animations.add('runninge', [112, 113, 114, 115, 116, 117, 118, 119]);
    playerup.animations.add('attacke', [107, 108, 109, 110, 111]);

    playerup.animations.add('idleb', [64, 65, 66, 67]);
    playerup.animations.add('walkingb', [88, 89, 90, 91, 92, 93, 94, 95]);
    playerup.animations.add('runningb', [80, 81, 82, 83, 84, 85, 86, 87]);
    playerup.animations.add('flippingb', [72, 73, 74]);
    playerup.animations.add('attackb', [75, 76, 77, 78, 79]);



    //firstaid
    //firstaid = game.add.sprite(130,534, 'firstaid');
    //firstaid.tint = 0x0000ff;


    //enemy
    //mummy = game.add.sprite(300, 200, 'mummy');
    //walk = mummy.animations.add('walk');
    //mummy.animations.play('walk', 30, true);

    caio = game.add.sprite(41200, 300, 'caio'); //blocco1
    caio.animations.add('idle', [0,1,2]);
    caio.animations.add('run', [6,7,8,9,10,11]);
    caio.animations.add('attack', [12,13,14,15]);
    caio.animations.add('attack2', [12,13,14,15,15,15,15,15,15]);
    caio.animations.play('run', 8, true);
    caio.scale.setTo(3.5);
    caio.smoothed=(false)
    caio.anchor.setTo(.5,.5);


    fante = game.add.sprite(6200, 300, 'fante'); //blocco1
    fante.animations.add('idle', [0]);
    fante.animations.add('run', [6,7,8,9,10,11]);
    fante.animations.add('attack', [12,13,14,15]);
    fante.animations.play('run', 8, true);
    fante.scale.setTo(3.5);
    fante.smoothed=(false)
    fante.anchor.setTo(.5,.5);

    fante1 = game.add.sprite(7040, 300, 'fante'); //blocco1
    fante1.animations.add('idle', [0]);
    fante1.animations.add('run', [6,7,8,9,10,11]);
    fante1.animations.add('attack', [12,13,14,15]);
    fante1.animations.play('run', 8, true);
    fante1.scale.setTo(3.5);
    fante1.smoothed=(false)
    fante1.anchor.setTo(.5,.5);

    fante2 = game.add.sprite(8300, 300, 'fante'); //blocco1
    fante2.animations.add('idle', [0]);
    fante2.animations.add('run', [6,7,8,9,10,11]);
    fante2.animations.add('attack', [12,13,14,15]);
    fante2.animations.play('run', 8, true);
    fante2.scale.setTo(3.5);
    fante2.smoothed=(false)
    fante2.anchor.setTo(.5,.5);

    fante3 = game.add.sprite(9000, 300, 'fante'); //blocco1
    fante3.animations.add('idle', [0]);
    fante3.animations.add('run', [6,7,8,9,10,11]);
    fante3.animations.add('attack', [12,13,14,15]);
    fante3.animations.play('run', 8, true);
    fante3.scale.setTo(3.5);
    fante3.smoothed=(false)
    fante3.anchor.setTo(.5,.5);

    fante4 = game.add.sprite(9500, 300, 'fante'); //blocco1
    fante4.animations.add('idle', [0]);
    fante4.animations.add('run', [6,7,8,9,10,11]);
    fante4.animations.add('attack', [12,13,14,15]);
    fante4.animations.play('run', 8, true);
    fante4.scale.setTo(3.5);
    fante4.smoothed=(false)
    fante4.anchor.setTo(.5,.5);

    fante5 = game.add.sprite(11650, 300, 'fante'); //blocco1
    fante5.animations.add('idle', [0]);
    fante5.animations.add('run', [6,7,8,9,10,11]);
    fante5.animations.add('attack', [12,13,14,15]);
    fante5.animations.play('run', 8, true);
    fante5.scale.setTo(3.5);
    fante5.smoothed=(false)
    fante5.anchor.setTo(.5,.5);

    fante6 = game.add.sprite(13650, 400, 'fante'); //blocco1
    fante6.animations.add('idle', [0]);
    fante6.animations.add('run', [6,7,8,9,10,11]);
    fante6.animations.add('attack', [12,13,14,15]);
    fante6.animations.play('run', 8, true);
    fante6.scale.setTo(3.5);
    fante6.smoothed=(false)
    fante6.anchor.setTo(.5,.5);

    fante7 = game.add.sprite(4850, 350, 'fante'); //blocco1
    fante7.animations.add('idle', [0]);
    fante7.animations.add('run', [6,7,8,9,10,11]);
    fante7.animations.add('attack', [12,13,14,15]);
    fante7.animations.play('run', 8, true);
    fante7.scale.setTo(3.5);
    fante7.smoothed=(false)
    fante7.anchor.setTo(.5,.5);

    fante8 = game.add.sprite(23650, 550, 'fante'); //blocco1
    fante8.animations.add('idle', [0]);
    fante8.animations.add('run', [6,7,8,9,10,11]);
    fante8.animations.add('attack', [12,13,14,15]);
    fante8.animations.play('run', 8, true);
    fante8.scale.setTo(3.5);
    fante8.smoothed=(false)
    fante8.anchor.setTo(.5,.5);

    fante9 = game.add.sprite(35350, 300, 'fante'); //blocco1
    fante9.animations.add('idle', [0]);
    fante9.animations.add('run', [6,7,8,9,10,11]);
    fante9.animations.add('attack', [12,13,14,15]);
    fante9.animations.play('run', 8, true);
    fante9.scale.setTo(3.5);
    fante9.smoothed=(false)
    fante9.anchor.setTo(.5,.5);

    fante10 = game.add.sprite(36050, 300, 'fante'); //blocco1
    fante10.animations.add('idle', [0]);
    fante10.animations.add('run', [6,7,8,9,10,11]);
    fante10.animations.add('attack', [12,13,14,15]);
    fante10.animations.play('run', 8, true);
    fante10.scale.setTo(3.5);
    fante10.smoothed=(false)
    fante10.anchor.setTo(.5,.5);

    fantea = game.add.sprite(15200, 700, 'fante'); //blocco1
    fantea.animations.add('idle', [0]);
    fantea.animations.add('run', [6,7,8,9,10,11]);
    fantea.animations.add('attack', [12,13,14,15]);
    fantea.animations.play('run', 8, true);
    fantea.scale.setTo(3.5);
    fantea.smoothed=(false)
    fantea.anchor.setTo(.5,.5);

    fantea1 = game.add.sprite(18200, 700, 'fante'); //blocco1
    fantea1.animations.add('idle', [0]);
    fantea1.animations.add('run', [6,7,8,9,10,11]);
    fantea1.animations.add('attack', [12,13,14,15]);
    fantea1.animations.play('run', 8, true);
    fantea1.scale.setTo(3.5);
    fantea1.smoothed=(false)
    fantea1.anchor.setTo(.5,.5);

    fantea2 = game.add.sprite(20200, 700, 'fante'); //blocco1
    fantea2.animations.add('idle', [0]);
    fantea2.animations.add('run', [6,7,8,9,10,11]);
    fantea2.animations.add('attack', [12,13,14,15]);
    fantea2.animations.play('run', 8, true);
    fantea2.scale.setTo(3.5);
    fantea2.smoothed=(false)
    fantea2.anchor.setTo(.5,.5);

    fantea3 = game.add.sprite(27200, 700, 'fante'); //blocco1
    fantea3.animations.add('idle', [0]);
    fantea3.animations.add('run', [6,7,8,9,10,11]);
    fantea3.animations.add('attack', [12,13,14,15]);
    fantea3.animations.play('run', 8, true);
    fantea3.scale.setTo(3.5);
    fantea3.smoothed=(false)
    fantea3.anchor.setTo(.5,.5);

    fantea4 = game.add.sprite(11200, 700, 'fante'); //blocco1
    fantea4.animations.add('idle', [0]);
    fantea4.animations.add('run', [6,7,8,9,10,11]);
    fantea4.animations.add('attack', [12,13,14,15]);
    fantea4.animations.play('run', 8, true);
    fantea4.scale.setTo(3.5);
    fantea4.smoothed=(false)
    fantea4.anchor.setTo(.5,.5);

    fantea5 = game.add.sprite(29100, 700, 'fante'); //blocco1
    fantea5.animations.add('idle', [0]);
    fantea5.animations.add('run', [6,7,8,9,10,11]);
    fantea5.animations.add('attack', [12,13,14,15]);
    fantea5.animations.play('run', 8, true);
    fantea5.scale.setTo(3.5);
    fantea5.smoothed=(false)
    fantea5.anchor.setTo(.5,.5);

    fantea6 = game.add.sprite(31700, 900, 'fante'); //blocco1
    fantea6.animations.add('idle', [0]);
    fantea6.animations.add('run', [6,7,8,9,10,11]);
    fantea6.animations.add('attack', [12,13,14,15]);
    fantea6.animations.play('run', 8, true);
    fantea6.scale.setTo(3.5);
    fantea6.smoothed=(false)
    fantea6.anchor.setTo(.5,.5);

    fantea7 = game.add.sprite(35000, 900, 'fante'); //blocco1
    fantea7.animations.add('idle', [0]);
    fantea7.animations.add('run', [6,7,8,9,10,11]);
    fantea7.animations.add('attack', [12,13,14,15]);
    fantea7.animations.play('run', 8, true);
    fantea7.scale.setTo(3.5);
    fantea7.smoothed=(false)
    fantea7.anchor.setTo(.5,.5);

    fantea8 = game.add.sprite(37000, 900, 'fante'); //blocco1
    fantea8.animations.add('idle', [0]);
    fantea8.animations.add('run', [6,7,8,9,10,11]);
    fantea8.animations.add('attack', [12,13,14,15]);
    fantea8.animations.play('run', 8, true);
    fantea8.scale.setTo(3.5);
    fantea8.smoothed=(false)
    fantea8.anchor.setTo(.5,.5);

    fantea9 = game.add.sprite(38000, 900, 'fante'); //blocco1
    fantea9.animations.add('idle', [0]);
    fantea9.animations.add('run', [6,7,8,9,10,11]);
    fantea9.animations.add('attack', [12,13,14,15]);
    fantea9.animations.play('run', 8, true);
    fantea9.scale.setTo(3.5);
    fantea9.smoothed=(false)
    fantea9.anchor.setTo(.5,.5);

    arciere = game.add.sprite(16000, 950, 'arciere'); //blocco1
    arciere.animations.add('idle', [0]);
    arciere.animations.add('attack', [8,9,0,0,0,0,0,0,0,5,6,7]);
    arciere.animations.play('idle', 8, true);
    arciere.scale.setTo(3.5);
    arciere.smoothed=(false)
    arciere.anchor.setTo(.4,.5);
    arcoen = game.add.weapon(10, 'bullet')
    arcoen.trackSprite(arciere, 12, -20)
    arcoen.bulletGravity.y = 100;
    arcoen.bulletSpeed = 500;
    arcoen.fireRate=(3000);
    arcoen.bullets.forEach((b)﻿ => {
        b.scale.setTo(0.2, 0.2);﻿﻿﻿
        b.body.updateBounds();
    }, this);

    arciere1 = game.add.sprite(21000, 950, 'arciere'); //blocco1
    arciere1.animations.add('idle', [0]);
    arciere1.animations.add('attack', [8,9,0,0,0,0,0,0,0,5,6,7]);
    arciere1.animations.play('idle', 8, true);
    arciere1.scale.setTo(3.5);
    arciere1.smoothed=(false)
    arciere1.anchor.setTo(.4,.5);
    arcoen1 = game.add.weapon(10, 'bullet')
    arcoen1.trackSprite(arciere1, 12, -20)
    arcoen1.bulletGravity.y = 100;
    arcoen1.bulletSpeed = 500;
    arcoen1.fireRate=(3000);
    arcoen1.bullets.forEach((b)﻿ => {
        b.scale.setTo(0.2, 0.2);﻿﻿﻿
        b.body.updateBounds();
    }, this);


    arciere2 = game.add.sprite(29000, 950, 'arciere'); //blocco1
    arciere2.animations.add('idle', [0]);
    arciere2.animations.add('attack', [8,9,0,0,0,0,0,0,0,5,6,7]);
    arciere2.animations.play('idle', 8, true);
    arciere2.scale.setTo(3.5);
    arciere2.smoothed=(false)
    arciere2.anchor.setTo(.4,.5);
    arcoen2 = game.add.weapon(10, 'bullet')
    arcoen2.trackSprite(arciere2, 12, -20)
    arcoen2.bulletGravity.y = 100;
    arcoen2.bulletSpeed = 500;
    arcoen2.fireRate=(3000);
    arcoen2.bullets.forEach((b)﻿ => {
        b.scale.setTo(0.2, 0.2);﻿﻿﻿
        b.body.updateBounds();
    }, this);



    arciere3 = game.add.sprite(33400, 950, 'arciere'); //blocco1
    arciere3.animations.add('idle', [0]);
    arciere3.animations.add('attack', [8,9,0,0,0,0,0,0,0,5,6,7]);
    arciere3.animations.play('idle', 8, true);
    arciere3.scale.setTo(3.5);
    arciere3.smoothed=(false)
    arciere3.anchor.setTo(.4,.5);
    arcoen3 = game.add.weapon(10, 'bullet')
    arcoen3.trackSprite(arciere3, 12, -20)
    arcoen3.bulletGravity.y = 100;
    arcoen3.bulletSpeed = 500;
    arcoen3.fireRate=(3000);
    arcoen3.bullets.forEach((b)﻿ => {
        b.scale.setTo(0.2, 0.2);﻿﻿﻿
        b.body.updateBounds();
    }, this);



    arciere4 = game.add.sprite(38000, 950, 'arciere'); //blocco1
    arciere4.animations.add('idle', [0]);
    arciere4.animations.add('attack', [8,9,0,0,0,0,0,0,0,5,6,7]);
    arciere4.animations.play('idle', 8, true);
    arciere4.scale.setTo(3.5);
    arciere4.smoothed=(false)
    arciere4.anchor.setTo(.4,.5);
    arcoen4 = game.add.weapon(10, 'bullet')
    arcoen4.trackSprite(arciere4, 12, -20)
    arcoen4.bulletGravity.y = 100;
    arcoen4.bulletSpeed = 500;
    arcoen4.fireRate=(3000);
    arcoen4.bullets.forEach((b)﻿ => {
        b.scale.setTo(0.2, 0.2);﻿﻿﻿
        b.body.updateBounds();
    }, this);


    enemy = game.add.sprite(37000, 892, 'enemy');

    enemy.animations.add('walk', [5, 6, 7, 8]);
    enemy.animations.add('attack', [0, 1, 2, 3, 4]);

    enemy.animations.play('walk', 3, true);
    enemy.scale.setTo(3.7);
    enemy.anchor.setTo(.8,.5);
    enemy.smoothed=(false)

    enemyhitbox = game.add.sprite(30, -80, 'hitbox');
    enemyhitbox.scale.x=(20)
    enemyhitbox.scale.y=(17);
    enemyhitbox.alpha=0;




    enemy2 = game.add.sprite(32000, 892, 'enemy');

    enemy2.animations.add('walk', [5, 6, 7, 8]);
    enemy2.animations.add('attack', [0, 1, 2, 3, 4]);

    enemy2.animations.play('walk', 3, true);
    enemy2.scale.setTo(3.7);
    enemy2.anchor.setTo(.8,.5);
    enemy2.smoothed=(false)

    enemy2hitbox = game.add.sprite(30, -80, 'hitbox');
    enemy2hitbox.scale.x=(20)
    enemy2hitbox.scale.y=(17);
    enemy2hitbox.alpha=0;





    enemy3 = game.add.sprite(19300, 892, 'enemy');

    enemy3.animations.add('walk', [5, 6, 7, 8]);
    enemy3.animations.add('attack', [0, 1, 2, 3, 4]);

    enemy3.animations.play('walk', 3, true);
    enemy3.scale.setTo(3.7);
    enemy3.anchor.setTo(.8,.5);
    enemy3.smoothed=(false)

    enemy3hitbox = game.add.sprite(30, -80, 'hitbox');
    enemy3hitbox.scale.x=(20)
    enemy3hitbox.scale.y=(17);
    enemy3hitbox.alpha=0;

    casa2 = game.add.sprite(5000, 240, 'casa2');
    casa2.scale.setTo(2.8);
    casa2.smoothed = false;

    bosco31 = game.add.sprite(7000, 0, 'bosco31');
    bosco31.scale.setTo(3.5);
    bosco31.smoothed = false;



    //fisica
    game.physics.arcade.enable(player);
    //game.physics.arcade.enable(firstaid);

    game.physics.arcade.enable(hitbox);
    game.physics.arcade.enable(hitboxplayer);


    game.physics.arcade.enable(enemyhitbox);
    game.physics.arcade.enable(enemy);
    enemy.body.collideWorldBounds = true;
    enemy.body.gravity.y = 1900;


    game.physics.arcade.enable(enemy2hitbox);
    game.physics.arcade.enable(enemy2);
    enemy2.body.collideWorldBounds = true;
    enemy2.body.gravity.y = 1900;

    game.physics.arcade.enable(enemy3hitbox);
    game.physics.arcade.enable(enemy3);
    enemy3.body.collideWorldBounds = true;
    enemy3.body.gravity.y = 1900;

    console.log(player)
    //player.body.checkCollision.up = false;
    player.body.collideWorldBounds = false;
    //firstaid.body.collideWorldBounds = true;
    player.body.gravity.y = 1900;
    //firstaid.body.gravity.y = 1900;

    game.physics.arcade.enable(fante); //blocco2
    fante.body.gravity.y = 1900;
    fante.body.velocity.x= 200;

    game.physics.arcade.enable(fante1); //blocco2
    fante1.body.gravity.y = 1900;
    fante1.body.velocity.x= 200;

    game.physics.arcade.enable(fante2); //blocco2
    fante2.body.gravity.y = 1900;
    fante2.body.velocity.x= 200;

    game.physics.arcade.enable(fante3); //blocco2
    fante3.body.gravity.y = 1900;
    fante3.body.velocity.x= 200;

    game.physics.arcade.enable(fante4); //blocco2
    fante4.body.gravity.y = 1900;
    fante4.body.velocity.x= 200;

    game.physics.arcade.enable(fante5); //blocco2
    fante5.body.gravity.y = 1900;
    fante5.body.velocity.x= 200;

    game.physics.arcade.enable(fante6); //blocco2
    fante6.body.gravity.y = 1900;
    fante6.body.velocity.x= 200;

    game.physics.arcade.enable(fante7); //blocco2
    fante7.body.gravity.y = 1900;
    fante7.body.velocity.x= 200;

    game.physics.arcade.enable(fante8); //blocco2
    fante8.body.gravity.y = 1900;
    fante8.body.velocity.x= 200;

    game.physics.arcade.enable(fante9); //blocco2
    fante9.body.gravity.y = 1900;
    fante9.body.velocity.x= 200;

    game.physics.arcade.enable(fante10); //blocco2
    fante10.body.gravity.y = 1900;
    fante10.body.velocity.x= 200;

    game.physics.arcade.enable(fantea); //blocco2
    fantea.body.gravity.y = 1900;
    //fantea.body.velocity.x= 200;

    game.physics.arcade.enable(fantea1); //blocco2
    fantea1.body.gravity.y = 1900;
    //fantea.body.velocity.x= 200;

    game.physics.arcade.enable(fantea2); //blocco2
    fantea2.body.gravity.y = 1900;
    //fantea.body.velocity.x= 200;

    game.physics.arcade.enable(fantea3); //blocco2
    fantea3.body.gravity.y = 1900;
    //fantea.body.velocity.x= 200;

    game.physics.arcade.enable(fantea4); //blocco2
    fantea4.body.gravity.y = 1900;
    //fantea.body.velocity.x= 200;

    game.physics.arcade.enable(fantea5); //blocco2
    fantea5.body.gravity.y = 1900;
    //fantea.body.velocity.x= 200;

    game.physics.arcade.enable(fantea6); //blocco2
    fantea6.body.gravity.y = 1900;
    //fantea.body.velocity.x= 200;

    game.physics.arcade.enable(fantea7); //blocco2
    fantea7.body.gravity.y = 1900;
    //fantea.body.velocity.x= 200;

    game.physics.arcade.enable(fantea8); //blocco2
    fantea8.body.gravity.y = 1900;
    //fantea.body.velocity.x= 200;

    game.physics.arcade.enable(fantea9); //blocco2
    fantea9.body.gravity.y = 1900;
    //fantea.body.velocity.x= 200;

    game.physics.arcade.enable(arciere); //blocco2
    arciere.body.gravity.y = 1900;
    //arciere.body.velocity.x= 200;

    game.physics.arcade.enable(arciere1); //blocco2
    arciere1.body.gravity.y = 1900;
    //arciere.body.velocity.x= 200;

    game.physics.arcade.enable(arciere2); //blocco2
    arciere2.body.gravity.y = 1900;
    //arciere.body.velocity.x= 200;

    game.physics.arcade.enable(arciere3); //blocco2
    arciere3.body.gravity.y = 1900;
    //arciere.body.velocity.x= 200;

    game.physics.arcade.enable(arciere4); //blocco2
    arciere4.body.gravity.y = 1900;
    //arciere.body.velocity.x= 200;

    game.physics.arcade.enable(caio); //blocco2
    caio.body.gravity.y = 1900;
    caio.body.setSize(10, 50, 0 ,+31)
    //arciere.body.velocity.x= 200;





    player.body.setSize(50, 60, 0 ,3)



    player.body.bounce.set(0.1);
    //bullets.body.bounce.set(0.52);


    //weapon
    weapon=game.add.weapon(10, 'bullet');
    weapon.trackSprite(player, 0, -15);
    weapon.fireRate=(400);
    weapon.bulletGravity.y=(300);
    weapon.bulletSpeed=(1500);

    weapon.bullets.forEach((b)﻿ => {
        b.scale.setTo(0.2, 0.2);﻿﻿﻿
        b.body.updateBounds();
    }, this);

    longplatforms = game.add.physicsGroup();
    longplatforms.create(0+1750, 1267-120, 'platformlong');
    longplatforms.create(0+2450, 1267-40, 'platformlong');
    longplatforms.create(10400, 1300-120, 'platformlong');
    longplatforms.create(11700, 1300-120, 'platformlong');
    longplatforms.create(13000, 1300-120, 'platformlong');
    longplatforms.create(14300, 1300-120, 'platformlong');
    longplatforms.create(15600, 1300-120, 'platformlong');
    longplatforms.create(16900, 1300-120, 'platformlong');
    longplatforms.create(17000, 1300-100, 'platformlong');
    longplatforms.create(17100, 1300-80, 'platformlong');
    longplatforms.create(18000, 1300-60, 'platformlong');
    longplatforms.create(19300, 1300-60, 'platformlong');
    longplatforms.create(20150, 1300-60, 'platformlong');
    longplatforms.create(26300, 1300-95, 'platformlong');
    longplatforms.create(27600, 1300-95, 'platformlong');
    longplatforms.create(28900, 1300-95, 'platformlong');
    longplatforms.create(30200, 1300-95, 'platformlong');
    longplatforms.create(31500, 1300-95, 'platformlong');
    longplatforms.create(32800, 1300-95, 'platformlong');
    longplatforms.create(34100, 1300-95, 'platformlong');
    longplatforms.create(35400, 1300-95, 'platformlong');
    longplatforms.create(36700, 1300-95, 'platformlong');
    longplatforms.create(38000, 1300-95, 'platformlong');
    longplatforms.create(39300, 1300-95, 'platformlong');
    longplatforms.create(39940, 1300-155, 'platformlong');
    longplatforms.create(40040, 1300-210, 'platformlong');
    longplatforms.create(40140, 1300-270, 'platformlong');
    longplatforms.setAll('body.immovable', true);
    longplatforms.setAll('scale.x', 4.6);
    longplatforms.alpha=0

    smallplatforms = game.add.physicsGroup();
    smallplatforms.create(21970, 1060, 'smallplatform');
    smallplatforms.create(24200, 1060, 'smallplatform');
    smallplatforms.create(24790, 1110, 'smallplatform');
    smallplatforms.setAll('body.immovable', true);
    smallplatforms.setAll('body.checkCollision.down', false);
    smallplatforms.setAll('body.checkCollision.left', false);
    smallplatforms.setAll('body.checkCollision.right', false);
    smallplatforms.setAll('scale.x', 1.5);
    smallplatforms.alpha=0


    //platforms
    platforms = game.add.physicsGroup();

    //platforms.create(0+1750, 1267-120, 'platform');
    //platforms.create(400+1750, 1267-120, 'platform');
    //platforms.create(650+1750, 1267-120, 'platform');
    //platforms.create(1050+1750, 1267-120, 'platform');

    //platforms.create(1450+1750, 1267-40, 'platform');
    //platforms.create(1450+1950, 1267-40, 'platform');

    platforms.create(2050+2100, 920, 'platform');

    platforms.create(2780+1890, 600, 'platform');

    platforms.create(3450+1800, 1020, 'platform');

    platforms.create(4100+1750, 1210, 'platform');
    platforms.create(4180+1750, 680, 'platform');
    platforms.create(4700+1750, 1000, 'platform');
    platforms.create(5220+1750, 720, 'platform');
    platforms.create(5900+1750, 970, 'platform');
    platforms.create(6420+1750, 640, 'platform');
    platforms.create(7070+1750, 1030, 'platform');
    platforms.create(7630+1750, 680, 'platform');
    platforms.create(7570+1750, 1220, 'platform');
    platforms.create(8090+1750, 1000, 'platform');
    platforms.create(11400, 900, 'platform');
    platforms.create(22680, 1150, 'platform');
    platforms.create(23440, 815, 'platform');
    platforms.create(23600, 815, 'platform');
    platforms.create(25400, 1150, 'platform');

    platforms.create(12600, 850, 'platform');
    platforms.create(13000, 850, 'platform');
    platforms.create(13400, 850, 'platform');
    platforms.create(15400, 850, 'platform');
    platforms.create(15650, 850, 'platform');
    platforms.create(16390, 820, 'platform');
    platforms.create(34440, 850, 'platform');
    platforms.create(35140, 515, 'platform');
    platforms.create(35780, 850, 'platform');
    platforms.create(37220, 850, 'platform');
    platforms.create(38090, 860, 'platform');

    platforms.setAll('body.checkCollision.down', false);
    platforms.setAll('body.checkCollision.left', false);
    platforms.setAll('body.checkCollision.right', false);
    platforms.setAll('body.immovable', true);
    platforms.alpha=0

    console.log(platforms)

    barriera = game.add.sprite(1050+1700, 600, 'hitbox');
    barriera.scale.y = 30;
    barriera.scale.x = 10;
    game.physics.arcade.enable(barriera);
    barriera.body.immovable=true

    barriera2 = game.add.sprite(41360, 600, 'hitbox');
    barriera2.scale.y = 30;
    barriera2.scale.x = 10;
    game.physics.arcade.enable(barriera2);
    barriera2.body.immovable=true
    barriera2.alpha=0

    barriera3 = game.add.sprite(1600, 800, 'hitbox');
    barriera3.scale.y = 30;
    barriera3.scale.x = 10;
    game.physics.arcade.enable(barriera3);
    barriera3.body.immovable=true
    barriera3.alpha=0


    locanda3 = game.add.sprite(0, 0, 'locanda3');
    locanda3.scale.setTo(3.5);
    locanda3.smoothed = false;

    fine0 = game.add.sprite(7000, 0, 'fine0');
    fine0.scale.setTo(3.5);
    fine0.smoothed = false;

    arco = game.add.sprite(5987, 1040, 'bow');
    arco.smoothed = false;
    arco.scale.setTo(1.7);
    arco.alpha=0;
    game.physics.arcade.enable(arco);
    arco.body.checkCollision.up= false;
    arco.body.checkCollision.left= false;
    arco.body.checkCollision.right= false;


    scudo = game.add.sprite(14701, 1040, 'shield');
    scudo.smoothed = false;
    scudo.scale.setTo(1.7);
    scudo.alpha=0;
    game.physics.arcade.enable(scudo);
    scudo.body.checkCollision.up= false;
    scudo.body.checkCollision.left= false;
    scudo.body.checkCollision.right= false;



    //triggersword=game.add.sprite(1300,1100,'sword')
    //triggerbow=game.add.sprite(2400,1160,'bow')
    //triggerbow.scale.setTo(0.15)
    //triggersword.scale.setTo(0.15)

    filtro2 = game.add.sprite(0, 0, 'filtro2');
    filtro2.fixedToCamera = true;
    filtro2.scale.setTo(100);

    filtro = game.add.sprite(0, 0, 'filtro');
    filtro.fixedToCamera = true;
    filtro.scale.setTo(100);

    hudbg = game.add.sprite(0, 0, 'hitbox');
    hudbg.fixedToCamera = true;
    hudbg.scale.y = 7;
    hudbg.scale.x = 110;
    hudbg.tint=0x000000

    hudbg1 = game.add.sprite(0, 765, 'hitbox');
    hudbg1.fixedToCamera = true;
    hudbg1.scale.y = 7;
    hudbg1.scale.x = 110;
    hudbg1.tint=0x000000

    //life
    life1 = game.add.sprite(20, 15, 'heart1');
    life1.fixedToCamera = true;
    life1.smoothed = false;
    life1.scale.setTo(3);

    life2 = game.add.sprite(70, 15, 'heart1');
    life2.fixedToCamera = true;
    life2.smoothed = false;
    life2.scale.setTo(3);

    life3 = game.add.sprite(120, 15, 'heart1');
    life3.fixedToCamera = true;
    life3.smoothed = false;
    life3.scale.setTo(3);

    life4 = game.add.sprite(170, 15, 'heart1');
    life4.fixedToCamera = true;
    life4.smoothed = false;
    life4.scale.setTo(3);

    hud = game.add.sprite(775+50, 11, 'hud');
    hud.fixedToCamera = true;
    hud.smoothed = false;
    hud.scale.setTo(1);

    hudselector1 = game.add.sprite(756+15+50, 7, 'hudselector');
    hudselector1.smoothed = false;
    hudselector1.scale.setTo(4);
    hudselector1.fixedToCamera = true;

    hudselector2 = game.add.sprite(816+15+50, 7, 'hudselector');
    hudselector2.smoothed = false;
    hudselector2.scale.setTo(4);
    hudselector2.fixedToCamera = true;

    hudselector3 = game.add.sprite(876+15+50, 7, 'hudselector');
    hudselector3.smoothed = false;
    hudselector3.scale.setTo(4);
    hudselector3.fixedToCamera = true;

    hudselector4 = game.add.sprite(936+15+50, 7, 'hudselector');
    hudselector4.smoothed = false;
    hudselector4.scale.setTo(4);
    hudselector4.fixedToCamera = true;

    sword = game.add.sprite(765+50, -13, 'sword');
    sword.fixedToCamera = true;
    sword.smoothed = false;
    sword.scale.setTo(0.08);

    bow = game.add.sprite(840+50, 15, 'bow');
    bow.fixedToCamera = true;
    bow.smoothed = false;
    bow.scale.setTo(0);

    shield = game.add.sprite(900+50, 15, 'shield');
    shield.fixedToCamera = true;
    shield.smoothed = false;
    shield.scale.setTo(0);

    text1 = game.add.sprite(2000, 680, 'text1');
    text1.alpha=1;
    text1.scale.setTo(0.3);

    label2 = game.add.text(230, 20, player.x, {fill: "white"})
    label2.fixedToCamera = true;

    end1 = game.add.sprite(0, 0, 'end1');
    end1.alpha=0;
    end1.fixedToCamera = true;

    end1d = game.add.sprite(0, 0, 'end1d');
    end1d.alpha=0;
    end1d.fixedToCamera = true;

    end2 = game.add.sprite(0, 0, 'end2');
    end2.alpha=0;
    end2.fixedToCamera = true;

    end2d = game.add.sprite(0, 0, 'end2d');
    end2d.alpha=0;
    end2d.fixedToCamera = true;

    goodend = game.add.sprite(0, 0, 'goodend');
    goodend.alpha=0;
    goodend.fixedToCamera = true;

    credits = game.add.sprite(0, 0, 'credits');
    credits.alpha=0;
    credits.fixedToCamera = true;





    label = game.add.text(90, 40, ricaricaspada, {fill: "white"})
    //label.fixedToCamera = true;


    //label3 = game.add.text(90, 80, ricaricaspada, {fill: "white"})
    //label3.fixedToCamera = true;
    //label4 = game.add.text(90, 120, ricaricaspada, {fill: "white"})
    //label4.fixedToCamera = true;


    //tasti
    cursors = game.input.keyboard.createCursorKeys();
    skipButton = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    skipButton.onDown.add(skip);
    leftbutton = game.input.keyboard.addKey(Phaser.Keyboard.A);
    rightbutton = game.input.keyboard.addKey(Phaser.Keyboard.D);
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    //jumpButton.onDown.add(jump);
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.F);
    sprintButton = game.input.keyboard.addKey(Phaser.Keyboard.SHIFT);
    //attackButton = game.input.keyboard.addKey(Phaser.Keyboard.G);
    oneButton = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    twoButton = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
    shieldButton = game.input.keyboard.addKey(Phaser.Keyboard.E);
    shieldButton.onDown.add(mem);
    fourButton = game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
    zoomButton = game.input.keyboard.addKey(Phaser.Keyboard.Z);
    zoomButton.onDown.add(zoom);


    game.camera.follow(player, 0.7, 0.2, 0.2);
    //playerup.x.follow(player.x)
    //playerup.startFollow(player);
}
var memarma=1;

function mem(){
  if(flagshield==1){
  memarma=arma;}
}

var zoomflag=0;

function zoom(){
if(zoomflag==0){
zoomflag=1;}else{zoomflag=0;}
}
var vite=3;

function skip(){
  if((storia<2) && player.x<2970){
  storia++;}
  if(storia == 7 && player.x>5756 && player.x<6330){
  storia++;}
  if(storia == 10 && player.x>14500 && player.x<14600){
  storia++;}
  if((storia == 13 || storia == 14 || storia == 15) && player.x>27000 && player.x<28000){
  storia++;}
  if((storia == 17 || storia == 18 || storia == 19) && player.x>40500 && player.x<40700){
  storia++;}

  if(endscreen==1){
    endscreen=0;
    health=4;
    died=0;
    if(vite>=0){
      end1.alpha=0;
      end2.alpha=0;
      if(storia>17){player.x=40600; player.y=500}
      else if(storia>13){player.x=27650; player.y=900}
      else if(storia>10){player.x=14562; player.y=800}
      else if(storia>7){player.x=5935; player.y=800}
      else if(storia<=7){player.x=2000; player.y=600}}
      if(vittoria==1){
        credits.alpha=1
      }
    }



}







var invincible=false;
var health=4;
var cooldown=80;

var cooldowncaio=60;
var player_direction=1;
var direz=1;
var inerzia=0;

var cooldownenemy=60;
var enemy_direction=1;
var enemylife=3;
var enemy2life=3;
var enemy3life=3;
var enemyattack=0;

var cooldownenemy2=60;
var enemy2_direction=1;
var enemy2life=3;
var enemy2attack=0;

var cooldownenemy3=60;
var enemy3_direction=1;
var enemy3life=3;
var enemy3attack=0;

var attacking=0;
var ricarica=60;
var ricaricaspada=30;
var arma=2;
var flipbox=0;
var hudselector=0;
var flagbow=0;
var flagsword=1;
var flagshield = 0;
var swordtrigger;
var bowtrigger;
var selector=0;
var spadagiu=0;
var spadagiutimer=100;
var spadagiutimer2=100;
var spadagiutimer3=100;
var storia=0;
var immovable=0;
var postext1=2100;
var offsetx=0;
var offsety=0;
var scudosu=0;
var jump=0;
var maxjump=50
var endscreen=0;
var vitacaio=4;
var vittoria=0;
var wintimer=80;
var dietimer=80;
var died=0;






function update () {

  if(vittoria==1){
    if(wintimer>0){
    wintimer--;}
    else{vinto();}
  }

  if(died==1){
    if(dietimer>0){
    dietimer--;
    if(dietimer>78){player.body.velocity.y=-1200;}
    player.tint = 0xff0000
    playerup.tint = 0xff0000
    player.body.gravity.y= 2600;
    player.body.checkCollision.none= true;}
    else{perso();}
  }
  if(died==0){
    if(dietimer<1){
    dietimer=80;}
    player.tint = 0xffffff
    playerup.tint = 0xffffff
    player.body.gravity.y= 1900;
    player.body.checkCollision.none= false;}


if(player.x>3000 && storia<=5){
  storia=6
}

if (zoomflag==1){game.camera.x=game.camera.x+10+offsetx;game.camera.y=game.camera.y+2-offsety}

if (storia==1){
  text1.loadTexture('text2');
}
if (storia==2){
  text1.loadTexture('text3');
}
if (storia==3){
  text1.loadTexture('text4');
}
if (storia==4){
  text1.loadTexture('text5');
}
if (storia==5){
  arma=0;
  text1.loadTexture('text6');
}
if (storia==6){
  text1.loadTexture('text7');
}
if (storia==7){
  postext1=6120;
  text1.y=800;
  text1.loadTexture('text8');
  chest.loadTexture('chesto');

}
if (storia==8){
  arco.alpha=0;
  text1.loadTexture('text9');
  bow.scale.setTo(0.85);

}
if (storia==9){
  text1.y=1800;
  immovable=0;
  zoomflag=0;
}

if (storia==10){
  text1.loadTexture('text10');
  postext1=15200;
  text1.y=700;
  chest2.loadTexture('chesto');
  //immovable=1;
}

if (storia==11){
  text1.loadTexture('text11');
  shield.scale.setTo(0.85);
  scudo.alpha=0;
  //immovable=1;
}
if (storia==12){
  text1.y=1800;
  immovable=0;
  zoomflag=0;
}

if (storia==13){
  text1.y=650;
  postext1=28960;
  text1.loadTexture('text12');

}
if (storia==14){
  text1.loadTexture('text13');
}
if (storia==15){
  text1.loadTexture('text14');
  excalibur.alpha=0;

}
if (storia==16){
  text1.y=1800;
  immovable=0;
  zoomflag=0;
}
if (storia==17){
  zoomflag=1;
  //offsetx=130
  postext1=42750;
  text1.y=600;
  text1.loadTexture('text15');
}
if (storia==18){
  //offsetx=0;
  text1.loadTexture('text16');
}
if (storia==19){
  text1.loadTexture('text17');
}
if (storia==20){
  text1.y=1800;
  immovable=0;
  zoomflag=0;
}




if(storia==20){
  if((Math.abs(player.x-caio.x))<180){
    caio.animations.play('attack',8,true);
    caio.body.velocity.x=0
  }else{caio.animations.play('run',8,true)}

  if(caio.x> player.x+200){
    caio.body.velocity.x= 200*-1; //blocco3
    caio.scale.x = 3.5;
  }
  if(caio.x< player.x-200){
    caio.body.velocity.x= 200*1;
    caio.scale.x = -3.5;
  }}
  else{
    caio.body.velocity.x= 0;
    caio.animations.play('idle',8,true)
  }





  if(fante.x > 6300){
    fante.body.velocity.x= 200*-1; //blocco3
    fante.scale.x = -3.5;}
    if(fante.x <6050){
    fante.body.velocity.x= 200*1;
    fante.scale.x = 3.5;}

    if(fante1.x > 7300){
      fante1.body.velocity.x= 200*-1; //blocco3
      fante1.scale.x = -3.5;}
      if(fante1.x <7050){
      fante1.body.velocity.x= 200*1;
      fante1.scale.x = 3.5;}

      if(fante2.x > 8450){
        fante2.body.velocity.x= 200*-1; //blocco3
        fante2.scale.x = -3.5;}
        if(fante2.x <8200){
        fante2.body.velocity.x= 200*1;
        fante2.scale.x = 3.5;}

        if(fante3.x > 9100){
          fante3.body.velocity.x= 200*-1; //blocco3
          fante3.scale.x = -3.5;}
          if(fante3.x <8800){
          fante3.body.velocity.x= 200*1;
          fante3.scale.x = 3.5;}

          if(fante4.x > 9700){
            fante4.body.velocity.x= 200*-1; //blocco3
            fante4.scale.x = -3.5;}
            if(fante4.x <9450){
            fante4.body.velocity.x= 200*1;
            fante4.scale.x = 3.5;}

            if(fante5.x > 11700){
              fante5.body.velocity.x= 200*-1; //blocco3
              fante5.scale.x = -3.5;}
              if(fante5.x <11500){
              fante5.body.velocity.x= 200*1;
              fante5.scale.x = 3.5;}

              if(fante6.x > 13700){
                fante6.body.velocity.x= 200*-1; //blocco3
                fante6.scale.x = -3.5;}
                if(fante6.x <13300){
                fante6.body.velocity.x= 200*1;
                fante6.scale.x = 3.5;}

                if(fante7.x > 5000){
                  fante7.body.velocity.x= 200*-1; //blocco3
                  fante7.scale.x = -3.5;}
                  if(fante7.x <4730){
                  fante7.body.velocity.x= 200*1;
                  fante7.scale.x = 3.5;}

                  if(fante8.x > 23900){
                    fante8.body.velocity.x= 200*-1; //blocco3
                    fante8.scale.x = -3.5;}
                    if(fante8.x <23600){
                    fante8.body.velocity.x= 200*1;
                    fante8.scale.x = 3.5;}

                    if(fante9.x > 35500){
                      fante9.body.velocity.x= 200*-1; //blocco3
                      fante9.scale.x = -3.5;}
                      if(fante9.x <35200){
                      fante9.body.velocity.x= 200*1;
                      fante9.scale.x = 3.5;}

                      if(fante10.x > 36100){
                        fante10.body.velocity.x= 200*-1; //blocco3
                        fante10.scale.x = -3.5;}
                        if(fante10.x <35800){
                        fante10.body.velocity.x= 200*1;
                        fante10.scale.x = 3.5;}



                if((Math.abs(player.x-arciere.x))<500){
                if((arciere.x-player.x) > 0){
                  arcoen.fireAngle = 180
                  arcoen.fire()
                  arciere.animations.play('attack', 4, true);
                  arciere.scale.x = -3.5;}
                  if((arciere.x-player.x) < 0){
                    arcoen.fireAngle = 0
                    arciere.animations.play('attack', 8, true);
                    arcoen.fire()
                    arciere.scale.x = 3.5;}
                  }
                  else{arciere.animations.play('idle', 4, true);}


                  if((Math.abs(player.x-arciere1.x))<500){
                  if((arciere1.x-player.x) > 0){
                    arcoen1.fireAngle = 180
                    arcoen1.fire()
                    arciere1.animations.play('attack', 4, true);
                    arciere1.scale.x = -3.5;}
                    if((arciere1.x-player.x) < 0){
                      arcoen1.fireAngle = 0
                      arciere1.animations.play('attack', 8, true);
                      arcoen1.fire()
                      arciere1.scale.x = 3.5;}
                    }
                    else{arciere1.animations.play('idle', 4, true);}


                    if((Math.abs(player.x-arciere2.x))<500){
                    if((arciere2.x-player.x) > 0){
                      arcoen2.fireAngle = 180
                      arcoen2.fire()
                      arciere2.animations.play('attack', 4, true);
                      arciere2.scale.x = -3.5;}
                      if((arciere2.x-player.x) < 0){
                        arcoen2.fireAngle = 0
                        arciere2.animations.play('attack', 8, true);
                        arcoen2.fire()
                        arciere2.scale.x = 3.5;}
                      }
                      else{arciere2.animations.play('idle', 4, true);}




                      if((Math.abs(player.x-arciere3.x))<500){
                      if((arciere3.x-player.x) > 0){
                        arcoen3.fireAngle = 180
                        arcoen3.fire()
                        arciere3.animations.play('attack', 4, true);
                        arciere3.scale.x = -3.5;}
                        if((arciere3.x-player.x) < 0){
                          arcoen3.fireAngle = 0
                          arciere3.animations.play('attack', 8, true);
                          arcoen3.fire()
                          arciere3.scale.x = 3.5;}
                        }
                        else{arciere3.animations.play('idle', 4, true);}


                        if((Math.abs(player.x-arciere4.x))<500){
                        if((arciere4.x-player.x) > 0){
                          arcoen4.fireAngle = 180
                          arcoen4.fire()
                          arciere4.animations.play('attack', 4, true);
                          arciere4.scale.x = -3.5;}
                          if((arciere4.x-player.x) < 0){
                            arcoen4.fireAngle = 0
                            arciere4.animations.play('attack', 8, true);
                            arcoen4.fire()
                            arciere4.scale.x = 3.5;}
                          }
                          else{arciere4.animations.play('idle', 4, true);}



                  if((Math.abs(player.x-fantea.x))>500){
                  if(fantea.x > 16000){
                    fantea.body.velocity.x= 200*-1; //blocco3
                    fantea.scale.x = -3.5;}
                    if(fantea.x <14050){
                    fantea.body.velocity.x= 200*1;
                    fantea.scale.x = 3.5;}
                  }
                    else{
                      if((Math.abs(player.x-fantea.x))<150){
                        fantea.animations.play('attack',8,true);
                        fantea.body.velocity.x=0
                      }else{fantea.animations.play('run',8,true)}

                      if(fantea.x> player.x+15){
                        fantea.body.velocity.x= 200*-1; //blocco3
                        fantea.scale.x = -3.5;
                      }
                      if(fantea.x< player.x-15){
                        fantea.body.velocity.x= 200*1;
                        fantea.scale.x = 3.5;
                      }}


                      if((Math.abs(player.x-fantea1.x))>500){
                      if(fantea1.x > 19000){
                        fantea1.body.velocity.x= 200*-1; //blocco3
                        fantea1.scale.x = -3.5;}
                        if(fantea1.x <16550){
                        fantea1.body.velocity.x= 200*1;
                        fantea1.scale.x = 3.5;}
                      }
                        else{
                          if((Math.abs(player.x-fantea1.x))<150){
                            fantea1.animations.play('attack',8,true);
                            fantea1.body.velocity.x=0
                          }else{fantea1.animations.play('run',8,true)}

                          if(fantea1.x> player.x+15){
                            fantea1.body.velocity.x= 200*-1; //blocco3
                            fantea1.scale.x = -3.5;
                          }
                          if(fantea1.x< player.x-15){
                            fantea1.body.velocity.x= 200*1;
                            fantea1.scale.x = 3.5;
                          }}



                          if((Math.abs(player.x-fantea2.x))>500){
                          if(fantea2.x > 21000){
                            fantea2.body.velocity.x= 200*-1; //blocco3
                            fantea2.scale.x = -3.5;}
                            if(fantea2.x <20550){
                            fantea2.body.velocity.x= 200*1;
                            fantea2.scale.x = 3.5;}
                          }
                            else{
                              if((Math.abs(player.x-fantea2.x))<150){
                                fantea2.animations.play('attack',8,true);
                                fantea2.body.velocity.x=0
                              }else{fantea2.animations.play('run',8,true)}

                              if(fantea2.x> player.x+15){
                                fantea2.body.velocity.x= 200*-1; //blocco3
                                fantea2.scale.x = -3.5;
                              }
                              if(fantea2.x< player.x-15){
                                fantea2.body.velocity.x= 200*1;
                                fantea2.scale.x = 3.5;
                              }}


                              if((Math.abs(player.x-fantea3.x))>500){
                              if(fantea3.x > 27200){
                                fantea3.body.velocity.x= 200*-1; //blocco3
                                fantea3.scale.x = -3.5;}
                                if(fantea3.x <26550){
                                fantea3.body.velocity.x= 200*1;
                                fantea3.scale.x = 3.5;}
                              }
                                else{
                                  if((Math.abs(player.x-fantea3.x))<150){
                                    fantea3.animations.play('attack',8,true);
                                    fantea3.body.velocity.x=0
                                  }else{fantea3.animations.play('run',8,true)}

                                  if(fantea3.x> player.x+15){
                                    fantea3.body.velocity.x= 200*-1; //blocco3
                                    fantea3.scale.x = -3.5;
                                  }
                                  if(fantea3.x< player.x-15){
                                    fantea3.body.velocity.x= 200*1;
                                    fantea3.scale.x = 3.5;
                                  }}



                                  if((Math.abs(player.x-fantea4.x))>500){
                                  if(fantea4.x > 13550){
                                    fantea4.body.velocity.x= 200*-1; //blocco3
                                    fantea4.scale.x = -3.5;}
                                    if(fantea4.x <11000){
                                    fantea4.body.velocity.x= 200*1;
                                    fantea4.scale.x = 3.5;}
                                  }
                                    else{
                                      if((Math.abs(player.x-fantea4.x))<150){
                                        fantea4.animations.play('attack',8,true);
                                        fantea4.body.velocity.x=0
                                      }else{fantea4.animations.play('run',8,true)}

                                      if(fantea4.x> player.x+15){
                                        fantea4.body.velocity.x= 200*-1; //blocco3
                                        fantea4.scale.x = -3.5;
                                      }
                                      if(fantea4.x< player.x-15){
                                        fantea4.body.velocity.x= 200*1;
                                        fantea4.scale.x = 3.5;
                                      }}





                                      if((Math.abs(player.x-fantea5.x))>500){
                                      if(fantea5.x > 30550){
                                        fantea5.body.velocity.x= 200*-1; //blocco3
                                        fantea5.scale.x = -3.5;}
                                        if(fantea5.x <29000){
                                        fantea5.body.velocity.x= 200*1;
                                        fantea5.scale.x = 3.5;}
                                      }
                                        else{
                                          if((Math.abs(player.x-fantea5.x))<150){
                                            fantea5.animations.play('attack',8,true);
                                            fantea5.body.velocity.x=0
                                          }else{fantea5.animations.play('run',8,true)}

                                          if(fantea5.x> player.x+15){
                                            fantea5.body.velocity.x= 200*-1; //blocco3
                                            fantea4.scale.x = -3.5;
                                          }
                                          if(fantea5.x< player.x-15){
                                            fantea5.body.velocity.x= 200*1;
                                            fantea5.scale.x = 3.5;
                                          }}



                                          if((Math.abs(player.x-fantea6.x))>500){
                                          if(fantea6.x > 32000){
                                            fantea6.body.velocity.x= 200*-1; //blocco3
                                            fantea6.scale.x = -3.5;}
                                            if(fantea6.x <31050){
                                            fantea6.body.velocity.x= 200*1;
                                            fantea6.scale.x = 3.5;}
                                          }
                                            else{
                                              if((Math.abs(player.x-fantea6.x))<150){
                                                fantea6.animations.play('attack',8,true);
                                                fantea6.body.velocity.x=0
                                              }else{fantea6.animations.play('run',8,true)}

                                              if(fantea6.x> player.x+15){
                                                fantea6.body.velocity.x= 200*-1; //blocco3
                                                fantea6.scale.x = -3.5;
                                              }
                                              if(fantea6.x< player.x-15){
                                                fantea6.body.velocity.x= 200*1;
                                                fantea6.scale.x = 3.5;
                                              }}


                                              if((Math.abs(player.x-fantea7.x))>500){
                                              if(fantea7.x > 36500){
                                                fantea7.body.velocity.x= 200*-1; //blocco3
                                                fantea7.scale.x = -3.5;}
                                                if(fantea7.x <35050){
                                                fantea7.body.velocity.x= 200*1;
                                                fantea7.scale.x = 3.5;}
                                              }
                                                else{
                                                  if((Math.abs(player.x-fantea7.x))<150){
                                                    fantea7.animations.play('attack',8,true);
                                                    fantea7.body.velocity.x=0
                                                  }else{fantea7.animations.play('run',8,true)}

                                                  if(fantea7.x> player.x+15){
                                                    fantea7.body.velocity.x= 200*-1; //blocco3
                                                    fantea7.scale.x = -3.5;
                                                  }
                                                  if(fantea7.x< player.x-15){
                                                    fantea7.body.velocity.x= 200*1;
                                                    fantea7.scale.x = 3.5;
                                                  }}


                                                  if((Math.abs(player.x-fantea8.x))>500){
                                                  if(fantea8.x > 37200){
                                                    fantea8.body.velocity.x= 200*-1; //blocco3
                                                    fantea8.scale.x = -3.5;}
                                                    if(fantea8.x <38050){
                                                    fantea8.body.velocity.x= 200*1;
                                                    fantea8.scale.x = 3.5;}
                                                  }
                                                    else{
                                                      if((Math.abs(player.x-fantea8.x))<150){
                                                        fantea8.animations.play('attack',8,true);
                                                        fantea8.body.velocity.x=0
                                                      }else{fantea8.animations.play('run',8,true)}

                                                      if(fantea8.x> player.x+15){
                                                        fantea8.body.velocity.x= 200*-1; //blocco3
                                                        fantea8.scale.x = -3.5;
                                                      }
                                                      if(fantea8.x< player.x-15){
                                                        fantea8.body.velocity.x= 200*1;
                                                        fantea8.scale.x = 3.5;
                                                      }}



                                                      if((Math.abs(player.x-fantea9.x))>500){
                                                      if(fantea9.x > 38050){
                                                        fantea9.body.velocity.x= 200*-1; //blocco3
                                                        fantea9.scale.x = -3.5;}
                                                        if(fantea9.x <39550){
                                                        fantea9.body.velocity.x= 200*1;
                                                        fantea9.scale.x = 3.5;}
                                                      }
                                                        else{
                                                          if((Math.abs(player.x-fantea9.x))<150){
                                                            fantea9.animations.play('attack',8,true);
                                                            fantea9.body.velocity.x=0
                                                          }else{fantea8.animations.play('run',8,true)}

                                                          if(fantea9.x> player.x+15){
                                                            fantea9.body.velocity.x= 200*-1; //blocco3
                                                            fantea9.scale.x = -3.5;
                                                          }
                                                          if(fantea9.x< player.x-15){
                                                            fantea9.body.velocity.x= 200*1;
                                                            fantea9.scale.x = 3.5;
                                                          }}



if (player.x>13000){
  game.stage.backgroundColor = '#9f5261';
}
else{
  game.stage.backgroundColor = '#88b5cd';}


if(game.camera.x<1000){
  filtro.alpha=(1-((game.camera.x)/1000))*0.2
filtro2.alpha=0}

if(game.camera.x>1000 &&game.camera.x<2000){
  filtro2.alpha=(((game.camera.x-1000)/1000)*0.2)}




  if((((Math.abs(player.body.x-enemy.body.x))<=300)&&enemy_direction==1)||(((Math.abs(player.body.x-enemy.body.x))<=30)&&enemy_direction==-1)){
    enemyattack=1
    enemy.animations.play('attack', 3, true);
    enemy.body.velocity.x=0*enemy_direction;
    spadagiutimer--
    if (spadagiutimer<=0){
      spadagiutimer=100;
    }
  }
  else{
    spadagiutimer=100;
    enemyattack=0
    enemy.animations.play('walk', 3, true);
    enemy.body.velocity.x=60*enemy_direction;
  }

  if(enemy_direction > 0)
  {enemy.scale.x = -3.7;}
  else
  {enemy.scale.x = +3.7;}

  if((Math.abs(player.body.x-enemy.body.x))<=500){
    if(enemy.x > player.x){
      enemy_direction = -1}

      else if(enemy.x < player.x){
      enemy_direction = 1}
    }
    else{
      enemy_direction=0;
    }

    if(enemy_direction==1){
      flipbox=-70;}
      else{
        flipbox=+300;
      }
    enemyhitbox.x=enemy.x-flipbox
    enemyhitbox.y=enemy.y+90











    if((((Math.abs(player.body.x-enemy2.body.x))<=300)&&enemy2_direction==1)||(((Math.abs(player.body.x-enemy2.body.x))<=30)&&enemy2_direction==-1)){
      enemy2attack=1
      enemy2.animations.play('attack', 3, true);
      enemy2.body.velocity.x=0*enemy_direction;
      spadagiutimer2--
      if (spadagiutimer2<=0){
        spadagiutimer2=100;
      }
    }
    else{
      spadagiutimer2=100;
      enemy2attack=0
      enemy2.animations.play('walk', 3, true);
      enemy2.body.velocity.x=60*enemy2_direction;
    }

    if(enemy2_direction > 0)
    {enemy2.scale.x = -3.7;}
    else
    {enemy2.scale.x = +3.7;}

    if((Math.abs(player.body.x-enemy2.body.x))<=500){
      if(enemy2.x > player.x){
        enemy2_direction = -1}

        else if(enemy2.x < player.x){
        enemy2_direction = 1}
      }
      else{
        enemy2_direction=0;
      }

      if(enemy2_direction==1){
        flipbox=-70;}
        else{
          flipbox=+300;
        }
      enemy2hitbox.x=enemy2.x-flipbox
      enemy2hitbox.y=enemy2.y+90








      if((((Math.abs(player.body.x-enemy3.body.x))<=300)&&enemy3_direction==1)||(((Math.abs(player.body.x-enemy3.body.x))<=30)&&enemy3_direction==-1)){
        enemy3attack=1
        enemy3.animations.play('attack', 3, true);
        enemy3.body.velocity.x=0*enemy_direction;
        spadagiutimer3--
        if (spadagiutimer3<=0){
          spadagiutimer3=100;
        }
      }
      else{
        spadagiutimer3=100;
        enemy3attack=0
        enemy3.animations.play('walk', 3, true);
        enemy3.body.velocity.x=60*enemy3_direction;
      }

      if(enemy3_direction > 0)
      {enemy3.scale.x = -3.7;}
      else
      {enemy3.scale.x = +3.7;}

      if((Math.abs(player.body.x-enemy3.body.x))<=500){
        if(enemy3.x > player.x){
          enemy3_direction = -1}

          else if(enemy3.x < player.x){
          enemy3_direction = 1}
        }
        else{
          enemy3_direction=0;
        }

        if(enemy3_direction==1){
          flipbox=-70;}
          else{
            flipbox=+300;
          }
        enemy3hitbox.x=enemy3.x-flipbox
        enemy3hitbox.y=enemy3.y+90


  if(selector==0){
    hudselector1.scale.setTo(4)
    hudselector2.scale.setTo(0)
    hudselector3.scale.setTo(0)
    hudselector4.scale.setTo(0)
  }
  if(selector==1){
    hudselector1.scale.setTo(0)
    hudselector2.scale.setTo(4)
    hudselector3.scale.setTo(0)
    hudselector4.scale.setTo(0)
  }
  if(selector==2){
    hudselector1.scale.setTo(0)
    hudselector2.scale.setTo(0)
    hudselector3.scale.setTo(4)
    hudselector4.scale.setTo(0)
  }
  if(selector==3){
    hudselector1.scale.setTo(0)
    hudselector2.scale.setTo(0)
    hudselector3.scale.setTo(0)
    hudselector4.scale.setTo(4)
  }


    label2.setText('x'+vite)
    //label3.setText(cooldownenemy)
    //label4.setText(player.y+108.5)
    if(direz==1){
      flipbox=30;}
      else{
        flipbox=+170;
      }

    if(scudosu==0){
    hitboxplayer.x=player.x-30
    hitboxplayer.y=player.y-90
    }
    else if(scudosu==1){
    hitboxplayer.x=(player.x+flipbox*2)-230;
    hitboxplayer.y=player.y-90
    }
    hitbox.x=player.x-flipbox;
    hitbox.y=player.y-90



    //collide
    game.physics.arcade.collide(caio, smallplatforms);
    game.physics.arcade.collide(caio, platforms);
    game.physics.arcade.collide(caio, longplatforms);
    game.physics.arcade.overlap(caio, hitboxplayer, touchcaio);
    game.physics.arcade.overlap(weapon.bullets, caio, hitcaiobullet);
    game.physics.arcade.overlap(caio, hitbox, hitcaio);  //blocco4

    game.physics.arcade.collide(fante, smallplatforms);
    game.physics.arcade.collide(fante, platforms);
    game.physics.arcade.collide(fante, longplatforms);
    game.physics.arcade.overlap(fante, hitboxplayer, touchfante);
    game.physics.arcade.overlap(weapon.bullets, fante, hitfantebullet);
    game.physics.arcade.overlap(fante, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fante1, smallplatforms);
    game.physics.arcade.collide(fante1, platforms);
    game.physics.arcade.collide(fante1, longplatforms);
    game.physics.arcade.overlap(fante1, hitboxplayer, touchfante);
    game.physics.arcade.overlap(weapon.bullets, fante1, hitfantebullet);
    game.physics.arcade.overlap(fante1, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fante2, smallplatforms);
    game.physics.arcade.collide(fante2, platforms);
    game.physics.arcade.collide(fante2, longplatforms);
    game.physics.arcade.overlap(fante2, hitboxplayer, touchfante);
    game.physics.arcade.overlap(weapon.bullets, fante2, hitfantebullet);
    game.physics.arcade.overlap(fante2, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fante3, smallplatforms);
    game.physics.arcade.collide(fante3, platforms);
    game.physics.arcade.collide(fante3, longplatforms);
    game.physics.arcade.overlap(fante3, hitboxplayer, touchfante);
    game.physics.arcade.overlap(weapon.bullets, fante3, hitfantebullet);
    game.physics.arcade.overlap(fante3, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fante4, smallplatforms);
    game.physics.arcade.collide(fante4, platforms);
    game.physics.arcade.collide(fante4, longplatforms);
    game.physics.arcade.overlap(fante4, hitboxplayer, touchfante);
    game.physics.arcade.overlap(weapon.bullets, fante4, hitfantebullet);
    game.physics.arcade.overlap(fante4, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fante5, smallplatforms);
    game.physics.arcade.collide(fante5, platforms);
    game.physics.arcade.collide(fante5, longplatforms);
    game.physics.arcade.overlap(fante5, hitboxplayer, touchfante);
    game.physics.arcade.overlap(weapon.bullets, fante5, hitfantebullet);
    game.physics.arcade.overlap(fante5, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fante6, smallplatforms);
    game.physics.arcade.collide(fante6, platforms);
    game.physics.arcade.collide(fante6, longplatforms);
    game.physics.arcade.overlap(fante6, hitboxplayer, touchfante);
    game.physics.arcade.overlap(weapon.bullets, fante6, hitfantebullet);
    game.physics.arcade.overlap(fante6, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fante7, smallplatforms);
    game.physics.arcade.collide(fante7, platforms);
    game.physics.arcade.collide(fante7, longplatforms);
    game.physics.arcade.overlap(fante7, hitboxplayer, touchfante);
    game.physics.arcade.overlap(weapon.bullets, fante7, hitfantebullet);
    game.physics.arcade.overlap(fante7, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fante8, smallplatforms);
    game.physics.arcade.collide(fante8, platforms);
    game.physics.arcade.collide(fante8, longplatforms);
    game.physics.arcade.overlap(fante8, hitboxplayer, touchfante);
    game.physics.arcade.overlap(weapon.bullets, fante8, hitfantebullet);
    game.physics.arcade.overlap(fante8, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fante9, smallplatforms);
    game.physics.arcade.collide(fante9, platforms);
    game.physics.arcade.collide(fante9, longplatforms);
    game.physics.arcade.overlap(fante9, hitboxplayer, touchfante);
    game.physics.arcade.overlap(weapon.bullets, fante9, hitfantebullet);
    game.physics.arcade.overlap(fante9, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fante10, smallplatforms);
    game.physics.arcade.collide(fante10, platforms);
    game.physics.arcade.collide(fante10, longplatforms);
    game.physics.arcade.overlap(fante10, hitboxplayer, touchfante);
    game.physics.arcade.overlap(weapon.bullets, fante10, hitfantebullet);
    game.physics.arcade.overlap(fante10, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fantea, smallplatforms);
    game.physics.arcade.collide(fantea, platforms);
    game.physics.arcade.collide(fantea, longplatforms);
    game.physics.arcade.overlap(fantea, hitboxplayer, touchfantea);
    game.physics.arcade.overlap(weapon.bullets, fantea, hitfantebullet);
    game.physics.arcade.overlap(fantea, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fantea1, smallplatforms);
    game.physics.arcade.collide(fantea1, platforms);
    game.physics.arcade.collide(fantea1, longplatforms);
    game.physics.arcade.overlap(fantea1, hitboxplayer, touchfantea);
    game.physics.arcade.overlap(weapon.bullets, fantea1, hitfantebullet);
    game.physics.arcade.overlap(fantea1, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fantea2, smallplatforms);
    game.physics.arcade.collide(fantea2, platforms);
    game.physics.arcade.collide(fantea2, longplatforms);
    game.physics.arcade.overlap(fantea2, hitboxplayer, touchfantea);
    game.physics.arcade.overlap(weapon.bullets, fantea2, hitfantebullet);
    game.physics.arcade.overlap(fantea2, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fantea3, smallplatforms);
    game.physics.arcade.collide(fantea3, platforms);
    game.physics.arcade.collide(fantea3, longplatforms);
    game.physics.arcade.overlap(fantea3, hitboxplayer, touchfantea);
    game.physics.arcade.overlap(weapon.bullets, fantea3, hitfantebullet);
    game.physics.arcade.overlap(fantea3, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fantea4, smallplatforms);
    game.physics.arcade.collide(fantea4, platforms);
    game.physics.arcade.collide(fantea4, longplatforms);
    game.physics.arcade.overlap(fantea4, hitboxplayer, touchfantea);
    game.physics.arcade.overlap(weapon.bullets, fantea4, hitfantebullet);
    game.physics.arcade.overlap(fantea4, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fantea5, smallplatforms);
    game.physics.arcade.collide(fantea5, platforms);
    game.physics.arcade.collide(fantea5, longplatforms);
    game.physics.arcade.overlap(fantea5, hitboxplayer, touchfantea);
    game.physics.arcade.overlap(weapon.bullets, fantea5, hitfantebullet);
    game.physics.arcade.overlap(fantea5, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fantea6, smallplatforms);
    game.physics.arcade.collide(fantea6, platforms);
    game.physics.arcade.collide(fantea6, longplatforms);
    game.physics.arcade.overlap(fantea6, hitboxplayer, touchfantea);
    game.physics.arcade.overlap(weapon.bullets, fantea6, hitfantebullet);
    game.physics.arcade.overlap(fantea6, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fantea7, smallplatforms);
    game.physics.arcade.collide(fantea7, platforms);
    game.physics.arcade.collide(fantea7, longplatforms);
    game.physics.arcade.overlap(fantea7, hitboxplayer, touchfantea);
    game.physics.arcade.overlap(weapon.bullets, fantea7, hitfantebullet);
    game.physics.arcade.overlap(fantea7, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fantea8, smallplatforms);
    game.physics.arcade.collide(fantea8, platforms);
    game.physics.arcade.collide(fantea8, longplatforms);
    game.physics.arcade.overlap(fantea8, hitboxplayer, touchfantea);
    game.physics.arcade.overlap(weapon.bullets, fantea8, hitfantebullet);
    game.physics.arcade.overlap(fantea8, hitbox, hitfante);  //blocco4

    game.physics.arcade.collide(fantea9, smallplatforms);
    game.physics.arcade.collide(fantea9, platforms);
    game.physics.arcade.collide(fantea9, longplatforms);
    game.physics.arcade.overlap(fantea9, hitboxplayer, touchfantea);
    game.physics.arcade.overlap(weapon.bullets, fantea9, hitfantebullet);
    game.physics.arcade.overlap(fantea9, hitbox, hitfante);  //blocco4


    game.physics.arcade.collide(arciere, smallplatforms);
    game.physics.arcade.collide(arciere, platforms);
    game.physics.arcade.collide(arciere, longplatforms);
    game.physics.arcade.overlap(weapon.bullets, arciere, hitfantebullet);
    game.physics.arcade.overlap(arciere, hitbox, hitfante);  //blocco4
    game.physics.arcade.overlap(arcoen.bullets, hitboxplayer, frecce);
    game.physics.arcade.overlap(arcoen.bullets, playerup, freccey);

    game.physics.arcade.collide(arciere1, smallplatforms);
    game.physics.arcade.collide(arciere1, platforms);
    game.physics.arcade.collide(arciere1, longplatforms);
    game.physics.arcade.overlap(weapon.bullets, arciere1, hitfantebullet);
    game.physics.arcade.overlap(arciere1, hitbox, hitfante);  //blocco4
    game.physics.arcade.overlap(arcoen1.bullets, hitboxplayer, frecce);
    game.physics.arcade.overlap(arcoen1.bullets, playerup, freccey);

    game.physics.arcade.collide(arciere2, smallplatforms);
    game.physics.arcade.collide(arciere2, platforms);
    game.physics.arcade.collide(arciere2, longplatforms);
    game.physics.arcade.overlap(weapon.bullets, arciere2, hitfantebullet);
    game.physics.arcade.overlap(arciere2, hitbox, hitfante);  //blocco4
    game.physics.arcade.overlap(arcoen2.bullets, hitboxplayer, frecce);
    game.physics.arcade.overlap(arcoen2.bullets, playerup, freccey);

    game.physics.arcade.collide(arciere3, smallplatforms);
    game.physics.arcade.collide(arciere3, platforms);
    game.physics.arcade.collide(arciere3, longplatforms);
    game.physics.arcade.overlap(weapon.bullets, arciere3, hitfantebullet);
    game.physics.arcade.overlap(arciere3, hitbox, hitfante);  //blocco4
    game.physics.arcade.overlap(arcoen3.bullets, hitboxplayer, frecce);
    game.physics.arcade.overlap(arcoen3.bullets, playerup, freccey);

    game.physics.arcade.collide(arciere4, smallplatforms);
    game.physics.arcade.collide(arciere4, platforms);
    game.physics.arcade.collide(arciere4, longplatforms);
    game.physics.arcade.overlap(weapon.bullets, arciere4, hitfantebullet);
    game.physics.arcade.overlap(arciere4, hitbox, hitfante);  //blocco4
    game.physics.arcade.overlap(arcoen4.bullets, hitboxplayer, frecce);
    game.physics.arcade.overlap(arcoen4.bullets, playerup, freccey);


    game.physics.arcade.collide(player, smallplatforms);

    game.physics.arcade.collide(player, longplatforms);
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(player, barriera);
    game.physics.arcade.collide(player, barriera2);
    game.physics.arcade.collide(player, barriera3);
    //game.physics.arcade.collide(firstaid, platforms);

    game.physics.arcade.collide(enemy, smallplatforms);
    game.physics.arcade.collide(enemy, longplatforms);
    game.physics.arcade.collide(enemy, platforms);
    game.physics.arcade.overlap(hitboxplayer, enemyhitbox, touchenemy);
    game.physics.arcade.overlap(hitbox, enemy, hitenemy);
    game.physics.arcade.overlap(weapon.bullets, enemy, hitenemybullet);


    game.physics.arcade.collide(enemy2, smallplatforms);
    game.physics.arcade.collide(enemy2, longplatforms);
    game.physics.arcade.collide(enemy2, platforms);
    game.physics.arcade.overlap(hitboxplayer, enemy2hitbox, touchenemy2);
    game.physics.arcade.overlap(hitbox, enemy2, hitenemy2);
    game.physics.arcade.overlap(weapon.bullets, enemy2, hitenemy2bullet);


    game.physics.arcade.collide(enemy3, smallplatforms);
    game.physics.arcade.collide(enemy3, longplatforms);
    game.physics.arcade.collide(enemy3, platforms);
    game.physics.arcade.overlap(hitboxplayer, enemy3hitbox, touchenemy3);
    game.physics.arcade.overlap(hitbox, enemy3, hitenemy3);
    game.physics.arcade.overlap(weapon.bullets, enemy3, hitenemy3bullet);


    game.physics.arcade.overlap(player, scudo, getshield);

    game.physics.arcade.overlap(player, swordtrigger, getsword);
    game.physics.arcade.enable(arco);
    game.physics.arcade.overlap(player, arco, getbow);
    game.physics.arcade.enable(chest3);
    game.physics.arcade.overlap(player, chest3, getexcalibur);
    chest3.body.checkCollision.up= false;
    chest3.body.checkCollision.left= false;
    chest3.body.checkCollision.right= false;
    chest3.alpha=0;

    game.physics.arcade.enable(chest4);
    game.physics.arcade.overlap(player, chest4, caio2);
    chest4.body.checkCollision.up= false;
    chest4.body.checkCollision.left= false;
    chest4.body.checkCollision.right= false;
    chest4.alpha=0;


    //cooldownvita
    if (cooldown<80){
        cooldown = cooldown+1;
        player.tint=0xff0000;
        playerup.tint=0xff0000;
    }

        if (cooldown>79 && dietimer==80){
        player.tint=0xffffff;
        playerup.tint=0xffffff;
    }


    if (cooldownenemy<60){
        cooldownenemy = cooldownenemy+1;
        enemy.tint=0xff0000;
    }
        if (cooldownenemy>59){
        enemy.tint=0xffffff;
    }

    if (cooldownenemy2<60){
        cooldownenemy2 = cooldownenemy2+1;
        enemy2.tint=0xff0000;
    }
        if (cooldownenemy2>59){
        enemy2.tint=0xffffff;
    }


    if (cooldownenemy3<60){
        cooldownenemy3 = cooldownenemy3+1;
        enemy3.tint=0xff0000;
    }
        if (cooldownenemy3>59){
        enemy3.tint=0xffffff;
    }


    if (cooldowncaio<60){
        cooldowncaio = cooldowncaio+1;
        caio.tint=0xff0000;

    }

        if (cooldowncaio>59){
        caio.tint=0xffffff;

    }

    player.scale.x=(direz*3.5)
    player.scale.y=(3.5)
    playerup.scale.setTo(1)

    //vite
if (health<4){
    life4.loadTexture('heart2');
}
if (health<3){
    life3.loadTexture('heart2');
}
if (health<2){
    life2.loadTexture('heart2');
}
if (health<1){
    life1.loadTexture('heart2');
}
if (health>0){
    life1.loadTexture('heart1');
}
if (health>1){
    life2.loadTexture('heart1');
}
if (health>2){
    life3.loadTexture('heart1');
}
if (health>3){
    life4.loadTexture('heart1');
}

if (health<1){

}

    //velocita' player
    player.body.velocity.x = 0;
    //velocita' nemico

    if(player_direction==1)
    {
        direz=1
    }
    else
    {
        direz=-1
    }


//movimento
if(arma==3 || arma==2){
//sprint sinistra
if (leftbutton.isDown && sprintButton.isDown  && !game.input.activePointer.leftButton.isDown && immovable==0 && shieldButton.isUp)
{
  inerzia=-500
  player_direction=0;
  if(attacking==0){
  playerup.animations.play('running', 8, true);
  player.animations.play('running', 8, true);}
  player.body.velocity.x = -500;
}

//sprint destra
else if (rightbutton.isDown && sprintButton.isDown && !game.input.activePointer.leftButton.isDown && immovable==0 && shieldButton.isUp)
{
  player_direction=1;
  if(attacking==0){
  playerup.animations.play('running', 8, true);
  player.animations.play('running', 8, true);}
  player.body.velocity.x = 500;
  inerzia=500
}

  //sinistra
  else if (leftbutton.isDown && immovable==0 && shieldButton.isUp)
  {
    player_direction=0;
      inerzia=-300
      player.animations.play('walking', 8, true);
      if(attacking==0){
          playerup.animations.play('walking', 8, true);
      }
      player.body.velocity.x = -300;
    }

  //destra
  else if (rightbutton.isDown && immovable==0 && shieldButton.isUp)
  {
    player_direction=1;
      inerzia=300
      player.animations.play('walking', 8, true);
      if(attacking==0){
        playerup.animations.play('walking', 8, true);
      }
      player.body.velocity.x = 300;
  }

  //fermo
  else {
    if(inerzia==0 && attacking==0){
      player.animations.play('idle', 5, true);
      playerup.animations.play('idle', 5, true);
    }
      else if(attacking==0){
      //playerup.animations.play('walking', 6, true);
      }
    if(inerzia>0){
      inerzia=inerzia-20;
      if(inerzia>300){
        player.animations.play('running', 8, true);
        playerup.animations.play('running', 8, true);
      }
      else{
        player.animations.play('walking', 8, true);
        playerup.animations.play('walking', 8, true);
      }
    }
    else if (inerzia<0){
      inerzia=inerzia+20;
      if(inerzia<-300){
        player.animations.play('running', 8, true);
        playerup.animations.play('running', 8, true);
      }
      else{
        player.animations.play('walking', 8, true);
        playerup.animations.play('walking', 8, true);
      }
    }
    player.body.velocity.x = player.body.velocity.x + inerzia;
  }
}

//movimento spada
else if(arma==0){

  //sprint sinistra
  if (leftbutton.isDown && sprintButton.isDown  && !game.input.activePointer.leftButton.isDown && immovable==0 && shieldButton.isUp)
  {
    inerzia=-500
    player_direction=0;
    if(attacking==0){
    player.animations.play('running', 8, true);
    if(storia<15){
    playerup.animations.play('runnings', 8, true);}
    if (storia>=15){
    playerup.animations.play('runninge', 8, true);
    }
  }
    player.body.velocity.x = -500;
  }

  //sprint destra
  else if (rightbutton.isDown && sprintButton.isDown && !game.input.activePointer.leftButton.isDown && immovable==0 && shieldButton.isUp)
  {
    player_direction=1;
    if(attacking==0){
    player.animations.play('running', 8, true);
    if(storia<15){
    playerup.animations.play('runnings', 8, true);}
    if (storia>=15){
    playerup.animations.play('runninge', 8, true);
    }
  }
    player.body.velocity.x = 500;
    inerzia=500
  }

    //sinistra
    else if (leftbutton.isDown && immovable==0 && shieldButton.isUp)
    {
      player_direction=0;
        inerzia=-300
        player.animations.play('walking', 8, true);
        if(attacking==0 && storia<15){
        playerup.animations.play('walkings', 8, true);}
        if (attacking==0 && storia>=15){
        playerup.animations.play('walkinge', 8, true);
        }
        player.body.velocity.x = -300;
      }

    //destra
    else if (rightbutton.isDown && immovable==0 && shieldButton.isUp)
    {
      player_direction=1;
        inerzia=300
        player.animations.play('walking', 8, true);
        if(attacking==0 && storia<15){
        playerup.animations.play('walkings', 8, true);}
        if (attacking==0 && storia>=15){
        playerup.animations.play('walkinge', 8, true);
        }
        player.body.velocity.x = 300;
    }

    //fermo
    else {
      if(attacking==0) {
      if(inerzia==0){
        player.animations.play('idle', 5, true);
        if(storia<15){
        playerup.animations.play('idles', 8, true);}
        if(storia>=15){
          playerup.animations.play('idlee', 8, true);
      }
    }
        else if(attacking==0){
        //playerup.animations.play('walking', 6, true);
        }
      if(inerzia>0){
        inerzia=inerzia-20;
        if(inerzia>300){
          player.animations.play('running', 8, true);
          if(storia<15){
          playerup.animations.play('runnings', 8, true);}
          if(storia>=15){
            playerup.animations.play('runninge', 8, true);
          }
        }
        else{
          player.animations.play('walking', 8, true);
          if(storia<15){
          playerup.animations.play('walkings', 8, true);}
          if(storia>=15){
          playerup.animations.play('walkinge', 8, true);
          }
        }
      }
      else if (inerzia<0){
        inerzia=inerzia+20;
        if(inerzia<-300){
          player.animations.play('running', 8, true);
          if(storia<15){
          playerup.animations.play('runnings', 8, true);}
          if(storia>=15){
          playerup.animations.play('runninge', 8, true);
          }
        }
        else{
          player.animations.play('walking', 8, true);
          if(storia<15){
          playerup.animations.play('walkings', 8, true);}
          if(storia>=15){
          playerup.animations.play('walkinge', 8, true);
          }
        }
      }
      player.body.velocity.x = player.body.velocity.x + inerzia;
    }
    else if(inerzia !=0){
      if(inerzia>0){inerzia=inerzia-20;}
      if(inerzia<0){inerzia=inerzia+20;}
    }


  }
}

//movimento arco
  else if(arma==1){

    //sprint sinistra
    if (leftbutton.isDown && sprintButton.isDown  && !attacking==1 && immovable==0 && shieldButton.isUp)
    {
      inerzia=-500
      player_direction=0;
      if(attacking==0){
      playerup.animations.play('runningb', 8, true);
      player.animations.play('running', 8, true);}
      player.body.velocity.x = -500;
    }

    //sprint destra
    else if (rightbutton.isDown && sprintButton.isDown && !attacking==1 && immovable==0 && shieldButton.isUp)
    {
      player_direction=1;
      if(attacking==0){
      playerup.animations.play('runningb', 8, true);
      player.animations.play('running', 8, true);}
      player.body.velocity.x = 500;
      inerzia=500
    }

      //sinistra
      else if (leftbutton.isDown && immovable==0 && shieldButton.isUp)
      {
        player_direction=0;
          inerzia=-300
          player.animations.play('walking', 8, true);
          if(attacking==0){
          playerup.animations.play('walkingb', 8, true);}
          player.body.velocity.x = -300;
        }

      //destra
      else if (rightbutton.isDown && immovable==0 && shieldButton.isUp)
      {
        player_direction=1;
          inerzia=300
          player.animations.play('walking', 8, true);
          if(attacking==0){
          playerup.animations.play('walkingb', 8, true);}
          player.body.velocity.x = 300;
      }

      //fermo
      else {
        if(inerzia==0 && attacking==0){
          player.animations.play('idle', 5, true);
          playerup.animations.play('idleb', 5, true);
        }
          else if(attacking==0){
          //playerup.animations.play('walking', 6, true);
          }
        if(inerzia>0){
          inerzia=inerzia-20;
          if(inerzia>300){
            player.animations.play('running', 8, true);
            playerup.animations.play('runningb', 8, true);
          }
          else{
            player.animations.play('walking', 8, true);
            playerup.animations.play('walkingb', 8, true);
          }
        }
        else if (inerzia<0){
          inerzia=inerzia+20;
          if(inerzia<-300){
            player.animations.play('running', 8, true);
            playerup.animations.play('runningb', 8, true);
          }
          else{
            player.animations.play('walking', 8, true);
            playerup.animations.play('walkingb', 8, true);
          }
        }
        player.body.velocity.x = player.body.velocity.x + inerzia;

      }
    }


    //velocita' parallasse
    sfondot.x= -game.camera.x*0.10+5000;

    mount2.x=game.camera.x*0.7+2000
    mount2.y=game.camera.y*0.6+10
    mount1.x=game.camera.x*0.6+2000
    mount1.y=game.camera.y*0.6+10
    transizione1.x= game.camera.x*0.500+400;
    transizione2.x= game.camera.x*0.30+400
    transizione3.x= game.camera.x*0.15+400
    transizione4.x= game.camera.x*0+400
    transizione5.x= -game.camera.x*0.10+400
    transizione6.x= -game.camera.x*0.125+400
    transizione1.y= game.camera.y*0.500
    transizione2.y= game.camera.y*0.300
    transizione3.y= game.camera.y*0.150
    transizione4.y= game.camera.y*0
    transizione5.y= -game.camera.y*0.10+70
    transizione6.y= -game.camera.y*0.125

    bosco1.x= game.camera.x*0.350+4000
    bosco1.y= game.camera.y*0.350

    text1.x= -game.camera.x*0.05+postext1;

    bosco2.x= game.camera.x*0.150+5500
    bosco2.y= game.camera.y*0.150

    transpalude5.x= game.camera.x*0.3+10500
    transpalude4.x= game.camera.x*0.25+11000
    transpalude3.x= game.camera.x*0.2+12000
    transpalude2.x= game.camera.x*0.01+15500
    transpalude1.x= game.camera.x*0+15500

    fine7.x= game.camera.x*0.5+14000
    fine6.x= game.camera.x*0.4+17000
    fine5.x= game.camera.x*0.3+20000
    fine4.x= game.camera.x*0.25+20000
    fine3.x= game.camera.x*0.2+20000
    fine2.x= game.camera.x*0.01+25000
    fine1.x= game.camera.x*0+25000
    fine0.x= -game.camera.x*0.05+26800

    case1.x= game.camera.x*0.40+3500
    case2.x= game.camera.x*0.35+4500
    case3.x= game.camera.x*0.30+5500

    case1.y= game.camera.y*0.35+80
    case2.y= game.camera.y*0.25+80
    case3.y= game.camera.y*0.15+80

    casa1.x= game.camera.x*0.1+4700
    casa2.x= game.camera.x*0.1+4700

    bosco3.x= game.camera.x*0+7000
    bosco3.y= game.camera.y*0

    bosco31.x= game.camera.x*0+7000
    bosco31.y= game.camera.y*0

    bosco4.x= -game.camera.x*0.1+5800
    bosco4.y= -game.camera.y*0.1

    bosco5.x= -game.camera.x*0.125+5700
    bosco5.y= -game.camera.y*0.125

    locanda1.x= game.camera.x*0.0+1750;
    locanda2.x=-game.camera.x*0.020+1750;
    locanda3.x= -game.camera.x*0.030+20+1750;


if(player.body.touching.left && player.body.touching.down || player.body.touching.right && player.body.touching.down)
{
    //player.body.velocity.y = -1*(Math.abs(player.body.velocity.x)+300);
    player.body.velocity.y += -600;
}

if(caio.body.touching.left && caio.body.touching.down || caio.body.touching.right && caio.body.touching.down)
{
    //player.body.velocity.y = -1*(Math.abs(player.body.velocity.x)+300);
    caio.body.velocity.y += -600;
}
    //salto
    //if (jumpButton.isDown && sprintButton.isDown && (player.body.onFloor() || player.body.touching.down))
    //{
      //player.body.velocity.y = -800;
    //}



    if ((jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))&& immovable==0 && shieldButton.isUp)
    {
        //player.body.velocity.y = -1*(Math.abs(player.body.velocity.x)+300);
        player.body.velocity.y = -1*(1);
        jump=1;

    }
    if(jumpButton.isDown && jump==1 && maxjump>1){
      player.body.velocity.y=-800
      maxjump--;}
      else{
        jump=0;
        maxjump=20;
      }


    if((player.body.onFloor() || player.body.touching.down&&jumpButton.isUp)){jump=0;}
    if(jumpButton.isUp){jump=0;maxjump=20;}


    if (fourButton.isDown){memarma=arma; arma=3;selector=3;}

    if (shieldButton.isDown){
      if(flagshield==1){
        scudosu=1;
        player.animations.play('shield', 8, true);
        playerup.animations.play('shield', 8, true);
        arma=2; selector=2;}
        else{
          arma=3;selector=2;}
        }
    if(shieldButton.isUp && flagshield==1){arma=memarma; selector=arma; scudosu=0;}

    if (twoButton.isDown){if(flagbow==1){arma=1;selector=1; memarma=arma;}else{arma=3;selector=1; memarma=arma;}}

    if (oneButton.isDown){if(flagsword==1){arma=0;selector=0;memarma=arma;}else{arma=3;selector=0; memarma=arma;}}


    if((leftbutton.isDown || rightbutton.isDown) && (storia==2 && player.x<2970) ){
      storia++;
    }

    if((shieldButton.isDown) && (storia==11 && player.x<14650 && player.x>14550) ){
      storia++;
    }

    if((jumpButton.isDown) && (storia==3 && player.x<2970) ){
      storia++;
    }

    if((leftbutton.isDown || rightbutton.isDown)&&(sprintButton.isDown) && (storia==4 && player.x<2970)){
      storia++;
    }

    if((game.input.activePointer.leftButton.isDown) && (storia==5 && player.x<2970)){
      storia++;
    }

    if((game.input.activePointer.leftButton.isDown && arma==1 && storia==8) && player.x>5756 && player.x<6330){
      storia++;
    }




    //attacco
    if(arma==1){
    if (game.input.activePointer.leftButton.isDown && ricarica==60 )
    {
      ricarica=0
      attacking=1
      if (player_direction>0)
      {
      weapon.fireAngle=-5;
      }
      else if (player_direction<1)
      {
      weapon.fireAngle=185;
      }
    }
    if(ricarica>20){
      attacking=0
    }
    if(ricarica<60 && ricarica>0){
      if (arma==0){
      if(storia<15){
      playerup.animations.play('attacks', 12, true);}
      if (storia>=15){
      playerup.animations.play('attacke', 12, true);}
      }

    else if (arma==1 && ricarica<10){
    playerup.animations.play('attackb', 16, false);
    if (ricarica>6){
    weapon.fire();}
    }
      ricarica++
    }
    else if (ricarica<60){
      ricarica++;
      if(storia<15){
      playerup.animations.play('attacks', 10, false);}
      if (storia>=15){
      playerup.animations.play('attacke', 10,false);}
    }
  }


  if(arma==0){
    //attacco
    if (game.input.activePointer.leftButton.isDown && ricaricaspada==30)
    {
      ricaricaspada=0
      attacking=1
    }
    if(ricaricaspada>20){
      attacking=0
    }
    if(ricaricaspada<30 && ricaricaspada>=0){
      if(storia<15){
      playerup.animations.play('attacks', 12, true);}
      if (storia>=15){
      playerup.animations.play('attacke', 12, true);}
      ricaricaspada++
    }
}


    function hitenemy(enemy, hitbox){
    if (enemylife>0  && cooldownenemy>59 && attacking==1 &&ricaricaspada>10 && arma==0){
      cooldownenemy=0;
      enemylife=enemylife-1;
    }
}


function hitenemy2(enemy2, hitbox){
if (enemy2life>0  && cooldownenemy2>59 && attacking==1 &&ricaricaspada>10 && arma==0){
  cooldownenemy2=0;
  enemy2life=enemy2life-1;
}
}


function hitenemy3(enemy3, hitbox){
if (enemy3life>0  && cooldownenemy3>59 && attacking==1 &&ricaricaspada>10 && arma==0){
  cooldownenemy3=0;
  enemy3life=enemy3life-1;}}

function hitfante(f, h){
  if(attacking==1 &&ricaricaspada>10 && arma==0){
  f.body.velocity.y=-900;
  f.tint = 0xff0000
  f.body.gravity.y= 2600;
  f.body.checkCollision.none= true;}
}


function hitcaio(f, h){
  if(attacking==1 &&ricaricaspada>10 && arma==0&& cooldowncaio>59){
  if(vitacaio>0){
    vitacaio--; cooldowncaio=0;
  }
  else{
  f.body.velocity.y=-900;
  f.tint = 0xff0000
  f.body.gravity.y= 2600;
  f.body.checkCollision.none= true;
  vittoria=1;
  }
}
}

function hitcaiobullet(f, h){
  if(attacking==1 && cooldowncaio>59){
  if(vitacaio>0){h.kill();vitacaio--; cooldowncaio=0;}else{
  f.body.velocity.y=-900;
  f.tint = 0xff0000
  f.body.gravity.y= 2600;
  f.body.checkCollision.none= true;vittoria=1;}}
}

  function hitenemybullet(enemy, bullets){
  if(arma==1 && cooldownenemy>59){
    cooldownenemy=0;
    enemylife=enemylife-1;}
}
if(enemylife<1){
enemy.kill();
}
function touchenemy(p,e){
if (health>0  && cooldown>59 && enemyattack==1 && spadagiutimer<=30){
cooldown=0;
health=health-2;}}


function hitenemy2bullet(enemy2, bullets){
if(arma==1 && cooldownenemy2>59){
  cooldownenemy2=0;
  enemy2life=enemy2life-1;}
}
if(enemy2life<1){
enemy2.kill();
}
function touchenemy2(p,e){
if (health>0  && cooldown>59 && enemy2attack==1 && spadagiutimer2<=30){
cooldown=0;
health=health-2;}}




function hitenemy3bullet(enemy3, bullets){
if(arma==1 && cooldownenemy3>59){
  cooldownenemy3=0;
  enemy3life=enemy3life-1;}
}
if(enemy3life<1){
enemy3.kill();
}
function touchenemy3(p,e){
if (health>0  && cooldown>59 && enemy3attack==1 && spadagiutimer3<=30){
cooldown=0;
health=health-2;}}




function hitfantebullet(f, b){ //blocco5
  f.body.velocity.y=-900;
  f.tint = 0xff0000
  f.body.gravity.y= 2600;
  f.body.checkCollision.none= true;
  b.kill()
  //fante.kill();
}


  function frecce(b,p){
    p.kill()
    health--
  }

  function freccey(b,p){
    p.kill()
  }



        function touchfante(p,f){//blocco6
        if ((health>0  && cooldown>59 && flagshield==1 && shieldButton.isUp )||(health>0  && cooldown>59 && flagshield==0 )){
        cooldown=0;
        health=health-1;
        }
        }

        function touchcaio(p,f){
          if (health>0  && cooldown>79&& caio.body.velocity.x==0){
          cooldown=0;
          health=health-1;
        }}

        function touchfantea(p,f){//blocco6
        if ((health>0  && cooldown>59&& p.body.velocity.x==0 && shieldButton.isUp && flagshield==1)||(health>0  && cooldown>59&& p.body.velocity.x==0  && flagshield==0)){
        cooldown=0;
        health=health-1;
        }
        }


        function oneup(p,o){
        health=4;
        o.kill()
    }

    function getsword(p,s){
    flagsword=1;
    }

    function getbow(p,b){
    if (storia==6){
    zoomflag=1;
    storia++;
    arco.alpha=1;
    flagbow=1;
    player.x=(5935);
    player.y=(1100);
    inerzia=0;
    immovable=1;
  }
}

  function getshield(p,b){
  if (storia==9){
  storia++;
  scudo.alpha=1;
  flagshield=1;
  player.x=(14562);
  player.y=(1070);
  inerzia=0;
  immovable=1;
  zoomflag=1;
}
}

function getexcalibur(p, b){
  if (storia==12){
    storia++;
    player.x=(27650);
    player.y=(1080);
    inerzia=0;
    immovable=1;
    zoomflag=1;
  }
}

function caio2(p, b){
  if (storia==16){
    storia++;
    player.x=(40600);
    player.y=(900);
    offsetx=100;
    offsety=40;
    inerzia=0;
    immovable=1;
    zoomflag=1;
  }
}

if(health<1){
  died=1;
}

if (player.y>1300){
  died=1;
}

function perso(){
  if(endscreen==0){
  vite--;}
  endscreen=1;
  if (storia>=20){
    if(vite>=0){
      end2.alpha=1;}
      else{
        end2d.alpha=1;}
      }
  else if(storia<=19){
    if(vite>=0){
      end1.alpha=1}
      else{
        end1d.alpha=1}
      }
      }

      function vinto(){
        endscreen=1
        goodend.alpha=1;
      }





}
function render () {
}
