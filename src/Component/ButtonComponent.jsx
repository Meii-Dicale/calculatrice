const ButtonComponent = ({textToDisplay, functionToDo}) => { 
    return <>
    <button onClick={ functionToDo}>{textToDisplay}</button>
    </>
}

export default ButtonComponent;