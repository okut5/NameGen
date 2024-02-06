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
                script {
                    sh 'pwd'
                    sh 'ls -lah'
                    sh 'ls -lah cypress' // Lists contents of the 'cypress' directory
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    // Running Docker command directly
                    sh "docker run -v ${WORKSPACE}/cypress:/cypress -w /cypress cypress/included:latest"
                }
                }
            }
        }
    }
}
