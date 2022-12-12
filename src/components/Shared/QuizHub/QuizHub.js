import React from 'react';
import quiz1 from '../../../assets/projectImages/quiz1.png';
import quiz2 from '../../../assets/projectImages/quiz2.png';
import quiz3 from '../../../assets/projectImages/quiz3.png';

const QuizHub = () => {
    return (
        <div>
            <p className='my-5 mx-10 font-semibold text-lg underline'>Quiz Application</p>
            <div className="flex gap-2 flex-col lg:flex-row">
                <div className=''>
                    <div className="flex gap-2 flex-col lg:flex-row mx-10">
                        <img src={quiz1} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
                        <img src={quiz2} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
                        <img src={quiz3} className="rounded-lg shadow-2xl h-96 w-1/3" alt='' />
                    </div>
                    <div>
                        <p className='my-5 mx-10'><span className='text-xl font-bold'>Project Features: <br /> </span> <br />
                        1. Quiz Hub is a fully responsive web application. <br />
                        2. Where user can play quizzes about React, JavaScript, CSS, and Git.<br/>
                        3. For the play quiz users have to log in first. <br />
                        4. If a user clicks on a wrong answer it would provide a false answer alert. <br />
                        5. If a user clicks on a right answer it would provide a right answer alert. <br />
                        6. We use an eye button to know the correct answer.
                        </p>

                        <p className='mb-5 mx-10'><span className='text-xl font-bold'>Technology Used:
                        </span> React, React router dom, Javascript, Node.js, Express JS, MongoDB, Firebase, TailwindCSS, CSS, Html</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizHub;