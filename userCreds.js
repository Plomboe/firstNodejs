module.exports.setUserDetails = setUserDetails;

let user = {
    username: "", 
    password: "", 
    fName: "", 
    lName: ""
}

function setUserDetails(username, password, fName, lName) {
    user.username = username;
    user.password = password;
    user.fName = fName;
    user.lName = lName;
    console.log(user);
    return user;
}