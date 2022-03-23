import { FreelancersBody, FreelancersPaper, FreelancersWrapper, Pagination } from "./Freelancers.style"
import { Freelancer } from './Freelancer/FreelancersItem'
import { useDispatch, useSelector } from "react-redux"
import { RootType } from "../../store/store"
import { HeaderPage } from "../HeaderPage/HeaderPage"
import { useEffect } from "react"
import { getFreelancers } from "../../store/reducers/freelancers/freelancersActions"

export const Freelancers = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFreelancers())
    }, [])
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