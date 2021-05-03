const PeopleManager = require("../Objects/people-Manager");
function htmlCreation () { 
    console.log(PeopleManager.Engineer1.getName());
    console.log(PeopleManager.Engineer2.getName());
    console.log(PeopleManager.Engineer3.getName());
    console.log(PeopleManager.Engineer4.getName());
    console.log(PeopleManager.Intern1.getName());
     return `
<!DOCTYPE html>

<head>
    <Title>Employee Dashboard</Title>
    <link rel="stylesheet" href="./develop/util/ccs/style.css">
</head>

<body>

    <div class="heading">
        <div class="row">
            <h1 class="col">Employee Dashboard</h1>
        </div>
    </div>

 <div class="employee-List">
     <div class="personnel-Card">
       <p class="Name-Title">${PeopleManager.Manager1.getName()}</p>
      <p class="Name-Title">${PeopleManager.Manager1.getRole()}</p>
      <p class="Name-Title">${PeopleManager.Manager1.getID()}</p>
      <p class="Name-Title">${PeopleManager.Manager1.getEmail()}</p>
      <a href="https://github.com/${PeopleManager.Manager1.gitGitHub()}/" class="gitHub-Button">gitHub for ${PeopleManager.Manager1.getName()}</a>
      <p style="display: none"> ${PeopleManager.Manager1.getschool()}</p>
    </div>

    <div class="personnel-Card">
   <p class="Name-Title">${PeopleManager.Engineer1.getName()}</p>
<p class="Name-Title">${PeopleManager.Engineer1.getRole()}</p>
<p class="Name-Title">${PeopleManager.Engineer1.getID()}</p>
<p class="Name-Title">${PeopleManager.Engineer1.getEmail()}</p>
<a href="https://github.com/${PeopleManager.Engineer1.gitGitHub()}/" class="gitHub-Button">gitHub for ${PeopleManager.Engineer1.getName()}</a>
<p style="display: none"> ${PeopleManager.Engineer1.getschool()}</p>
 </div>

 <div class="personnel-Card">
 <p class="Name-Title">${PeopleManager.Engineer2.getName()}</p>
<p class="Name-Title">${PeopleManager.Engineer2.getRole()}</p>
<p class="Name-Title">${PeopleManager.Engineer2.getID()}</p>
<p class="Name-Title">${PeopleManager.Engineer2.getEmail()}</p>
<a href="https://github.com/${PeopleManager.Engineer2.gitGitHub()}/" class="gitHub-Button">gitHub for ${PeopleManager.Engineer2.getName()}</a>
<p style="display: none"> ${PeopleManager.Engineer2.getschool()}</p>
</div>

<div class="personnel-Card">
<p class="Name-Title">${PeopleManager.Engineer3.getName()}</p>
<p class="Name-Title">${PeopleManager.Engineer3.getRole()}</p>
<p class="Name-Title">${PeopleManager.Engineer3.getID()}</p>
<p class="Name-Title">${PeopleManager.Engineer3.getEmail()}</p>
<a href="https://github.com/${PeopleManager.Engineer3.gitGitHub()}/" class="gitHub-Button">gitHub for ${PeopleManager.Engineer3.getName()}</a>
<p style="display: none"> ${PeopleManager.Engineer3.getschool()}</p>
</div>

<div class="personnel-Card">
 <p class="Name-Title">${PeopleManager.Engineer4.getName()}</p>
<p class="Name-Title">${PeopleManager.Engineer4.getRole()}</p>
<p class="Name-Title">${PeopleManager.Engineer4.getID()}</p>
<p class="Name-Title">${PeopleManager.Engineer4.getEmail()}</p>
<a href="https://github.com/${PeopleManager.Engineer4.gitGitHub()}/" class="gitHub-Button">gitHub for ${PeopleManager.Engineer4.getName()}</a>
<p style="display: none"> ${PeopleManager.Engineer4.getschool()}</p>
</div>

<div class="personnel-Card">
<p class="Name-Title">${PeopleManager.Intern1.getName()}</p>
<p class="Name-Title">${PeopleManager.Intern1.getRole()}</p>
<p class="Name-Title">${PeopleManager.Intern1.getID()}</p>
<p class="Name-Title">${PeopleManager.Intern1.getEmail()}</p>
<a href="https://github.com/${PeopleManager.Intern1.gitGitHub()}/" class="gitHub-Button">gitHub for ${PeopleManager.Intern1.getName()}</a>
<p style="display: inline-block"> ${PeopleManager.Intern1.getschool()}</p>
</div>

</div>
</body>

</html> `;

}

module.exports = htmlCreation;