import { FreelancersCount, FreelancersHeader, Search, SearchIcon, SearchWarapper } from "./HeaderPage.style"
import SearchIconPath from '../../assets/search.png'

import { FormEvent, memo, useState } from "react"
import { findFreelancerByName } from "../../store/reducers/freelancers/freelancersActions"
import { useDispatch, useSelector } from "react-redux"
import { RootType } from "../../store/store"

export const HeaderPage = memo(() => {
    const freelancersCount = useSelector((state:RootType) => (state.freelancers.count))
    const [searchValue, setNewSearchValue] = useState<string>("")
    const dispatch = useDispatch()
    const FindHandler = () => {
        dispatch(findFreelancerByName(searchValue))
    }
    const SearchHandler = (e:FormEvent<HTMLInputElement>) => {
        setNewSearchValue(e.currentTarget.value)
    }
    return (<FreelancersHeader>
        <FreelancersCount>
            Фрилансеры ({freelancersCount})
        </FreelancersCount>
        <SearchWarapper >
            <Search placeholder="Введите имя" value={searchValue} onChange={SearchHandler}/>
            <SearchIcon src={SearchIconPath} onClick={FindHandler} />
        </SearchWarapper>
    </FreelancersHeader>)
})