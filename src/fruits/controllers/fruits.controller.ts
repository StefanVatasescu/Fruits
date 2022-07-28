import { Controller, Get, Post } from "@nestjs/common";
import { FruitsService } from "../services/fruits.service";

@Controller('fruits')
export class FruitsController{

    constructor( fruitService : FruitsService){}

    @Get('')
    fetchProducts(){
        this.fruitService.fetchProducts();
    }

    // @Get('')

    @Post('')

    // @Post('')
}