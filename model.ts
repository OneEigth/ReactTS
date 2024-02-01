export interface Product {
    productId: number
    title: string
    price: number
    description: string
    specifications: {
        resolution: string
        lensType: string
        fieldOfView: string
        irLEDs: number
        motionDetection: boolean
        videoAnalytics: boolean
        weatherproof: string
        operatingTemperature: string
        audioSupport: boolean
        connectionType: string
        powerSupply: string
        storage: string
        dimensions: string
        weight: string
        mountingType: string
        color: string
    };
    category: Category
    image: string
    article:string
    manufacturer: string
}

export interface CartItem {
    productId: string
    quantity: number
    price: number
}

export interface ShoppingCart {
    cartId: string
    userId: string
    items: CartItem[]
    totalItems: number
    totalPrice: number
}

export interface Category {
    categoryId: string
    categoryName: string
    description: string
}

export interface OrderItem {
    productId: string
    quantity: number
    price: number
}

export interface Order {
    orderId: string
    userId: string
    items: OrderItem[]
    totalItems: number
    totalPrice: number
    orderDate: Date
    status: string
}

export interface User {
    userId: string
    username: string
    email: string
    password: string
    address: Address
    orders: Order[]
}

export interface Address {
    street: string
    city: string
    zipCode: string
    country: string
}

export interface Review {
    reviewId: string
    productId: string
    userId: string
    rating: number
    comment: string
    date: Date
}

