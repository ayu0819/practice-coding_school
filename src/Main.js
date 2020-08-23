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

class Main extends React.Component {
  render() {
    return (
<div>
<section class="container my-5 common">
<h2 class="text-center my-5"><span class="catch">こんな</span>悩みはありませんか？</h2>
<CardDeck>
<Card>
<div class="shadow-sm">
<Card.Img variant="top" src="http://hudehisa.sakura.ne.jp/test_image/catch_1_yhink.jpg" />
<Card.Body>
<Card.Text>
 <strong>独学をしたけど難しい</strong>
</Card.Text>
</Card.Body>
</div>
</Card>
<Card>
<div class="shadow-sm">
<Card.Img variant="top" src="http://hudehisa.sakura.ne.jp/test_image/catch_2_skill.jpg" />
<Card.Body>
<Card.Text>
  <strong>スキル習得方がわからない</strong>
</Card.Text>
</Card.Body>
</div>
</Card>
<Card>
<div class="shadow-sm">
<Card.Img variant="top" src="http://hudehisa.sakura.ne.jp/test_image/catch_3_work.jpg" />
<Card.Body>
<div>
<Card.Text>
  <strong>手に職を身に付けたい</strong>
</Card.Text>
  </div>
</Card.Body>
</div>
</Card>
<Card>
<div class="shadow-sm">
<Card.Img variant="top" src="http://hudehisa.sakura.ne.jp/test_image/catch_4_study.jpg" />
<Card.Body>
<Card.Text>
  <strong>専門の資格に合格したい</strong>
</Card.Text>
</Card.Body>
</div>
</Card>
</CardDeck>
</section>

<section class="w-responsive container my-5 common">
<h2 class="text-center my-5"><span class="catch">Coding School</span> で現場のプロからコーディングを学ぼう</h2>
<div class="my-4">
<Media>
<img
width={64}
height={64}
className="mr-3"
src="http://hudehisa.sakura.ne.jp/test_image/coding__nunber-1.png"
alt="Generic placeholder stify-content-md-center"
/>

<Media.Body>
  <h5>第一線で活躍プロからの実践的な教育指導</h5>
  <p>実務経験豊富なプログラマーがあなたを徹底サポートします。</p>
</Media.Body>
</Media>
</div>
<Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1"> <span class="toggle__text">カリキュラムを見る</span><i class="fas fa-chevron-right"></i> {/* <i class="colour__right"><FontAwesomeIcon style={colour__right} icon={faChevronRight} /></i> */} </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <p>現場で使用頻度の高い技術を用いて、HTML/CSS/JavaScriptの構造を構築・運用両面を考慮したかたちで設計できるように、概念・手法を学べる内容になっています。</p>
        <p>また、Gitでのバージョン管理など、実案件の運用において今や必須になってきている管理方法も、実例や実際のツールから学び現場フローへの対応力を高めることで、即戦力人材を育成します。</p>
        <p><strong>使用する言語・ツール・フレームワーク</strong></p>
        <p>HTML5/CSS/javascript/ES6（ES2015）/マルチデバイス対応/Sass（CSSメタ言語）/Git（ファイルバージョン管理）/ライブラリ・フレームワーク/gulp（タスクランナー）/Jenkins（CIツール）/Node.js（サーバーサイドJavaScript環境）/テスト用サーバー構築/CSS開発環境/babel,webpack等のECMAscript開発環境/Virtualbox（検証環境構築）</p>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<div class="my-5">
  <Media> <img width={64} height={64} className="mr-3" src="http://hudehisa.sakura.ne.jp/test_image/coding__nunber-2.png" alt="Generic placeholder" />
    <Media.Body>
      <h5>企業との研修・卒業後の就活支援あり</h5>
      <p> 当社の紹介する企業への、研修と就活をサポートします。 </p>
    </Media.Body>
  </Media>
</div>
<div class="my-5">
  <Media> <img width={64} height={64} className="mr-3" src="http://hudehisa.sakura.ne.jp/test_image/coding__nunber-3.png" alt="Generic placeholder" />
    <Media.Body>
      <h5>万能な環境での学習</h5>
      <p> ストレスフリーな環境で学ぶ、充実した時間を </p>
    </Media.Body>
  </Media>
</div>
<div class="my-4">
  <CardDeck>
    <Card>
      <div　class="shadow-sm">
        <Image variant="top" src="http://hudehisa.sakura.ne.jp/test_image/coding__main-contents-3.jpg" rounded fluid />
        <Card.Body>
          <Card.Text>広い職場で制作</Card.Text>
        </Card.Body>
</div>
</Card>
<Card>
  <div　class="shadow-sm">
    <Image variant="top" src="http://hudehisa.sakura.ne.jp/test_image/coding__main-contents-1.jpg" rounded fluid />
    <Card.Body>
      <Card.Text>パソコンの支給</Card.Text>
    </Card.Body>
    </div>
</Card>
<Card>
  <div　class="shadow-sm">
    <Image variant="top" src="http://hudehisa.sakura.ne.jp/test_image/coding__main-contents-2.jpg" rounded fluid />
    <Card.Body>
      <Card.Text>カフェテリア設備</Card.Text>
    </Card.Body>
    </div>
</Card>
</CardDeck>
</div>
<Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1"> <span class="toggle__text">他の施設について</span><i class="fas fa-chevron-right"></i> {/* <i class="colour__right"><FontAwesomeIcon style={colour__right} icon={faChevronRight} /></i> */} </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <Container>
          <p>近郊に<strong>コンビニ</strong>また、施設内に雑貨・簡易食事の販売も有り(不定期)</p>
          <p>学校が発行する証明書の使用で、割引対象になる商品・サービスも有ります。</p>
        </Container>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</section>
<h2 class="text-center my-5"><span class="catch">卒業生</span>の感想</h2>
</div> ); } } export default Main;