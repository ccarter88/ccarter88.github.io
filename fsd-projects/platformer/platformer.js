$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50, "#0d0d0d"); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "#0d0d0d"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500, "#0d0d0d"); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100, "#0d0d0d"); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(100, 630, 150, 20, "#be6ea4");
createPlatform(345, 500, 150, 20, "#be6ea4");

createPlatform(510, 590, 150, 20, "#be6ea4");

createPlatform(685,455, 150, 20, "#be6ea4");

createPlatform(855,635, 150, 20, "#be6ea4");

createPlatform(1055, 500,150, 20, "#be6ea4");


    // TODO 3 - Create Collectables
createCollectable("guccimorty", 400, 450);


createCollectable("guccimorty", 685, 400);
createCollectable("guccimorty", 525, 10, 1.0, 0.0);

createCollectable("guccimorty",1085,460);
createCollectable("guccimorty", 850, 10, 1.0, 0.0);
    
    // TODO 4 - Create Cannons
createCannon("top", 200, 600);
createCannon("right", 750, 600);

createCannon("top", 700, 980);
createCannon("left", 650, 1000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
