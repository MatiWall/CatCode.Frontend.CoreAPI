import {ResourceApi, Configuration} from '../src'

const config = new Configuration({basePath: "http://localhost:8000/api/core-api"});

const api = new ResourceApi(config);


api.getResources({type:'systems'}).then(res =>console.log(res.data));