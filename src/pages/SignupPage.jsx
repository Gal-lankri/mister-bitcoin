import { Component } from 'react'
import { userService } from '../services/user.service'

export class SignupPage extends Component {
  state = {
    name: '',
  }

  signUp= (ev) => {
    ev.preventDefault()
    if (!this.state.name) return
    console.log(this.state.name);
    userService.signup(this.state.name)
    this.props.history.push('/')
  }

  handleChange = ({ target }) => {
    const field = target.name
    let value = target.value
    switch (target.type) {
      case 'number':
      case 'range':
        value = +value
        break
      case 'checkbox':
        value = target.checked
        break
      default:
        break
    }
    this.setState({ [field]: value })
  }

  render() {
    const { userName } = this.state
    return (
      <section>
        <form onSubmit={this.signUp}>
          <label htmlFor="user"></label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            id="name"
            value={userName}
            placeholder="Enter your name"
          />
          <button>Sign Up</button>
        </form>
      </section>
    )
  }
}
