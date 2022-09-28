import logo from './logo.svg';
import './App.css'; 
import Header from '.././header/header.jxs';

import Header from 'components/header/header.jxs';
import Content from 'components/content/content_part.jsx';








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
      <Content part1 = {part1} exercices1={exercices1} exercices2={exercices2} part2={part2} part3={part3} exercices3={exercices3}/>
      <Total total = {exercices1+exercices2+exercices3} />
    </div>
  )
}

export default App;
