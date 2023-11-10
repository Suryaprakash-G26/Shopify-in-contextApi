/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Main from "../Components/Main"
import Workspace from "../Components/Workspace"

export default function Mainpage({info}){

    return(
        <Workspace>
            <Main info={info}/>
        </Workspace>
    )
}