import React, { Component } from 'react'
import emailjs from 'emailjs-com';

export default class WriteToUs extends Component { 
    render() {
        function sendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm('service_e6tm3ar', 'template_19y849i', e.target, 'user_x98DScdeMoUtBo0A8c6M9')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
          }
        return (
            <div className="container-fluid pt-5 mt-3">
                <section>
                    <div className="container-fluid">
                        <h1>Reading And Writing Make Us To Reveals Hidden Feelings!, Let
                            Help Each Other To Grow
                        </h1>

                        <p>Hello Readers,<br />
                            Warm Greetings,<br />
                            Today, we are officially creating a forum for those who love writing. This will be a platform
                            for all of us to express our knowledge, experience, opinion, feelings and emotion. There
                            will be equal opportunity for those who have skilled in written work with valid platform
                            before, as well as there will also great opportunity for new writers who love writing, need
                            platform for social cause.</p>
                    </div>

                    <div className="container-fluid">
                        <h2>
                            In-short about eMind Cafe
                        </h2>
                        <p>
                            eMind Cafe is Working since 2018, and We are able to reach out to psychology lovers like
                            you, especially through various social platforms like Facebook, Instagram and
                            WhatsApp. Today our reach has grown so much that we have gained almost 11 lakh readers
                            who love reading about psychology. We also have created a huge milestone in career
                            counselling and child counselling for age group between 10 to 35 years. To help them lead
                            fix Career counselling with positive results,(2018 from) and mental problems resolving
                            via Personal Online counselling for all age group above 10 years.
                            Our success journey was not so easy, Trust we have gained today is valuable contribution of
                            our admirer. Their immense support and love is a foundation of our inspiration. Our growth is
                            love and admiration of people all across pan India and globe.
                            Here we want to extend our dynamics of psychology for our reader with your experience,
                            knowledge, story and opinion, which will be rectified by psychology experts. Enhance
                            credibility of your magical words to inspire and motivate our readers of all age group for their
                            personal growth
                            eMind Cafe suggest you following topics demanded by our reader
                        </p>
                    </div>
                </section>

                <section>
                    <div className="container-fluid">
                        <p className="display-4">List of suggested topics for writings Article</p>
                        <h2>Social Mind-set</h2>
                        <p className="text-danger">(Social Psychological Experience, Advice and Opinion, on How and Why?)</p>
                        <p>
                            Psychological questions, entanglements, confusion and narrowness experienced in changing
                            society while dealing with society. It requires a high number of research and exposure for
                            writing such material. There are huge numbers of readers on such topics but very little
                            writing material on the psychological perspective is available. So this special opportunity to
                            share your knowledge and experience in easy words as this big basket space needs to be filled
                        </p>

                        <h2>Inspirational article</h2>
                        <p>
                            There are billion types and is still hard to say. There are some interesting field specific
                            autobiographies. There is an explanation of the questions and difficulties involved and how to
                            plan, tackle and overcome. This mind was pleased with bright side knowledge and exposure.
                            Make reader ready to take off with motivation to do everything possible in right way, and
                            take readers on new heights in life
                        </p>

                        <h2>Marital life</h2>
                        <p>
                            Recipe to successful Husband-wife relationship is highly appreciated and looked by newly
                            married couples. This changes from person to person and couple to couple. One work for
                            other and some need some different approach. It is evergreen to share how you enjoyed and
                            doing well in your Martial-life for other to let them heal, cure, and strengthen their Marriedlife. Writing has been only in the centre of attraction so far to help and seek. Increasing
                            unhappy married life is the current reality of today. There is a vast empty space available
                            today for writing that inspires everyone, to accept reality and work on how to make marriedlife better, happy and joyful.
                        </p>


                        <h2>Parents - children</h2>
                        <p>
                            Social world is full of article about the marketing of Parent-Children relationship: education,
                            unrealistic expectations of parents, life threatening and ruining competitions, and the master
                            stress that will come with it unlimitedly, a huge crowd gathers just to read and want to know
                            more it. Parents take only those who suggest the best solution in such writing. Most loved one
                            articles like, get your child good in academics are they really take consideration of the kid
                            when they arrives. They don’t even look forward for economic aspects of parent too. So this
                            space should be filled with the realistic, simple approach with new exposure.
                        </p>


                        <h2>Changing relationships with New Challenges</h2>
                        <p>
                            The challenges like, struggle to make money, to get rich quick, to have a witty dialogue, to
                            prove oneself, to gain name, fame and pleasure, a passive discussion, along with changing
                            time, different age mile stone and challenges, so the way of life is also a huge thing to write
                            about with a psychological uplift on personal level to handle this challenges

                        </p>


                        <h2>Mental problems and illness</h2>
                        <p>
                            Bad habit, changing schedule, and new era completions made it a necessary to reach out for
                            people about variety of mental health problems and illnesses. as the prevailing emphasis on
                            medication, and mental well-being

                        </p>


                        <h2>Sexuality, Adultery, and Naughty You</h2>
                        <p>
                            Everyone should enjoy Satisfaction with sexuality, this is a biological goal of human life like
                            other animals, and it has power to lead a better and happier life. But getting right information
                            for this taboo is a distorting thought; the society goes into direct decline to speak about it. As
                            this part plays important role in healthy mental well-being. This part is selected here. More
                            useful insight and elaborative writing on these articles are need of today.

                        </p>


                        <h2>Old age Problems and solutions for the elderly People</h2>
                        <p>
                            Old age retirement is last stage of life, and it’s time of conclusion of once did, it should not
                            be neglected in anyway with the chaos of children getting married, children are busy with
                            their own lifestyle to carry forward the responsibilities of family and its happiness, so it is
                            necessary to convey important things about the life and mentality of old peoples to the new
                            generation.

                        </p>


                        <h2>CPersonal Experience and Story</h2>
                        <p>
                            Your personal experience story, and guidance in your expertise field to help us build
                            our mental aptitude, your story will help readers to inspire, motivate and overcome
                            challenge and lead a personal growth you can share about your experience, suffering
                            and courageous forgetful events of your life.

                        </p>


                        <h2>Others (to suggest)</h2>
                        <p>
                            You can suggest your best expertise and valuable topics, feel free to dropdown your
                            suggestion and topic with eMindCafe family. The doors to this think tank are always open for
                            such valuable efforts and contribution, feel free to write on this forum.<br />
                            It is important to write as many as possible on the above topics. It should be appreciated with
                            politeness to give a new direction to our society, with such value adding writings.
                        </p>


                        <h2>Changing relationships with New Challenges</h2>
                        <p>
                            The challenges like, struggle to make money, to get rich quick, to have a witty dialogue, to
                            prove oneself, to gain name, fame and pleasure, a passive discussion, along with changing
                            time, different age mile stone and challenges, so the way of life is also a huge thing to write
                            about with a psychological uplift on personal level to handle this challenges

                        </p>
                    </div>
                </section>

                <section>
                    <div className="container-fluid">
                    <h3>
                        Criteria
                    </h3>
                    <ol>
                        <li>The content must be Unique and Plagiarism free</li>
                        <li>You can write in English, Hindi and Marathi language only (Prefer English not mandatory, we will accept in any of above language.)</li>
                        <li>No need to be technical expert, and experience writer, eMindCafe team will make
                            necessary required changes to boost readability and delivery of knowledge</li>
                        <li>We are giving preference to all, eMindCafe believe that every experience matter
                            (without any restriction to Background and profession).</li>
                        <li>You need to write to us along with your information detail for your credibility</li>
                        <li>The person who is writing and want to publish article should be active on social
                            media like what app, Facebook, Instagram, with active Gmail account, so that the
                            person will be able to track and monitor, the success records and appreciation</li>
                        <li>There is no word limit to write as per your convenience but we are expecting
                            minimum 500 words up to your will
                        </li>
                        <li>Typed content with illustrative image and graph for more understanding of topic is
                            preferred, than that of hand written, as it will cost more man power and time. (we
                            don’t’ want to discourage any one every single efforts matter to us)
                        </li>
                        <li>If the person writing expert wants to publish his/her name, position, and name of
                            organisation, contact details, are solely depends on writer’s choice.</li>
                        <li>We value your efforts and accept your links for promotion, which will be published
                            under certain term and condition, regulated by eMindCafe. (We are not abiding to
                            do that).
                        </li>
                    </ol>
                    </div>
                </section>
                <section className="container pt-2">
       
        <h1 className="text-center">Write to Us</h1>

        <hr className="p-1 bg-danger" />

        <form onSubmit={sendEmail}>
            <h5 className="p-2">Name</h5>
            <div className="row py-2">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" aria-required="true" required />
                    <label for="fname">First Name</label>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" aria-required="true" required />
                    <label for="lname">Last Name</label>
                </div>
            </div>
            <h5 className="p-2">Topic</h5>
            <div className="col">
                    <input type="text" name="subject" className="form-control" aria-label="subject" aria-required="true" required />
                 
                </div>
            <h5 className="p-2">Contact</h5>
            <div className="col">
                    <input type="email" className="form-control" placeholder="example@example.com" aria-label="email" aria-required="true" required />
                    <label for="email">Mail ID</label>

                    <input type="email" className="form-control" placeholder="example/example.com" aria-label="email" aria-required="true" required />
                    <label for="email">Any Social media link</label>
                </div>
                <h5 className="p-2">Subject</h5>
                <div className="form-group">
             
              <textarea className="form-control" name="comment" id="comment" rows="6" />
            </div>
                <div className="text-center p-3">
                <button type="submit" className="btn btn-primary btn-outline-success text-light">Submit</button>
            </div>
            
        </form>
        </section>
            </div>
        )
    }
}
