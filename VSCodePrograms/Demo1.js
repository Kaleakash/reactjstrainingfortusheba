function dis(id,name,salary,...tech) {		// REst operator ...variableName it must in function parameter, 0, 1 or many 
	console.log(id);
	console.log(name);
	console.log(salary);
	console.log("Size "+tech.length);
}
dis(1,"Raj",12000);
dis(1,"Raj",12000,"C");
dis(1,"Raj",12000,"C","C++");
dis(1,"Raj",12000,"C","C++","Java",".net");
let techologies =["C","HTML","JS","oracle"];
dis(1,"Raj",12000,techologies);
dis(1,"Raj",12000,...techologies);		//spread parameter 

