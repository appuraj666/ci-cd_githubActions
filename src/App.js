import "./App.css";
import UserCard from "./card";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        flexDirection: "column",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <UserCard
          name="Vinay"
          image="https://minio-test-dlxb.mifix.io/dlxb-uat-public/iconBoy.png"
        />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <h2>Mr.Project Manager</h2>
    </div>
  );
}

export default App;
