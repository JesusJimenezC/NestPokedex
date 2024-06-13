import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const pokemonToInsert: Pokemon[] = [];

    for (const { name, url } of data.results) {
      const segments = url.split('/');
      const no = Number(segments[segments.length - 2]);

      pokemonToInsert.push({ name, no } as Pokemon);
    }

    console.log(pokemonToInsert);

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed executed successfully!';
  }
}
