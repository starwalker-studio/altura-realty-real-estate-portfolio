import { useMobileScreen } from "../hooks/useMobileScreen";
import { List, PersonVideo2, Houses, SuitcaseLg, ChatRightHeart } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import { ENV } from "../../../env/env";
import style from "./TopBar.module.scss";
import { useScrollDown } from "../hooks/useScrollDown";

type TopBarProps = {
  onNavigate: (section: 'home' | 'about' | 'houses' | 'services' | 'stories') => void;
}

export const TopBar = ({ onNavigate }: TopBarProps) => {

  const { isMobileScreen, handleClick, nav_transition } = useMobileScreen();
  const { scrolled, hidden, navbarEffects, navbarTransition } = useScrollDown();

  return (
    <>
      <motion.nav
        className={`${style.navbar} ${scrolled && style.navbar_scrolled} ${hidden && style.navbar_hidden}`}
        initial="initial"
        animate={hidden ? "hidden" : "visible"}
        variants={navbarEffects}
        transition={navbarTransition}>
        <div className={style.navbar_wrapper}>
          <div className={style.nav_logo_wrapper}>
            <div className={`${style.logo} ${scrolled && style.logo_scrolled}`}>
              <img src={ENV.TOP_BAR.LOGO} alt="" onClick={() => onNavigate('home')} />
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
      </motion.nav>
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
                <div className={style.button_wrapper_mobile} onClick={() => handleClick()}>
                  <button>Cerrar Menú</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      }
    </>
  )
}
