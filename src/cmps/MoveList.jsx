import { Component } from 'react'

export default class MoveList extends Component {
  state = {
    moves: null,
  }

  componentDidMount() {
    console.log(this.props.moves)
    this.setState({ moves: this.lastMoves()})
  }

   lastMoves = () => {
    const { moves } = this.props
    if (!moves) return
    console.log(moves)
    const lastMoves = moves.slice(-3)
    console.log(lastMoves);
    return lastMoves
  }

  dateStr = (date) => {
    const newDate = new Date(date)
   return  newDate.toLocaleString('en-US')
  }
  render() {
    const { moves } = this.state
    if (!moves) return <div>Loading last moves...</div>
    else if (!moves.length) return
    console.log(moves);
    return (
      <section className="move-list flex column">
        <h3>Your last 3 moves</h3>
        <ul className='clear-list flex column gap'>
          {moves.map((move) => (
            <li className='flex column gap' key={move.toId}>
              <p>To: {move.to}</p>
              <p>At: {this.dateStr(move.at)}</p>
              <p>Amount: {move.amount}</p>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}
