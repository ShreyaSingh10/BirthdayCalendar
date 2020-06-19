const validator = (n) => {
	
	let d = 1;
	if (n>= 2 && n<=4)
		d=2;
	if(n>=5 && n<=9)
		d=3;
	if(n>=10 && n<=16)
		d=4;
	if(n>=17 && n<=25)
		d=5;
	if(n>25)
		d=6;
	return d;
}

export { validator };