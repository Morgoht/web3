import vinci_logo from '../../vinci.png'
const Header = (props) => {
  

    return(
      <>
        <h1>{props.name}</h1>
        <img src={vinci_logo} alt="vinci"/>
          
      
      </>
    )
  }

  export default Header;