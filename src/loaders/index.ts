import expressLoader from './express';
import sqlLoader from './sql';
import Logger from './logger';


export default async ({ expressApp }) => {
  const sqlConnection = await sqlLoader();
  
  Logger.info('✌️ Jobs loaded');
  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
  // return mongoConnection;
};
