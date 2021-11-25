import React from 'react'
import {useNavigate} from 'react-router-dom'
import { logOutTeam } from '../../redux/teamSlice'
import { fetchLogOut } from '../../redux/userSlice'
import { isAdmin } from '../../redux/adminSlice'
import {useDispatch, useSelector} from 'react-redux'
import { RiTodoLine } from 'react-icons/ri'
import styled from 'styled-components'

const NavBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const team = useSelector(state => state.team)

    const onClickTeams = () => {
        dispatch(logOutTeam())
        dispatch(isAdmin(false))
        navigate('/')
    }

    const handleLogOut = () => {
        dispatch(fetchLogOut('/logout'))
        dispatch(isAdmin(false))
        navigate('/')
    }

    return (
        <NavDiv className="NavDiv">
            <button onClick={onClickTeams}>Back to Teams</button>
            <div>
                <button onClick={() => navigate(`/${team.name}`)}>Home</button>
            </div>
            <button onClick={handleLogOut}>Logout</button>
        </NavDiv>
    )
}

const NavDiv = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #36a1d7;
`

export default NavBar
