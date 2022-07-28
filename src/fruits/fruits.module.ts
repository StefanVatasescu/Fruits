import { Module } from "@nestjs/common";
import { FruitsController } from "./controllers/fruits.controller";
import { FruitsService } from "./services/fruits.service";

@Module({
    imports: [],
    controllers: [FruitsController],
    providers: [FruitsService],
    exports: [],
})
export class FruitsModule {}