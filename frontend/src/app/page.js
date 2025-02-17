import EmployeeList from "./components/EmployeeList";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <Nav />

      <div className="container">
        <EmployeeList />
      </div>
    </>
  );
}
