import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import MenuData from "./MenuData";
import FirstSubMenu from "./FirstSubMenu";
import SecondSubMenu from "./SecondSubMenu";
import SearchResultItem from "./SearchResultItem";
import "./Nav.scss";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      searchActive: false,
      searchResult: false,
      items: [],
      searchInput: "",
    };
  }

  componentDidMount() {
    fetch("Data/MockData/SearchData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ items: res });
      });
  }

  handleInput = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  handleChange = (e) => {
    this.setState({ searchResult: e.target.value });
  };

  handleSearch = () => {
    this.setState({ searchActive: !this.state.searchActive });
  };

  render() {
    const getPathName = window.location.pathname.split("/");
    const { searchActive, searchResult, searchInput, items } = this.state;
    const { handleSearch, handleInput, handleChange } = this;
    const filtered =
      items.products &&
      items.products.filter((el) =>
        el.name.toLowerCase().includes(searchInput.toLowerCase())
      );

    return (
      <nav className="Nav">
        <div
          className={
            searchActive && searchResult ? "searchResult" : "invisible"
          }
        >
          <div className="leftSpace" />
          <div className="rightSpace">
            {filtered && !filtered.length && (
              <div className="noResult">
                <img
                  src="https://www.celine.com/on/demandware.static/-/Library-Sites-Celine-SharedLibrary/default/dwce2858c6/staticpages/Celine.com_WEB_AUCUN_RESULTAT.jpg"
                  alt="failed to search"
                />
                <h1>no results found for your search</h1>
              </div>
            )}
            <ul>
              <SearchResultItem products={filtered} />
            </ul>
          </div>
        </div>
        <div className="upper">
          <div className="leftContainer">
            <div className="logo">
              <Link to="/">
                <img
                  alt="logo"
                  src="https://www.celine.com/on/demandware.static/Sites-Celine_NONTRANSAC_V2-Site/-/default/dw1bd73729/img/logo/logo-celine.svg"
                />
              </Link>
            </div>
            <div className="navContainer">
              <div
                className={searchActive ? "searchInputActive" : "searchInput"}
              >
                <input
                  type="text"
                  onChange={(e) => {
                    handleChange(e);
                    handleInput(e);
                  }}
                />
                <button onClick={handleSearch}>close</button>
              </div>
              <ul className={searchActive ? "invisible" : ""}>
                {Object.keys(MenuData).map((key) => (
                  <li key={key}>
                    <NavLink
                      to={`/${key.slice(7)}`}
                      activeStyle={{
                        fontWeight: "bold",
                      }}
                    >
                      {key}
                    </NavLink>
                  </li>
                ))}
              </ul>
              {getPathName[1] && (
                <FirstSubMenu
                  searchActive={searchActive}
                  firstSubMenu={getPathName}
                />
              )}
              {getPathName[2] && (
                <SecondSubMenu
                  searchActive={searchActive}
                  secondSubMenu={getPathName}
                />
              )}
            </div>
          </div>
          <div className={searchActive ? "invisible" : "rightContainer"}>
            <div role="search">
              <button onClick={handleSearch}>search</button>
            </div>
            <div className={searchActive ? "invisible" : "rightBtns"}>
              <div>
                <button>sign in / register</button>
              </div>
              <div>
                <button>store locator</button>
              </div>
              <div>
                <button>shopping bag</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="location">
            <div>location</div>
            <div>language</div>
            <div>sitemap</div>
          </div>
          <div className="messenger">
            <div>messenger</div>
            <div>whatsapp</div>
            <div>contact us</div>
            <div>legal terms</div>
            <div>privacy policy</div>
            <div>faq</div>
          </div>
          <div className="socialMedia">
            <div>instagram</div>
            <div>facebook</div>
            <div>wechat</div>
            <div>youtube</div>
          </div>
          <div className="newsletter">
            <div>celine newsletter</div>
            <div>mail</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
