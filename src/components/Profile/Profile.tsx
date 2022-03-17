import avaPath from '../../assets/man.png'
import {
    Ava, PaymentMethod, ProfileResume,
    ProfileAboute, ProfileExpiriens, ProfileHeader,
    ProfileHeaderAbout, ProfileHeaderContent, ProfileHeaderName,
    ProfilePaper, ProfilePortfolio, ProfilePrice,
    ProfileReviews, ProfileSectionTitle, ProfileWrapper, ProfileSkill,
    ProfileSkills, ProfileSkillTitle, ProfilePortfolioContainer, 
    PortfolioProject, ProfileReviewsInner
} from './Profile.style'
import bg from '../../assets/bg.jpg'

export const Profile = () => {
    return (<ProfileWrapper>
        <ProfilePaper>
            <ProfileHeader bg={bg}>
                <Ava src={avaPath} />
                <ProfileHeaderContent>
                    <ProfileHeaderName>ProfileName</ProfileHeaderName>
                    <ProfileHeaderAbout>Front-end (Typescript+React)</ProfileHeaderAbout>
                </ProfileHeaderContent>
            </ProfileHeader>
            <ProfileSectionTitle>
                <h3>Обо мне</h3>
            </ProfileSectionTitle>
            <ProfileAboute>
                <ProfilePrice>
                    <h4>Стоимость работы:</h4>
                    <p>от 2 500 руб. за час</p>
                </ProfilePrice>
                <ProfileExpiriens>
                    <h4>Профессиональный опыт:</h4>
                    <p>более 10 лет</p>
                </ProfileExpiriens>
                <PaymentMethod>
                    <h4>Способы оплаты:</h4>
                    <p>безналичный расчёт, электронные деньги</p>
                </PaymentMethod>
                <ProfileResume>
                    Приветствую! ✊

                    Меня зовут Роман. Я руководитель цифровых продуктов, продюсер интернет-проектов и стартап-менеджер.
                    Имею 15-летний опыт в диджитал-сфере, из которых последние 10 лет работаю на руководящих позициях.

                    ✦ Ключевые компетенции:

                    — Продуктовый менеджмент;
                    — Проектный менеджмент;
                    — Операционный менеджмент.

                    ✦ Чем могу быть полезен:

                    Цели и стратегия
                    Разработаю краткосрочные и долгосрочные цели, позиционирование, дорожную карту и стратегию запуска проекта.

                    Планирование
                    Подготовлю техническое задание, сметную и проектную документацию, карту связей и детальный план запуска проекта.

                    Декомпозиция
                    Разделю проект на отдельные итерации и релизы, задачи и подзадачи, назначу ответственных и расставлю приоритеты.

                    Инструменты и сервисы
                    Настрою инструменты и сервисы для совместной работы, планирования, генерации идей, аналитики, отчетности и коммуникации.

                    Команда проекта
                    Сформирую кросс-функциональную и эффективную команду опытных, компетентных специалистов и подрядчиков.

                    Процессы
                    Организую прозрачный процесс вовлеченности, мотивации и эффективного взаимодействия между всеми участниками процесса.

                    Контроль и результат
                    Проконтролирую качество и сроки реализации проекта, подготовлю итоговые отчеты, проведу демонстрацию и презентацию проекта.

                    ✦ Контакты:

                    Сайт | www.enaev.pro
                    Почта | roman@enaev.pro
                    Telegram | t.me/enairoma
                    WhatsApp | wa.me/enairoma
                    Facebook | m.me/enairoma

                </ProfileResume>
                <ProfileSkills>
                    <ProfileSkillTitle>Ключевые навыки:</ProfileSkillTitle>
                    <ProfileSkill>Redux</ProfileSkill>
                    <ProfileSkill>Vue</ProfileSkill>
                    <ProfileSkill>Angular</ProfileSkill>
                    <ProfileSkill>Coa</ProfileSkill>
                </ProfileSkills>
            </ProfileAboute>
            <ProfilePortfolio>
                <ProfileSectionTitle><h3>Портфолио (9)</h3></ProfileSectionTitle>
                <ProfilePortfolioContainer>
                    <PortfolioProject>1</PortfolioProject>
                    <PortfolioProject></PortfolioProject>
                    <PortfolioProject>2</PortfolioProject>
                    <PortfolioProject>3</PortfolioProject>
                    <PortfolioProject>4</PortfolioProject>
                    <PortfolioProject></PortfolioProject>
                    <PortfolioProject>1</PortfolioProject>
                    <PortfolioProject></PortfolioProject>
                    <PortfolioProject>2</PortfolioProject>
                </ProfilePortfolioContainer>
            </ProfilePortfolio>
            <ProfileReviews>
                <ProfileSectionTitle><h3>Отзывы</h3></ProfileSectionTitle>
                <ProfileReviewsInner/>
            </ProfileReviews>
        </ProfilePaper>
    </ProfileWrapper>)
}