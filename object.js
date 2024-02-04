let obj={
    id:1023,
    name:"raju ",
    city:"ptna"

}

console.log(obj);

// empty object 

let emp=new Object()
emp.id=102;
emp.name="raju";
emp.city="patna";
console.log(emp);


// function object 


function Emp(id,name,city){
    this.id=id;
    this.name=name;
    this.city=city;
}
const e =new Emp(102,"raju","patna");
console.log(e);

// key value 

console.log(emp["name"]);
// delete key value
delete emp["name"];