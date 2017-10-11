const log = require('../helpers/log');

class Index {
  static list(req, res) {
    log('list');
    const response = {
      message: "Hi Pivotal team! Hope you are doing well!. Here's my CF test",
      information: {
        name: 'Eduardo Russo',
        email: 'russoedu@gmail.com',
        professionalProfiles: {
          linkedin: 'https://linkedin.com/in/russoedu',
          gitHub: 'https://github.com/russoedu',
          stackOverflow: 'https://stackoverflow.com/users/1302318/eduardo-russo',
          CV: 'https://cl.ly/n1gU/eduardo-russo-resume.pdf',
        },
        aboutThisApp: {
          language: 'JavaScript - Node.js - ECMA6',
          server: 'Express 4',
          database: 'MongoDB',
          usedEnvironmentVars: [
            'PIVOTAL_ENV',
          ],
        },
      },
    };
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(response);
  }

  static search(req, res) {
    log('search');
    res.status(200).send('sucess search');
  }
}

module.exports = Index;
