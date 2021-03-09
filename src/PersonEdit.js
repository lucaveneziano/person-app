import React, { useEffect, useState } from "react";

const PersonEdit = ({onSubmit, person}) => {
    const [firstName, setFirstName] = useState(person.firstName);
    const [lastName, setLastName] = useState(person.lastName);
    return (
        <div className="person-edit">
            <input type="hidden" className="person-edit-id" value={person.id}></input>
            <div>
                <label>First Name</label>
                <input type="text"  className="person-edit-fname" value={firstName} onChange={e => setFirstName(e.target.value)} ></input>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text"  className="person-edit-lname" value={lastName} onChange={e => setLastName(e.target.value)} ></input>
            </div>
            <button onClick={()=>onSubmit(person.id, firstName, lastName)}>Submit</button>
        </div>
    )
}
/*
function PersonEdit(props) {
    const [firstName, setFirstName] = useState(props.person.first_name);
    const [lastName, setLastName] = useState(props.person.last_name);

    return (
        <div className="person-edit">
            <input type="hidden" className="person-edit-id" value={props.person.id}></input>
            <div>
                <label>First Name</label>
                <input type="text"  className="person-edit-fname" value={firstName} onChange={e => setFirstName(e.target.value)} ></input>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text"  className="person-edit-lname" value={lastName} onChange={e => setLastName(e.target.value)} ></input>
            </div>
            <button onClick={()=>props.handleClick(props.person.id, firstName, lastName)}>Submit</button>
        </div>
    );
}

*/
export default PersonEdit;
