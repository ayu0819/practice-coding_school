import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Media from 'react-bootstrap/Media'
import Accordion from 'react-bootstrap/Accordion'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

class MaiContents extends React.Component {
  render() {
    return (
<div>
<section class="w-responsive container my-5 common">
<h2 class="text-center my-5"><span class="catch">入学選考</span>要項</h2>


<ListGroup variant="flush">
  <ListGroup.Item>
  <Container>
<div class="application-list">
  </div>
</Container>
  </ListGroup.Item>
  <ListGroup.Item>
  <Container>
  <div class="application-list">
  <Row>
    <Col sm={2}><p><strong>応募資格</strong></p></Col>
    <Col sm={10}>
      <ul>
        <li>独学・専門学校などでHTML、CSS、JavaScriptなどのプログラミング学習を習得されている方</li>
        <li>また、PhotoShop、Illustratorなどのソフトが使用可能な方</li>
        <li>ポートフォリオ・履歴書・職務経歴書が提出が可能な方</li>
      </ul>
    </Col>
  </Row>
  </div>
</Container>
  </ListGroup.Item>
  <ListGroup.Item>
  <Container>
  <div class="application-list">
  <Row>
    <Col sm={2}><p><strong>通学頻度</strong></p></Col>
    <Col sm={10}>
<p>未経験者:6ヶ月 経験者:3ヶ月 程</p>
    </Col>
  </Row>
  </div>
</Container>
  </ListGroup.Item>
  <ListGroup.Item>
  <Container>
  <div class="application-list">
  <Row>
    <Col sm={2}><p><strong>所在地</strong></p></Col>
    <Col sm={10}>
<p>Coding School</p>
<p>東京都港区新橋5-555 Ankerビル2F</p>
<p><strong>＜アクセス＞</strong></p>
<ul>
  <li>JR・東京メトロ銀座線・都営浅草線・ゆりかもめ「新橋」駅　徒歩10分</li>
  <li>都営三田線「内幸町」駅　徒歩7分</li>
  </ul>
    </Col>
  </Row>
  </div>
</Container>
  </ListGroup.Item>
  <ListGroup.Item>
  <Container>
  <div class="application-list">
  <Row>
    <Col sm={2}><p><strong>学習時間</strong></p></Col>
    <Col sm={10}>
<p>10:00 〜 19:00</p>
    </Col>
  </Row>
  </div>
</Container>
  </ListGroup.Item>
  <ListGroup.Item>
  <Container>
  <div class="application-list">
  <Row>
    <Col sm={2}><p><strong>完備施設</strong></p></Col>
    <Col sm={10}>
<ul>
  <li>車内カフェテリア</li>
  <li>自転車駐車場</li>
  <li>近郊にコンビニ有り</li>
</ul>
    </Col>
  </Row>
  </div>
</Container>
  </ListGroup.Item>
<ListGroup.Item>
<Container>
<div class="application-list">
  <Row>
    <Col sm={2}><p><strong>生徒人数</strong></p></Col>
    <Col sm={10}>
<p>約120人</p>
    </Col>
  </Row>
  </div>
</Container>
  </ListGroup.Item>
</ListGroup>
</section>
<section class="w-responsive container my-5 common">
<h2 class="text-center my-5">応募から内定までの流れ</h2>
<CardDeck>
  <Card>
  <div class="shadow-sm">
  <Card.Title>STEP.1</Card.Title>
    <Card.Img variant="top" src="http://hudehisa.sakura.ne.jp/test_image/flow_1_app.jpg"/>
    <Card.Body>
      <Card.Text>
       <strong>WEBから応募‥</strong>
      </Card.Text>
    </Card.Body>
    </div>
  </Card>
  <Card>
  <div class="shadow-sm">
  <Card.Title>STEP.2</Card.Title>
    <Card.Img variant="top" src="http://hudehisa.sakura.ne.jp/test_image/flow_2_document.jpg"/>
    <Card.Body>
      <Card.Text>
        <strong>必要書類の提出</strong>
      </Card.Text>
    </Card.Body>
    </div>
  </Card>
  <Card>
  <div class="shadow-sm">
  <Card.Title>STEP.3</Card.Title>
    <Card.Img variant="top" src="http://hudehisa.sakura.ne.jp/test_image/flow_3_selection.jpg"/>
    <Card.Body>
      <Card.Text>
        <strong>書類選考</strong>
      </Card.Text>
    </Card.Body>
    </div>
  </Card>
  <Card>
  <div class="shadow-sm">
  <Card.Title>STEP.4</Card.Title>
    <Card.Img variant="top" src="http://hudehisa.sakura.ne.jp/test_image/flow_4_interview.jpg"/>
    <Card.Body>
      <Card.Text>
        <strong>面接</strong>
      </Card.Text>
    </Card.Body>
    </div>
  </Card>
  <Card>
  <div class="shadow-sm">
  <Card.Title>STEP.5</Card.Title>
    <Card.Img variant="top" src="http://hudehisa.sakura.ne.jp/test_image/flow_5_work.jpg" />
    <Card.Body>
      <Card.Text>
        <strong>内定・入社</strong>
      </Card.Text>
    </Card.Body>
    </div>
  </Card>
</CardDeck>
<p class="my-4"><small>※弊社担当者より、ご登録のメールアドレスにご連絡しますので、必要書類の提出をお願いします。必要書類とは「履歴書（写真添付）」、「職務経歴書」、「ポートフォリオ（学校の課題や自主制作のサイトURLなど）」になります。</small></p>
</section>
<section class="w-responsive container my-5 common">
<h2 class="text-center my-5"><span class="catch">よくある</span>ご質問</h2>
<ListGroup variant="flush">
  <ListGroup.Item>
    <div class="faq__container">
    <dl class="faq__detail">
      <dt　class="faq__question"><strong>卒業後までの期間は何カ月程でしょうか？</strong></dt>
      <dt　class="faq__answer">個人差がありますが、経験者は3ヶ月ほど・未経験者は6ヶ月が目安です。</dt>
    </dl>
    </div>
  </ListGroup.Item>
  <ListGroup.Item>
  <div class="faq__container">
 <dl class="faq__detail">
  <dt　class="faq__question"><strong>スクールへの入学に年齢制限はありますか？</strong></dt>
  <dt　class="faq__answer">年齢制限はありません。</dt></dl></div>
  </ListGroup.Item>
  <ListGroup.Item>
  <div class="faq__container">
  <dl class="faq__detail">
      <dt class="faq__question"><strong>入学時に審査・試験はありますか？</strong></dt>
      <dt class="faq__answer">特にございません。しかし、履歴書・職務経歴書をいただきます。</dt>
    </dl>
    </div>
  </ListGroup.Item>
  <ListGroup.Item>
  <div class="faq__container">
  <dl class="faq__detail">
      <dt　class="faq__question"><strong>学習時にかかる費用はいくらですか？</strong></dt>
      <dt class="faq__answer">費用は一切かかりません。しかし飲食代は負担しません。</dt>
    </dl>
    </div>
  </ListGroup.Item>
</ListGroup>
</section>
<section class="w-responsive container my-5 ">
<Container>
<div class="w-responsive container my-5 text-center">
<a href="#home" class="colour__twitter"><i class="fab fa-twitter-square footer__icon"></i></a>
        <a href="#features" class="colour__facebook"><i class="fab fa-facebook-square footer__icon"></i></a>
        <a href="#pricing" class="colour__line"><i class="fab fa-line footer__icon"></i></a>
  </div>
</Container>
</section>
</div>
    );
  }
}

export default MaiContents;
