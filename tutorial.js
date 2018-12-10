function getAge()
{
return 22;
}

function getSkills()
{
return ["Java","Kotlin"];
}

function getProjectIdeas()
{
return ["My portfolio", "Bots for Discord game chat"]   
}

function main () 
{
var Person = {name:"Edwin Cosme Mercado", 
              age: getAge(),
              skills: getSkills(),
	      currentDevs: getProjectIdeas()
};

console.log("Name: "+ Person.name);
console.log("Age: "+ Person.age);
console.log("Skills: "+ Person.skills[1]);
}

main();
