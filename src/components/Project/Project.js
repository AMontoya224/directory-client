import React from 'react';
import './Project.css';
import { withRouter } from 'react-router-dom/cjs/react-router-dom';


function Project(props) {
    const {title, titleUrl, organization, organizationUrl, researcher, researcherUrl, coResearchers, startingYear, endingYear} = props;

    const onUrl = (e) => {
        props.history.push(e);
    };

    return (
        <div className='Project'>
            <main>
                <span className="material-symbols-rounded">sdk</span>
                <div>
                    <h4 onClick={() => onUrl('/projects' + titleUrl)}>{title}</h4>
                    <h5 onClick={() => onUrl('/organizations' + organizationUrl)}>{organization}</h5>
                    <div>
                        <b>INVESTIGADOR PRINICPAL: </b><p onClick={() => onUrl('/persons' + researcherUrl)}>{researcher}, </p>
                        <b> CO-INVESTIGADORES: </b>
                        {coResearchers.map((coResearcher) => {
                            return(
                                <p onClick={() => onUrl('/persons' + coResearcher.url)}>{coResearcher.name} </p>
                            )
                        })}
                    </div>
                    <p>{startingYear} → {endingYear}</p>
                </div>
            </main>
        </div>
    );
}

export default withRouter(Project);