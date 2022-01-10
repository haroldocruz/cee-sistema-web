const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
  serverUrl: 'http://localhost:9090',
  options: {
    'sonar.sources': 'src',
    'sonar.tests': 'src',
    'sonar.inclusions': 'src/**/*.ts,src/**/*.html,src/**/*.less', // Entry point of your code
    'sonar.test.inclusions': 'src/**/*.spec.ts',
    //  'sonar.test.inclusions': 'src/**/*.spec.ts,src/**/*.spec.jsx',
    //  'sonar.scm.provider': 'git',
  },
}, () => {
  console.log('Error Occurred while scanning');
});