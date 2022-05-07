import "./footer.css"
export const Footer=() => {
    return (
        <>
        <div className="App">
          <div className="footer">
            <div className="one">
              <h1 className="top">CONTACT INFO </h1>
              <hr className="red"></hr>
  
              <div className="number">(+91) 97990 30777</div>
              <h3 className="text">
                support@beautybebo.com <br />
                sales@beautybebo.com
              </h3>
  
              <h3 className="text">Open time: 10:00AM - 7:00PM</h3>
  
              <div className="logo">
                <a
                  title="Facebook"
                  href="https://www.facebook.com/BeautyBebo-339715696750230/"
                  target="_blank"
                >
                  <span class="fa fa-facebook icon-social"></span>
                  <span class="name-social">
                    <img
                      className="face"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEXrQJX////qOJL+8fjyjLvzhbzrPJP73ezva6v97vb0nMXtYaTrQJbqL4/5zOHtVqDxg7X71Of+9vr/+/374ez+9frsRZj96/T85vHsS5vtWqH4vtr72erqK43xerTrNJL2tdT1qMzvZ6v5xd7zk8H0n8fwfbTwc7H3sNP0l8X5zeD2stL4xtvyjrvyg7vvaqkJzuDSAAALu0lEQVR4nO3d6ZKqOBQAYAj2QRREQVlVxH3p2/3+bzfgigokhIRg15xfM1Oj7VcJ2UhOJPmvh9TEH7EtRXNdz/PGt0j+2XWVidXAH+cstDx1evw+9YbzbuA7ehQZs9nMiJDumP3utrNZDEbTsWbz/An8hPb4uFr0tks/cSEESUiZSP8doSiKdHP5tVmsRh6v38FJOA7jf7vAidALLCcSaYT8/ny9/+ai5CC0Vr3tr68jrO2ZiRzzdxiPmP8c1kLrtA0q6rI11/GDzortY8lUOAl3JPUSV5j6z5FhI8tMaLuDrW7UwT2UaOZ3VIXRD2Mk1KZxYCAmvivS2C1UJiXJROiFHT9ix7siI7P3rdX/cQyEajx3GBZf1ugPF65woXr41REH3sWInF1c01hT6B4CnUfxPYzg9ONaz2MtoXbwa3UNpEhzX6OLrCHUYp1581JgNJwBdTlSC5VBwKb3IzNG2xGlkVJojzpcms/iQH5PbVDobUxu7WdRAPo9TZoShju+DWiR0dlSTD0ohJMfv/ECvAYyN5Vb1erCgdnwE5gNgN2Ys3ByEOhLAzmLao1qReFoLqqC3gOif5VWOyoJ7TAQDkzCWFZpcKoIlZ4jtobeApkheYNTQagOBT+CjwCnRzxzJBcOum2oodcAfUv6MBILQ7MtBXgJ6BN2G4RCe9+aGnoL0I8MhZNN64Bpt7FiJlQOkWhOXkC0IGhSSYRKxxCNyQ/Q9/jxDYFQ67SyBNMAH7+GgxdqnfY9gvcgIGKFSpuB54qKeRZxQqW9VfQSYOxrCZV1y4FJzE41hPam/cBkrlHaL5YL408AJs3NgFYYtnAkkxfQL5kwlgkHLRtsFwfsitdSS4Tq8lOACXFYOF8sFmrbFs0HsYHiom6xUGgdPgkoSVFYVbgQsqxNH+AUtDZFwtHHtDK3gCB/90aBUNl9Vh1Nw/hXRbj+PKAk6Qty4eoTgUnHPyUVav6nPYSXQMOcF4y5QvEvJyhDj8mEiw8twrQ9fe8ycoTj308twqSedt66jHehddBF/84aob8Nbd6Fg4+to2lA8LpJ7E34WQPu90AHnPAzu8JMRF650P3oOpoGLMuFvZYu4FcIFJYJ3Y9YeioP+LVKhJ1PfwrTcE7FwnFLtiLUC9i5hcJ2v6MgDXgqxCfh503s8wPNvQJhy55CKI3ST4b5wlG/NUUIgHTH982ScEo+juZurnDTkiE3ICfYdXrxYjUYjIpiUVoc+iBPqHbbUITpEYveYoA9ZDEu/bXo6z7bzwgXLShCMPze95hk0xqmPPT7i4yH0BU/qYDI3KuEe7kxwscU4yGcCi9C5MQu8Z5DjBD02zfdhZboXUGAtlVOOOFaDeO2eHoXCp42AZhEe7iIhRC8CkOh0yZwhhUPcmNbfkN9EQrtKpC5qXrmByu8tTU3odCJIQoq7GomFULffhLuBQoh+K5++g4vvO7QuAkDgadESjeLUAsl/ZAVCqykEFHlUcALYadkhLGw8Qygar1EBeGl/7kKd8Iqad7rIjbC61dfhJqwyT3qUB4NJRBeXidehKGoAQ3a0WZsIRDCcnoXrgWNusGnewjJhJIT3oSWqJe+6EB9DJ1EeN4odRZOBS3QoD7d4WVi4dC9CkW91nYwG5jrCiGYXoUbMUDo1kgHQbSqhI4X4WQo5jGE3B0+LIXRyT4LBS2yQVAnIRRZGX4pZ6GgvcC4YwQMhLB0z8JQTG+IaiVlIat4uncWipkboq86QEKhMU2Fyj8hDY1B3xeSC6NTKvSETCwgoEnjUVWIOnYiVIXM76NevdR6ZELopsKRkBFNRHaKt67QT4VHEY8hmFUzeFAJpciSBK0Fw5xgCd+Nh4Ux94n+zsyVZFvI8S20wTc0066OCoPwyTIGkjwRsmu98ADII8YsWsBoIcnKjwihg10jnWxZ1C20kWRNxNEKMLGLpAMmDw9aS7Ir4ogaLLEjGjYrK/CTCEXMLBA23dOETfsHO0n2RHT4+Pe9gxmTPwT9RChi7oSKT0Reg1EfBqYkj0WM2XJODbwEqz7MT4RCOnys8Ot/IWE4iZDNI10tmhNK/ws5xf9CtsK/3dL8/bY0FQoZ0zQmNEWN2poSpqM2MSPvxoTJyNsVsVzanHAnaAbcnPArXcX4y8J0FUNh17dW+MONCTdSmt2ZyXflhV4UJMLCD1+C7Bekq4k2v9eHMOwVRYh7PRoWfvQSHbLlJWMkyfKK26q+wf5+qnuUn5m5R7qqz/HNjEGzNZYwCN/MIL5v18QLweT7hrQFwvMbUm/+d4VonQr5vXwSL4wW590mJ17dhXjhZbcJvx1DwoXgeHx3fYkXXnd9cdu5J1yYDg5TocXrlLpwoXHdfSlv/qrwtoOW22EE0UJI95GfhSqnneyihY+d7Dan0wjChbF8O1Fy4AIULQRndReu+DyIooW/j1NBCp8+X7DwcmqM6+k8wcLs6Tz5xKWpESuEYJARan9RuJtkhDKXhW+xQr0nZ4ULHgtuQoXgj56ECo9qKlZ4zS54zxrBozUVKkS9F+GKw4YFoULDexHyOM4tUnhPgXkX8tjQLlJ4v5olk0WJ/dhUoBD8tyxKssb+JKlAYbS5/Y+ZbGbsFxWNmid/6IXg3HdZZ4Rj5h1GFGpFgT1PMin86DmUQekoLJOMIptVMGZdiGD2CyLo4YiHoOiz128oy5soZW5/zArZL9cUJq6MsG+5f6Ly1Jfl+egy28ifsns2l42d706Fy/JFnlBt7OgFX+HTWYfnLLvrPyEEP5vK4FnoNZUpma9wnv3yl2zXTV3yxFMI/tPJvxeh0tB2Wq7C7tMZ6tes83EzR2Z5CtHzWPFVaDWTjIejEG2fv+jt9ofvRvpEfkLQX07FvQmVRpJ68xNG8csXvd/Ccmyi2+cmhOXrsb93od1EWm9eQtDf0qPl3IbkNnD0mZcwOrzt6sy70aqBDHychHk3r+XeSsb/Egg+QnBycmvlCpU+73rKSZiXZjL/dsBj+QSzfnARwjLvCHzBDY+8b6vmIXya92KFE85J9nkIjU3uFxXdtDrle1aIgxAt87f/F96WG3K9LZe9MLNCSii0448Sgl60vl58a/WEZ6/IWgjSqfKt1TzWwB/BvAzXhd9Xdns8x+ufGAthW5xwuUwoD0jzTQkWlubzKRXKIa+On6kQ/LybjsmE9p7TwhRT4az0AFm5MH33zaWiMhSCkTtYIxXK1kbiQWQnBAeT+Q0nlCc9Hiv9zITP7yiohLLSYw9kJgRzgUsSihcmpci+RWUkTEoQmwWVQJgQmbeobITJM4hP80oilC3mbzOYCCH6JvjxRELZPjHuNFgICS+oIRMy383PQAgBWRZbUqFcvn+lcSHoc8LbTYiF8pTl0k1dIThr0ov2yIWyd2A31agpBH+P+zyNULZOzIY39YTIPJInA68iTB7GPqPOv5bQwCY/pRfK4y2bbqOGEKIecQ2lEMrynkm3QS0ECCpu6awslKc7BiuptEJwOlUuK6UTylYvqN1v0AkBdfEjbQbCpMEZ1i1GKiHy1xR3YlAJZe1UsxgphBDtVjT3ttAJZXtcr/uvLkT+vuoTeAlKYWJU+zN6Y1UhGB2P8sYPamESoUn9qriSEAAF9JfS1BHK1r5POY6rIATwd/iLFIqjljBpcuKuTtPmEAsB+fPqlwVno6YwmXHs5071RodQCJHfCSuN0d6jtjAxhkOn6miVSAiRefiu6WMiTOrqqOcblYwEQiMK4mmti8suwUSYtDnuoj+rUFnxwu38W6t3I9Q1GAnltIPs+AgR9h84oTvC3Z1AHOyEaYw6gS+RFGWJ0LYtlfYK3bxgK0yqa3iYBw62KIuEliWP1XoXsr0Ga2ES9ui0ngd6VMbME1qaYnm0Y7Pi4CBMwzuG8XDpR0XMF6Gtea6tuGyalpfgJEzCdtXRYN/pmrphRGkTlLU+hJanjhV7oik8dGnwE54jKRjPU1fx+mu3NB09imZJGEnRfk3V6XSqakm7Ylm8cOfgLLyFnYZ1j+RfLv+pgT/9HxEV5P0vkDbcAAAAAElFTkSuQmCC"
                    />
                  </span>
                </a>{" "}
                <a
                  title="Instagram"
                  href="https://www.instagram.com/beautybeboofficial/"
                  target="_blank"
                >
                  <span class="fa fa-instagram icon-social"></span>{" "}
                  <span class="name-social">
                    <img
                      className="insta"
                      src="data:image/jpeg;base64,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 "
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="two">
              <h1 className="top">QUICK LINKS </h1>
              <hr className="red"></hr>
  
              <h3 className="text">
                <ul>
                  <li> About us</li>
  
                  <li> Contact us</li>
  
                  <li> Term and condition</li>
  
                  <li> Privacy Policy</li>
  
                  <li> Return and Refund Policy</li>
  
                  <li> Shipping Policy</li>
                </ul>
              </h3>
            </div>
  
            <div className="three">
              <h1 className="top">CUSTOMER INFO </h1>
              <hr className="red"></hr>
  
              <h3 className="text">
                <ul>
                  <li> My account </li>
  
                  <li> Track your Order </li>
  
                  <li> Order Returns </li>
  
                  <li> WishList </li>
  
                  <li> News & events </li>
  
                  <li> FAQ </li>
                </ul>
              </h3>
            </div>
  
            <div className="four">
              <h1 className="top">CATEGORIES </h1>
              <hr className="red"></hr>
  
              <h3 className="text">
                <ul>
                  <li> Makeup </li>
  
                  <li> Skin </li>
  
                  <li> Hair </li>
  
                  <li> Personal Care </li>
  
                  <li> Mom and Baby care </li>
  
                  <li> Fragrance </li>
  
                  <li> Ayurveda </li>
                </ul>
              </h3>
            </div>
          </div>
  
          <hr className="white"></hr>
  
          <div className="bottom">
            <div className="left">
              <div>
                <img src="https://www.beautybebo.com/pub/media/wysiwyg/payment.png" />
              </div>
            </div>
  
            <div className="right">
              <h4>Sign up for newsletter</h4>
              <input
                name="email"
                type="email"
                className="newsletter-footer"
                onfocus="if(this.value=='Your email address') this.value='';"
                onblur="if(this.value=='') this.value='Your email address';"
                placeholder="Signup for Newsletter"
                data-validate="{required:true, 'validate-email':true}"
              />
  
              <button className="action" title="Subscribe" type="submit">
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>
  
        <div className="last">
          <h3>
            <address>© 2020 All Rights Reserved</address>
          </h3>
        </div>
      </>
    )
}