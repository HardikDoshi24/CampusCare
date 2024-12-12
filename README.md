# CampusCare

## Introduction
Welcome to the CampusCare repository! CampusCare is a comprehensive web application designed to streamline the process of reporting damaged entities within college classrooms or laboratories. This system empowers college students to submit complaints effortlessly and facilitates efficient maintenance operations on campus.

## Purpose
CampusCare addresses the common issue of damaged entities in college environments, such as lights, fans, PCs, and other equipment in classrooms or labs. Students can easily report a damaged entity by selecting it on the application. A form specific to the selected entity opens, allowing students to provide detailed information about the issue, including the classroom or lab and department details. The history section enables students to track the status of their past reports, ensuring transparency.

On the admin side, complaints are received, and the status of each report is updated as repairs are completed. Additionally, admins can manage entities by adding or deleting items, which are displayed on the user side, providing a seamless reporting experience.

## Features
- **User-Friendly Interface:** Simple and intuitive design for students to report issues quickly.
- **Detailed Descriptions:** Allows students to specify the issue in detail, assisting maintenance staff in addressing complaints effectively.
- **Personalized History:** Students can track the progress and resolution of their previous reports.
- **Admin Controls:** Admins can update complaint statuses and manage entities visible to users.

## Technologies Used
- **Frontend:** ReactJS for a dynamic and interactive user interface.
- **Backend:** Spring Boot for handling backend operations and managing data flow.
- **Database:** MySQL for efficient storage and retrieval of data.
- **Styling:** Tailwind CSS for a visually appealing and responsive design.

## Installation

1. **Clone the repository to your local machine:**
   ```bash
   git clone https://github.com/your-username/CampusCare.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd CampusCare
   ```

3. **Install dependencies for both frontend and backend:**
   - Frontend:
     ```bash
     cd frontend
     npm install
     ```
   - Backend:
     ```bash
     cd ../backend
     ./mvnw install
     ```

## Usage

1. **Start the backend server:**
   ```bash
   ./mvnw spring-boot:run
   ```

2. **Start the frontend development server:**
   ```bash
   cd ../frontend
   npm start
   ```

3. **Access the application:**
   Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).

## Contributing
Contributions are welcome! If you'd like to contribute to CampusCare, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch for your feature:**
   ```bash
   git checkout -b feature-name
   ```
3. **Commit your changes:**
   ```bash
   git commit -am 'Add new feature'
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature-name
   ```
5. **Submit a pull request.**

## License
This project is licensed under the MIT License.

## Acknowledgements
Special thanks to the developers who contributed to this project.

Built with ❤️ by Hardik Doshi.

## Contact
For inquiries, please contact [hardikdoshi1524@gmail.com](mailto:hardikdoshi1524@gmail.com).

