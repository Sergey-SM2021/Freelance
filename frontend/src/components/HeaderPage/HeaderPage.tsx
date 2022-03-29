import { FreelancersCount, FreelancersHeader, Search, SearchIcon, SearchWarapper } from "./HeaderPage.style"
import SearchIconPath from '../../assets/search.png'
import { memo } from "react"

export const HeaderPage = memo(() => {
    return (<FreelancersHeader>
        <FreelancersCount>
            Фрилансеры (93710)
        </FreelancersCount>
        <SearchWarapper >
            <Search placeholder="Поиск фрилансеров" />
            <SearchIcon src={SearchIconPath} onClick={() => { alert("searching...") }} />
        </SearchWarapper>
    </FreelancersHeader>)
})