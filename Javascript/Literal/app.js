const name = "Yakup Açış";
const department = "Computer Engineer";
const salary = 10000;

const a = "Name: " + name + "\n" + "Departman: " + department + "\n" + "Salary: " + salary;

const b = `Name:${name}\nDepartman: ${department}\nSalary: ${salary}`;

const html = "<ul> " +
				"<li>" + name + "</li>" +
				"<li>" + department + "</li>" +
				"<li>" + salary + "</li>" +
				"</ul>";
 
function k(){
	return "Merhaba";
}
const html2 = `
		<ul>
			<li>${name}</li>
			<li>${department}</li>
			<li>${salary}</li>
			<li>${20 / 4}</li>
			<li>${k()}</li>
		</ul>
		`;

document.body.innerHTML = html2;