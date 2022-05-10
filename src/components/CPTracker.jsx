import { Button, Modal } from 'react-bootstrap'
import React from 'react'

export default function CPTracker () {
    let [CPValue, setCPValue] = React.useState (0)
    let [TurnCounter, setTurnCounter] = React.useState (0)
    let [TurnCounterDisable, setTurnCounterDisable] = React.useState (false)
    let [Primary, setPrimaryValue] = React.useState(0)
    let [PrimaryCounterDisable, setPrimaryCounterDisable] = React.useState (true)
    let [showReset, setShowReset] = React.useState (false)

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
    const handleAddPrimaryClick = (num) => {
        if ((Primary + num) < 45) {
            setPrimaryValue (Primary + num)
        }
        else {
            setPrimaryValue (45)
        }
    }
    const handlePrimaryClickDown = () => {
        if (Primary >0) {
            setPrimaryValue (Primary - 1)
        }
        else {}
    }

    //Reset Functionality
    const resetPopupHandler = () => setShowReset (!showReset)
    const resetFunctionHandler =() => {
        setCPValue (0)
        setTurnCounter (0)
        setTurnCounterDisable (false)
        setPrimaryValue (0)
        setPrimaryCounterDisable (true)
        setShowReset (false)
    }

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
                <Button onClick={() => handlePrimaryClickDown ()}>-1</Button>
                <Button disabled={PrimaryCounterDisable} onClick={() => handleAddPrimaryClick (1)}>+1</Button>
                <Button disabled={PrimaryCounterDisable} onClick={() => handleAddPrimaryClick (5)}>+5</Button>
            </div>

            <br></br>
            <br></br>
            <div id="CPText">
                <Button variant="danger" onClick={() => resetPopupHandler ()}>Reset Counters</Button>

                <Modal show={showReset} onHide={() => resetPopupHandler ()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Reset the Counter</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>This will reset all counters to zero, are you sure?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => resetPopupHandler ()}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={() => resetFunctionHandler ()}>
                            Reset
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </div>
    )
}