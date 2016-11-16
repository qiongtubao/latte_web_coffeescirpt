var latte_lib  = require("latte_lib")
	, coffeescript = require("coffee-script");
module.exports = function(path, options) {
	options = options || {};
	var data = latte_lib.fs.readFileSync(path);
	var mark = latte_lib.format.templateStringFormat(data, options);
	return coffeescript.compile(mark);
}