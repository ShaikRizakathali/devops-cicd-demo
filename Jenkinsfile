pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                script {
                    echo 'Checking out the latest code from GitHub...'
                }
            }
        }
        
        stage('Deploy to EC2') {
            steps {
                sshagent(['ec2-ssh']) {
                    sh '''
                    #!/bin/bash
                    set -e
                    
                    echo "Connecting to EC2 instance..."
                    
                    # SSH into EC2 and deploy
                    ssh -o StrictHostKeyChecking=no -i ~/.ssh/ec2-ssh ubuntu@13.63.174.148 << 'ENDSSH'
                    echo "Stopping current services..."
                    cd /home/ubuntu/devops-cicd-demo
                    
                    # Stop PM2 processes
                    pm2 stop flask-backend || true
                    pm2 stop express-frontend || true
                    
                    # Pull latest code
                    git pull origin main
                    
                    # Install backend dependencies
                    cd backend
                    source venv/bin/activate
                    pip install -r requirements.txt
                    
                    # Install frontend dependencies
                    cd ../frontend
                    npm install
                    
                    # Restart services
                    pm2 start flask-backend
                    pm2 start express-frontend
                    pm2 save
                    
                    echo "Deployment complete!"
                    ENDSSH
                    
                    echo "Deployment successful!"
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
