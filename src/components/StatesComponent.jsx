const StateBlocks = ({ className }) => {
    if(className === "TOO WEAK!") className = "TOO-WEAK";

    return <div className={"stateBlocks " + className}></div>;
}


export default function StatesComponent({passwordStates, counter}){
    return(
        <div className="statesContainer">
            <p>STRENGTH</p>
            <div>
                <p id='state'>{passwordStates.get(counter)}</p>
                <div id='stateBlocksContainer'>
                    <StateBlocks className={passwordStates.get(counter)}/>
                    <StateBlocks className={passwordStates.get(counter)}/>
                    <StateBlocks className={passwordStates.get(counter)}/>
                    <StateBlocks className={passwordStates.get(counter)}/>
                </div>
            </div>
        </div>
    )
}