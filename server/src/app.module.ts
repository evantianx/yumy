import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { validationSchema } from './config/envValidationSchema';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      validationSchema,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot(),
    RestaurantsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
