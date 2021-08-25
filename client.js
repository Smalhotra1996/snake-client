const net = require("net");
const hello = function() {
  console.log("hello");
};
const connect = function() {
  const conn = net.createConnection({
    host: "135.23.223.133",// IP address here,
    
    port:"50542"// PORT number here,
    
  });

  // interpret incoming data as text


  // setInterval(function(){ alert("Hello"); }, 3000);


  conn.setEncoding("utf8");
  conn.on("connect", () => {
   setInterval(function(){ conn.write("Move: up");},1000); 
    conn.write("Name: Sonam");
    setInterval(function(){ conn.write("Move: down");},500);
    setInterval(function(){ conn.write("Move: left");},500);
    setInterval(function(){ conn.write("Move: right");},5800);
  });
  return conn;
};



module.exports = {
  connect,
  hello
};