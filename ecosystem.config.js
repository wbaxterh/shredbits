module.exports = {
  apps: [{
    name: 'shredbits',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-218-211-200.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/bitcoin-tracker.pem',
      ref: 'origin/master',
      repo: 'git@github.com:wbaxterh/shredbits.git',
      path: '/home/ubuntu/shredbits-2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
