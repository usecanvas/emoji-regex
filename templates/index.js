module.exports = function() {
	return /^(<%= multipleCodePointsPart %>|<%= loneCodePointsPart %>){1,3}$/gm;
};
