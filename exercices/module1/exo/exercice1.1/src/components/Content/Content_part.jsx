import Part from '../Part/Part';

const Content = (props) => {
    return (
      <div>
        <Part part = {props.part1} exercice = {props.exercices1} />
        <Part part = {props.part2} exercice = {props.exercices2} />
        <Part part = {props.part3} exercice = {props.exercices3} />
      </div>
    )
  }
  export default Content;