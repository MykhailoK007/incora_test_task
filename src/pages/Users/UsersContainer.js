import {connect} from "react-redux";
import React from "react";
import {setUserPostsThunk, setUsersListThunk} from "../../redux/reducer";
import {PageTemplate} from "../../components/PageTemplate"

class UsersContainer extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        this.props.setUsersListThunk()
    }
    handleClick(id){
        this.props.setUserPostsThunk(id)
    }
    render(){
        return <PageTemplate list={this.props.usersList}
                              handleFunc={this.handleClick}
                              tableHeadData={['ID','NAME','USERNAME','EMAIL']} isUserPage={true}/>
    }
}
const mapStateToProps = state => ({usersList: state.usersList})

export default connect(mapStateToProps,{setUsersListThunk,setUserPostsThunk})(UsersContainer)
