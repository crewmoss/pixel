
  module.exports = function() {
    var buf = new Buffer(35);
    buf.write("R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=", "base64");

    return function(req,res,next) {
      res.type('gif');
      res.status(200).send(buf);
    };
  };