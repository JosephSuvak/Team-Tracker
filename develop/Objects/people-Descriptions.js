class Employee {
    constructor(name, role, ID, email, gitHub, school) {
        this.name = name;
        this.role = role;
        this.ID = ID;
        this.email = email;
        this.gitHub = gitHub;
        this.school = school;
    }

    getName() {
        return this.name
    }
    getRole() {
        return this.role
    }
    getID() 
    {
        return this.ID
    }
    getEmail() 
    {
        return this.email
    }
    //Totally a pun
    gitGitHub(){
        return this.gitHub
    }
    getschool(){
        return this.school
    }
}

module.exports = Employee