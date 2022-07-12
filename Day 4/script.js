//let a = [1,2,3,4,5]
//let b = a
//console.log('a:'a);
//console.log('b:'b);
//console.log("SKD");
/*
let aa = [1,2,3,4,5]
let bb = [2,3,4,5]
let cc = aa //.concat(bb)
console.log('cc',cc)
cc[2] = 12
console.log('cc new',cc)
console.log('aa new',aa)


ccc = [...aa]
console.log('ccc',ccc)
ccc[2] = 50
console.log('ccc new',ccc)
console.log('aa 2nd new', aa)
*/
console.log('1. compare JSON')
var obj1 = {Name": "Person 1", "Age":5 };
var obj2 = {Age:5, Name": "Person 1"};
    
if( isEqual(obj1, obj2)=true)
{
    console.log("The both JSON are same")
}

console.log('2. Task') 
var requests = new XMLHttpRequest

url = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'

requests.open("GET",url)
requests.send()
console.log(requests);
requests.onload= function() {
var data = JSON.parse(requests.response);

for (var i=0;i<data.length;i++)
{
    console.log(data[i].flag); 
}


//console.log(data[249].name)

}

console.log('3. Task') 

var requests = new XMLHttpRequest

url = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'

requests.open("GET",url)
requests.send()
console.log(requests);
requests.onload= function() {
var data = JSON.parse(requests.response);

console.log('2. Flags of all the countries')
for (var i=0;i<data.length;i++)
{
    console.log(data[i].flag); 
}
console.log('3. Names, regions, sub-regions and populations of all the countries')
for (var i=0;i<data.length;i++)
{
    console.log(data[i].name);
    console.log(data[i].regions);
    console.log(data[i].sub-region);
    console.log(data[i].population);
}


}