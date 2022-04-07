import { FreelancersCount, FreelancersHeader, Search, SearchIcon, SearchWarapper } from "./HeaderPage.style"
import SearchIconPath from '../../assets/search.png'

import { memo } from "react"
import { findFreelancerByName } from "../../store/reducers/freelancers/freelancersActions"
import { useDispatch } from "react-redux"

export const HeaderPage = memo(() => {
    const dispatch = useDispatch()
    const SearchHandler = () => {
        dispatch(findFreelancerByName("Юрий"))
    }
    return (<FreelancersHeader>
        <FreelancersCount>
            Фрилансеры (93710)
        </FreelancersCount>
        <SearchWarapper >
            <Search placeholder="Введите имя" />
            <SearchIcon src={SearchIconPath} onClick={ SearchHandler} />
        </SearchWarapper>
    </FreelancersHeader>)
})