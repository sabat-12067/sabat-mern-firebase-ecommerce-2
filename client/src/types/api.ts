import { Product, User } from "./common"

export type CustomError = {
    status: number,
    data: {
        message: string,
        success: boolean
    }
}

export type MessageResponse = { success: boolean, message: string }

export type UserResponse = {
    success: boolean,
    user: User
}

export type AllProductsResponse = {
    success: boolean,
    products: Product[]
}

export type CategoryResponse = {
    success: boolean,
    categories: string[]
}

export type SearchProductsResponse = AllProductsResponse & {
    totalPage: number
}

export type SearchProductsParams = {
    price: number,
    page:number,
    category:string,
    search:string,
    sort:string
}