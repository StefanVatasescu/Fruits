import { Injectable } from "@nestjs/common";
import { CreateFruitsDto as Product } from "../dtos/fruits.dto";
import { qtyDto } from "../dtos/quantity.dto";

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

    updateStock( id: number, qty: qtyDto){
        const index = this.products.findIndex((e) => e.id == id) ; 
        console.log(Number(this.products[index].quantity), qty)
        this.products[index].quantity = Number(this.products[index].quantity) + qty.quantity
        return id;      
    }
}