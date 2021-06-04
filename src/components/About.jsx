import { Image } from 'react-bootstrap';

const About = () => {
    return(
        <section className="container" style={{paddingTop: "150px"}}>
             
        <h1 className="text-center display-4">About</h1>
        <div className="text-center"><Image loading="lazy" src="https://placeimg.com/171/180/any" alt="" rounded /></div>
            <h1 className="text-center display-4">Welcome to my practice</h1>
            <p>
            I am <strong><a href="#akshay">Akshay Shriwas</a></strong> from Akola, Maharashtra. I have double Bachelors and Double Master Degree in Psychology.I am a <strong>Practitioner Associate Rehabilitation Psychologist</strong>, and founder of <strong>eMindCafe Mental Health Clinic</strong>.
            To enlighten power of individual by making this platform easy and knowledgeable we help seeker understand human psychology and behaviour to help them develop and improve Mental Health and rule out Mental Disorder by preventing through this awareness programme, eMindCafe also discuss and guide people about different theories and therapies of psychology like <strong>Cognitive Behavioural Therapy(CBT), Rational Emotive Behavioural Therapy(REBT), Psychoanalytical, Couple Therapy, Dream Interpretation, Mastering Conscious and Sub - Conscious Mind, Practical and Self Grooming approach 
            for Self Introspection</strong> and many more.
            </p>
            
            <p>
            we want to make people aware about their <b>Psychodynamics</b>,
            switch off autopilot mode and take in charge of life by helping them cope up with Different scenario and aspects of their life with right approach to make smooth going and gain control over situation to lead life in better way, through Transformation and Personality development.
            Different age group encounter different psychological problem which changes the whole perspective of individual, like a kid fail in 9 grade or young suffering broke up in love, relationship conflict, and old age issues, different part of story need different approach, better and personalised solution as there is only and only internal fight and conflict between Right and More Right set of approach to a situation which need lots of study and research work with respect to time The eMindCafe team is enclosed with different expertise <strong> psychiatrist, Psychologists, psychotherapist and counsellor </strong> to enlighten your power to take charge of any situation with practical approach Confidence and smile
            because our aim is to enlighten your power.
            </p>
            <p>
            Thanking you
            for Your Valuable Time, Appreciation and Support…<br />
            We wish you bright insight of your charm,<br />
            Stay Tuned and Stay Blessed.</p>

              <h1 className="mainHedings display-4 text-center" id="whyUs">Why to join us?</h1>
          <div className="row text-center mb-5">
            <div className="col-sm-6">
              <div className="why1">
                <div className="card-body">
                  <h5 className="whywe">Fully Licensed</h5>
                  <p className="whyweblk">We are a team of working professionals, with excellence and educational
                    proficiency
                    in Psychological Assessment, Counselling, and Therapy. We are licensed and RCI Registered in
                    respective fields. We have good exposure of experience in the field with many positive success
                    stories.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="why2">
                <div className="card-body">
                  <h5 className="whywe">Our Reputation</h5>
                  <p className="whyweblk">We value our growing clients and followers, as we are dealing with a large number
                    of
                    clients and having regular feedback, we have gained the trust of our clients by delivering an
                    excellent service. We are proud to say that our ethical and moral values are cheery on the cake of
                    our
                    professional deeds. The love and support of our followers' energies us to deliver our service with
                    more excellence</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="why2">
                <div className="card-body">
                  <h5 className="whywe">Techno-Human Touch</h5>
                  <p className="whyweblk">This platform is a good example of the techno- human touch. We provide our users
                    with this excellent technological platform to help them solve complex problems and time-consuming
                    psychological assessments with very user-friendly interactions. We add assessment results with
                    guidance and Support with our human touch to share every detail with our clients personally with
                    confidentiality. </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="why2">
                <div className="card-body">
                  <h5 className="whywe">All Experienced</h5>
                  <p className="whyweblk">We take pride in the knowledge and expertise that we have gained from working on
                    many challenging but rewarding projects throughout the Country. Our market focus spans a vast range
                    of
                    project types – each one demanding unique, client-focused solutions regardless of complexity, or
                    demanding scheduling parameters.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default About;