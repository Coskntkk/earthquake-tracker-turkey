function Left({toggleFaults, setToggleFaults}){

    function handleToggle(){
        setToggleFaults(!toggleFaults);
    };

    return (
        <button onClick={() => handleToggle()}>Fault Lines</button>
    )
};

export default Left;