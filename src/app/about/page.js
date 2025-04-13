import react from 'react';

import Image from 'next/image';

export default function Page() {



    return (<div className='about'>

<div className='container'>
        <h1 className=''>A propos</h1></div>

        <div className='intro' >
            <div className='container'>
                <h2>Pourquoi Travailler Avec Nous ? 🚀</h2>

                <div>
                    <p>
                        Nous savons que choisir un prestataire en développement web et mobile est une décision importante. Voici pourquoi nous sommes le bon choix pour vous :
                    </p>
                    ✅ Expertise Technique Solide
                    Avec plus de 3 ans d’expérience en développement web et plusieurs projets en React Native, nous créons des solutions modernes, performantes et adaptées à vos besoins.
                    <p>
                        ✅ Approche Sur-Mesure
                        Chaque projet est unique ! Nous prenons le temps de comprendre vos besoins pour développer un site ou une application qui vous ressemble et qui génère des résultats.
                    </p>
                    ✅ Transparence & Communication
                    Nous vous accompagnons à chaque étape du projet avec une explication claire et un suivi régulier. Pas de jargon technique compliqué, juste des solutions adaptées à votre activité.
                    <p>
                        ✅ Optimisation & Performance
                        Un site rapide et bien référencé, c’est plus de clients potentiels. Nous optimisons chaque projet pour garantir une vitesse optimale et une visibilité sur Google.
                    </p>
                    <p>
                        ✅ Accompagnement & Support</p>
                </div>
            </div>
        </div>

        <div className='culture'>
            <div className='container'>
                <h2>Notre culture </h2>

                <div className='culture__section'>

                    <div className='culture__section_left'>
                        <Image src="http://localhost:1337/uploads/What_to_do_if_youre_concerned_about_a_colleagues_wellbeing_438431_1024x576_0bf83324a7.jpg" width={500} height={300} />

                    </div>
                    <div className='culture__section_right'>
                        <h3>  Innovation au service de vos besoins</h3>
                        <p>


                            Nous mettons un point d’honneur à proposer des solutions modernes et adaptées à chaque projet. Nous aimons sortir des sentiers battus pour offrir une expérience unique à vos utilisateurs. Notre équipe reste constamment à jour avec les nouvelles technologies pour garantir des résultats à la pointe de l’industrie.
                        </p>
                    </div>

                </div>

                <div className='culture__section'>

                    <div className='culture__section_left'>
                        <Image src="http://localhost:1337/uploads/Tech_Dev_1_c73a7acdfe.png" width={500} height={300} />

                    </div>
                    <div className='culture__section_right'>
                        <h3>  Innovation au service de vos besoins</h3>
                        <p>


                            Nous mettons un point d’honneur à proposer des solutions modernes et adaptées à chaque projet. Nous aimons sortir des sentiers battus pour offrir une expérience unique à vos utilisateurs. Notre équipe reste constamment à jour avec les nouvelles technologies pour garantir des résultats à la pointe de l’industrie.
                        </p>
                    </div>

                </div>
            </div>

        </div>
            <section className="team container">
                <div className="team__introduction">
        
                  <h2>Mon equipe</h2>
                  <p>Notre equipe est pret a concevoir des site web ou application mobile  afin de faire grandir votre entreprise </p>
                </div>
                <div className="member">
                  <h3>Membres de equipe</h3>
        
                  <div className="member__content">
                    <div className="member__picture">
                      <div className="member__picture_left">
        
                        <Image src='http://localhost:1337/uploads/Untitled_2_4348142d38.jpg' width={150} height={100} alt="bon" />
                      </div>
                      <div className="member__picture_right">
                        <span>Anderson beauvais</span>
                        <h4>Programmeur - Full stack</h4>
                        <span><strong>Expertise:</strong> Javacript Next.js Node.js React native</span>
                      </div>
                    </div>
                    <div className="member__picture">
                      <div className="member__picture_left">
                        <Image src='http://localhost:1337/uploads/daviddoe_strapi_c7da979d27.jpeg' width={150} height={100} alt="ju" />
                      </div>
                      <div className="member__picture_right">
                        <h4>Programmeur - Full stack</h4>
                        <span><strong>Expertise:</strong> Javacript Next.js Node.js React native</span>
                      </div>
                    </div>
                    <div className="member__picture">
                      <div className="member__picture_left">
                        <Image src='http://localhost:1337/uploads/daviddoe_strapi_c7da979d27.jpeg' width={150} height={100}  alt="hyu"/>
                      </div>
                      <div className="member__picture_right">
                        <h4>Programmeur - Full stack</h4>
                        <span><strong>Expertise:</strong> Javacript Next.js Node.js React native</span>
                      </div>
                    </div>
        
                  </div>
        
                </div>
             
        
        
        
        
              </section>


    </div>)
}