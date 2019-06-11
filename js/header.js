var headContent = document.getElementsByTagName('head')[0];

var googleAnalyticsFirst ="https://www.googletagmanager.com/gtag/js?id=UA-130786913-2"

var googleAnalyticsInner =
`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-130786913-2');
`

var gFirst = document.createElement('script');
gFirst.src = googleAnalyticsFirst;

var gInner = document.createElement('script');
var s = document.getElementsByTagName('script')[0];
gInner.text = googleAnalyticsInner;
s.parentNode.insertBefore(gFirst, s);
s.parentNode.insertBefore(gInner, s);

var nameBar = `
  <h3 class="yearOne"> <span style="font-size:18px">&#9724;</span> = 2017-2018: <a class="email-link" href="mailto:anandx@stanford.edu">Anand Upender</a> // <a class="email-link" href="mailto:gracegr@stanford.edu">Grace Greenwald</a> // <a class="email-link" href="mailto:daniel19@stanford.edu">Daniel Chan</a> // <a class="email-link" href="cole@wyshme.com">Cole Patterson</a> // <a class="email-link" href="mailto:katanian@stanford.edu">Dr. Barbara Karanian</a></h3>
  <h3 class="yearTwo"> <span style="font-size:18px">&#9724;</span> = 2018-2019: <a class="email-link" href="mailto:alemac@stanford.edu">Mulan MacDougall</a> // <a class="email-link" href="mailto:hnalband@stanford.edu">Hera Nalbandian</a> // <a class="email-link" href="mailto:veesan@stanford.edu">Veronica Sanchez</a> // <a class="email-link" href="bracca@stanford.edu">Brandon Racca</a> // <a class="email-link" href="mailto:ktovson@stanford.edu">Kevin Tovson</a> // <a class="email-link" href="mailto:hchang3@stanford.edu">Hanna Chang</a> // <a class="email-link" href="mailto:kralickj@stanford.edu">Jonathan Kralick</a></h3>
  <h4 class = "with-love">Made with love from scratch</h4>
`

var curNameBar = document.getElementById("name-bar");
if(curNameBar != undefined){
  curNameBar.innerHTML = nameBar;
}

var gradInterior= `
<div class="myRow">
  <div class="main-title">
    <h4>
      <a href="../index.html">Stanford<br />Mobility<br />Project</a>
    </h4>
  </div>
  <div style="display:flex;flex-direction:row;">
    <div class="column" id="col3">
      <h4>
        <a href="language.html">
        Language</a>
      </h4>
    </div>
    <div class="column" id="col2">
      <h4>
        <a href="photoStream.html">
        Prototypes</a>
      </h4>
    </div>
    <div class="column" id="col1">
      <h4>
        <a href="stories.html">
        Stories</a>
      </h4>
    </div>
    <div class="column" id="col5">
      <h4>
        <a href="crf.html">
        CRF</a>
      </h4>
    </div>
    <div class="column" id="col4">
      <h4>
        <a href="aboutUs.html" style="color:black;">
        Team</a>
      </h4>
    </div>
  </div>
</div>
`

var grad = document.getElementById("grad");
if(grad != undefined){
  grad.innerHTML = gradInterior;
}

var mobileHider = `
  <div class="no-mobile-content">
    <h2>Get your eyes off your tiny phone :)</h2>
    <h4>This site is best viewed on desktop.</h4>
  </div>
`;
var newDiv = document.createElement("div");
newDiv.className = "no-mobile-container";
newDiv.innerHTML = mobileHider;

document.body.appendChild(newDiv);
