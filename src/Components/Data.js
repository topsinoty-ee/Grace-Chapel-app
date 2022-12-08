// Editable

//phone number
//DO NOT ADD SPACE. Input with country code.
let num = "+37212345678";
let mail = "example@somewhere.com";
let churchName = "Grace Chapel Tallinn";
let verticalDivider = " | "




//CODE. READ ONLY
export const Name = churchName;
export const Vert = verticalDivider;
export let Nav = [
    {
        link: "/about-us",
        text: "about us",
        description: "About us"
    },
    {
        link: "/sermons",
        text: "sermons",
        description: "Watch our services"
    },
    {
        link: "/calender",
        text: "calender",
        description: "View upcoming events and weekly activities"
    },
    {
        link: "/give",
        text: "give",
        //Add text
        description: ".........."
    }
]
export let FamilyBranches = {
    churchName1: "Church Name 1",
    churchName2: "Church Name 2",
    churchName3: "Church Name 3",
}
//Number spacer
num = num.slice(0, 4) + " " + num.slice(4, 8) + " " + num.slice(8, 12);

//contact details
export let Contact = {
    //Number + country code
    tel: num,
    //mail
    mail: mail
};


export let Field = (props) => {
    return <p>{props.name}: {props.detail}</p>
}



//Tests
console.log("Num:" + num)
console.log(Contact.tel);
console.log(Contact.mail)