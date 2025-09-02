import { forwardRef } from 'react';
import style from './About.module.scss';

export const About = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <>
            <section ref={ref} className={style.section_about}>
                <div className={style.block_container}>
                    <div className={style.layout_grid}>
                        <div className={style.node}>
                            <div className={style.heading_label}>
                                <div className={style.body_p}>
                                    <h3>Expertos en comodidad y lujo</h3>
                                    <p>En Altura Realty, no solo te ofrecemos propiedades, sino una experiencia única de compra, venta y renta de inmuebles. Somos más que una inmobiliaria: somos tu aliado en cada paso del camino para encontrar el hogar o inversión perfecta.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
})
