import React from 'react';
import './executiveteam.scss';
import Team1 from '../../assets/team-2.jpg';
import Team2 from '../../assets/team-3.jpg';
import Team3 from '../../assets/team-4.jpg';
import Team4 from '../../assets/team-5.jpg';

const Executiveteam = () => {
  return (
    <div className="teamContainer">
      <div className="top">
        <h1>The Executive Team</h1>
        <p>There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill.</p>
      </div>
      <div className="bottom">
        <div className="team">
          <div className="left">
            <img src={Team1} alt="#" />
          </div>
          <div className="right">
            <h3>John Doe</h3>
            <h4>CEO</h4>
            <p>Artist is a term applied to a person who engages in an activity .</p>
            <a>View Profile</a>
          </div>
        </div>
        <div className="team">
          <div className="left">
            <img src={Team2} alt="#" />
          </div>
          <div className="right">
            <h3>John Doe</h3>
            <h4>CEO</h4>
            <p>Artist is a term applied to a person who engages in an activity .</p>
            <a>View Profile</a>
          </div>
        </div>
        <div className="team">
          <div className="left">
            <img src={Team3} alt="#" />
          </div>
          <div className="right">
            <h3>John Doe</h3>
            <h4>CEO</h4>
            <p>Artist is a term applied to a person who engages in an activity .</p>
            <a>View Profile</a>
          </div>
        </div>
        <div className="team">
          <div className="left">
            <img src={Team4} alt="#" />
          </div>
          <div className="right">
            <h3>John Doe</h3>
            <h4>CEO</h4>
            <p>Artist is a term applied to a person who engages in an activity .</p>
            <a>View Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Executiveteam;
