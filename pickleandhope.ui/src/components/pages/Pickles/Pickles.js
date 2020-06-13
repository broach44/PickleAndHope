import React from 'react';
import SinglePickle from '../../shared/SinglePickle/SinglePickle';
import picklesData from '../../../helpers/data/pickleData';

class Pickles extends React.Component {
  state = {
    pickles: [],
  }

  getPickles = () => {
    picklesData.getPickles()
      .then((pickles) => {
        this.setState({ pickles });
      })
      .catch((err) => console.error('error from get pickles', err));
  }

  componentDidMount() {
    this.getPickles();
  }

  render() {
    const { pickles } = this.state;
    return (pickles.map((pickle) => <SinglePickle key={pickle.id} pickle={pickle} />));
  }
}

export default Pickles;
