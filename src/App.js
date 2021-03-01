import logo from './logo.svg';
import './App.css';

function App() {
  return (
<header>
		<main id="main">
            <img className="h_logo" src="img/index/logo_pocky.png" alt="pocky">
            <a href="https://pocky.glico.com/global/"><img className="logo" src="img/index/img_logo.png" alt="logo"></a>
            <img className="headertext" src="img/index/p_header.png" alt="header text">
			<div className="intro">
				<div className="visual-wrap">
					<div className="visual-list">
						<div className="item item01 origin"><img src="img/index/img_chocolate_fc.png" alt="" width="100" height="500"></div>
						<div className="item item02 origin"><img src="img/index/img_strawberry_fc.png" alt="" width="100" height="500"></div>
						<div className="item item03 origin"><img src="img/index/img_potato_fc.png" alt="" width="100" height="500"></div>
						<div className="item item04 origin"><img src="img/index/img_matcha_fc.png" alt="" width="100" height="500"></div>
						<div className="item item05 origin"><img src="img/index/img_melon_fc.png" alt="" width="100" height="500"></div>
					</div>
				</div>
				<div className="visual-bg">
					<div className="idle-bg bg01"></div>
					<div className="active-bg bg01"></div>
				</div>
            </div>
        </main>
    </header>

    <div className="history">
        <h1 className="content_title">POCKY &nbsp;HISTORY</h1>
        <h1 className="content_title_mid">POCKY<br>HISTORY</h1>
        <div className="bg_history1_box">
            <div className="bg_history1"></div>
            <a href="/history.html"><img className="img_pockybox" src="img/index/img_pockybox.png" alt="pockybox"></a>
            <p className="content_text">江崎グリコは1966年に「世界で初めての棒状チョコレート菓子」<br>としてポッキーチョコレートを発売しました。</p>
        </div>
        <main id="main">
            <div className="bg_history2_box">
                <section className="point">
                    <div className="buds js-inview"><img src="img/index/img_chocolate_fc.png" alt="" width="180" height="1000"></div>
                    <div className="bg-list js-inview">
                        <div className="item item01 origin"><img src="img/index/img_chocolate.png" alt="" width="35" height="276"></div>
                        <div className="item item02 origin"><img src="img/index/img_matcha.png" alt="" width="28" height="276"></div>
                        <div className="item item03 origin"><img src="img/index/img_melon.png" alt="" width="35" height="276"></div>
                        <div className="item item04 origin"><img src="img/index/img_potato.png" alt="" width="36" height="276"></div>
                        <div className="item item05 origin"><img src="img/index/img_strawberry.png" alt="" width="43" height="276"></div>
                    </div>
                </section>
                <h2 className="history_title">「みんなで食べてハッピーな気持ちになれるチョコスナック」。</h2>
                <p className="content_text">プリッツにチョコレートをかけ、手をよごさない「持つところがある」ポッキーは、1966年に発売。<br><br>
                    製品名は、食べる音のポッキンポッキンからつけられました。その後、お客様のニーズや時代に合わせてさまざまなポッキーを発売しました。</p>
            </div>
        </main>
    </div>

    <div className="flavor">
        <div className="flavor_title">
            <h1 className="content_title">FLAVOR</h1>
            <img className="img_smallcontent" src="img/index/img_content_3.png" alt="squares">
        </div>
        <a href="/chocolate.html"><div className="chocolate flavor_content">
            <img src="img/index/img_3chocolate.png" alt="chocolate flavor">
            <div className="flavor_text">
                <h2>CHOCOLATE</h2>
                <p>チョコレート</p>
            </div>
            <img className="flavorbox" src="img/index/img_chocolatebox.png" alt="chocolate box">
        </div></a>
        <a href="/strawberry.html"><div className="strawberry flavor_content">
            <img src="img/index/img_3strawberry.png" alt="strawberry flavor">
            <div className="flavor_text">
                <h2>STRAWBERRY</h2>
                <p>ストロベリー</p>
            </div>
            <img className="flavorbox" src="img/index/img_strawberrybox.png" alt="strawberry box">
        </div></a>
        <a href="/matcha.html"><div className="matcha flavor_content">
            <img src="img/index/img_3matcha.png" alt="matcha flavor">
            <div className="flavor_text">
                <h2>MATCHA</h2>
                <p>まっちゃ</p>
            </div>
            <img className="flavorbox" src="img/index/img_matchabox.png" alt="matcha box">
        </div></a>
        <a href="/potato.html"><div className="potato flavor_content">
            <img src="img/index/img_3potato.png" alt="potato flavor">
            <div className="flavor_text">
                <h2>POTATO</h2>
                <p>スイートポテト</p>
            </div>
            <img className="flavorbox" src="img/index/img_potatobox.png" alt="potato box">
        </div></a>
        <a href="/melon.html"><div className="melon flavor_content">
            <img src="img/index/img_3melon.png" alt="melon flavor">
            <div className="flavor_text">
                <h2>MELON</h2>
                <p>メロン </p>
            </div>
            <img className="flavorbox" src="img/index/img_melonbox.png" alt="melon box">
        </div></a>
    </div>

    <footer id="footer" className="js-inview">
        <div className="container">
            <div className="img_color">
                <div className="color_1"></div>
                <div className="color_2"></div>
                <div className="color_3"></div>
                <div className="color_4"></div>
                <div className="color_5"></div>
            </div>
            <h3>Let’s Eat Pocky</h3>
            <div className="btn_footer">
                <a href="https://www.facebook.com/"><img className="btn_fb" src="img/btn_footer_fb.png"></a>
                <a href="https://www.instagram.com/"><img className="btn_ig" src="img/btn_footer_ig.png"></a>
                <a href="https://twitter.com/?lang=zh-tw"><img className="btn_twitter" src="img/btn_footer_twitter.png"></a>
                <a href="https://www.youtube.com/"><img className="btn_yt" src="img/btn_footer_yt.png"></a>
            </div>

            <p>COPYRIGHT © 2020 Hi！Pocky ALL RIGHTS RESERVED.</p>
        </div>
        <div className="bg-list">
            <div className="item item01 origin"><img src="img/index/img_chocolate.png" alt="" width="50" height="300"></div>
            <div className="item item02 origin"><img src="img/index/img_strawberry.png" alt="" width="50" height="300"></div>
            <div className="item item03 origin"><img src="img/index/img_matcha.png" alt="" width="50" height="300"></div>
            <div className="item item04 origin"><img src="img/index/img_potato.png" alt="" width="50" height="300"></div>
            <div className="item item05 origin"><img src="img/index/img_melon.png" alt="" width="50" height="300" margin-right="20"></div>
        </div>
    </footer>
  );
}

export default App;
