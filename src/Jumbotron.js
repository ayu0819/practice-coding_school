import React from 'react';
import Button from 'react-bootstrap/Button';

class Jumbotron extends React.Component {
  render() {
    return (
<div>
<div class="Jumbotron__background">
      <div class="Jumbotron__titles">
      <div class="w-100 container">
       <h1 class="Jumbotron__title">現場のプロから<br />
        プログラミングを<br />
        学ぼう</h1>
        <p>
          <Button variant="primary">応募する</Button>
        </p>
        img : <a href="http://www.freepik.com">Designed by Freepik</a>
        </div>
        </div>
        </div>
</div>
    );
  }
}

export default Jumbotron;
