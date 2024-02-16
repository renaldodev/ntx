import { Fragment } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ThemeChanger } from "../../../redux/action";
import desktoplogo from "../../../assets/images/brand-logos/desktop-logo.png";
import togglelogo from "../../../assets/images/brand-logos/toggle-logo.png";
import desktopdark from "../../../assets/images/brand-logos/desktop-dark.png";
import toggledark from "../../../assets/images/brand-logos/toggle-dark.png";
import desktopwhite from "../../../assets/images/brand-logos/desktop-white.png";
import togglewhite from "../../../assets/images/brand-logos/toggle-white.png";
import us from "../../../assets/images/flags/us_flag.jpg";

import face9 from "../../../assets/images/faces/9.jpg";

import store from "../../../redux/store";
import { useTranslation } from "../../../hooks";

const Header = ({ local_varaiable, ThemeChanger }: any) => {
  document.addEventListener("click", function () {
    document.querySelector(".search-result")?.classList.add("d-none");
  });

  //Dark Model
  const ToggleDark = () => {
    ThemeChanger({
      ...local_varaiable,
      dataThemeMode: local_varaiable.dataThemeMode == "dark" ? "light" : "dark",
      dataHeaderStyles:
        local_varaiable.dataHeaderStyles == "dark" ? "light" : "dark",
      dataMenuStyles:
        local_varaiable.dataNavLayout == "horizontal"
          ? local_varaiable.dataThemeMode == "dark"
            ? "light"
            : "dark"
          : "dark",
    });
    const theme = store.getState();

    if (theme.dataThemeMode != "dark") {
      ThemeChanger({
        ...theme,
        bodyBg1: "",
        bodyBg2: "",
        darkBg: "",
        inputBorder: "",
      });
      localStorage.setItem("ynexlighttheme", "light");
      localStorage.removeItem("ynexdarktheme");
      localStorage.removeItem("darkBgRGB1");
      localStorage.removeItem("darkBgRGB2");
      localStorage.removeItem("darkBgRGB3");
      localStorage.removeItem("darkBgRGB4");
    } else {
      localStorage.setItem("ynexdarktheme", "dark");
      localStorage.removeItem("ynexlighttheme");
    }
  };

  function menuClose() {
    const theme = store.getState();
    ThemeChanger({ ...theme, toggled: "close" });
  }

  const toggleSidebar = () => {
    const theme = store.getState();
    const sidemenuType = theme.dataNavLayout;
    if (window.innerWidth >= 992) {
      if (sidemenuType === "vertical") {
        const verticalStyle = theme.dataVerticalStyle;
        const navStyle = theme.dataNavStyle;
        switch (verticalStyle) {
          // closed
          case "closed":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.toggled === "close-menu-close") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "close-menu-close" });
            }
            break;
          // icon-overlay
          case "overlay":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.toggled === "icon-overlay-close") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              if (window.innerWidth >= 992) {
                ThemeChanger({ ...theme, toggled: "icon-overlay-close" });
              }
            }
            break;
          // icon-text
          case "icontext":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.toggled === "icon-text-close") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "icon-text-close" });
            }
            break;
          // doublemenu
          case "doublemenu":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.toggled === "double-menu-open") {
              ThemeChanger({ ...theme, toggled: "double-menu-close" });
            } else {
              const sidemenu = document.querySelector(
                ".side-menu__item.active"
              );
              if (sidemenu) {
                ThemeChanger({ ...theme, toggled: "double-menu-open" });
                if (sidemenu.nextElementSibling) {
                  sidemenu.nextElementSibling.classList.add(
                    "double-menu-active"
                  );
                } else {
                  ThemeChanger({ ...theme, toggled: "" });
                }
              }
            }

            // doublemenu(ThemeChanger);
            break;
          // detached
          case "detached":
            if (theme.toggled === "detached-close") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "detached-close" });
            }
            break;
          // default
          case "default":
            ThemeChanger({ ...theme, toggled: "" });
        }
        switch (navStyle) {
          case "menu-click":
            if (theme.toggled === "menu-click-closed") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "menu-click-closed" });
            }
            break;
          // icon-overlay
          case "menu-hover":
            if (theme.toggled === "menu-hover-closed") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "menu-hover-closed" });
            }
            break;
          case "icon-click":
            if (theme.toggled === "icon-click-closed") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "icon-click-closed" });
            }
            break;
          case "icon-hover":
            if (theme.toggled === "icon-hover-closed") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "icon-hover-closed" });
            }
            break;
        }
      }
    } else {
      if (theme.toggled === "close") {
        ThemeChanger({ ...theme, toggled: "open" });

        setTimeout(() => {
          if (theme.toggled == "open") {
            const overlay = document.querySelector("#responsive-overlay");

            if (overlay) {
              overlay.classList.add("active");
              overlay.addEventListener("click", () => {
                const overlay = document.querySelector("#responsive-overlay");

                if (overlay) {
                  overlay.classList.remove("active");
                  menuClose();
                }
              });
            }
          }

          window.addEventListener("resize", () => {
            if (window.screen.width >= 992) {
              const overlay = document.querySelector("#responsive-overlay");

              if (overlay) {
                overlay.classList.remove("active");
              }
            }
          });
        }, 100);
      } else {
        ThemeChanger({ ...theme, toggled: "close" });
      }
    }
  };

  const { changeLanguage, language } = useTranslation();
  const languages = [
    { label: "English", lng: "en" },
    { label: "Português", lng: "pt" },
    { label: "Francês", lng: "fr" },
  ];
  return (
    <Fragment>
      <header className="app-header">
        <div className="main-header-container container-fluid">
          <div className="header-content-left">
            <div className="header-element">
              <div className="horizontal-logo">
                <Link to={"/dashboards/crm/"} className="header-logo">
                  <img src={desktoplogo} alt="logo" className="desktop-logo" />
                  <img src={togglelogo} alt="logo" className="toggle-logo" />
                  <img src={desktopdark} alt="logo" className="desktop-dark" />
                  <img src={toggledark} alt="logo" className="toggle-dark" />
                  <img
                    src={desktopwhite}
                    alt="logo"
                    className="desktop-white"
                  />
                  <img src={togglewhite} alt="logo" className="toggle-white" />
                </Link>
              </div>
            </div>
            <div className="header-element">
              <Link
                aria-label="Hide Sidebar"
                onClick={() => toggleSidebar()}
                className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                data-bs-toggle="sidebar"
                to="#"
              >
                <span></span>
              </Link>
            </div>
          </div>

          <div className="header-content-right">
            <Dropdown className="header-element country-selector">
              <Dropdown.Toggle
                variant=""
                className="header-link dropdown-toggle"
                data-bs-auto-close="outside"
                data-bs-toggle="dropdown"
              >
                {/* <img
                  src={us}
                  alt="img"
                  className="rounded-circle header-link-icon"
                /> */}
                {language}
              </Dropdown.Toggle>
              <Dropdown.Menu
                align="end"
                as="ul"
                className="main-header-dropdown dropdown-menu dropdown-menu-end"
                data-popper-placement="none"
              >
                {languages.map((l) => (
                  <Dropdown.Item
                    key={l.lng}
                    as="li"
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                    onClick={() => changeLanguage(l.lng)}
                  >
                    <span className="avatar avatar-xs lh-1 me-2">
                      <img src={us} alt="img" />
                    </span>
                    {l.label}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <div className="header-element header-theme-mode">
              <Link
                to="#"
                className="header-link layout-setting"
                onClick={() => ToggleDark()}
              >
                <span className="light-layout">
                  <i className="bx bx-moon header-link-icon"></i>
                </span>
                <span className="dark-layout">
                  <i className="bx bx-sun header-link-icon"></i>
                </span>
              </Link>
            </div>

            <Dropdown className="header-element header-profile">
              <Dropdown.Toggle
                variant=""
                className="header-link dropdown-toggle"
                id="mainHeaderProfile"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <div className="d-flex align-items-center">
                  <div className="me-sm-2 me-0">
                    <img
                      src={face9}
                      alt="img"
                      width="32"
                      height="32"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="d-sm-block d-none">
                    <p className="fw-semibold mb-0 lh-1">Json Taylor</p>
                    <span className="op-7 fw-normal d-block fs-11">
                      Web Designer
                    </span>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu
                align="end"
                as="ul"
                className="main-header-dropdown  pt-0 overflow-hidden header-profile-dropdown"
                aria-labelledby="mainHeaderProfile"
              >
                <Dropdown.Item className="d-flex" href={"/pages/profile/"}>
                  <i className="ti ti-user-circle fs-18 me-2 op-7"></i>Profile
                </Dropdown.Item>
                <Dropdown.Item className="d-flex" href={"/pages/profile/"}>
                  <i className="ti ti-user-circle fs-18 me-2 op-7"></i>Sair
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});
export default connect(mapStateToProps, { ThemeChanger })(Header);
