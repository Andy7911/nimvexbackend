import React from "react";
import Accordion from "../../components/organisms/Accordion";
import Image from "next/image";
import ServicesAccordion from "../../components/organisms/ServicesAccordion";

export default function Page() {


    return (
        <div className="services container">

            <h1>Service</h1>

            <section className="service_section">

                <div className="service_section__left">
                    <h2>
                        Developpement d’application mobile
                    </h2>
                    <p>Aujourd’hui, une application service_section est un atout puissant pour toucher plus de clients et offrir une meilleure expérience utilisateur. Avec React Native, je crée des applications performantes, rapides et compatibles iOS & Android, sans exploser votre budget.</p>
                    <div className="service_section__service" id="mobile">
                        <ServicesAccordion title="Pourquoi choisir une application service_section" content="✅ Touchez plus de clients : Une application permet une présence directe sur le téléphone de vos utilisateurs.✅ Améliorez l’expérience utilisateur : Offrez une interface fluide et intuitive.✅ Gagnez en efficacité : Automatisez certaines tâches et simplifiez l’interaction avec vos clients. " />
                        <ServicesAccordion title="Les Services que J’offre" content="✅ Touchez plus de clients : Une application permet une présence directe sur le téléphone de vos utilisateurs.✅ Améliorez l’expérience utilisateur : Offrez une interface fluide et intuitive.✅ Gagnez en efficacité : Automatisez certaines tâches et simplifiez l’interaction avec vos clients. " />
                    </div>
                </div>
                <div className="service_section__right">
                    <Image src="http://localhost:1337/uploads/freepik_adjust_52513_e8707c7f45.png" width={500} height={500} alt="service_section service" />
                </div>

            </section>
            <section className="service_section">

                <div className="service_section__left">
                    <h2>
                        Developpement d’application  <span>web</span>
                    </h2>
                    <p>Aujourd’hui, une application mobile est un atout puissant pour toucher plus de clients et offrir une meilleure expérience utilisateur. Avec React Native, je crée des applications performantes, rapides et compatibles iOS & Android, sans exploser votre budget.</p>
                    <div className="service_section__service" id="web">
                        <ServicesAccordion title="Pourquoi choisir une application mobile" content="✅ Touchez plus de clients : Une application permet une présence directe sur le téléphone de vos utilisateurs.✅ Améliorez l’expérience utilisateur : Offrez une interface fluide et intuitive.✅ Gagnez en efficacité : Automatisez certaines tâches et simplifiez l’interaction avec vos clients. " />
                        <ServicesAccordion title="Les Services que J’offre" content="✅ Touchez plus de clients : Une application permet une présence directe sur le téléphone de vos utilisateurs.✅ Améliorez l’expérience utilisateur : Offrez une interface fluide et intuitive.✅ Gagnez en efficacité : Automatisez certaines tâches et simplifiez l’interaction avec vos clients. " />
                    </div>
                </div>
                <div className="service_section__right">
                    <Image src="http://localhost:1337/uploads/web_5761f4cb0d.png" width={500} height={500} alt="service_section service" />
                </div>

            </section>
            <section className="service_section">

                <div className="service_section__left">
                    <h2>
                        Developpement d’application mobile
                    </h2>
                    <p>Aujourd’hui, une application mobile est un atout puissant pour toucher plus de clients et offrir une meilleure expérience utilisateur. Avec React Native, je crée des applications performantes, rapides et compatibles iOS & Android, sans exploser votre budget.</p>
                    <div className="service_section__service" id="seo">
                        <ServicesAccordion title="Pourquoi choisir une application service_section" content="✅ Touchez plus de clients : Une application permet une présence directe sur le téléphone de vos utilisateurs.✅ Améliorez l’expérience utilisateur : Offrez une interface fluide et intuitive.✅ Gagnez en efficacité : Automatisez certaines tâches et simplifiez l’interaction avec vos clients. " />
                        <ServicesAccordion title="Les Services que J’offre" content="✅ Touchez plus de clients : Une application permet une présence directe sur le téléphone de vos utilisateurs.✅ Améliorez l’expérience utilisateur : Offrez une interface fluide et intuitive.✅ Gagnez en efficacité : Automatisez certaines tâches et simplifiez l’interaction avec vos clients. " />
                    </div>
                </div>
                <div className="service_section__right">
                    <Image src="http://localhost:1337/uploads/freepik_background_44586_04a378ab90.png" width={500} height={500} alt="service_section service" />
                </div>

            </section>
            <section className="SEO">


            </section>

            <section className="web">


            </section>
        </div>)
}