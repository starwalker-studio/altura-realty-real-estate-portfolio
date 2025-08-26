import style from './Team.module.scss';

export const Team = () => {
    return (
        <>
            <section className={style.section_work_w_us_background}>
                <div className={style.work_w_us}>
                    <div className={style.work_w_us_container}>
                        <div className={style.contact}>
                            <div className={style.header_contact}>
                                <h2>Trabaja con nosotros.</h2>
                            </div>
                            <p>En Altura Realty, no solo conectamos personas con propiedades: ayudamos a construir futuros. Ya sea que estés buscando tu primera inversión, una casa para tu familia o expandir tu portafolio inmobiliario en México o Estados Unidos, estamos aquí para acompañarte en cada paso del camino.
                                Nuestro equipo está formado por profesionales apasionados por ofrecer un servicio personalizado, transparente y con visión internacional.</p>
                            <div className={style.header_contact}>
                                <h6>¿Tienes una propiedad para vender? ¿O estás listo para comprar?</h6>
                            </div>
                            <p>Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus metas inmobiliarias.</p>
                            <div className={style.contact_button}>
                                <button>Contáctanos</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
