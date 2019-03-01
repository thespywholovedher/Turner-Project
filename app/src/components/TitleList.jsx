import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const TitleList = (props) => {

    console.log(props.titles);
     return (
        <table className="table">

            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Year</th>
                </tr>
            </thead>
            <tbody>
          {
            props.titles.map( title => 
              <tr key={title.id}>
                <th scope="row"><Link to={`/api/titles/${title.number}/details`}>{title.number}</Link></th>
                 <td>{title.name}</td> 
                 <td>{title.releaseYear}</td>
              </tr>
            ) 
          }
          </tbody>
        </table>
    );
  }

  export default TitleList;