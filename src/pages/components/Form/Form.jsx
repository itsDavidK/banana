import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './main.scss';
import classNames from 'classnames';

export const Form = ({ title, titleClass }) => {
  const [quoteInfo, setQuoteInfo] = useState({
    user_first_name: '',
    user_last_name: '',
    user_phone: '',
    user_email: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState({
    user_first_name: false,
    user_last_name: false,
    user_phone: false,
    user_email: false,
    message: false,
  });
  const [proudMessage, setProudMessage] = useState(false)

  const resetInfo = () => {
    const emptyTemplate = {
      user_first_name: '',
      user_last_name: '',
      user_phone: '',
      user_email: '',
      message: '',
    };

    setQuoteInfo({
      ...emptyTemplate
    });
  };

  const resetError = () => {
    setErrorMessage({
      user_first_name: false,
      user_last_name: false,
      user_phone: false,
      user_email: false,
      message: false,
    });
  };

  const handleInfoChange = (event) => {
    resetError();

    const name = event.target.name;
    const oldObj = quoteInfo;
    oldObj[name] = event.target.value;

    setQuoteInfo({
      ...oldObj,
    });
  };

  const sendEmail = (e) => {
    console.log(quoteInfo);
    e.preventDefault();

    let error = 0

    for (const prop in quoteInfo) {
      if (!quoteInfo[prop]) {
        const newObjectError = errorMessage;
        newObjectError[prop] = true;

        error += 1

        setErrorMessage({
          ...newObjectError,
        });
      }
    }

    if (error > 0) {
      return
    }

    emailjs.send('service_oe25mgg', 'template_gtd16rt', quoteInfo, 'qCXh084vCBZ1fcaPD').then(
      (result) => {
        setProudMessage(true)
        resetInfo()

        console.log(quoteInfo);

        setTimeout(() => {
          setProudMessage(false);
        }, 1000)
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <div className="form-page">
      <div className="container">
        <div className="form-page__content">
          {/* <div className="form-page__block"> */}
          <div className={`form-page__title ${titleClass}`}>{title}</div>

          <img src="./images/quote_page/banan_icon.svg" alt="" className="form-page__banan-img" />

          <form onSubmit={sendEmail} className="form-page__block">
            <div className="form-page__form">
              <div className="form-page__field">
                <label className="form-page__label">First Name</label>
                <input
                  type="text"
                  name="user_first_name"
                  value={quoteInfo['user_first_name']}
                  className={classNames('form-page__input', {
                    'form-page__input--danger': errorMessage['user_first_name'],
                  })}
                  onChange={handleInfoChange}
                />
              </div>

              <div className="form-page__field">
                <label className="form-page__label">Last Name</label>
                <input
                  type="text"
                  name="user_last_name"
                  value={quoteInfo['user_last_name']}
                  className={classNames('form-page__input', {
                    'form-page__input--danger': errorMessage['user_last_name'],
                  })}
                  onChange={handleInfoChange}
                />
              </div>

              <div className="form-page__field">
                <label className="form-page__label">Phone number</label>
                <input
                  type="phone"
                  name="user_phone"
                  value={quoteInfo['user_phone']}
                  className={classNames('form-page__input', {
                    'form-page__input--danger': errorMessage['user_phone'],
                  })}
                  onChange={handleInfoChange}
                />
              </div>

              <div className="form-page__field">
                <label className="form-page__label">Email address</label>
                <input
                  type="email"
                  name="user_email"
                  value={quoteInfo['user_email']}
                  className={classNames('form-page__input', {
                    'form-page__input--danger': errorMessage['user_email'],
                  })}
                  onChange={handleInfoChange}
                />
              </div>

              <div className="form-page__field form-page__field--description form-page__field--position-3-1_2">
                <label className="form-page__label form-page__label--description">describe your challenge</label>
                <textarea
                  name="message"
                  value={quoteInfo['message']}
                  className={classNames('form-page__input', {
                    'form-page__input--danger': errorMessage['message'],
                  })}
                  rows="1"
                  onChange={handleInfoChange}
                />
              </div>
            </div>

            {proudMessage && <span className="form-page__proud">Proud of you</span>}

            <button type="submit" className="form-page__button">
              Submit
            </button>
          </form>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
