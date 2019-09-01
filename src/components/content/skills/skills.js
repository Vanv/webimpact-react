import React from 'react';
import "./skills.scss";


const Skills = () => (
    <div className="skills-wrapper">
        <div className="container">
            <h1 className="title">Skills</h1>
            <div className="columns">
                <div className="column is-two-thirds">
                    <progress className="progress is-primary" value="15" max="100">15%</progress> 
                    <progress className="progress is-link" value="30" max="100">30%</progress>
                    <progress className="progress is-info" value="45" max="100">45%</progress>
                    <progress className="progress is-success" value="60" max="100">60%</progress>
                    <progress className="progress is-warning" value="75" max="100">75%</progress>
                    <progress className="progress is-danger" value="90" max="100">90%</progress>
                </div>
                <div className="column">
                    CSS<br/>HTML
                </div>
            </div>
            
        </div>
     </div>
);

export default Skills
