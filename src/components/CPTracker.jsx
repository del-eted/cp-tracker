import { Button } from 'react-bootstrap'
import React from 'react'

export default function CPTracker () {
    let [CPValue, setCPValue] = React.useState (0)
    let [TurnCounter, setTurnCounter] = React.useState (0)
    let [TurnCounterDisable, setTurnCounterDisable] = React.useState (false)
    let [Primary, setPrimaryValue] = React.useState(0)
    let [PrimaryCounterDisable, setPrimaryCounterDisable] = React.useState (true)
    // let [Secondary1, setSecondary1Value] = React.useState(0)

    // CP counter
    const handleAddCPClick = () => setCPValue (CPValue + 1)
    const handleSubtractCPClick = () => {
        if (CPValue>=1) {setCPValue (CPValue - 1)}
        else {}
    }

    //Turn Counter
    const HandleTurnCounter = () => {
        if (TurnCounter === 1) {
            setPrimaryCounterDisable (false)
            setTurnCounter (TurnCounter + 1)
        }
        else if (TurnCounter < 4) {
            setTurnCounter (TurnCounter + 1)
        }
        else {
            setTurnCounter (TurnCounter = 5); 
            setTurnCounterDisable (!TurnCounterDisable)
        }
    }

    //Primary VP Counter
    const handleAddPrimaryClick = (num) => setPrimaryValue (Primary + num)

    return(
        <div id="CPHolder">
            <div id="CPText">
                CP Value {CPValue}
            </div> <br></br>
            <div>
                <Button variant="success" onClick={() => handleAddCPClick()}>Add 1CP</Button>
                <Button variant="danger" onClick={() => handleSubtractCPClick()}>Remove 1CP</Button>
            </div>
            <br></br>

            <div class="column side">
                Round {TurnCounter}
                <br></br>
                <Button disabled={TurnCounterDisable} variant="success" onClick={() => HandleTurnCounter()}>Next Round</Button>
            </div>
            <div class="column side">
                Primary Objectives {Primary}
                <br></br>
                <Button disabled={PrimaryCounterDisable} onClick={() => handleAddPrimaryClick (1)}>+1</Button>
                <Button disabled={PrimaryCounterDisable} onClick={() => handleAddPrimaryClick (5)}>+5</Button>
            </div>

        </div>
    )
}