class Form {
    constructor() {

    }

    display() {
        var title = createElement('h2');
        title.html("carRacingGame");
        title.position(130, 0);
        var input =  createInput(player1Game);
        var button = createButton('play');
        input.position(130, 160);
        button.position(250, 200);
        button.mousePressed(function() {
            input.hide();
            button.hide();
            var game = input.value();
            player.update();
            player.update(playerCount);
            var greeting = createElement('h3');
            player.update(greeting);
            greeting.html("Hello " + name);
            greeting.position(130, 160);
        });
    }
}