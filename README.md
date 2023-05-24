# ADSchema
ADSchema is a tool to develop an Active Directory Security Group Naming Schema for a SharePoint file share site. This JavaScript web application will be run from an internal website, which provides a user-friendly way to generate and locate security group names in line with your organization's schema.

## Installation
To install and run this project you will need Node.js and npm installed. Here's how to install these on an Ubuntu server:

- **First, update your system:**

```
sudo apt update -y
```

- **Then, install Node.js and npm:**

```
sudo apt install nodejs npm -y
```

- **Next, you need to clone the repository from GitHub:**

```
git clone https://github.com/CyberOneTechnologies/ADSchema.git
```

- **Navigate into the project directory:**

```
cd ADSchema
```

- **Now install the project dependencies:**

```
npm install
```

# Running the Project

- Once the dependencies are installed, you can start the server:

```
npm start
```

Your application should now be running on localhost at port 3000.

# Project Structure

**The project is organized as follows:**

```
- public
  - index.html
  - styles
    - main.css
  - scripts
    - main.js
    - folderToGroup.js
    - groupToFolder.js
- server
  - server.js
  - csvLoader.js
- data
  - corporateData.csv
  - operationsData.csv
- package.json
- README.md
```

**Note:** This project uses `Express.js` for the server and csv-parser for parsing the csv data files.
