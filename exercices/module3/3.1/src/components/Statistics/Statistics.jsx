import StatisticsLinePourcentage from "./StatisticsLinePourcentage"

const { default: StatisticsLine } = require("./StatisticsLine")

//verifie si il y ades stats sinon renvoie 
const Statistics = ({good,neutral,bad}) => {
    if(good+neutral+bad === 0 || Number.isNaN(good+neutral+bad)) return <h2>No stat for moment</h2>
    else{
        return(
            
                <table>
                    <tbody>
                        <StatisticsLine texte="good" value={good}/>
                        <StatisticsLine texte="neutral" value={neutral}/>
                        <StatisticsLine texte="bad" value={bad}/>
                        <StatisticsLine texte="all" value={bad + neutral + good}/>
                        <StatisticsLine texte="average" value={(good - bad)/(good + bad + neutral)}/>
                        <StatisticsLinePourcentage texte="positif" value={good /(good + bad + neutral)}  /> 
                    </tbody>
                </table>
                
        )
    }
}
export default Statistics