import React from "react";

export default ({onEdit, people = []}) =>
    <ul>{people.map((person, i) =>
        <li className="person-item" key={i}>{person.firstName} {person.lastName} <a className="person-edit-link" onClick={() => onEdit(person)}>edit</a></li>)}
    </ul>;
/*
function PersonList(props) {
    return (
        <div className="person-edit">
            <ul>
            {props.personData.map((person) => 
                <li className="person-item">
                    <label className="person-name">{person.first_name} {person.last_name}</label>
                    <span className="person-edit-link" onClick={()=>props.handleClick("edit", person.id)}>edit</span>
                </li>
            )}
            </ul>
        </div>
    );
}

export default PersonList;
*/
