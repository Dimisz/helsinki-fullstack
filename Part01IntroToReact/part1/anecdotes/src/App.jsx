import { useState } from 'react'
import ShowNextButton from './ShowNextButton';
import VoteButton from './VoteButton';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const initialVotes = new Array(anecdotes.length).fill(0);
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([...initialVotes]);
  
  const mostVoted = votes.indexOf(Math.max(...votes));

  const handleShowNextAnecdote = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNum);
  };

  const handleVote = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes([...updatedVotes]);
    // console.log(votes);
    // console.log(`anecdotes arr: ${anecdotes.length}`);
    // console.log(`votes arr: ${votes.length}`);
  }
  return (
    <>
      <div>
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <ShowNextButton generateRandomAnecdote={handleShowNextAnecdote}/>
        <VoteButton handleVote={handleVote}/>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{anecdotes[mostVoted]}</p>
      </div>
      
      
    </>
  )
}

export default App