import {IOrderOverview} from "../../../models/IOrderOverview"
import {TClientApi} from "../../../models/IClient"

export type actionType = any

export interface IOrderReducerInitialState{
    order: IOrderOverview,
    client: TClientApi
}

export type TOrderReduceraction = any