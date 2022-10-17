const StatisticsLine = ({texte, value}) =>{
    return(
        <tr>
            <td> {texte} :</td>
            <td>{value}</td>
        </tr>
    )
}
export default StatisticsLine