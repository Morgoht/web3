import logo from './logo.svg';
import './App.css';

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercice}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1} exercice = {props.exercices1} />
      <Part part = {props.part2} exercice = {props.exercices2} />
      <Part part = {props.part3} exercice = {props.exercices3} />
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercices {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundementals of React'
  const exercices1 = 10
  const part2 = 'Using props to pass data'
  const exercices2 = 7
  const part3 = 'State of a component'
  const exercices3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1 = {part1} exercices1 = {exercices1} exercices2={exercices2} part2 = {part2} part3 = {part3} exercices3={exercices3}/>
      <Total total = {exercices1+exercices2+exercices3} />
    </div>
  )
}

export default App;
