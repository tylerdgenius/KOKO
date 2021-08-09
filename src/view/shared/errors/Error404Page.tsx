import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorWrapper from 'src/view/shared/errors/styles/ErrorWrapper';
import { i18n } from 'src/i18n';
import { Button } from '@material-ui/core';
import swal from 'sweetalert';

const Error404Page = () => {

  useEffect(() => {
    swal({
      text: "Provider Not Available ....",
      // content: el,
      buttons: {
        confirm: {
          /*
           * We need to initialize the value of the button to
           * an empty string instead of "true":
           */
          value: "DEFAULT_INPUT_TEXT",
        },
      },
    })

    window.location.href = "/medicaltest/new";
 
  }, [])

  return (
    <ErrorWrapper>
      {/* <div className="exception">
        <div className="content">
          <h1>404</h1>
          <div className="desc">{i18n('errors.404')}</div>
          <div className="actions">
            <Button
              component={Link}
              to="/"
              variant="contained"
              color="primary"
              type="button"
            >
              {i18n('errors.backToHome')}
            </Button>
          </div>
        </div>
      </div> */}
      
    </ErrorWrapper>
  );
};

export default Error404Page;
