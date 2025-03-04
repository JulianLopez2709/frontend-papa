export interface FoodResonde {
    food_id: number;
    name: string;
    description: string;
    price: number;
    available: boolean;
    type: string;
    createdAt: string;
    updatedAt: string;
}

export interface OrderFood {
    extras: string[];
    food: FoodResonde;
    notes : string;
}

export interface OrderResponde {
    order_id: number;
    user_id: number;
    order_status: string;
    total_price: number;
    createdAt: string;
    updatedAt: string;
    order_foods: OrderFood[];
    table : number;
}
