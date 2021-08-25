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
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    conn.write("Name: Sonam");
  });
  return conn;
};



module.exports = {
  connect,
  hello
};