import style from './OurCommitment.module.scss';

export const OurCommitment = () => {
    return (
        <>
            <section className={style.background_lounge_img}>
                <div className={style.lounge_section}>
                    <div className={style.lounge_container}>
                        <div className={style.lounge_title_group}>
                            <h2>Nuestro compromiso</h2>
                            <p>Acompañamos a nuestros clientes en cada paso del proceso con un servicio personalizado, garantizando una experiencia única y sin complicaciones.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
