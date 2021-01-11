import {TableCell} from "./TableCell";
import React, {useState} from "react";
import {Popup} from "./Popup";


export const PageTemplate = props =>{
    const [activePopup,togglePopup] = useState(false);
    const handleClick=()=>{
        togglePopup(!activePopup)
    }
    return <div>
        <header>{props.isUserPage?"Users":"Posts"}</header>
        {!props.isUserPage &&
        <div className="btnAddNewWrapper">
                <input type="button" className="btnAddNew" value={'Add new'} onClick={()=>togglePopup(!activePopup)} />
        </div>}
        <div className="tableWrapper">
            <table className="usersDataTable">
                <thead>
                <TableCell data={props.tableHeadData} isThead={true}/>
                </thead>
                <tbody>
                {
                    props.isUserPage &&
                    props.list.map(userData => {
                    const {id,name,username,email} = userData;
                    return <TableCell data={[id, name, username, email]}
                                      key={`${id}_${name}`} handleFunc ={props.handleFunc.bind(this,id)}
                                      redirectLink={`/posts/${id}`} btnValue={'Posts'}/>
                })}
                {
                    !props.isUserPage &&
                    props.list.map(userData => {
                    const {id,userId,title,body} = userData;
                    return <TableCell data={[id, userId, title, body]}
                                      key={`${id}_${title}`}
                                      handleFunc ={props.handleFunc.bind(this,[id,userId,title,body])}
                                      btnValue={'Details'} redirectLink={`/post/${id}`}/>
                })
                }
                </tbody>
            </table>
        </div>
        {activePopup &&
        <Popup togglePopup={handleClick} redirectLink={`/posts/${props.currentUserId}`} headline={"Create Post"}
               allFieldsRequired={false} handleFunc={props.createPost} userId={props.currentUserId}

        />}
    </div>
}
