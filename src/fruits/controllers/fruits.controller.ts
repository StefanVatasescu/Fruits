import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateFruitsDto } from "../dtos/fruits.dto";
import { FruitsService } from "../services/fruits.service";

@Controller('fruits')
export class FruitsController{

    constructor( private fruitService : FruitsService){}

    @Get('products')
    fetchProducts(){
        return this.fruitService.fetchProducts();
    }

    @Get('products/:id')
    fetchProduct(@Param('id') id: number){
        return this.fruitService.fetchProduct(id);
    }

    @Post('products')
    addProduct(@Body() createFruitDto: CreateFruitsDto){
        this.fruitService.addProduct(createFruitDto);
    }

    @Post('products/:id/update-stock')
    updateStock(@Param('id') id: number, @Body() qty: number){
        this.fruitService.updateStock(id, qty);
    }
}