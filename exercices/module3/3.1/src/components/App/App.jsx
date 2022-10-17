
import Button from '../Button/Button'
import { useState } from 'react'
import Statistics from 'components/Statistics/Statistics'
import Loading from 'components/Loading/Loading'

//const Statistics =  ({texte, value}) => <div>{texte} : {value}</div>



const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad] = useState(0)
  const [loading, setLoading] = useState(true)
  
  
  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad  = () => setBad (bad + 1)
  
  setTimeout(() => setLoading(false), 3000)

  if(loading) return (<Loading/>)

  

  return (
    <div className="mainDiv">
      
      <Button onClick={handleGood} text='good'/>
      <Button onClick={handleNeutral} text='neutral'/>
      <Button onClick={handleBad} text='bad'/>
      
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}
export default App