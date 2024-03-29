// Editable
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from 'react-icons/ai'

//phone number
//DO NOT ADD SPACE. Input with country code.
const verticalDivider = ' | '
let num = '+37212345678'
const Mail = 'example@somewhere.com'
const churchName = 'Grace Chapel Tallinn'

const link = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  twitter: 'https://twitter.com',
  youtube: 'https://youtube.com',
  location: 'https://goo.gl/maps/PLNhAvWZeKsc2y6F7',
  mapLocation:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.941194716545!2d24.752800615653978!3d59.43405530966379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692936000ef7fb3%3A0x73e9406c32a38e38!2zUsOkdmFsYSA4!5e0!3m2!1sen!2see!4v1669968646436!5m2!1sen!2see',

  Mail: 'mailto:' + Mail,
  tel: 'tel:' + num,
}

//CODE. READ ONLY
const Name = churchName
const Vert = verticalDivider
const Nav = [
  {
    id: 1,
    link: '/about-us',
    text: 'about us',
    description: 'About us',
  },
  {
    id: 2,
    link: '/sermons',
    text: 'sermons',
    description: 'Watch our services',
  },
  {
    id: 3,
    link: '/calender',
    text: 'calender',
    description: 'View upcoming events and weekly activities',
  },
  {
    id: 4,
    link: '/give',
    text: 'give',
    //Add text
    description: '..........',
  },
]

//Number spacer
num = num.slice(0, 4) + ' ' + num.slice(4, 8) + ' ' + num.slice(8, 12)

function addChar(x, loc, a, b) {
  let newNum = [...x]
  newNum.unshift(a)
  newNum.splice(loc, 0, b)
  num = newNum.join('')
  return newNum
}

//contact details
const Contact = {
  //Number + country code
  tel: num,
  //Mail
  Mail: Mail,
}
addChar(num, 5, '(', ')')



const ImageCard = (props) => {
  if (props.events === 'true') {
    return (
      <div className="event-card">
        <figure>
          <img alt={props.alt} src={props.src} />
          <figcaption>
            <h3>{props.title}</h3>
            <div>
              {props.date} {props.time}
            </div>
          </figcaption>
        </figure>
      </div>
    )
  } else {
    return (
      <div className="card">
        <figure>
          <img alt={props.alt} src={props.src} />
          <figcaption>{props.description}</figcaption>
        </figure>
      </div>
    )
  }
}
const Button = (props) => {
  return (
    <button className={props.className} type={props.type}>
      {props.text}
    </button>
  )
}
const Video = (props) => {
  if (props.format === 'ALM') {
    //autoPlay muted loop {alphabetical order}
    return (
      <figure className={props.class}>
        <video className={props.className} name="media" autoPlay muted loop>
          <source src={props.video} type="video/mp4" />
          Your browser does not support the video element.
        </video>
      </figure>
    )
  } else {
    return <span>Input with right semantics</span>
  }
}
const FamilyBranches = [
  {
    id: 1,
    description: 'Church Name 1',
    src:
      'https://seminary.grace.edu/wp-content/uploads/2021/03/Understanding-Biblical-Christian-Fellowship-1200x800-c-default.jpg',
  },
  {
    id: 2,
    description: 'Church Name 2',
    src: 'https://www.lillyfellows.org/media/1057/postdoctoralfellowsabout.jpg',
  },
  {
    id: 3,
    description: 'Church Name 3',
    src:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8IFUykdawCoKU0b0iQSNypPBNffy0XsO_PQ&usqp=CAU',
  },
]

const EventList = (props) => {
  const type = props.type
  const events = props.events //arr

  while (type === 'upcoming') {
    const eventList = events.map((eventCard) => (
      <li keys={events.indexOf(this)}>
        {' '}
        {/*arr.indexOf(this) */}
        <ImageCard
          events="true"
          alt={props.title}
          title={props.title}
          src={props.src}
          date={props.date}
          time={props.time}
        />
      </li>
    ))
    return eventList
  }
}
const Box = (props) => {
  return (
    <a href={props.link}>
      <div
        itemID={props.id}
        //   className="border-black flex place-content-center flex-col content-center text-center border-2 w-1/2 max-w-[10rem] h-40 rounded-3xl mx-auto box"
        className="border-2 h-40 w-40 p-0 rounded-3xl overflow-hidden flex place-content-center content-center"
      >
        <div className={props.className}>
          <h3 className="text-8xl">{props.text}</h3>
          <p>
            <span className="text-xs">{props.display}</span>
          </p>
        </div>
      </div>
    </a>
  )
}

const Socials = (props) => {
  const row = (
    <div className="flex flex-row">
      <a
        href={link.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className={props.className}
      >
        <AiFillFacebook />
      </a>
      <a
        href={link.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className={props.className}
      >
        <AiFillInstagram />
      </a>
      <a
        href={link.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className={props.className}
      >
        <AiFillTwitterSquare />
      </a>
      <a
        href={link.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className={props.className}
      >
        <AiFillYoutube />
      </a>
    </div>
  )
  const col = (
    <div className="flex flex-col">
      <a href={link.facebook} target="_blank" rel="noopener noreferrer">
        <AiFillFacebook />
      </a>
      <a href={link.instagram} target="_blank" rel="noopener noreferrer">
        <AiFillInstagram />
      </a>
      <a href={link.twitter} target="_blank" rel="noopener noreferrer">
        <AiFillTwitterSquare />
      </a>
      <a href={link.youtube} target="_blank" rel="noopener noreferrer">
        <AiFillYoutube />
      </a>
    </div>
  )
  if (props.type === 'col') {
    return col
  } else {
    return row
  }
}
//export
export {
  FamilyBranches,
  ImageCard,
  Nav,
  Vert,
  Name,
  Socials,
  link,
  Video,
  Button,
  num,
  Mail,
  EventList,
  Box
}
