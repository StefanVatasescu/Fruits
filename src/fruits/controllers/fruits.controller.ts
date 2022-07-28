import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateFruitsDto } from "../dtos/fruits.dto";
import { FruitsService } from "../services/fruits.service";

@Controller('fruits')
export class FruitsController{

    constructor( fruitService : FruitsService){}

    @Get('')
    fetchProducts(){
        this.fetchProducts();
    }

    // @Get('')

    @Post('products')
        addProduct(@Body() createFruitDto: CreateFruitsDto){
            this.fruitService.addProduct(createFruitDto);
    }

    // @Post('')
}