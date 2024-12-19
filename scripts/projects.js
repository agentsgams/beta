function redoEvents() {
    Array.from(document.getElementsByClassName('project')).forEach(element => {
        element.addEventListener('mouseenter', function() {
            element.childNodes[1].classList.add('hovereffect');
            element.childNodes[3].classList.add('hovereffect-span');
        });
        element.addEventListener('mouseleave', function() {
            element.childNodes[1].classList.remove('hovereffect');
            element.childNodes[3].classList.remove('hovereffect-span');
        });
    });
}

function addItem(name, link, image, color) {

    var newimage = ""
    if (!image) { newimage = "./thumbnails/comingsoon.png" } else { newimage = image }

    var template = `
    <a href="${link}"><div class="project">
        <img src="${newimage}">
        <span style="color:${color}">${name}</span>
    </div></a>&nbsp;
    `;
    
    document.getElementById('projectlist').innerHTML = document.getElementById('projectlist').innerHTML + template;

};

var baseurl = "https://agentsgams.github.io/projects/"

addItem("Epic Boss Battle", "https://agentn86.github.io/epicbossbattle/v1.3.3/", "./thumbnails/epicbossbattle.png", "blue");
addItem("SMnake", "https://taco-eating-truck.glitch.me/index.html", "./thumbnails/smnake.png", "pink");
addItem("Coin Collector", "https://coincollecor.glitch.me/index.html", "./thumbnails/coincollector.png", "pink");
addItem("3D Maze", `${baseurl}3dmaze.html`, "./thumbnails/3dmaze.png", "pink");
addItem("Alien Shooter", `${baseurl}alienshooter.html`, "./thumbnails/alienshooter.png", "pink");
addItem("Bitcoin Clicker", "https://julianyaman.github.io/bitcoin-clicker/", "./thumbnails/bitcoinclicker.png", "white");
addItem("Cookie Clicker", `${baseurl}cookieclicker`, "./thumbnails/cookieclicker.jpeg", "white");
addItem("Papa's Pizzeria", `${baseurl}flash/papapizzera.html`, "./thumbnails/papapizzeria.jpeg", "white");
addItem("Papa's Burgeria", `${baseurl}flash/papaburger.html`, "./thumbnails/papaburger.jpeg", "white");
addItem("Age of War 2", `${baseurl}flash/ageofwar2.html`, "./thumbnails/ageofwar2.jpeg", "white");
addItem("Run 2", `${baseurl}flash/run2.html`, "./thumbnails/run2.jpeg", "white");
addItem("Whack your Boss", `${baseurl}flash/whackboss.html`, "./thumbnails/whackyourboss.jpeg", "red");
addItem("Duck Life", `${baseurl}flash/ducklife.html`, "./thumbnails/ducklife.jpeg", "white");
addItem("The Impossible Quiz", `${baseurl}flash/impossiblequiz.html`, "./thumbnails/impossiblequiz.jpeg", "white");
addItem("The World's Hardest Game", `${baseurl}flash/worldhardgame.html`, "./thumbnails/worldhardgame.jpeg", "white");
addItem("Portal: The Flash Version", `${baseurl}flash/portalflash.html`, "./thumbnails/portalflash.jpeg", "white");
addItem("Age of War", `${baseurl}flash/ageofwar.html`, "./thumbnails/ageofwar.jpeg", "white");
addItem("Papa's Freezeria", `${baseurl}flash/papafreezer.html`, "./thumbnails/papafreeze.jpeg", "white");
addItem("Papa's Pancakeria", `${baseurl}flash/papapancake.html`, "./thumbnails/papapancake.jpeg", "white");
addItem("Bloons Tower Defense 5", `${baseurl}flash/bloontd5.html`, "./thumbnails/bloonstd5.jpeg", "white");
addItem("SLOPE", `${baseurl}slope`, "./thumbnails/slope.jpeg", "white");
addItem("Basketball Stars", `${baseurl}basketballstars`, "./thumbnails/basketballstars.png", "white");
addItem("Time Shooter 3", `${baseurl}timeshooter3`, "./thumbnails/timeshooter3.png", "white");
addItem("Fancy Pants Adventures", `${baseurl}flash/fancypants.html`, "./thumbnails/fancypantsworld1.png", "white");
addItem("Alien Hominid", `${baseurl}flash/alienhom.html`, "./thumbnails/alienhom.png", "white");
addItem("Toss the Turtle", `${baseurl}flash/tosstheturtle.html`, "./thumbnails/tosstheturtle.png", "white");
addItem("Bloxorz", `${baseurl}flash/bloxorz.html`, "./thumbnails/bloxorz.png", "white");
addItem("Wasted Sky", `${baseurl}flash/wastedsky.html`, "./thumbnails/wastedsky.png", "white");
addItem("The Impossible Quiz 2", `${baseurl}flash/impossiblequiz2.html`, "./thumbnails/impossiblequiz2.png", "white");
addItem("Whack your Computer", `${baseurl}flash/whackcomputer.html`, "./thumbnails/whackcomputer.png", "white");
addItem("Papa's Cheeseria", `${baseurl}flash/papaCheese.html`, "./thumbnails/papacheeseria.png", "white");
addItem("Papa's Cupcakeria", `${baseurl}flash/papaCupcake.html`, "./thumbnails/papacupcakeria.png", "white");
addItem("Papa's Donut", `${baseurl}flash/papaDonut.html`, "./thumbnails/papadonuteria.png", "white");
addItem("Papa's Hotdogeria", `${baseurl}flash/papaHotDog.html`, "./thumbnails/papahotdogeria.png", "white");
addItem("Papa's Pastaria", `${baseurl}flash/papaPastaria.html`, "./thumbnails/papapasteria.png", "white");
addItem("Papa's Scooperia", `${baseurl}flash/papaScooperia.html`, "./thumbnails/papascooperia.png", "white");
addItem("Papa's Sushiria", `${baseurl}flash/papaSushiria.html`, "./thumbnails/papasusheria.png", "white");
addItem("Papa's Taco Mia", `${baseurl}flash/papaTacoMia.html`, "./thumbnails/papatacomia.png", "white");
addItem("Papa's Wingeria", `${baseurl}flash/papaWingeria.html`, "./thumbnails/papawingeria.png", "white");
addItem("Deep Sleep", `${baseurl}flash/deepsleep.html`, "./thumbnails/deepsleep.png", "white");
addItem("Deeper Sleep", `${baseurl}flash/deepersleep.html`, "./thumbnails/deepersleep.png", "white");
addItem("SM63", `${baseurl}flash/sm63.html`, "./thumbnails/sm63.png", "white");
addItem("Insane Orb", `${baseurl}flash/insaneorb.html`, "./thumbnails/insaneorb.jpeg", "white");
addItem("Interactive Buddy", `${baseurl}flash/interactivebuddy.html`, "./thumbnails/interactivebuddy.png", "white");
addItem("Interactive Buddy 2", `${baseurl}flash/interactivebuddy2.html`, "./thumbnails/interactivebuddy2.png", "white");
addItem("Fireboy & Watergirl in The Forest Temple", `${baseurl}flash/fireboywatergirl.html`, "./thumbnails/fireboywatergirl.jpeg", "white");
addItem("Eaglercraft", "https://drive.google.com/uc?export=download&id=1-MduluUms_LG7tUJyMkAPBw82O40R11R", "./thumbnails/eaglercraft.png", "white");
addItem("SSF2", `${baseurl}flash/ssf2.html`, "./thumbnails/ssf2.png", "white");
addItem("House of Hazards", `${baseurl}houseofhazards/index.html`, "./thumbnails/houseofhazards.png", "white");
addItem("1v1.LOL", `${baseurl}xml/1v1lol.html`, "./thumbnails/1v1lol.png", "white");
addItem("GeoDash", `${baseurl}geodash`, "./thumbnails/geodash.png", "white");
addItem("Moto X3M", `${baseurl}motox3m`, "./thumbnails/motox3m.png", "white");
addItem("Moto X3M 2", `${baseurl}motox3m-2`, "./thumbnails/motox3m.png", "white");
addItem("Moto X3M 3", `${baseurl}motox3m-3`, "./thumbnails/motox3m.png", "white");
addItem("Big Shot Boxing", `${baseurl}xml/bigshotboxing.html`, "./thumbnails/bigshotboxing.png", "white");
addItem("Snow Rider 3D 2", `${baseurl}snowrider3d`, "./thumbnails/snow-rider-3d.png", "white");
addItem("SLOPE 2 Players", `${baseurl}xml/slope2player.html`, "./thumbnails/slope-2-player-logo.jpg", "white");
addItem("Soccer Legends", `${baseurl}xml/soccerlegends.html`, "./thumbnails/headsoccer2022.png", "white");
addItem("Hello Kitty Adventure", `${baseurl}xml/hellokittyadventure.html`, "./thumbnails/hellokittyadventure.png", "white");
addItem("Retro Bowl", `${baseurl}retrobowl`, "./thumbnails/retrobowl.avif", "white");
addItem("Flappy Plane", `${baseurl}flappyplane/index.html`, "./thumbnails/flappyplane.jpeg", "white");
addItem("Gun Mayhem 2", `${baseurl}flash/gunmayhem2.html`, "./thumbnails/gun-mayhem-2.jpg", "white");
addItem("Minesweeper", "https://agentn86.github.io/js-minesweeper/", "./thumbnails/minesweeper.png", "white");
addItem("Polytrack", `${baseurl}multipleVersions/polytrack.html`, "./thumbnails/polytrack.png", "white");
addItem("Drift Boss", `${baseurl}driftboss`, "./thumbnails/driftboss.png", "white");
addItem("Eggy Car", `${baseurl}eggycar`, "./thumbnails/eggycar.png", "white");
addItem("Pro Football", `${baseurl}flash/profootball.html`, "./thumbnails/profootball.jpg", "white");
addItem("Pixel Speedrun", `${baseurl}xml/pixelspeedrun.html`, "./thumbnails/pixelspeedrun.jpg", "white");
addItem("DooM", "https://diekmann.github.io/wasm-fizzbuzz/doom/", "./thumbnails/doom1993.jpg", "white");
addItem("Javelin Fighting", `${baseurl}xml/javelinfighting.html`, "./thumbnails/javelinfighting.jpg", "white");
addItem("Bottle Flip", `${baseurl}iframe/bottleflip.html`, "./thumbnails/bottleflip.png", "white");
addItem("Time Shooter 2", `${baseurl}xml/timeshooter2.html`, "./thumbnails/timeshooter2.png", "white");
addItem("Sport Heads: Ice Hockey", `${baseurl}xml/1on1hockey.html`, "./thumbnails/1on1hockey.png", "white");
addItem("Five Nights at Freddys", `${baseurl}xml/fnaf.html`, "./thumbnails/fivenightsatfreddys.png", "white");
addItem("Douchebag Workout 2", `${baseurl}xml/douchebagworkout2.html`, "./thumbnails/douchebagworkout2.png", "white");
addItem("Unicycle Hero", `${baseurl}unicyclehero`, "./thumbnails/unicylcehero.avif", "white");
addItem("Garfield's Scary Scavenger Hunt", `${baseurl}xml/garfieldscaryhunt.html`, "./thumbnails/garfieldscaryscavengerhunt.png", "white");
addItem("Dunk Shot", `${baseurl}xml/dunkshot.html`, );
addItem("agents tetris", "https://agentn86.github.io/tetris-html/", );
addItem("Learn to Fly", `${baseurl}flash/learntofly.html`, );
addItem("Learn to Fly 2", `${baseurl}flash/learntofly2.html`, );
addItem("Minecraft Tower Defense", `${baseurl}flash/minecrafttowerdefense.html`, );
addItem("QWOP", `${baseurl}flash/qwop.html`, );
addItem("Picos School", `${baseurl}flash/picoschool.html`, );
addItem("Riddle School", `${baseurl}flash/riddleschool.html`, );
addItem("Riddle School 2", `${baseurl}flash/riddleschool2.html`, );
addItem("Riddle School 3", `${baseurl}flash/riddleschool3.html`, );
addItem("Sport Heads: Football Championship", `${baseurl}flash/sportsheadssoccer.html`, );
addItem("Run", `${baseurl}flash/run.html`, );
addItem("Run 3", `${baseurl}flash/run3.html`, );
addItem("Earthbound", "https://agentsgams.github.io/emulatorjs/earthbound.html", );
addItem("Block Blast", `${baseurl}multipleVersions/blockblast.html`, );
addItem("Big Tower Tiny Square", `${baseurl}bigtowertinysquare`, );
addItem("Drift Hunters", `${baseurl}drifthunters`, );
addItem("Soccer Random", `${baseurl}soccerrandom`, );
addItem("Basket Random", `${baseurl}basketrandom`, );
addItem("Cluster Rush", `${baseurl}clusterrush`, );
addItem("Tiny Fishing", `${baseurl}tinyfishing`, );
addItem("BitLife", `${baseurl}bitlife`, );
addItem("Boxing Random", `${baseurl}boxingrandom`, );
addItem("Volley Random", `${baseurl}volleyrandom`, );
addItem("SUPERHOT", `${baseurl}superhot`, );
addItem("Murder", `${baseurl}murder`, );
addItem("Paper.IO 2", `${baseurl}paperio2`, );
addItem("Grindcraft", `${baseurl}grindcraft`, );
addItem("8Ball Pool", `${baseurl}multipleVersions/8ball.html`, );
addItem("Blumgi Ball", `${baseurl}blumgimagicball`, );
addItem("Boxing Physics 2", `${baseurl}boxingphysics2`, );
addItem("Head Soccer 2022", `${baseurl}headsoccer`, );
addItem("Mad Burger", `${baseurl}madburger`, );
addItem("Subway Surfers", `${baseurl}subwaysurfers`, );
addItem("Tennis Physics", `${baseurl}tennisphysics`, );
addItem("Gunspin", `${baseurl}gunspin`, );
addItem("2048", `${baseurl}2048`, );
addItem("Crossy Road", `${baseurl}crossyroad`, );
addItem("Johnny Upgrade", `${baseurl}johnny-upgrade`, );
addItem("Moto X3M Winter", `${baseurl}motox3m-winter`, );
addItem("Doodle Jump", `${baseurl}doodlejump`, );
addItem("Zeepkist Crash 2D", `${baseurl}zeepkistcrash2d`);
addItem("OvO", `${baseurl}ovo`);
addItem("The Worlds Easy-est Game", `${baseurl}flash/theworldseasiestgame.html`);
addItem("Hypersnake", `${baseurl}hypersnake`);
addItem("Raft Wars", `${baseurl}raftwars`);
addItem("2 Minute Football", `${baseurl}multipleVersions/2minutefootball.html`);

redoEvents();