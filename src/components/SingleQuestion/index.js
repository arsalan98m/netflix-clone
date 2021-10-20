import { Close, Add } from '@mui/icons-material';
import { useState } from 'react';
import './SingleQuestion.css';

function SingleQuestion({ question, answers }) {
  const [isAnswer, setIsAnswer] = useState(false);
  return (
    <article className='singlequestion'>
      <div
        className='singlequestion__question'
        onClick={() => setIsAnswer(!isAnswer)}
      >
        <h1>{question}</h1>
        {isAnswer ? <Close /> : <Add />}
      </div>

      {isAnswer && (
        <div className='singlequestion__answer'>
          {answers.map((answer, i) => (
            <p key={i}>{answer}</p>
          ))}
        </div>
      )}
    </article>
  );
}

export default SingleQuestion;
