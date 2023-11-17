const extendHex = (shortHex) => {
  // write your code here
	let longHex="";
	for(let ch of shortHex)
		{
			if(ch!==="#")
			{
				longHex+=ch+ch;	
			}
		}
	return longHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
