pipeline {
  agent any
  stages {
    stage('Checkout code') {
      steps {
        git(url: 'https://github.com/okut5/NameGen', branch: 'master')
      }
    }

    stage('Debug Workspace') {
      steps {
        sh 'pwd'
        sh 'ls -lah'
        sh 'ls -lah cypress' // This will list contents of the 'cypress' directory
      }
    }

    stage('Run Cypress Tests') {
      agent {
        docker {
          image 'cypress/included:latest'
          args '-v $PWD/Cypress/e2e:/e2e -w /e2e' // Mounts the Jenkins workspace
        }
      }
      steps {
        // Ensures Cypress runs with the correct configuration and workspace
        sh 'cypress run --browser chrome'
      }
    }
  }
}
