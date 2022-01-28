import ContentBox from "./components/ContentBox";
import ContentBoxInput from "./components/ContentBoxInput";
import StudentTable from "./components/StudentTable";
import Table from "./components/Table";

function App() {
  const studentList = [
    {
      slno: "1",
      name: "Suresh Kumar",
      gender: "Male",
    },
    {
      slno: "2",
      name: "Mukesh Kumar",
      gender: "Male",
    },
    {
      slno: "3",
      name: "Ramya",
      gender: "Female",
    },
    {
      slno: "4",
      name: "Rajni",
      gender: "Female",
    },
  ];

  return (
    <div>
      {/* <ContentBox message="From Props Message " /> */}
      {/* <ContentBox message="From Props Message 2 " />
      <ContentBox message="From Props Message 3" />
      <ContentBox message="From Props Message 4" /> */}
      {/* <ContentBoxInput />
      <ContentBoxInput /> */}
      {/* <Table /> */}
      <StudentTable data={studentList}/>
    </div>
  );
}

export default App;
