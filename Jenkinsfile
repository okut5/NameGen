pipeline {
  agent any
  stages {
    stage('Checkout code') {
      steps {
        git(url: 'https://github.com/okut5/NameGen', branch: 'master', credentialsId: '1bf0a82f-99a3-4c06-b8f8-edd4389ce622')
      }
    }

  }
}