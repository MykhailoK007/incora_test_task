import React, {useState} from "react";
import {Link} from "react-router-dom";


export const Popup = props =>{
    const [formData,changeData] = useState({title:'',body:''})
    const [errorMessage,setErrorMessage]=useState('')
    const handleChange =(e) =>{
        changeData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit =(e)=>{
        //Check on which page is popup
        let condition = (props.allFieldsRequired)? formData.title.length && formData.body.length
            : formData.title.length || formData.body.length
        if(condition){
            props.handleFunc([props.userId,formData.title,formData.body,props.postId||'']);
            props.togglePopup()
            setErrorMessage('');
            return true;
        }
        e.preventDefault();
        setErrorMessage('You need to fill in fields')
    }
    return <div className="form_wrapper">
        <form className='form'>
            <h3>{props.headline}</h3>
            <div className="errorField">{errorMessage || ''}</div>
            <div className='form_field'>
                <span>Title: </span>
            <input type="text" value={formData.title} name='title'onChange={handleChange}/>
            </div>
            <div className='form_field'>
                <span>Body: </span>
                <input type="text" value={formData.body} name='body'onChange={handleChange}/>
            </div>
            <Link to={props.redirectLink}>
                <input type="submit"  value='Accept' className='form__btn form__btn_submit'
                       onClick={handleSubmit}/>
            </Link>
            <input type="button" value="Cancel" className='form__btn form_btn_cancel'onClick={props.togglePopup}/>
        </form>
    </div>
}
