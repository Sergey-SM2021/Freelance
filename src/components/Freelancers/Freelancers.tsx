import {
    FreelancersBody,
    FreelancersCount, FreelancersHeader,
    FreelancersPaper, FreelancersWrapper, Pagination, Search,
    SearchWarapper, SearchIcon
} from "./Freelancers.style"
import SearchIconPath from '../../assets/search.png'
import { Freelancer } from './Freelancer/Freelancer'
import { useSelector } from "react-redux"
import { RootType } from "../../store/store"

export const Freelancers = () => {
    const freelancers = useSelector((state: RootType)=>(state.freelancers.personsData))
    return (<FreelancersWrapper>
        <FreelancersPaper>
            <FreelancersHeader>
                <FreelancersCount>
                    Фрилансеры (93710)
                </FreelancersCount>
                <SearchWarapper >
                    <Search placeholder="Поиск фрилансеров" />
                    <SearchIcon src={SearchIconPath} onClick={() => { alert("searching...") }} />
                </SearchWarapper>
            </FreelancersHeader>
            <FreelancersBody>
                {freelancers.map(f => <Freelancer {...f}/>)}
            </FreelancersBody>
            <Pagination />
        </FreelancersPaper>
    </FreelancersWrapper>)
}