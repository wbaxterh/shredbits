module.exports = {
  apps : [{
    name: 'shredbits',
    script: './index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    //args: 'one two',
    //instances: 1,
    //autorestart: true,
    //watch: false,
    //max_memory_restart: '1G',
    //env: {
    //  NODE_ENV: 'development'
    //},
    //env_production: {
    //  NODE_ENV: 'production'
    //}
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-18-218-211-200.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/bitcoin-tracker.pem',
      ref  : 'origin/master',
      repo : 'git@github.com:wbaxterh/shredbits.git',
      path : '/home/ubuntu/tutorial-2',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
