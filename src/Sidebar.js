import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: all 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: all 0.5s ease;

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  left: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const Sidebar = ({ toggle, isOpen, data, lang, setLang }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="intro"
            className="btn__mobile"
            onClick={toggle}
            smooth={true}
          >
            {data.Header[lang].home}
          </SidebarLink>
          <SidebarLink
            to="about"
            className="btn__mobile"
            onClick={toggle}
            smooth={true}
          >
            {data.Header[lang].about}
          </SidebarLink>
          <SidebarLink
            to="services"
            className="btn__mobile"
            onClick={toggle}
            smooth={true}
          >
            {data.Header[lang].services}
          </SidebarLink>
          <SidebarLink
            to="career"
            className="btn__mobile"
            onClick={toggle}
            smooth={true}
          >
            {data.Header[lang].career}
          </SidebarLink>
          <SidebarLink
            to="client"
            className="btn__mobile"
            onClick={toggle}
            smooth={true}
          >
            {data.Header[lang].customers}
          </SidebarLink>
          <SidebarLink
            to="footer"
            className="btn__mobile"
            onClick={toggle}
            smooth={true}
          >
            {data.Header[lang].contact}
          </SidebarLink>
          <div className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle btn__mobile"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {lang}
            </div>
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={() => setLang("EN")}>
                English
              </div>
              <div className="dropdown-item" onClick={() => setLang("VI")}>
                VietNamese
              </div>
              <div className="dropdown-item" onClick={() => setLang("KO")}>
                Korean
              </div>
            </div>
          </div>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
