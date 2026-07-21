# DevOps CI/CD Pipeline Project

## Project Overview
This project demonstrates a complete CI/CD pipeline for a Flask backend and Express frontend application using Jenkins and AWS EC2.

## Architecture
- **Source Control**: GitHub (https://github.com/ShaikRizakathali/devops-cicd-demo)
- **CI/CD Tool**: Jenkins (running locally on port 8080)
- **Target Server**: AWS EC2 (t3.micro, Ubuntu 26.04)
- **Process Manager**: PM2
- **Deployment Method**: SSH-based automated deployment

## Application Details
- **Backend**: Flask (Python 3) running on port 5000
- **Frontend**: Express (Node.js) running on port 3000
- **API Endpoint**: http://13.63.174.148:5000/api
- **Web Interface**: http://13.63.174.148:3000

## Jenkins Pipeline Stages
1. **Checkout**: Pulls latest code from GitHub main branch
2. **Deploy to EC2**: 
   - SSH into EC2 instance using SSH Agent plugin
   - Pull latest code via Git
   - Create/activate Python virtual environment
   - Install Python dependencies (pip install)
   - Install Node dependencies (npm install)
   - Restart PM2 processes
   - Save PM2 process list

## Key Learnings & Challenges
1. **Java Version Compatibility**: Jenkins 2.568.1 requires Java 21 (not Java 11). Resolved by installing OpenJDK 21 and setting JAVA_HOME.
2. **SSH Authentication**: Configured SSH Agent plugin to securely manage EC2 private keys without hardcoding credentials.
3. **Python Virtual Environments**: Modern Ubuntu (26.04) enforces PEP 668, requiring virtual environments for Python packages.
4. **Pipeline Debugging**: Learned to read Jenkins console output to identify and fix issues like heredoc parsing errors.

## How to Reproduce
1. Launch EC2 instance with Security Group allowing ports 22, 3000, 5000
2. Install Jenkins locally with Java 21
3. Configure SSH credentials in Jenkins
4. Create pipeline job pointing to this repository
5. Run the pipeline

## Screenshots
# DevOps CI/CD Pipeline Project

## Project Overview
This project demonstrates a complete CI/CD pipeline for a Flask backend and Express frontend application using Jenkins and AWS EC2.

## Architecture
- **Source Control**: GitHub (https://github.com/ShaikRizakathali/devops-cicd-demo)
- **CI/CD Tool**: Jenkins (running locally on port 8080)
- **Target Server**: AWS EC2 (t3.micro, Ubuntu 26.04)
- **Process Manager**: PM2
- **Deployment Method**: SSH-based automated deployment

## Application Details
- **Backend**: Flask (Python 3) running on port 5000
- **Frontend**: Express (Node.js) running on port 3000
- **API Endpoint**: http://13.63.174.148:5000/api
- **Web Interface**: http://13.63.174.148:3000

## Jenkins Pipeline Stages
1. **Checkout**: Pulls latest code from GitHub main branch
2. **Deploy to EC2**: 
   - SSH into EC2 instance using SSH Agent plugin
   - Pull latest code via Git
   - Create/activate Python virtual environment
   - Install Python dependencies (pip install)
   - Install Node dependencies (npm install)
   - Restart PM2 processes
   - Save PM2 process list

## Key Learnings & Challenges
1. **Java Version Compatibility**: Jenkins 2.568.1 requires Java 21 (not Java 11). Resolved by installing OpenJDK 21 and setting JAVA_HOME.
2. **SSH Authentication**: Configured SSH Agent plugin to securely manage EC2 private keys without hardcoding credentials.      
3. **Python Virtual Environments**: Modern Ubuntu (26.04) enforces PEP 668, requiring virtual environments for Python packages.
4. **Pipeline Debugging**: Learned to read Jenkins console output to identify and fix issues like heredoc parsing errors.

## How to Reproduce
1. Launch EC2 instance with Security Group allowing ports 22, 3000, 5000
2. Install Jenkins locally with Java 21
3. Configure SSH credentials in Jenkins
4. Create pipeline job pointing to this repository
5. Run the pipeline

## Screenshots
<img width="1920" height="1080" alt="Screenshot From 2026-07-22 05-01-29" src="https://github.com/user-attachments/assets/17c7794c-d46f-4ead-b0eb-f37138fc9c51" />
<img width="1920" height="1080" alt="Screenshot From 2026-07-22 05-01-04" src="https://github.com/user-attachments/assets/bb378d22-07fd-4835-9e8e-b3216d458b94" />
<img width="1920" height="1080" alt="Screenshot From 2026-07-22 05-00-46" src="https://github.com/user-attachments/assets/7443690c-45db-4785-bc98-e1a9bd60fe91" />
<img width="1920" height="1080" alt="Screenshot From 2026-07-22 05-00-07" src="https://github.com/user-attachments/assets/7da98211-42ab-46f8-ad19-cf6474669e0e" />
<img width="1920" height="1080" alt="Screenshot From 2026-07-22 04-59-30" src="https://github.com/user-attachments/assets/33453afe-5a4a-4568-af8f-d7a32b3aebbe" />
