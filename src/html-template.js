// html print for team card
//  bootstrap doc for image, headers and card bodies, unordered lists
const generateTeam = team => {

    // html portion for manager(s)
    const generateManager = manager => {
        return `
    <div class="card employee-card">
    <div class="card-header">
    <h2 class="card-title">${manager.getName()}</h2>
    <h3 class="card-title"><i class="fa-thin fa-cup-togo mr-2">${manager.getRole()}</h3>
    </div>
    <div class="card-body">
    <ul class="list group">
    <li class="list-group-item">ID: ${manager.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}"></a></li>
    <li class="list-group-item">Office Number: ${manager.getofficeNumber()}</li>
    </ul>
    </div>
    </div>
    `;
    };
    // html portion for engineer(s)
    const generateEngineer = engineer => {
        return `
    <div class="card employee-card">
<div class="card-header">
<h2 class="card-title">${engineer.getName()}</h2>
<h3 class="card-title"><i class="fa-thin fa-glasses-round mr-2">${engineer.getRole()}</h3>
</div>
<div class="card-body">
<ul class="list group">
<li class="list-group-item">ID:${engineer.getId()}</li>
<li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}"></a></li>
<li class="list-group-item">Github:  <a href="https://github.com/${engineer.getgithubUser()}"> target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
</ul>
</div>
</div>
`;

    };

    // html portion for intern(s)
    const generateIntern = intern => {
        return `
    <div class="card employee-card">
<div class="card-header">
<h2 class="card-title">${intern.getName()}</h2>
<h3 class="card-title"><i class="fa-thin fa-graduation-cap mr-2">${intern.getRole()}</h3>
</div>
<div class="card-body">
<ul class="list group">
<li class="list-group-item">ID: ${intern.getId()}</li>
<li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}"></a></li>
<li class="list-group-item">School: ${intern.getSchool()}</li>
</ul>
</div>
</div>
`;
};
    //generate whole HTML page with team
    const html = [];

    html.push(employees.filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");
))