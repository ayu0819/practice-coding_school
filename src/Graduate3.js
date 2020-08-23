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
 
const Graduate3 = () => {
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
    <Card.Img variant="top" src="http://hudehisa.sakura.ne.jp/test_image/coding__main-impression-3.jpg" />
    <Card.Body>
      <Card.Title><p><strong>短期間で国家資格に合格できました。</strong></p></Card.Title>
      <Card.Text>
      資格取得のために、特別資格コースへ入学をしました。通学日時などを調節することができ、日中忙しい私でも無事試験合格を達成することができました。3ヶ月と短い期間でいたが‥
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
          <h2 class="ReactModal__title" ref={_subtitle => (subtitle = _subtitle)}>D&D Studioで経験を積み、<br />あこがれのWeb業界へ！</h2>
          <img class="ReactModal__img" src="http://hudehisa.sakura.ne.jp/test_image/coding__main-impression-3.jpg" alt="#" />
          <p class="ReactModal__text">未経験でのWeb業界への転職の難しさに直面し、諦めかけた時にD＆D Studioの存在を知って応募しました。丁寧なマンツーマン指導のおかげで、私のレベルに合わせたスピードでカリキュラムが進んで、わからないこともその場で質問ができ、日々スキルが身についていくことが実感できました。研修で勉強したことが、現場で通用するのか不安もありましたが</p>
          <Button variant="info" className="mr-2" onClick={closeModal}>close</Button>     
        </Modal>
      </div>
    );
}
 
export default Graduate3;