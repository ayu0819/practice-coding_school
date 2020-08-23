import React from 'react';
import Button from 'react-bootstrap/Button';

class Footer extends React.Component {
  render() {
    return (
<div>
<section class="top-btn"> <a href="#pricing"><i class="top__icon colour__up fas fa-chevron-up"></i></a> </section>
  <section class="text-center cv">
    <div className="mb-2">
      <Button class="cv__btn" variant="primary" size="lg">
      応募する
    </Button>{' '} </div>
  </section>
  <section class="w-responsive footer">
    <p class="text-center"><small>© Coding School Co.,Ltd. ALL RIGHTS RESERVED.</small></p>
  </section>
</div>
    );
  }
}

export default Footer;
