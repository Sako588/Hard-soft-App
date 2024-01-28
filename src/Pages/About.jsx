
import Navigation from '../Components/Navigation'
import '../Assest/Css/About.css'
import Differentiation from "../Assest/Img/About/different.jpg"
import AboutImg from '../Assest/Img/About/about-2.jpg'

import TestimonialsPages from './TestimonialsPages';



const About = () => {

  const Companies = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dpjh4mjob/image/upload/v1680007954/Companies/cloud-logo-300x208_gc9al5.png",
      header: 'Comelite Cloud',
      link: 'Comelite Cloud',
      content: 'Comelite has several sister companies, the closest one being our cloud-based solutions provider based on Salesforce, a new turn in advanced technologies. You can visit Comelite Cloud here and get your Salesforce solution for your business.',
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dpjh4mjob/image/upload/v1680007954/Companies/cas-logo-300x208_1_dpfawv.png",
      header: 'Comelite Architecture, Structure & Interior Design',
      link: 'Contact CAS here to get started.',
      content: 'CAS is where you go to if you need a beautiful unique interior or exterior design. CAS teams will be more than happy to assist you to design your dream residential or commercial building.',
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dpjh4mjob/image/upload/v1680007954/Companies/cds-logo_h8ftnt.png",
      header: 'Comelite Design Studio',
      link: 'See CDS Channel.',
      content: 'CDS has done projects of a variety of industries, including marketing and advertising, television, music videos, commercials and games. Whether your project is large or small, CDS will thrive on bringing ideas to life.',
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dpjh4mjob/image/upload/v1680007954/Companies/cas-logo-300x208_zv1bh2.png",
      header: 'CAS Structure',
      link: 'Contact CAS Structure here to get started.',
      content: 'CAS Structure will provide you the structural engineers you need for your loft conversion, extensions, alterations and new builds. Over 300 projects in UK and worldwide.',
    },
  ];


  return (

    <section className='about'>



      <Navigation
        Navigation1='Home'
        Navigation2='About'
        Section='About'
      />
      <div className="about-intro">
        <h3>About Hard Soft</h3>
        <p>Hard Soft was formed in 2003, with a small team of techies and expanded
          over the years, providing business solutions and offering quality services to clients globally.
          One of our most valued honors is the trust, confidentiality and partnership clients put in our teams
          to build their future and business growth. Currently, Hard Soft has its main headquarters based in Maryland,
          USA, and a branch in London and Amsterdam. We are also proud to have representatives in KSA, UAE and more to come.
          In the past 5 years, Hard Soft has grown its clientele base in the Middle East from Saudi Arabia, Iraq,
          Lebanon, Jordan, Oman, UAE, Qatar, Kuwait, Lebanon and even Egypt from North Africa.</p>
      </div>

      <div className="about-strategy">
        <h3>OUR STRATEGY</h3>
        <p>A satisfied customer is the best business strategy of all.</p>
      </div>
      <div className="copmanies">

        <h2>Partnior companies</h2>
        {Companies.map((item) => (
          <a href='#' key={item.id} className="companies-item">
            
            <div className="inner">
              <div className="img-companies">
                <img src={item.img} alt="" />
              </div>
              <div>
                <h3>{item.header}</h3>
                <p>{item.content}</p>
                <span>{item.link}</span>
                </div>
            </div>
          </a>
        ))}
      </div>


      <div className="different-top">
        <div className='top-side'>
          <div className="diferentiation-left">

            <h4>What Makes us Different</h4>
            <h5>HARD SOFT ’s main difference is in its quality of work and experience:</h5>
            <ul>
              <li>We have vast experience in MENA region.</li>
              <li>We have western quality and standards.</li>
              <li>We provide excellent support and customer service.</li>
              <li>We have senior team members with over 10 years of experience, and vast area of expertise.</li>
            </ul>
            <p>Our difference is that we care about our clients’ problems.
              We listen to what they have to say, and instead of selling an easy “out of the box” solution, we pay attention to you, and then once we understand your pain then we can start to formulate a plan.
              Working with you, we apply a mix of process, technology and people and arrive at a solution that is tailored to your requirements.
              We achieve the final results through our ability to provide the most flexible solutions in the market, blending a number of concepts and technology solutions. We create real value propositions that increase efficiency and lower costs.
              In HARD SOFT , our client’s satisfaction is important to us so we help you from the beginning, in planning, revising, testing, implementation, maintenance and even providing tutoring for our solutions to help your business grow fast.
              We concentrate our efforts on completing your task with maximum efficiency and obtain the best solution possible.</p>
          </div>

          <div data-aos="fade-left" className="diferentiation-right">

            <img src={Differentiation} alt="" />
          </div>

        </div>


      </div>

      <div className="different-bottom">
        <div className='bottom-side'>
          <div data-aos="fade-right" className="left-side">
            <img src={AboutImg} alt="" />
          </div>

          <div className="right-side">

            <p>Every client has a unique story, goals and challenges.
              Therefore, beyond the development and deployment of technology solutions, customer service should be complemented with consultation and interactive planning.
              We have worked with many clients and we can help you put their experience to good use.</p>
            <h5>The three tenets of our working ethics are as follows:</h5>
            <ul>
              <li>Timeliness</li>
              <li>Quality</li>
              <li>Cost efficiency</li>

            </ul>
            <p>Long story short, it is our task to provide you with the best solution, in the least amount of time and at the lowest price.
              Above all, we believe that your success is our duty.
              That’s why we’ll be there to support you from start to finish… and beyond.</p>
          </div>
        </div>


      </div>

 <TestimonialsPages/>

    </section>
  )
}

export default About