import React from 'react';
import Modal from 'react-modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    margin                : '0 auto',
  }
  };  
 
const Graduate1 = () => {
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
 
    function afterOpenModal() {        
        subtitle.style.color = '#ff921e';
    }
 
    function closeModal(){
        setIsOpen(false);
    }
    return (    
        <div>

<div class="card__padding">
  <Card>
  <div class="shadow-sm card__fix">
    <Card.Img variant="top" src="http://hudehisa.sakura.ne.jp/test_image/coding__main-impression-1.jpg" />
    <Card.Body>
      <Card.Title><p><strong>イラストレータからプログラマーへ転職を実現!</strong></p></Card.Title>
      <Card.Text>
      前職はイラストレータをしておりました。プログラマーの未経はなく、最初は難しいと思っていました。しかし、担当の方が非常に親切だったので理解することができました。‥
      </Card.Text>
    </Card.Body>
    <Card.Footer variant="success"onClick={openModal}>
      <small className="text-muted">もっと見る</small>
    </Card.Footer>
    </div>
  </Card>
  </div>



        {/* <Button variant="success" className="mr-2" onClick={openModal}>モーダル表示</Button> */}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 class="ReactModal__title" ref={_subtitle => (subtitle = _subtitle)}>イラストレータから<br />プログラマーへ転職を実現!</h2>
          <img class="ReactModal__img" src="http://hudehisa.sakura.ne.jp/test_image/coding__main-impression-1.jpg" alt="#" />
          <p class="ReactModal__text">前職はイラストレータをしておりました。プログラマーの未経はなく、最初は難しいと思っていました。しかし、担当の方が非常に親切だったので理解することができました。そして、卒業後フリーランスとして働いています。2つのスキルを持ちクライアントに貢献できるので、この学校を選択して良かったと思います。</p>
          <Button variant="info" className="mr-2" onClick={closeModal}>close</Button>     
        </Modal>
      </div>
    );
}
 
export default Graduate1;