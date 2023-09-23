const user ={
    name :'sakib ',age :12, job:"sameSoft"
}
const strring =JSON.stringify(user)
console.log(strring);
const obj =JSON.parse(strring);
console.log(obj);