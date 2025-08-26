import style from './Services.module.scss';

export const Services = () => {
    return (
        <>
            <section className={style.background_color_solid}>
                <div className={style.services_component}>
                    <div className={style.image_container}>
                        <img src="/img/index-img/hall-index.png" alt="" />
                    </div>
                    <div className={style.text_container}>
                        <div className={style.text_column}>
                            <div>
                                <h2>Servicios</h2>
                            </div>
                            <div className={style.services_content}>
                                <p>En Altura Realty, ofrecemos un portafolio exclusivo de propiedades de lujo, tanto en México como en Estados Unidos. Ya sea que busques una casa de campo en Cuernavaca o una residencia en las montañas de Aspen, tenemos lo que necesitas.</p>
                                <ul>
                                    <li>Compra y Venta de Propiedades</li>
                                    <li>Asesoría Legal y Financiera</li>
                                    <li>Renta de Casas de Lujo</li>
                                    <li>Servicios de Administración de Inmuebles</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
