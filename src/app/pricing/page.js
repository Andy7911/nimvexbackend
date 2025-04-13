import React from "react";


export default function Page() {

    return (

        <div>

            <section className="pricing">
<h2> Des prix varier selon vos besoins</h2>
                <div className="pricing__card">
                    <span> A partir de  <strong>1400$ </strong> </span>

                    <h3>Essentielle</h3>
                    <ul>
                        <li>Création d’un site vitrine (3-5 pages)</li>
                        <li> Design personnalisé (modèle simple)</li>
                        <li> Site responsive (adapté aux mobiles/tablettes)</li>
                        <li>Optimisation de base (SEO on-page)</li>
                        <li>Livraison en 2-4 semaines</li>
                    </ul>



                </div>

                <div className="pricing__card">    
                    <h3>Essentielle</h3>
                    <span> A partir de  <strong>1400$ </strong> </span>
                    <ul>
                        <li>Création d’un site vitrine (3-5 pages)</li>
                        <li> Design personnalisé (modèle simple)</li>
                        <li> Site responsive (adapté aux mobiles/tablettes)</li>
                        <li>Optimisation de base (SEO on-page)</li>
                        <li>Livraison en 2-4 semaines</li>
                    </ul>
                    <div className="pricing__promos">
                        <div className="pricing__banner">
                            <div className="pricing__banner_top"></div>
                            <div className="pricing__banner_body">
                                <span> promotion</span>
                            </div>
                        </div>

                    </div>
                </div>




            </section>

        </div>
    )

}