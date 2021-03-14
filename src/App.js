import './styles.css';
import fish from './Components/src.jpg'

function App() {
  return (
    <div>
<div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title red green">Your name here</h1>

<br />

<img src={fish} alt ='Fish' />

<br />

<img src="/public.jpg" alt="Tree" />

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
