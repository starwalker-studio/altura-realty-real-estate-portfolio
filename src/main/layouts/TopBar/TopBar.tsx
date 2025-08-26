import { useMobileScreen } from "../hooks/useMobileScreen";
import { List } from 'react-bootstrap-icons';
import { ENV } from "../../../env/env";
import style from "./TopBar.module.scss";

export const TopBar = () => {

  const { isMobileScreen } = useMobileScreen();

  console.log(isMobileScreen());

  // mobile navbar example: https://terris-property-showcase-template.webflow.io/

  return (
    <>
      <div className={style.navbar}>
        <div className={style.navbar_wrapper}>
          <div className={style.nav_logo_wrapper}>
            <div className={style.logo}>
              <img src={ENV.TOP_BAR.LOGO} alt="" />
            </div>
          </div>
          {
            isMobileScreen() ?
              <>
                <div className={style.mobile_icon}>
                  <span>
                    <List size={20}/>
                  </span>
                </div>
              </>
              :
              <>
                <div className={style.header_content}>
                  <ul>
                    <li>Nosotros</li>
                    <li>Propiedades</li>
                    <li>Servicios</li>
                  </ul>
                </div>
                <div className={style.button_wrapper}>
                  <button>Contacto</button>
                </div>
              </>
          }
        </div>
      </div>
    </>
  )
}
