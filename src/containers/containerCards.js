import React, { Component } from 'react'
import { connect } from 'react-redux'
// import * as actions from '../actions/';
import ComponentCard from '../components/componentCard'

class ContainerCards extends Component {
  constructor(props){
    super(props);
    this.renderCards = this.renderCards.bind(this);
  }
  renderCards(cards){
  }
  render(){
    const { restaurants } = this.props;
    return (
      <div className="cards">
        {restaurants.data.map(restaurant => (
          <ComponentCard
            title={restaurant.name}
            image={restaurant.image_url}
            subTitle={restaurant.phone}
            description={restaurant.address}
          />
        ))}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    restaurants: state.restaurants,
  }
}

export default ContainerCards = connect(mapStateToProps)(ContainerCards)
