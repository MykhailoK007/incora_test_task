import React from "react";
import {Link} from "react-router-dom";


export const TableCell = props => {
    return <tr className='row'>
        {
            props.data.map((data,index)=> {
                return <td className='td' key={`${index}_${data}`}>{data}</td>
            })
        }
        {
            !props.isThead &&
            <td>
                <Link to={props.redirectLink}>
                    <input type="button" className="tableBtn"  value={props.btnValue} onClick={props.handleFunc}/>
                </Link>
            </td>
        }

    </tr>
}
