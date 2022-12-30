// Editable
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai';

//phone number
//DO NOT ADD SPACE. Input with country code.
const verticalDivider = ' | '
let num = '+37212345678';
const mail = 'example@somewhere.com';
const churchName = 'Grace Chapel Tallinn';

const link = {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    youtube: 'https://youtube.com',
    location: 'https://goo.gl/maps/PLNhAvWZeKsc2y6F7',
    mapLocation: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.941194716545!2d24.752800615653978!3d59.43405530966379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692936000ef7fb3%3A0x73e9406c32a38e38!2zUsOkdmFsYSA4!5e0!3m2!1sen!2see!4v1669968646436!5m2!1sen!2see',
    heroVid: 'https://www.w3schools.com/tags/movie.mp4'
}






//CODE. READ ONLY
const Name = churchName;
const Vert = verticalDivider;
const Nav = [
    {
        link: '/about-us',
        text: "about us",
        description: "About us"
    },
    {
        link: '/sermons',
        text: "sermons",
        description: "Watch our services"
    },
    {
        link: '/calender',
        text: "calender",
        description: "View upcoming events and weekly activities"
    },
    {
        link: '/give',
        text: "give",
        //Add text
        description: ".........."
    }
]

//Number spacer
num = num.slice(0, 4) + ' ' + num.slice(4, 8) + ' ' + num.slice(8, 12);

//contact details
const Contact = {
    //Number + country code
    tel: num,
    //mail
    mail: mail
};


const Field = (props) => {
    return <p>{props.name}: {props.detail}</p>
}

const ImageCard = (props) => {
    return (
        <div className='card'>
            <figure>
                <img alt={props.alt} src={props.src} />
                <figcaption>
                    {props.description}
                </figcaption>
            </figure>
        </div>

    );
}
const Video = (video, width, height) => {
    return (

        <figure>
            <video width={width} height={height} loop autoPlay name='media'>
                <source src={video} type="video/mp4" />
                Your browser does not support the video element.
            </video>
        </figure>

    )
}
const FamilyBranches = [
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



const Socials = () => {
    return (
        <div id="Contact-socials">
            <a href={link.facebook} target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a>
            <a href={link.instagram} target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a>
            <a href={link.twitter} target="_blank" rel="noopener noreferrer"><AiFillTwitterSquare /></a>
            <a href={link.youtube} target="_blank" rel="noopener noreferrer"><AiFillYoutube /></a>
        </div>
    )
}


//export
export { FamilyBranches, ImageCard, Field, Nav, Vert, Name, Socials, link, Video }

//Tests
console.log("Num:" + num)
console.log(Contact.tel);
console.log(Contact.mail)