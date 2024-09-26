
# Exercices SQL

## Partie 1: Sélection de données

1. Sélectionnez tous les prénoms et noms des étudiants nés après le 1er janvier 2000 :

```sql
SELECT first_name, last_name FROM students WHERE date_of_birth > '2000-01-01';
```

2. Sélectionnez les cours qui ont plus de 4 crédits :

```sql
SELECT course_name FROM courses WHERE credits > 4;
```

3. Sélectionnez les noms des étudiants et les cours auxquels ils sont inscrits :

```sql
SELECT students.first_name, students.last_name, courses.course_name 
FROM students 
JOIN enrollments ON students.id = enrollments.student_id
JOIN courses ON enrollments.course_id = courses.id;
```

4. Sélectionnez les étudiants qui n'ont pas encore de résultats enregistrés :

```sql
SELECT students.first_name, students.last_name 
FROM students 
LEFT JOIN enrollments ON students.id = enrollments.student_id
LEFT JOIN results ON enrollments.id = results.enrollment_id
WHERE results.id IS NULL;
```

5. Sélectionnez les étudiants inscrits au cours "Mathématiques Avancées" :

```sql
SELECT students.first_name, students.last_name 
FROM students 
JOIN enrollments ON students.id = enrollments.student_id
JOIN courses ON enrollments.course_id = courses.id
WHERE courses.course_name = 'Mathématiques Avancées';

```

6. Sélectionnez les cours offerts par le département d'informatique :

```sql
SELECT course_name FROM courses WHERE department = 'Informatique';
```

7. Sélectionnez le nom des étudiants qui ont obtenu une note supérieure à 15 dans leurs cours :

```sql
SELECT students.first_name, students.last_name 
FROM students 
JOIN enrollments ON students.id = enrollments.student_id
JOIN results ON enrollments.id = results.enrollment_id
WHERE results.grade > 15;
```

8. Comptez le nombre d'étudiants inscrits dans chaque cours :

```sql
SELECT courses.course_name, COUNT(enrollments.student_id) AS total_students
FROM courses 
JOIN enrollments ON courses.id = enrollments.course_id
GROUP BY courses.course_name;
```

9. Sélectionnez les étudiants qui se sont inscrits entre le 15 janvier 2023 et le 1er mars 2023 :
    
```sql
SELECT s.first_name, s.last_name
FROM students s
JOIN enrollments e ON s.id = e.student_id
WHERE e.enrollment_date BETWEEN '2023-01-15' AND '2023-03-01';
```

10. Sélectionnez les noms et prénoms des étudiants et la date de leur dernier examen :
    
```sql
SELECT students.first_name, students.last_name, MAX(results.exam_date) AS last_exam_date
FROM students 
JOIN enrollments ON students.id = enrollments.student_id
JOIN results ON enrollments.id = results.enrollment_id
GROUP BY students.id;
```
