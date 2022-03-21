import {
    SideBarWrapper, SideBarSection,
    SideBarTitle, SideBarList, SideBarInner, SideBarItem
} from "./SideBar.style"

export const SideBar = () => {
    return (<SideBarWrapper>
        <SideBarInner>
            <SideBarSection>
                <SideBarTitle>
                    Сфера деятельности
                </SideBarTitle>
                <SideBarList>
                    <div><SideBarItem><input type="checkbox"/>Frontend</SideBarItem></div>
                    <div><SideBarItem><input type="checkbox"/>Backend</SideBarItem></div>
                    <div><SideBarItem><input type="checkbox"/>Mobile</SideBarItem></div>
                    <div><SideBarItem><input type="checkbox"/>GameDev</SideBarItem></div>
                </SideBarList>
            </SideBarSection>
        </SideBarInner>
    </SideBarWrapper>)
}