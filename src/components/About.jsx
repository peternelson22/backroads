import { useReducer } from 'react';
import about from '../assets/images/about.jpeg';
import Title from './Title';
import { initailState, reducer } from '../reducer';
import { IS_LESS, IS_MORE } from '../reducer/actions';

const About = () => {
  const [state, dispatch] = useReducer(reducer, initailState);

  // const [isMore, setIsMore] = useState(true);
  // const [more, setMore] = useState('');
  // const moreInfo =
  //   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste vitae magnam saepe? Magnam dolore ratione laboriosam distinctio fugit tempora commodi adipisci.';

  // const handleMore = () => {
  //   setMore(moreInfo);
  //   setIsMore(false);
  // };

  // const handleLess = () => {
  //   setMore('');
  //   setIsMore(true);
  // };

  return (
    <section className='section' id='about'>
      <Title title='about' span='us' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={about} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          {state.more && (
            <>
              <p>{state.more}</p> <p>{state.more}</p>
            </>
          )}

          {state.isMore ? (
            <button onClick={() => dispatch({ type: IS_MORE })} className='btn'>
              read more
            </button>
          ) : (
            <button onClick={() => dispatch({ type: IS_LESS })} className='btn'>
              read less
            </button>
          )}
        </article>
      </div>
    </section>
  );
};
export default About;
