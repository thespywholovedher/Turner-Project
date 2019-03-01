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
      <div>
        Id: {title.id}
        Name: {title.name}
        Year: {title.year}
      </div>
    );
  }

export { Title };