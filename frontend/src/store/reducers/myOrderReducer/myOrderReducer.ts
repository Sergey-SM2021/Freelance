import { MyOrderInitialState } from "./myOrderReducerTypes"

const InitialState: MyOrderInitialState = {
    Order: {
        description: `
        On the other hand, we denounce with righteous indignation
        and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,
        so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; 
        and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying 
        through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, 
        when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every 
        pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the 
        obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man 
        therefore always holds in these matters to this principle of
        selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.`,
        feedbacks: [{
            freelancer: {
                id: 8989,
                mail: "gshgsah@ghsa",
                password: "898jjk",
                type: "freelancer",
                name: "Олег",
                lastname: "Джейсон",
                ava: null,
                specialization: "React",
                description: "java script dev more then ten years...",
                expiriens: "5 years next / nest",
                price: 78000,
                paymentmethod: null,
                dislike: null,
                likes: null,
                stack: [],
                review: [],
                workhistory: [],
            },
            message: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure 
            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the 
            undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
            by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem
            Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
        },
        {
            freelancer: {
                id: 8989,
                mail: "gshgsah@ghsa",
                password: "898jjk",
                type: "freelancer",
                name: "Олег",
                lastname: "Джейсон",
                ava: null,
                specialization: "React",
                description: "java script dev more then ten years...",
                expiriens: "5 years next / nest",
                price: 78000,
                paymentmethod: null,
                dislike: null,
                likes: null,
                stack: [],
                review: [],
                workhistory: [],
            },
            message: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure 
            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the 
            undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
            by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem
            Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
        }
        ],
        id: 907,
        price: 8888,
        skills: [{ id: 778, name: ".Net", order: 907 }],
        sphereOfActivity: "Frontend",
        title: "Next js Сайт",
        views: 89
    },
    error: null,
    isLoading: false
}

export const myOrder = (state = InitialState, action: any) => {
    let stateCopy = { ...state }
    switch (action.type) {
        case "":

        default:
            return stateCopy
    }
}