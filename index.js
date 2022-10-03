const employee = {
    name: "Shivani",
    streetAddress: "337 W 30th St"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee };
    newObj.name = "Sam";
    newObj.streetAddress = "11 Broadway";
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee["streetAddress"] = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newObj = { ...employee}
    delete newObj.name;
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}