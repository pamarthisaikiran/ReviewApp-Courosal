// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    displayId: 0,
  }

  RightClick = () => {
    const {displayId} = this.state
    const {reviewsData} = this.props

    if (displayId < reviewsData.length - 1) {
      this.setState(prevCount => ({displayId: prevCount.displayId + 1}))
    }
  }

  renderDetailsContainer = card => {
    const {imgUrl, username, companyName, description} = card

    return (
      <div className="container">
        <img src={imgUrl} alt={`${username}-avatar`} />
        <p className="para1">{username}</p>
        <p className="para2">{companyName}</p>
        <p className="para2">{description}</p>
      </div>
    )
  }

  onLeftClick = () => {
    const {displayId} = this.state

    if (displayId > 0) {
      this.setState(prevCount => ({displayId: prevCount.displayId - 1}))
    }
  }

  render() {
    const {reviewsData} = this.props
    const {displayId} = this.state
    const result = reviewsData[displayId]

    return (
      <div className="bg">
        <h1 className="title">Reviews</h1>
        <div className="card">
          <button
            testid="leftArrow"
            type="button"
            className="button"
            onClick={this.onLeftClick}
          >
            <img
              alt="left-arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>
          {this.renderDetailsContainer(result)}
          <button
            testid="rightArrow"
            type="button"
            className="button"
            onClick={this.RightClick}
          >
            <img
              alt="right-arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
