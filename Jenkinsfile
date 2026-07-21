pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the latest code from GitHub...'
            }
        }
        
        stage('Deploy to EC2') {
            steps {
                sshagent(['ec2-ssh']) {
                    sh '''
                    #!/bin/bash
                    set -e
                    echo "Connecting to EC2 instance..."
                    
                    # Run all commands in a single SSH session
                    ssh -o StrictHostKeyChecking=no ubuntu@13.63.174.148 "
                        cd /home/ubuntu/devops-cicd-demo && \
                        git pull origin main && \
                        cd backend && \
                        python3 -m venv venv && \
                        source venv/bin/activate && \
                        pip install --upgrade pip && \
                        pip install -r requirements.txt && \
                        cd ../frontend && \
                        npm install && \
                        pm2 restart all && \
                        pm2 save && \
                        echo 'Deployment complete!'
                    "
                    '''
                }
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
