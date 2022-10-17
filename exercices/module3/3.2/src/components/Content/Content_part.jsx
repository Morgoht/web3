import Part from '../Part/Part';

const Content = (props) => {
  const parts = props.parts
    return (
      <div>
        <Part parts={parts}/>
      </div>
    )
  }
  export default Content;