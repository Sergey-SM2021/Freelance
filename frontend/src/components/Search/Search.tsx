import {memo, SyntheticEvent, useState} from "react"

import {SearchFilter, SearchFind, SearchInner, SearchInput, SearchWarapper} from "./Search.style"
import SearchIconPath from "../../assets/search.png"
import FilterIconPath from "../../assets/filter.png"

interface ISearch{
    onFind:(SearchValue:string)=>void,
    onFilter:(SearchValue:string)=>void,
    placeholder:string
}

export const Search = memo(({onFind,placeholder,onFilter}:ISearch) => {
    const [value,setValue] = useState<string>("")
    const handlerChange = (e:SyntheticEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return(<SearchWarapper >
        <SearchInner>
            <SearchInput placeholder={placeholder} value={value} onChange={handlerChange}/>
            <SearchFind src={SearchIconPath} onClick={()=>onFind(value)}/>
            <SearchFilter src={FilterIconPath} onClick={()=>onFilter(value)}/>
        </SearchInner>
    </SearchWarapper>)
})