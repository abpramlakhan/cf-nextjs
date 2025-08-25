export const loginTheUser = (formdata:FormData) => { 
    const loginVia = formdata.get("loginVia");
    console.log(loginVia)
}