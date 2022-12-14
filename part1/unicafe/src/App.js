import { useState } from 'react'

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Button = ({handle, text}) => (
  <div>
    <button onClick={handle}>{text}</button>
  </div>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const avg = all / 3
  const pos = good / all * 100

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={all} />
          <StatisticLine text='average' value={avg} />
          <StatisticLine text='positive %' value={pos} />
        </tbody>
      </table>
    )
  }
} 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handle={() => setGood(good + 1)} text='good' />
      <Button handle={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handle={() => setBad(bad + 1)} text='bad' />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

export default App