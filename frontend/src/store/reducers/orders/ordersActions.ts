import { IOrder } from './../../../models/IOrder'
import { constants, IEndLoading, ISetOrders, IStartLoading } from "./ordersTypes"

export const StartLoading = (): IStartLoading => ({
    type: constants.STARTORDERSLOADING
})

export const EndLoading = (): IEndLoading => ({
    type: constants.ENDORDERSLOADING
})

export const SetOrders = (orders: Array<IOrder>): ISetOrders => ({
    payload: orders,
    type: constants.SETORDERS
})

const orders: Array<IOrder> = [{
    price: 100000,
    skills: [{id:87665,name:"Nuxt",order:9986},
    {id:5625,name:"Nest",order:9986}],
    views: 89,
    id: 9986,
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis arcu vitae pretium venenatis.
    Ut consectetur pharetra arcu nec rutrum. Aliquam aliquet libero eget bibendum hendrerit. Proin ultrices ultrices consectetur.
    Nam porta sem erat, ac fringilla risus faucibus sodales. Donec a finibus massa. Quisque id elit sit amet leo ultricies pellentesque
    vitae in libero. Aliquam aliquet, sem non malesuada porttitor, magna sapien tincidunt dolor, eu fermentum magna arcu sit amet purus.
    In hac habitasse platea dictumst. Vivamus a ipsum lacinia quam 
    pellentesque sollicitudin ut a arcu. In dui leo, dictum ac neque ac, euismod mollis neque. Vivamus eget fringilla ante.
    Suspendisse semper dui et aliquam lobortis. Quisque malesuada vel elit ut porttitor. Phasellus sollicitudin magna 
    ut sapien laoreet sollicitudin. Duis lacinia pretium est, at finibus mauris condimentum eget. Orci varius natoque penatibus et
    magnis dis parturient montes, nascetur ridiculus mus. Nunc a porta magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec dignissim tincidunt libero non sagittis. Cras ac lectus nunc. Nulla elementum nibh enim, vel dapibus nisl cursus eget.
    In hac habitasse platea dictumst. Quisque eget erat lectus. Donec convallis velit quis lacinia convallis. Nulla pellentesque,
    dolor ac consequat semper, purus dui dictum sapien, in egestas sem sem nec magna.`,
    sphereOfActivity: "Frontend",
    title: "Разработать копию Хабр фриланса",feedbacks:[]
},
{
    price: 100000,
    skills: [{id:87665,name:"Nuxt",order:9986}],
    views: 89,
    id: 9986,
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis arcu vitae pretium venenatis.
    Ut consectetur pharetra arcu nec rutrum. Aliquam aliquet libero eget bibendum hendrerit. Proin ultrices ultrices consectetur.
    Nam porta sem erat, ac fringilla risus faucibus sodales. Donec a finibus massa. Quisque id elit sit amet leo ultricies pellentesque
    vitae in libero. Aliquam aliquet, sem non malesuada porttitor, magna sapien tincidunt dolor, eu fermentum magna arcu sit amet purus.
    In hac habitasse platea dictumst. Vivamus a ipsum lacinia quam 
    pellentesque sollicitudin ut a arcu. In dui leo, dictum ac neque ac, euismod mollis neque. Vivamus eget fringilla ante.
    Suspendisse semper dui et aliquam lobortis. Quisque malesuada vel elit ut porttitor. Phasellus sollicitudin magna 
    ut sapien laoreet sollicitudin. Duis lacinia pretium est, at finibus mauris condimentum eget. Orci varius natoque penatibus et
    magnis dis parturient montes, nascetur ridiculus mus. Nunc a porta magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec dignissim tincidunt libero non sagittis. Cras ac lectus nunc. Nulla elementum nibh enim, vel dapibus nisl cursus eget.
    In hac habitasse platea dictumst. Quisque eget erat lectus. Donec convallis velit quis lacinia convallis. Nulla pellentesque,
    dolor ac consequat semper, purus dui dictum sapien, in egestas sem sem nec magna.`,
    sphereOfActivity: "Frontend",
    title: "Разработать копию Хабр фриланса",feedbacks:[]
}]

export const fetchOrders = () => async (dispatch: any) => {
    dispatch(StartLoading())
    setTimeout(() => {
        dispatch(SetOrders(orders))
        dispatch(EndLoading())
    }, 1000)

}

