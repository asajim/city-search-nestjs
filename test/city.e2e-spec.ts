import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { CITIES_COUNT } from '../src/city/city.service';

describe('CityController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/cities (GET)', (done) => {
    request(app.getHttpServer())
      .get('/cities')
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveLength(CITIES_COUNT);
        done();
      });
  });

  it('/cities/count (GET)', (done) => {
    request(app.getHttpServer())
      .get('/cities/count')
      .then((res) => {
        expect(res.text).toEqual(CITIES_COUNT.toString());
        done();
      });
  });
});
