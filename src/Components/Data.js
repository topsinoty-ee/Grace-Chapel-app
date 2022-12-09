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

export function ImageCard(props) {
    return (
        <div className="card">
            <figure>
                <img alt={props.alt} src={props.src} />
                <figcaption>
                    {props.description}
                </figcaption>
            </figure>
        </div>

    );
}
export let FamilyBranches = [
    {
        churchName, description: "Church Name 1",
        src: "https://seminary.grace.edu/wp-content/uploads/2021/03/Understanding-Biblical-Christian-Fellowship-1200x800-c-default.jpg"
    },
    {
        churchName, description: "Church Name 2",
        src: "https://www.lillyfellows.org/media/1057/postdoctoralfellowsabout.jpg"
    },
    {
        churchName, description: "Church Name 3",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8IFUykdawCoKU0b0iQSNypPBNffy0XsO_PQ&usqp=CAU"
    }
]

//Tests
console.log("Num:" + num)
console.log(Contact.tel);
console.log(Contact.mail)