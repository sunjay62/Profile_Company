import About from '../../components/about/About';
import Business from '../../components/business/Business';
import Business2 from '../../components/business2/Business2';
import Contact from '../../components/contact/Contact';
import Milestone from '../../components/milestone/Milestone';
import Marquee from '../../components/marquee/Marquee';
import Countprofile from '../countprofile/Countprofile';

import './middle.css';
import Executiveteam from '../executiveteam/Executiveteam';
import Newbusiness from '../newbusiness/Newbusiness';

const Middle = () => {
  return (
    <div className="middleContainer">
      <section>
        <div className="countSection">
          <Countprofile />
        </div>
      </section>
      <section id="about">
        <div className="aboutSection">
          <About />
        </div>
      </section>
      <section>
        <div className="milestoneSection">
          <Milestone />
        </div>
      </section>
      <section>
        <div className="marqueeSection">
          <Marquee />
        </div>
      </section>
      <section id="business">
        <div className="businessSection">
          <Business2 />
        </div>
      </section>
      {/* <section id="newbusiness">
        <div className="newbusinessSection">
          <Newbusiness />
        </div>
      </section> */}
      <section id="executiveTeam">
        <div className="executiveSection">
          <Executiveteam />
        </div>
      </section>
      <section id="contact">
        <div className="contactSection">
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default Middle;
