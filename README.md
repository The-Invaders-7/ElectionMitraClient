# Election Mitra

## Description
This project demonstrates a full-stack web application with a Flask server, a Spring Boot server, and a React frontend. The Flask server provides functionalities of scanning a pdf consisting voters data issued by government and storing the extracted data into database, the Spring Boot server implements additional functionality and interacts with databases, and the React frontend provides an interactive user interface.

Frontend (React) Code: https://github.com/The-Invaders-7/ElectionMitraClient

Backend (Spring Boot) Code: https://github.com/The-Invaders-7/Election-Project-server

AI based backend (Flask) Code: https://github.com/The-Invaders-7/ElectionMitraColab

## Problem Statement

One of the major challenges in conducting elections is the issuance of voting receipts to the voters. The current process relies on manual methods of searching and retrieving the receipts from a database, which causes several problems. First, it could be more efficient and time-consuming, as it requires human intervention and verification. This results in long queues and dissatisfaction among the voters.

We have proposed a system that can automatically extract and digitize text from the voter list. This system enables faster and easier searching of voter information and issuing of receipts.

## Architecture

### System Architecture:

![image](https://github.com/The-Invaders-7/ElectionMitraClient/assets/78098329/2ac8dbf9-6c06-416f-a107-968210d098c6)

### Flask Server Application:

The admin will upload a PDF with all the records, and the corresponding data will be processed. Initially, each and every page of the pdf gets converted into images, further, we have cropped these images to get a proper image which consists of all the tickets without any margin.

![image](https://github.com/The-Invaders-7/ElectionMitraClient/assets/78098329/51356b8f-677d-4e78-82e3-9362014f7efd)

These cropped images are further converted to 30 images since there are horizontally 3 and vertically 10 images on each page as per most of the PDFs provided by the Maharashtra Government. Once we get a proper ticket without any extra margin we extract data from each and every field. 

![image](https://github.com/The-Invaders-7/ElectionMitraClient/assets/78098329/d42b4e30-cbee-4d73-886d-8a0cb5053c3b)

![image](https://github.com/The-Invaders-7/ElectionMitraClient/assets/78098329/716a98e2-b854-47e5-ab73-2cc55cf49399)

This is how the ticket looks like:

![image](https://github.com/The-Invaders-7/ElectionMitraClient/assets/78098329/bb3db387-65d1-44fc-aaa6-8f0c8b87d9a6)

We required the following parameters to store the data in the database: firstName, middleName, lastName, VoterID, and Gender. These details were extracted by cropping a single ticket, cropped fields will be further extracted using EasyOCR, since it is in Marathi the extracted text will be converted to English using google translate and further stored in Mongo DB

![image](https://github.com/The-Invaders-7/ElectionMitraClient/assets/78098329/8d1e8c1d-965c-4520-b181-2141b0f7cca9)

### Spring Boot Application:

We have created an application using spring boot which acts like a server for the whole product. This application takes care of interacting with the user side website where user interacts with the interface expecting retrieval of data from the database according to his/her requirements. The server will query and find corresponding data and send it to the user application. We have also implemented the functionality of pagination so as to avoid latency while querying the data, and provide the required info.

### React Application: 

User Interface is developed using React.The most important functionality of the application is to provide and interactive user interface to search their data by giving proper inputs. Apart from that we have provided a proper functionality to show pagination, where use can search data as per needs and check other pages to verify the same as well which would avoid loading the application by querying only necessary data.

![image](https://github.com/The-Invaders-7/ElectionMitraClient/assets/78098329/a5f10c0c-b0f0-48bd-9341-5add693e8279)

![image](https://github.com/The-Invaders-7/ElectionMitraClient/assets/78098329/ec9db27d-6ac6-4ec3-b0e6-25250adb2e61)


### Conclusion:

This application evaluated the security aspects of Election-Mitra, discussing the measures taken to protect the privacy of voters and prevent tampering with the voting receipts. 
Overall, the application Election-Mitra has been built successfully, highlighting its potential to revolutionize the electoral process by combining the power of ReactJS and Spring Boot. By providing digital voting receipts and ensuring transparency, verifiability, and privacy, Election-Mitra represents a significant step forward in achieving seamless and trustworthy elections. The system opens up new possibilities for electoral reforms and strengthens democratic processes, ultimately fostering greater trust and confidence among voters and stakeholders. 

## Tech Stack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
