import React, { Component } from 'react';
import { getTitle }  from '../api/titleAPI';

class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: {}
        }
    }

    componentDidMount() {
        getTitle(this.props.match.params.id)
            .then(res => {
                const title = res.data;
                this.setState({ title });
            })
            .catch(error => console.error("Error: ", error));
    }

    render() {
        return (
            <TitlePresentation title={ this.state.title } />
        )
    }
}

const TitlePresentation = (props) => {
    const title = props.title;
    return (
      <ul className="list-group">
        <li className="list-group-item">Id: {title.id}</li>
        <li className="list-group-item">Name: {title.name}</li>
        <li className="list-group-item">Year: {title.releaseYear}</li>
      </ul>
    );
  }

export { Title };