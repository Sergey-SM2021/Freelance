import { memo, useEffect } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { FreelancersBody, FreelancersPaper, FreelancersWrapper, Pagination } from "./Freelancers.style"
import { Freelancer } from './Freelancer/FreelancersItem'
import { RootType } from "../../store/store"
import { HeaderPage } from "../HeaderPage/HeaderPage"
import { getFreelancers } from "../../store/reducers/freelancers/freelancersActions"

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
    return (isLoading ? <>Loading...</> : Error ? <Navigate to="/Error" /> : freelancers.length === 0 ? <>Пока нет фрилансеров</> :
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