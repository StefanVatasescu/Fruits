import { Injectable } from "@nestjs/common";
import { CreateFruitsDto } from "../dtos/fruits.dto";

@Injectable()
export class FruitsService {
    constructor(){}

    private products: Product[] = []; 
    
    private lastProductId;

    fetchProducts(){
        return this.products;
    }

    fetchProduct(id: number){
        return this.products.find((user) => user.id === id);
    }

    addProduct( fruitDto: CreateFruitsDto){
        return this.products.push(fruitDto)
    }

    updateStock( id: number, quantity: number){
        this.lastProductId = this.products.find((user) => user.id === id)
        this.products.
    }
} 
