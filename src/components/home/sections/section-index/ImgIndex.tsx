import style from "./ImgIndex.module.scss";

export const ImgIndex = () => {
    return (
        <>
            <section className={style.section_home}>
                <div className={style.background_image}>
                    <div className={style.image_gradient}></div>
                    <img src="/img/index-img/house-index.jpg" sizes="(max-width: 2000px) 100vw, 2000px" loading="lazy" alt="altura-index" />
                </div>
                <div className={style.container_index}>
                    <div className={style.conatiner_grid}>
                        <div className={style.conatiner_header}>
                            <h2>Una experiencia única a tu nuevo hogar</h2>
                            <p>tu sueño de lujo</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
