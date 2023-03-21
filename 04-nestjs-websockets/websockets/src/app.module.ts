import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {EventsModule} from "./events/events.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModule} from "./user/user.module";
import {UserEntity} from "./user/user.entity";

@Module({
    imports: [ // Imports other modules.
        EventsModule,
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: './bdd/bdd.sqlite',
            entities: [
                // app.module.ts
                UserEntity
            ], // Entities
            synchronize: true, // Synchronize the database with the entities.
            dropSchema: false, // Drop the schema when the application is started.
        }),
        UserModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
