import {
    FreelancersBody,
    FreelancersCount, FreelancersHeader,
    FreelancersPaper, FreelancersWrapper, Pagination, Search,
    SearchWarapper, SearchIcon
} from "./Freelancers.style"
import SearchIconPath from '../../assets/search.png'
import {Freelancer} from './Freelancer/Freelancer'

export const Freelancers = () => {
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
                <Freelancer/>
            </FreelancersBody>
            <Pagination />
        </FreelancersPaper>
    </FreelancersWrapper>)
}