import { FreelancersBody, FreelancersPaper, FreelancersWrapper, Pagination } from "./Freelancers.style"
import { Freelancer } from './Freelancer/FreelancersItem'
import { useDispatch, useSelector } from "react-redux"
import { RootType } from "../../store/store"
import { HeaderPage } from "../HeaderPage/HeaderPage"
import { memo, useEffect } from "react"
import { getFreelancers } from "../../store/reducers/freelancers/freelancersActions"
import { useLocation } from "react-router-dom"

export const Freelancers = memo(() => {
    const dispatch = useDispatch()
    const loc = useLocation().pathname
    useEffect(() => {
        dispatch(getFreelancers())
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [loc])
    const freelancers = useSelector((state: RootType) => (state.freelancers))
    return (<FreelancersWrapper>
        <FreelancersPaper>
            <HeaderPage />
            <FreelancersBody>
                {freelancers.map(freelancer => <Freelancer key={freelancer.id} {...freelancer} />)}
            </FreelancersBody>
            <Pagination />
        </FreelancersPaper>
    </FreelancersWrapper>)
})