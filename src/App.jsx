import Player from './components/Player.jsx';
import TimerChallenges from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">

      <TimerChallenges title= 'Easy' targetTime={1} />
      <TimerChallenges title= 'Not Easy' targetTime={5} />
      <TimerChallenges title= 'Getting' targetTime={10} />
      <TimerChallenges title= 'Pros Only' targetTime={15} />
      </div>
      

    </>
  );
}

export default App;
