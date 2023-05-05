const LetterCircle = (props) => {
    const { letter } = props
    return (
        <>
            <span className="letter-circle float-right">{letter}</span>
        </>
    )
}
export default LetterCircle