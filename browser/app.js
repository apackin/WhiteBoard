var socket = io(window.location.origin);

socket.on('connect', function (storedArt) {

   console.log('I have made a persistent two-way connection to the server!');

    storedArt.forEach(function(arr){
    	whiteboard.draw(arr[0], arr[1], arr[2]);
    });
});

whiteboard.on("draw", function(start, end, strokeColor) {
    socket.emit('drawing', start, end, strokeColor);
    console.log(start, end, strokeColor);
});

socket.on('someoneDrew', function(start, end, strokeColor) {
    whiteboard.draw(start, end, strokeColor);
    // console.log(start, end, strokeColor);
});
