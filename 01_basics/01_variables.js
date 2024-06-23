const account_id = 144553
let account_Email = "gautam@google.com"
var account_password = "12345"
account_city = "jaipur"

//account_id = 2 // not allowed

account_Email = "gautam.com"
account_password = "123456"
account_city = "Delhi"

console.log(account_id);

/*
-> Prefer not to use var because of issue in block scope and functional scope.
*/

console.table([account_id, account_Email, account_password, account_city])