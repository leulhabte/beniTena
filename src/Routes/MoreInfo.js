import React from 'react';
import {withRouter} from 'react-router-dom';

const MoreInfo = (props)=>{
    const [information, setInfo] = React.useState({});
    React.useEffect(()=>{
        setInfo(props.location.state.data);
    },[]);
    return(
        <div>
            More
            {information.id}
        </div>
    )
}

export default withRouter(MoreInfo);