// Useful methods to handle strings

function Utils(){
	/*
	 * Replaces all {n} tokens from a string with a array value.
	 * 
	 * Params
	 * 	stringArray: An array with text to replace.
	 * 	text: The text with the {n} tokens to be replaced. 
	 * 
	 * */
	function replaceToken(stringArray, text){
		return text.replace(/\{(\d+)\}/g, function(match, contents, offset, stringArray) {
		    return strings[contents];
		});
	}
}
