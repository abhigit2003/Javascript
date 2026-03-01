const accountId = 14453
let accountEmail ="abhinav@gmail.com"
var accountPassword = '123456'
accountCity = 'jaipur'
let accountstate;

//accountId = 2 // not allowed
accountEmail = "hac@hb.com"
accountPassword = '65432'
accountCity = "Banglore"
 
/* prefer not to use var 
beacuse of issue in block sccope ({}) and functional scope. 

*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountstate ])
