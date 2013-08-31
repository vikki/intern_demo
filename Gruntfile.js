/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    shell : {
      startLocalSeleniumServer : {
          // TODO more flexibility in version numbers, OS type / automated switching
          // better approach would allow callbacks when its ready also
          command: 'java -jar test/resources/selenium-2.33.0/selenium-2.33.0/selenium-2.33.0/selenium-server-standalone-2.33.0.jar  -Dwebdriver.chrome.driver=test/resources/chromedriver_mac32_2.1/chromedriver',
          options: {
              stdout: true,
              stderr: true
          }
      },
      startSauceSeleniumConnect: {
          // better approach would allow callbacks when its ready also
          // can you do async shell or do you have to manually drive it as an async task?
          command: 'node test/start_sauce.js',
          options: {
              stdout: true,
              stderr: true
          }
      }
    },
    intern: {
      local: {
        options: {
          config: 'test/local_intern'
        }
      },
      sauce: {
        options: {
          config: 'test/sauce_intern'
        }
      },
      options: {
          runType: 'runner',
          reporters: [ 'console']
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('intern');

  // Default task.
  grunt.registerTask('default', []);
};
