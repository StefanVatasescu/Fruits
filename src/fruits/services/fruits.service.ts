import { Injectable } from "@nestjs/common";

@Injectable()
export class FruitsService {
    constructor(){}

    private products: Product[] = []; 

    fetchProducts(){
        return this.products;
    }


    createProduct(){
        
    }

}