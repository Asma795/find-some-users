//* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let user_Names = ['Shayan123', 'Ali99', 'admin', 'itx_99', 'im_latin'];
user_Names = [];

if (user_Names.length === 0) {
    console.log('We need to find some users!');
} 
else {
    for (let i = 0; i < user_Names.length; i++) {
        if (user_Names[i] === 'admin') {
            console.log('Hello Admin, Would you like to see a status report');
        }
        else {
            console.log(`Hello ${user_Names[i]}, thank you for logging in again`);
        }
    }
}
