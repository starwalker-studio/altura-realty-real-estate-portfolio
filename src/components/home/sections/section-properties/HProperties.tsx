import style from './HProperties.module.scss';

export const HProperties = () => {
    return (
        <>
            <section className={style.section_properties}>
                <div className={style.properties_block_container}>
                    <div className={style.properties_list_container}>
                        <div className={style.title_list}>
                            <h2>propiedades destacadas</h2>
                        </div>
                        <div className={style.properties_grid}>
                            <a className={style.prop_item}>
                                <div className={style.img_item_holder}>
                                    <img src="/img/index-properties-img/index-propertie-1.png" alt="" />
                                </div>
                                <div className={style.text_item_holder}>
                                    <p>$25,000,000 </p>
                                    <p>Casa de campo en Aspen, Colorado</p>
                                    <p>6 recámaras | 7 baños | 1,000 m²</p>
                                </div>
                            </a>
                            <a className={style.prop_item}>
                                <div className={style.img_item_holder}>
                                    <img src="/img/index-properties-img/index-propertie-2.png" alt="" />
                                </div>
                                <div className={style.text_item_holder}>
                                    <p>$20,500,000 </p>
                                    <p>Residencia en Napa Valley, California</p>
                                    <p>4 recámaras | 5 baños | 850 m²</p>
                                </div>
                            </a>
                        </div>
                        <div className={style.properties_grid}>
                            <a className={style.prop_item}>
                                <div className={style.img_item_holder}>
                                    <img src="/img/index-properties-img/index-propertie-2.png" alt="" />
                                </div>
                                <div className={style.text_item_holder}>
                                    <p>$20,500,000 </p>
                                    <p>Residencia en Napa Valley, California</p>
                                    <p>5 recámaras | 6 baños | 950 m²</p>
                                </div>
                            </a>
                            <a className={style.prop_item}>
                                <div className={style.img_item_holder}>
                                    <img src="/img/index-properties-img/index-propertie-3.png" alt="" />
                                </div>
                                <div className={style.text_item_holder}>
                                    <p>$22,000,000 </p>
                                    <p>Casa de campo en Lake Tahoe, California/Nevada</p>
                                    <p>4 recámaras | 5 baños | 800 m²</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
