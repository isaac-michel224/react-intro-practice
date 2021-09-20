import logo from './logo.svg';
import index from 'index.css';

function App() {
  
  const Button = ({ clickValue, clickAction }) => {
    return (
      <button onClick={() => clickAction(clickValue)}>
        +{clickValue}
      </button>
    );
  };
  
  const Display = ({ content }) => (
    <pre>{content}</pre>
  );
  
  const CountManager = () => {
    const [count, setCount] = useState(0);
  
    const incrementCounter = (increment) =>
      setCount(count + increment);
  
    return (
      <div>
        <Button clickAction={incrementCounter} clickValue={1} />
        <Button clickAction={incrementCounter} clickValue={5} />
        <Button clickAction={incrementCounter} clickValue={10} />
        <Display content={count} />
      </div>
    );
  }
  
  
}

export default App;

