import {FreelancersBody, FreelancersPaper, FreelancersWrapper, Pagination} from "./Freelancers.style"
import { Freelancer } from './Freelancer/Freelancer'
import { useSelector } from "react-redux"
import { RootType } from "../../store/store"
import { HeaderPage } from "../HeaderPage/HeaderPage"

export const Freelancers = () => {
    const freelancers = useSelector((state: RootType) => (state.freelancers.personsData))
    return (<FreelancersWrapper>
        <FreelancersPaper>
            <HeaderPage />
            <FreelancersBody>
                {freelancers.map(freelancer => <Freelancer {...freelancer} />)}
            </FreelancersBody>
            <Pagination />
        </FreelancersPaper>
    </FreelancersWrapper>)
}