import { Component } from 'react'
import { bitcoinService } from '../services/bitcoin.service'
import { Chart } from '../cmps/Chart'

export class StatisticPage extends Component {
  state = {
    charts: null,
  }

  componentDidMount(){
    this.loadCharts()
  }

  loadCharts = async () => {
    try {
      const marketPrice = await bitcoinService.getMarketPrice()
      const ConfirmedTransactions = await bitcoinService.getConfirmedTransactions()
      this.setState({ charts: [marketPrice, ConfirmedTransactions] })
    } catch (err) {
      console.log('err', err)
    }
  }
  render() {
    const { charts } = this.state
    if (!charts) return <div>Loading...</div>
    return (
      <section className='statistics'>
        {charts.map((chart) => 
        <Chart key={chart.name} chart={chart} />       
        )}
      </section>
    )
  }
}
