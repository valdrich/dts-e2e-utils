import { Config } from 'protractor';

export const config: Config = {
  directConnect: true,

  params: {
    oeConfig: {
      host: 'localhost',
      port: 2390,
      dlcHome: 'C:/dlc116',
      outDir: 'C:/tmp',
      iniFile: '//jv-fwk-dev02/docker/projects/datasul/Teste-Datasul-12.1.20/datasul-progress.ini',
      parameterFile: '//jv-fwk-dev02/docker/projects/datasul/Teste-Datasul-12.1.20/datasul-connect.pf',
      startupFile: `${__dirname.replace(/\\/g, '/')}/_resources/startup.p`,
      startupFileParams: ['super', 'super@123'],
      inputCodepage: 'ISO8859-1'
    }
  },

  specs: ['**/1-**.spec.js'],
};