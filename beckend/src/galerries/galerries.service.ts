import { Injectable,HttpService} from '@nestjs/common';
import { CreateGalerryDto } from './dto/create-galerry.dto';
import { UpdateGalerryDto } from './dto/update-galerry.dto';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GalerriesService {

 
  constructor(private readonly http: HttpService) {}

  create(createGalerryDto: CreateGalerryDto) {
    return 'This action adds a new galerry';
  }

  findAll() {
    const DATA_URL = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=&format=json&nojsoncallback=true';
    return this.http.get(DATA_URL).pipe(
      map((axiosResponse: AxiosResponse) => {
         return axiosResponse.data;
      })
      );

  }

  findOne(id: string) {
    const DATA_URL = `https://api.flickr.com/services/feeds/photos_public.gne?tags=${id}&format=json&nojsoncallback=true`;
    return this.http.get(DATA_URL).pipe(
      map((axiosResponse: AxiosResponse) => {
         return axiosResponse.data;
      })
      );
    
  }

  update(id: number, updateGalerryDto: UpdateGalerryDto) {
    return `This action updates a #${id} galerry`;
  }

  remove(id: number) {
    return `This action removes a #${id} galerry`;
  }
}
