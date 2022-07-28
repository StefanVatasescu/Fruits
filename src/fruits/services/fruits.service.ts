import { Injectable } from "@nestjs/common";
import { CreateFruitsDto } from "../dtos/fruits.dto";

@Injectable()
export class FruitsService {
    constructor(){}

    private products: Product[] = []; 

    fetchProducts(){
        return this.products;
    }

    addProduct( fruitDto: CreateFruitsDto){
        this.products.push(fruitDto)
    }
}