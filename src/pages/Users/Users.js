import React from "react"
import {TableCell} from "../../components/TableCell";


export const Users = props => {
    const tableHeadData = ['ID','NAME','USERNAME','EMAIL'];
    return <div >
        <header>Users</header>
        <div className="tableWrapper">
            <table className="usersDataTable">
                <thead>
                <TableCell data={tableHeadData} isThead={true}/>
                </thead>
                <tbody>
                {props.usersList.map(userData => {
                    const {id,name,username,email} = userData;
                    return <TableCell data={[id, name, username, email]}
                                      key={`${id}_${name}`} handleFunc ={props.handleFunc}/>
                })}
                </tbody>
            </table>
        </div>

    </div>
}
