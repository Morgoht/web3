import Content from "components/Content/Content_part"
import Header from "components/Header/Header"

const Course = (props) => {
    const parts = props.parts
    const name = props.name
    return(
        <>
            <Header name={name} />
            <Content parts = {parts} />
        je suis Course
        </>
    )
}
export default Course