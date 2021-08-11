import {writeFile} from 'fs';

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `export const environment = {
    production: true,
  domain: '${process.env.DOMAIN_KEY}',
  clientId: '${process.env.CLIENTID_KEY}'
};
`;
writeFile(targetPath, envConfigFile, 'utf8', (err)=>{
    if(err){
        return console.log(err);
    }
});