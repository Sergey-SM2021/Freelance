import { Container } from "../Common.style"
import { FooterGrid, FooterWrapper, SocialNetwork, SocialNetworks } from "./Footer.style"
import { FooterItems } from "./FooterItem"
import vk from '../../assets/vk.png'
import facebook from '../../assets/facebook.png'
import telegram from '../../assets/telegram.png'
import twitter from '../../assets/twitter.png'

import { useLocation } from "react-router-dom"

export const Footer = () => {
    const isIntro = useLocation().pathname.length>1?false:true
    return (<FooterWrapper>
        <Container>
            <FooterGrid>
                <div>
                    <FooterItems isIntro={isIntro} title="Фриланс" links={["О сервисе", "Услуги и цены", "Контакты"]} />
                </div>
                <div>
                    <FooterItems isIntro={isIntro} title="Помощь" links={["Для фрилансера", "Для работодателя", "Служба поддержки"]} />
                </div>
                <div>
                    <FooterItems isIntro={isIntro} title="Документы" links={["Соглашение с пользователем", "Правила оказания услуг"]} />
                </div>
                <SocialNetworks>
                    <SocialNetwork src={vk}/>
                    <SocialNetwork src={facebook}/>
                    <SocialNetwork src={telegram}/>
                    <SocialNetwork src={twitter}/>
                </SocialNetworks>
                <div>
                    @Sergiy
                </div>
            </FooterGrid>
        </Container>
    </FooterWrapper>)
}

