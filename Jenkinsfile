pipeline {
    agent any
    tools {nodejs "node14"}
    environment {
        NODE_ENV="production"
    }
    
    stages {
        stage('source') {
            steps {
                git 'https://github.com/sayannath/Backend-Docker.git'
                echo "server.js content"
                sh 'cat server.js'
            }
        }
        stage('build') {
            steps {
                echo NODE_ENV
                sh 'npm install'
            }
        }
        stage('saveArtifact') {
            steps {
                archiveArtifacts artifacts: '**', followSymlinks: false
            }
        }
    }
}