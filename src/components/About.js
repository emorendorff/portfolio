import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import biopic from '../assets/images/biopic.png'

export const About = () => {
    
    return (
        <main id='about' className='about-container'>
                {/* <Fade top duration={1000} distance='0px'>
                  <h1 className='about-header'>hello</h1>
                </Fade> */}
                <section className='empic-and-about'>
                    <Fade left duration={1000} delay={1000} distance='30px'>
                    <article className='bio'>
                    <div className='bio-details'>
                      <p className='about-me-text'>
                        I'm a software developer based in Richmond, VA. I'm passionate about seamless design and applications that are accessible for all users. I currently do contrack work for <a src='https://www.dojo4.com/' target='_blank'>Dojo4.</a>
                      </p>
                      <p>I attended <a src='https://turing.edu/' target='_blank'>Turing School of Software and Design's</a> front end 7-month intensive program where I learned (quickly) how to build functional, well-tested apps both individually and on teams and all completely remote.</p>
                      <p>Before development, I was a long time coffee professional, who could once claim to be a finalist at the <a src='https://sprudge.com/here-are-your-2019-us-coffee-champions-141669.html' target='_blank'>2019 United States Barista Championship.</a> I am a board member for Glitter Cat Barista, which advocates for the success of marginalized hospitality professionals in spaces that have previously excluded them. I’ve managed high volume cafes and run wholesale education programs and can talk coffee for hours.</p>
                      <p>When I'm not drinking coffee or writing code, you can find me in the kitchen cooking up something elaborate, watching a Formula 1 race, stopping to smell the roses, or on a walk with my partner and my dog, Moose.</p>

                    </div>
                    </article>
                    </Fade>
                    <Fade bottom duration={1000} delay={600} distance='30px'>
                    <div className='em-pic'>
                        <img className='em-pic' alt='em with a rose bush' src={biopic}/>
                        <div className='bio-btns'>
                            <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://drive.google.com/file/d/1fW1NMSusC3WvCyY038RSL1jDOEoPzjfY/view?usp=sharing'
                            >
                                <button className='bio-btn'>
                                    resume
                                </button>
                            </a>
                            <Link to='/contact'>
                             <button
                             className='bio-btn'>
                                 contact me
                             </button>
                            </Link>
                        </div>
                    </div>
                    </Fade>
                </section>
        </main>
    )
}
// export const About = () => {
//   return (
//     <div>
//       <a href='https://drive.google.com/file/d/1_kAEmOAJYkq99ooxI-i8mOgJ_Hd-1a9i/view?usp=sharing' target="_blank">Peep my resume</a>
//     </div>
//   )
// }