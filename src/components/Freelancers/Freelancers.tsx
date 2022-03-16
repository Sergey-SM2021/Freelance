import {
    FreelancersBody,
    FreelancersCount, FreelancersHeader,
    FreelancersPaper, FreelancersWrapper, Pagination, Search,
    SearchWarapper, SearchIcon
} from "./Freelancers.style"
import SearchIconPath from '../../assets/search.png'

export const Freelancers = () => {
    return (<FreelancersWrapper>
        <FreelancersPaper>
            <FreelancersHeader>
                <FreelancersCount>
                    Фрилансеры (93710)
                </FreelancersCount>
                <SearchWarapper >
                    <Search placeholder="Поиск фрилансеров" />
                    <SearchIcon src={SearchIconPath} onClick={()=>{alert("searching...")}}/>
                </SearchWarapper>
            </FreelancersHeader>
            <FreelancersBody>
                <div>Freelancer</div>
            </FreelancersBody>
            <Pagination />
        </FreelancersPaper>
    </FreelancersWrapper>)
}