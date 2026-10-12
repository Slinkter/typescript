/*  */
type ITadmin = {
    access: string[];
};

type Employee = {
    name: string;
    startDate: Date;
    skills: string[];
};

type AdminEmployee = Employee & ITadmin;
const emp1: AdminEmployee = {
    name: "john",
    startDate: new Date(),
    skills: ["cisco", "python", "Perl"],
    access: ["admin", "user"],
};

console.log(emp1);
