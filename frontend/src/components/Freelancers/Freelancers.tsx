import { FreelancersBody, FreelancersPaper, FreelancersWrapper, Pagination } from "./Freelancers.style"
import { Freelancer } from './Freelancer/FreelancersItem'
import { RootType } from "../../store/store"
import { HeaderPage } from "../HeaderPage/HeaderPage"
import { getFreelancers } from "../../store/reducers/freelancers/freelancersActions"

import { memo, useEffect } from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

export const Freelancers = memo(() => {
    const dispatch = useDispatch()
    const loc = useLocation().pathname
    useEffect(() => {
        dispatch(getFreelancers())
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [loc])
    const freelancers = useSelector((state: RootType) => (state.freelancers.freelancers))
    const isLoading = useSelector((state: RootType) => (state.freelancers.loading))
    const Error = useSelector((state: RootType) => (state.freelancers.error))
    return (isLoading ? <>Loading...</> : Error ? <Navigate to="/Error"/> :
        <FreelancersWrapper>
            <FreelancersPaper>
                <HeaderPage />
                <FreelancersBody>
                    {freelancers.map(freelancer => <Freelancer key={freelancer.id} {...freelancer} />)}
                </FreelancersBody>
                <Pagination />
            </FreelancersPaper>
        </FreelancersWrapper>
    )
})