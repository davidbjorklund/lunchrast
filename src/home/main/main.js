import React, { PureComponent, useEffect } from 'react';

import './style.css';

import { Link } from 'react-router-dom';

/*class Main extends PureComponent {
  render () {*/
const Main = (props) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1250;
  useEffect(()=>{
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [])
  return (
    <React.Fragment>
    {(width > breakpoint) && <main id={'main'}>
      <section id={'hero'}>
        <div className={"rows"}>
          <div className={"db-6"}>
            <div className={"text-section1"}>
              <h5>Lunchrast</h5>
              <h1>Utforska din skolas restauranger till ditt matkort.</h1>
              <p className={"p-big"}>Se restaurangerna kopplade till Värmdö Gymnasiums matkort.</p>
              <div className={"linkcontainer"}>
                <Link to="/app" className={"bg main"}>Upptäck Ditt Matkort</Link>
              </div>
            </div>
          </div>
          <div className={"db-6"}>
            <div className={"image-container"}>
              <img src={require("../../images/MacBook_Image@2x.png")} alt="Macbook Image" />
            </div>
          </div>
        </div>
      </section>
      <section id={'section2'}>
        <div className={"rows"}>
          <div className={"db-12"}>
            <div className={"text-section2"}>
              <h2>Underlätta din lunchrast!</h2>
              <p>Strunta i långa listor med namnen på restaurangerna, använd vår interaktiva karta för att underlätta jakten på dina restauranger.</p>
            </div>
          </div>
        </div>
        <div className={"icons"}>
          <img src={require("../../images/Alone_Icon.png")} alt="" className={"first"}/>
          <img src={require("../../images/Alone_Icon.png")} alt="" className={"second"}/>
          <img src={require("../../images/Alone_Icon.png")} alt="" className={"third"}/>
          <img src={require("../../images/Alone_Icon.png")} alt="" className={"fourth"}/>
          <img src={require("../../images/Alone_Icon.png")} alt="" className={"fifth"}/>
          <img src={require("../../images/Alone_Icon.png")} alt="" className={"sixth"}/>
        </div>
      </section>
      <section id={'cta'}>
        <div className={"rows"}>
          <div className={"db-12"}>
            <div className={"text-section5"}>
              <h2>Sätt igång direkt!</h2>
              <div className={"linkcontainer"}>
                <Link to="/app" className={"bg main"}>Testa Lunchrast</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id={"footer"}>
        <div className={"rows"}>
          <div className={"db-4 left"}>
            <Link className={"h5"} to="/">Lunchrast</Link>
          </div>
          <div className={"db-4 mid"}>
            <p className={"h5"} to="/">Copywrite: 2020</p>
          </div>
          <div className={"db-4 right"}>
            <a className={"h5"} target="_blank" href="https://dbjorklund.se">David Björklund</a>
          </div>
        </div>
      </footer>
    </main>}
    {(width <= breakpoint) && <main id={'main'}>
      <section id={'hero'}>
        <div className={"rows"}>
          <div className={"db-12"}>
            <div className={"text-section1"}>
              <h5>LUNCHRAST</h5>
              <h1>Utforska din skolas restauranger till ditt matkort.</h1>
              <div className={"image-container"}>
                {width > 500 && <img src={require("../../images/MacBookNew.png")} alt="" /> }
                {width <= 500  && <img src={require("../../images/IPhone.png")} alt="" /> }
              </div>
              <p className={"p-big"}>Se restaurangerna kopplade till Värmdö Gymnasiums matkort.</p>
              <div className={"linkcontainer"}>
                <Link to="/app" className={"bg main"}>Upptäck ditt matkort</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={'section2'}>
        <div className={"rows"}>
          <div className={"db-12"}>
            <div className={"text-section2"}>
              <h2>Underlätta din lunchrast!</h2>
              <p>Strunta i långa listor med namnen på restaurangerna, använd vår interaktiva karta för att underlätta jakten på dina restauranger.</p>
            </div>
          </div>
        </div>
        <div className={"icons"}>
          <img src={require("../../images/Alone_Icon.png")} alt="" className={"second"}/>
          <img src={require("../../images/Alone_Icon.png")} alt="" className={"third"}/>
          <img src={require("../../images/Alone_Icon.png")} alt="" className={"sixth"}/>
        </div>
        <div className={"mode-container"}>
          <img src={require('../../images/iPad@2x.png')} alt="" />
        </div>
      </section>
      <section id={'cta'}>
        <div className={"rows"}>
          <div className={"db-12"}>
            <div className={"text-section5"}>
              <h2>Sätt igång direkt!</h2>
              <div className={"linkcontainer"}>
                <Link to="/app" className={"bg main"}>Testa Lunchrast</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id={"footer"}>
        <div className={"rows"}>
          <div className={"db-4 left"}>
            <Link className={"h5"} to="/">Lunchrast</Link>
          </div>
          <div className={"db-4 mid"}>
            <p className={"h5"} to="/">Copywrite: 2020</p>
          </div>
          <div className={"db-4 right"}>
            <a className={"h5"} target="_blank" href="https://dbjorklund.se">David Björklund</a>
          </div>
        </div>
      </footer>
    </main>}
    </React.Fragment>
  )
}
//}

export default Main;
