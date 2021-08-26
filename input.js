
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'd'){

    connection.write("Move : right");
   }
   if (key === 'a'){
     connection.write("Move : left");
   }
   if (key === 'w'){
     connection.write("Move : up");
   }
   if (key === 's'){
     connection.write("Move : down");
   }
};
const setupInput = function(conn){
  let connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = {
  setupInput
}