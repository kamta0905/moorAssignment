import React from 'react'
import userdata from "./userdata.json"
import './App.css'

const UIdesign = () => {

    return (
        <div>
            {
                userdata.map((user) => {
                    return (
                        <><table>
                            <tr>ID: {user.id}</tr>
                            <tr>Name: {user.name}</tr>
                            <tr>Email: {user.emailId}</tr>
                            <tr>Gender: {user.gender}</tr>
                            <tr>
                                <td>About me: {user.aboutMe}</td>


                                <tr className="alag">Joining Date: {user.joiningDate}</tr>
                                <td className="alag">Location: {user.location}</td>
                                <td className="alag">Department: {user.department}</td></tr>

                        </table>

                        </>
                    )
                })
            }

        </div>
    )
}

export default UIdesign
