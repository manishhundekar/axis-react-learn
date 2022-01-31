const studentsData = [
  {
    name: "Rajesh",
    age: "25",
    gender: "Male",
  },
  {
    name: "Ramini",
    age: "27",
    gender: "Female",
  },
  {
    name: "Suresh",
    age: "26",
    gender: "Male",
  },
];

// const getStudentsData = () => {
//   return new Promise((resolve, reject) => {
//     resolve(studentsData);
//     //   reject()
//   });
// };

const getStudentsData = () => {
   return fetch("https://axis-react-learn-default-rtdb.firebaseio.com/students.json")
  };

const saveStudentData = (studentData) => {
  return fetch(
    "https://axis-react-learn-default-rtdb.firebaseio.com/students.json",
    {
      method: "POST",
      body: JSON.stringify(studentData),
    }
  );
};

export { getStudentsData, saveStudentData };
