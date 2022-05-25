const am = {
    name:"Amar",
    skill:"singer",
    location:"Goa",
}
const ak = {
    name:"Akabar",
    skill:"Chef",
    location:"Mumbai"
}
const an = {
    name:"Anthony",
    skill:"Magician",
    location:"Kashmir"
}


function borrowSkill(bSkill,x)
{
    // console.log(this.name,this.skill,this.location)
            console.log(bSkill,x)
        
}
// console.log(am)
// borrowSkill.call(am,ak)
// console.log(am)
// console.log(am)


var t = borrowSkill.bind(am,ak.skill,an.skill)
// borrowSkill.call(ak,an)
// borrowSkill.call(an,am)
t()


