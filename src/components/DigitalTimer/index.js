// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {
    count: 25,
    isStart: false,
  }

  onAddClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  onMinusClick = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }

  onResetClick = () => {
    this.setState({
      count: 25,
    })
  }

  onStartClick = () => {
    this.setState(prevState => ({
      isStart: !prevState.isStart,
    }))
  }

  render() {
    const {count, isStart} = this.state

    const typeUrl = isStart
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const altText = isStart ? 'start icon' : 'pause icon'
    const Text = isStart ? 'Pause' : 'Start'

    return (
      <div className="bg-container">
        <h1>Digital Timer</h1>
        <div className="stop-watch-container">
          <div className="bg-watch-card">
            <p>{count}:00</p>
          </div>
          <div className="timer-container">
            <div className="start-stop-container">
              <div className="start-card">
                <img
                  src={`${typeUrl}`}
                  alt={altText}
                  className="image"
                  onClick={this.onStartClick}
                />
                <p>{Text}</p>
              </div>
              <div className="reset-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset"
                  className="image"
                  onClick={this.onResetClick}
                />
                <p>Reset</p>
              </div>
            </div>
            <h1>Set Timer Limit</h1>
            <div className="button-container">
              <button
                className="buttons"
                type="button"
                onClick={this.onMinusClick}
              >
                -
              </button>
              <button type="button" className="button">
                {count}
              </button>
              <button
                className="buttons"
                type="button"
                onClick={this.onAddClick}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
