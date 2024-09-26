CREATE TABLE students (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(100) NOT NULL,
    `last_name` VARCHAR(100) NOT NULL,
    `date_of_birth` DATE NOT NULL,
    `gender` VARCHAR(10),
    `email` VARCHAR(255),
    `phone_number` VARCHAR(15),
    `address` VARCHAR(255),
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL
);

CREATE TABLE courses (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `course_name` VARCHAR(255) NOT NULL,
    `course_description` TEXT,
    `credits` INT NOT NULL,
    `department` VARCHAR(100),
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL
);

CREATE TABLE enrollments (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `student_id` INT,
    `course_id` INT,
    `enrollment_date` DATE NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    FOREIGN KEY (`student_id`) REFERENCES students(id),
    FOREIGN KEY (`course_id`) REFERENCES courses(id)
);

CREATE TABLE results (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `enrollment_id` INT,
    `grade` DECIMAL(4, 2),
    `exam_date` DATE NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    FOREIGN KEY (`enrollment_id`) REFERENCES enrollments(id)
);
