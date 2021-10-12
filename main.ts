
// Typescript Safe error handeling 4.4 

function validatePostCode(code: string): boolean {
    const postCode = parseInt(code);
    if(Number.isNaN(postCode)) {
        throw new Error('Not a number')
    }
    return postCode >= 1000 && postCode<=9999;
}

function log(code: any): void {
    try {
        const isValid = validatePostCode(code);
        console.log(isValid)
    } catch(err) {
        if(err instanceof Error) {
        console.log('Failed',err.message);
        } else {
            console.log('Unknown Failure',err)
        }

    }
}

log('8888')  // [LOG]: true 
log({id:1011}) //[LOG]: "Failed",  "Not a number"

//Async and Await example code 

const BASE_API = 'https://jsonplaceholder.typicode.com/users'
const logUserInfo = async (url: string): Promise<any[] | string> =>{
    const response = await fetch(url);
    const users = await response.json();
    return users;
}

const  log = async ()=> {
const output = await logUserInfo(BASE_API)
console.log(output)
}

log() //log the user information
