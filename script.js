//*********** Promise ***********/
let isMeetingOkay = true
const twoFriendMeeting = new Promise(
    // resolve - qanaqadir malumot keldi
    // rejcet = qanqadir ma'lumot kelmadi
    function(resolve,reject){ 
        if(isMeetingOkay){
            const msg = console.log('Friend meeting');
            resolve(msg)
        }else{
            const errMessage = 'Not Friend meeting!'
            reject(errMessage)
        }
    }
)
// then - keyin
twoFriendMeeting
.then(res => res)
.catch(error => console.log(error))
.finally(() => console.log('Finished'))