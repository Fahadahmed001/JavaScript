const accountId = 12345
let accountEmail = "Fahad@google.com"
var accountPassword = "112233"
accountCity = "Jaipur"
let accountState;

// accountId = 2   //not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
prefer not to use var
because of issue in block scope and functional scope
*/