import { Controller, Get } from "@nestjs/common";

@Controller("/app") // Decorator
export class AppController{

    @Get("/greetings") // Decorator
    getRootRoute(){
        return "hi there!";
    }

    @Get("/bye") // Decorator
    getByeThere(){
        return "bye there!";
    }
}

// export default AppController;