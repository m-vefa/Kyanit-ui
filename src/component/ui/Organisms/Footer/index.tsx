import { FC } from 'react';
import { EmailIcon } from '../../../../icons/EmailIcon';
import './footer.scss'
type Props = {

};
const Footer: FC<Props> = () => {

  return (
    <footer className='footer'>
      <div className='x container'>
        <div className='footer-col'>

          <div className='top'>

            <div className='logo'>
              <img src='https://www.kyanitkagit.com/wp-content/uploads/2022/07/1-2.png' alt='' />
            </div>


            <div className='summary'>
              <p>Your content goes here. Edit or remove this text inline oCSS to this text in the module Advanced settings.</p>
            </div>
          </div>
          <ul className='social-buttons'>
            <li className='facebook-icon'>
              <a href='/' className='' title='Follow on Facebook' target='_blank'>
                <span className='fff'> <EmailIcon fillColor='white' /></span>
              </a>
            </li>
            <li className='linkedIn-icon'>
              <a href='/' className='' title='Follow on LinkedIn' target='_blank'>
                <span className='fff'> <EmailIcon fillColor='white' /></span>
              </a>
            </li>



          </ul>
        </div>
        <div className='quick-access'>
          <div className='title'>
            <h1>Hızlı Erişim</h1>
          </div>
          <div className='links'>
            <ul>
              <li>link1</li>
              <li>link1</li>
              <li>link1</li>
              <li>link1</li>
              <li>linlink1</li>
              <li>inlink1</li>
            </ul>
          </div>
        </div>
        <div className='quick-access'>
          <div className='title'>
            <h1>Hızlı Erişim</h1>
          </div>
          <div className='links'>
            <ul>
              <li>link1</li>
              <li>link1</li>
              <li>link1</li>
              <li>link1</li>
              <li>linlink1</li>
              <li>inlink1</li>
            </ul>
          </div>
        </div>

        <div className='contact'>
          <div className='title'>
            <h1>İletişim</h1>
          </div>
          <div className='links'>
            <ul>
              <li>
                <div className='icon'>

                  <EmailIcon fillColor='white' />
                </div>
                <div className='text'>
                  info@kyanitkagit.com
                </div>

              </li>
              <li>
                <div className='icon'>

                  <EmailIcon fillColor='white' />
                </div>
                <div className='text'>
                +90 531 632 93 65
                </div>

              </li>

              <li>
                <div className='icon'>

                  <EmailIcon fillColor='white' />
                </div>
                <div className='text'>
                Üzümdalı, 11 Sk No: 4, Antakya Hatay / Türkiye
                </div>

              </li>


            </ul>
          </div>
        </div>
      </div>

    </footer>
  );

};
export default Footer;

