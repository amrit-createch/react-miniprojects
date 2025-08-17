// App.jsx
import './App.css';
import Component from './component/component.jsx';

function App() {
  let users = ["s.jaishankar", "awadh ojha","putin"];

  return (
    <>
      {users.map((name, index) => (
        <Component key={index} user={name} />
      ))}
    </>
  );
}

export default App;
