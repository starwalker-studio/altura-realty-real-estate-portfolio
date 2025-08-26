import style from './Stories.module.scss';

export const Stories = () => {
    return (
        <>
            <section className={style.testimonial_section}>
                <div className={style.testimonial_section_grid}>
                    <div className={style.header}>
                        <h2>Testimonios</h2>
                    </div>
                    <div className={style.testimonial_container}>
                        <div className={style.testimonial}>
                            <p>
                                “Altura Realty me ayudó a encontrar una casa de campo perfecta en Napa Valley. El proceso fue muy fácil y su atención al cliente fue excepcional.”
                            </p>
                            <h6>- Sarah López, California</h6>
                        </div>
                        <div className={style.testimonial}>
                            <p>
                                “Mi familia y yo encontramos la casa perfecta en Altura. El proceso fue sencillo y claro. Estamos muy contentos con nuestra compra.”
                            </p>
                            <h6>- Carla López, CDMX</h6>
                        </div>
                        <div className={style.testimonial}>
                            <p>
                                “Altura Realty nos ayudó a vender nuestro departamento en tiempo récord y por un excelente precio. Recomendados al 100%.”
                            </p>
                            <h6>- Jorge Pérez, Guadalajara</h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
