import { FreelancersCount, FreelancersHeader } from "./HeaderPage.style"
import {Search} from '../Search/Search'
import { FormEvent, memo, useState } from "react"
import { findFreelancerByName } from "../../store/reducers/freelancers/freelancersActions"
import { useDispatch, useSelector } from "react-redux"
import { RootType } from "../../store/store"

export const HeaderPage = memo(() => {
    const freelancersCount = useSelector((state:RootType) => (state.freelancers.count))
    const dispatch = useDispatch()
    const FindHandler = (value:string) => {
        dispatch(findFreelancerByName(value))
    }
    return (<FreelancersHeader>
        <FreelancersCount>
            Фрилансеры ({freelancersCount})
        </FreelancersCount>
        <Search placeholder="Сергий" onFilter={FindHandler} onFind={FindHandler}/>
    </FreelancersHeader>)
})