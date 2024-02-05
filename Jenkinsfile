pipeline {
  agent any
  stages {
    stage('Checkout code') {
      steps {
        git(url: 'https://github.com/okut5/NameGen', branch: 'master')
      }
    }

     stage('Run Cypress Tests') {
            agent {
                docker {
                    image 'cypress/included:latest'
                    args '-v ${WORKSPACE}/e2e:/e2e -w /e2e -e "HOME=/tmp"' // Mounts the Jenkins workspace
                }
            }
steps {
                sh 'cypress run' // Runs Cypress tests
            }
        }
    }
}