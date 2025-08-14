# n8n-nodes-ivrapi

**IVRAPI** is an SMS and phone calling service API.  
This n8n community node allows you to integrate IVRAPI into your n8n workflows for sending SMS messages and making phone calls directly from n8n.

---

## Features
- Send SMS messages through IVRAPI
- Initiate automated phone calls
- Use in combination with other n8n nodes for powerful workflows
- Open-source and easy to customize

---

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) version **>=20.19 and <=24.x**
- [npm](https://www.npmjs.com/get-npm)
- [n8n](https://n8n.io) installed globally

### Steps

Run the following commands in your terminal (Windows PowerShell):

```bash
# Install n8n globally (if not already installed)
npm install n8n -g

# Go to your user home directory
cd %USERPROFILE%

# Create custom node folder for n8n
mkdir .n8n\custom

# Navigate to the custom folder
cd .n8n\custom

# Clone the IVRAPI node from GitHub
git clone https://github.com/onemanarmy1032-code/n8n-nodes-ivrapi.git

# Enter the project folder
cd n8n-nodes-ivrapi

# Install dependencies
npm install

# Build the project
npm run build

# Link the package globally
npm link

# Go back to the custom folder
cd .. 

# Link the package to n8n
npm link n8n-nodes-ivrapi

# Start n8n
n8n start
"# n8n-nodes-ivrapi" 
"# n8n-nodes-ivrapi" 
