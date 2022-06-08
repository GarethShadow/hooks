import React, {useState} from "react";

const ObjectState = () => {
    const [person, setPerson] = useState({
        firstName: "Bob",
        lastName: "Smith"
    });

    const [firstName, setFirstName] = useState("Bob");
    const [lastName, setLastName] = useState("Smith");

    const changePerson = () => {
        setPerson((person) => {
            return {
                ...person,
                firstName: "Alexander"
            }
        });
    };

    return (
        <div>
            <div>
                <div>{firstName} {lastName}</div>
                <button onClick={() => setFirstName("Alexander")}>Click me</button>
            </div>
            <div>
                <div>{person.firstName} {person.lastName}</div>
                <button onClick={changePerson}>Change name</button>
            </div>

        </div>


    );
};

export default ObjectState