import React from "react";

/* ================================
   Base Class: Person
================================ */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name}, Age: ${this.age}`;
  }

  getRole() {
    return "Person";
  }
}

/* ================================
   Student Class (Inheritance)
================================ */
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  // Method Overriding
  getRole() {
    return "Student";
  }

  getDetails() {
    return `${this.name}, Age: ${this.age}, Course: ${this.course}`;
  }
}

/* ================================
   Teacher Class (Inheritance)
================================ */
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Method Overriding
  getRole() {
    return "Teacher";
  }

  getDetails() {
    return `${this.name}, Age: ${this.age}, Subject: ${this.subject}`;
  }
}

/* ================================
   React Component
================================ */
function App() {
  // Polymorphism: Same reference type (Person)
  const people = [
    new Student("Rahul", 20, "Computer Science"),
    new Teacher("Mrs. Sharma", 40, "Mathematics"),
    new Student("Anjali", 22, "Data Science"),
    new Teacher("Mr. Verma", 35, "Physics"),
  ];

  return (
    <div style={styles.container}>
      <h1>Class Hierarchy Demo (OOP in React)</h1>

      {people.map((person, index) => (
        <div key={index} style={styles.card}>
          <h2>{person.getRole()}</h2>
          <p>{person.getDetails()}</p>
        </div>
      ))}
    </div>
  );
}

/* ================================
   Simple Styling
================================ */
const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
    backgroundColor: "#f4f6f9",
    minHeight: "100vh",
  },
  card: {
    backgroundColor: "white",
    padding: "20px",
    margin: "15px auto",
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
};

export default App;
