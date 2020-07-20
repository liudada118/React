import React ,{Component}from 'react'
class Clock extends Component {
    constructor () {
      super()
      this.state = {
        date: new Date()
      }
    }
    componentDidMount () {
        this.timer = setInterval(() => {
          this.setState({ date: new Date() })
        }, 1000)
      }
    render () {
      return (
        <div>
          <h1>
            <p>现在的时间是</p>
            {this.state.date.toLocaleTimeString()}
          </h1>
        </div>
      )
    }
  }
  export default Clock