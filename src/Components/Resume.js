import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillheadline = this.props.data.skillheadline;
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })

      var skills = this.props.data.skills.map(function (skills) {
        var skillImage = 'images/tech/' + skills.image;
        var tech = skills.tech.map(function (library) { library.image = 'images/tech/' + library.image; return library });
        return <div key={skills.name} className="two columns feature-item skill-box">
          <img alt={skills.name} src={skillImage} />
          <h5>{skills.name}</h5>
          <h6>Experience: {skills.experience}</h6>
          <p>{skills.description}</p>
          <p>Top 3 technologies: </p>
          <ul>{tech.map((library, idx) => <LibraryList name={library.name} image={library.image} type={library.type} key={idx} />)}</ul>
        </div>
      })
    }

    return (
      <section id="resume" >

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Experience</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>



        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Languages</span></h1>
          </div>

          <div>
            <div className="nine columns main-col"><p className="lead center">{skillheadline}{skillmessage}</p></div>
            <ul className="bgrid-halves s-bgrid-halves cf">
              {skills}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

class LibraryList extends Component {
  render() {
    return <li className="tools">
      <img src={this.props.image} />
      <span className="full-stack-item">{this.props.name}</span>
      <span className="full-stack-item-field">{this.props.type}</span>
    </li>
  };
}

export default Resume;
