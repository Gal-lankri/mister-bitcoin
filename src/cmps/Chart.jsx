import { PureComponent } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export class Chart extends PureComponent {

  state = {
    chart: null,
  }

  componentDidMount() {
    this.setState({ chart: this.props.chart })
  }

  getChartData() {
    const { chart } = this.state
    console.log(chart)
    const newData = chart.values.map((value) => {
      return {date: new Date(value.x * 1000).toDateString().slice(4, 15), [chart.unit]:value.y }
    })
    console.log(newData)
    return newData
  }

  render() {
    const { chart } = this.state
    if (!chart) return <div>Loading...</div>
    return (
        <section className='chart flex column align-center gap'>
            <h1>{chart.name}</h1>
        <LineChart
        width={500}
        height={300}
        data={this.getChartData()}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey={chart.unit} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={chart.unit} stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
      </section>
    )
  }
}
