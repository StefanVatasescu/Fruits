import { Injectable } from "@nestjs/common";
import { CreateFruitsDto as Product } from "../dtos/fruits.dto";

@Injectable()
export class FruitsService {
    constructor(){}

    private products: Product[] = []; 
    
    private lastProductId : number = -1;

    fetchProducts(){
        return this.products;
    }

    fetchProduct(id: number){
        return this.products.find((e) => e.id == id);
    }

    addProduct( fruitDto: Product){
        this.lastProductId ++
        this.products.push(fruitDto)
        this.products[this.lastProductId].id = this.lastProductId;
        return this.products[this.lastProductId]
    }

    updateStock( id: number, qty: number){
        this.products.find((e) => e.id == id).quantity += qty;          
    }
}
