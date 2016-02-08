var socket = io(window.location.origin);

socket.on('connect', function () {
   console.log('I have made a persistent two-way connection to the server!');
});

socket.on('disconnect', function () {
   console.log('I AM LEAVING YOU!');
});

whiteboard.on("draw", function() {
    console.log("we drew something!");
    //emit event to server so it knows to update clients...
});