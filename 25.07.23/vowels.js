let NAME="SUGANESH";    
const v="a,e,i,o,u";
let count=0;
 let user=NAME.toLowerCase();
vowelsCount();
function vowelsCount(){
for(let i=0;i<user.length;i++)
{
    for(let j=0;j<v.length;j++)
    {
        if(user[i]==v[j])
        count++;
    }
    
}
return count;

}
console.log("The vowels count in the given string: "+count);