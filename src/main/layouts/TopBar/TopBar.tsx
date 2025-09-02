import { useMobileScreen } from "../hooks/useMobileScreen";
import { List, PersonVideo2, Houses, SuitcaseLg, ChatRightHeart } from 'react-bootstrap-icons';
import { ENV } from "../../../env/env";
import style from "./TopBar.module.scss";

type TopBarProps = {
  onNavigate: (section: 'about' | 'houses' | 'services' | 'stories') => void;
}

export const TopBar = ({ onNavigate }: TopBarProps) => {

  const { isMobileScreen, handleClick, nav_transition } = useMobileScreen();

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
                  <span onClick={() => handleClick()}>
                    <List size={25} />
                  </span>
                </div>
              </>
              :
              <>
                <div className={style.header_content}>
                  <ul>
                    <li onClick={() => onNavigate('about')}>Nosotros</li>
                    <li onClick={() => onNavigate('houses')}>Propiedades</li>
                    <li onClick={() => onNavigate('services')}>Servicios</li>
                    <li onClick={() => onNavigate('stories')}>Testimonios</li>
                  </ul>
                </div>
                <div className={style.button_wrapper}>
                  <button>Contacto</button>
                </div>
              </>
          }
        </div>
      </div>
      {
        isMobileScreen() &&
        <div className={style.nav_overlay}>
          <nav className={style.nav_mobile} style={nav_transition}>
            <div className={style.nav_mobile_container}>
              <div className={style.display_pages}>
                <h2>Secciones</h2>
                <ul>
                  <li onClick={() => {
                    onNavigate('about')
                    handleClick()
                  }}><span><PersonVideo2 /><p>Nosotros</p></span></li>
                  <li onClick={() => {
                    onNavigate('houses')
                    handleClick()
                  }}><span><Houses /><p>Propiedades</p></span></li>
                  <li onClick={() => {
                    onNavigate('services')
                    handleClick()
                  }}><span><SuitcaseLg /><p>Servicios</p></span></li>
                  <li onClick={() => {
                    onNavigate('stories')
                    handleClick()
                  }}><span><ChatRightHeart /><p>Testimonios</p></span></li>
                </ul>
                <div className={style.button_wrapper_mobile}>
                  <button>Contacto</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      }
    </>
  )
}
