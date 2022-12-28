export const saveUser = async(user)=>{
    const res = await fetch(`${process.env.REACT_APP_api}/user`,{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })
    const data =await res.json()
    return data
}
export const getToken = async(email)=>{
    const res = await fetch(`${process.env.REACT_APP_api}/jwt?email=${email}`)
    const data =await res.json()
    return data
}