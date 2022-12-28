import { Component } from 'react'
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'
export class HomePage extends Component {
  state = {
    user: null,
    bitcoinRate: null,
  }

  componentDidMount() {
    this.setUser()
    this.setBitcoinRate()
  }

  setUser = () => {
    const user = userService.getUser()
    if (!user) return this.props.history.push('/signup')
    this.setState({ user: userService.getUser() })
  }

  setBitcoinRate = async () => {
    try {
      const bitcoinRate = await bitcoinService.getRate(userService.getUser().coins)
      this.setState({ bitcoinRate })
    } catch (err) {
      console.log('err', err)
    }
  }
  render() {
    const { user, bitcoinRate } = this.state
    console.log(bitcoinRate)
    if (!bitcoinRate) return <div>Loading...</div>
    return (
      <section className='home-page flex column gap'>
        <h2>Hello {user.name} !</h2>
        <p>👛 Coins: {user.coins}</p>
        <p>💰 BTC: {bitcoinRate}</p>
      </section>
    )
  }
}
