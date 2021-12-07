import React, { useEffect } from 'react'
import './main.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import Fade from 'react-reveal/Fade';
// import ScrollText from 'react-scroll-text'
import Tradingview from './Tradingview';




function main() {
	
	
    return (
        <div className="up">
            <main>

	            <section id="hero" class="home-background pb-5 mb-4">
                    <div class="container ">
						<Tradingview />
                        
                        <div class="row align-items-center ">
                            <div class="col-lg-6 d-flex flex-column">
                                <div class="mb-3">									
                                    <span class="sub-title-text" style={{fontWeight:"700", fontSize:"10px", color:"#fff" }}>
                                    
                                       <Fade left>A VISION FOR SUSTAINABLE &amp; TRANSPARENT CRYPTOCURRENCY ECOSYSTEM</Fade> </span>
                                </div>
								<Fade left>
									<h1 class="p-0 m-0" style={{color:"#fff"}}>
										CRYPTO <b style={{fontWeight:"700", color:"#fff"}}>MINING</b>.<br />ON <b style={{fontWeight:"700", color:"#fd961a"}}>YOUR TERMS</b>.</h1>
									<p class="pb-5 pt-4 m-0" style={{color:"#fff"}}>PRIME MINNERS is new generation mining facility with the latest technology equipment and best location choices making it accessible and profitable for everyone. 
										With expert management, technical and operative team, constantly expanding facilities with eco-friendly energy sources, constant investment in ecosystem and excessive research on technology; company pursues collective development as well as individual and social benefits.
									</p>
								</Fade>
                                
                                <div>
                                    <Link  to="/pricing" class="btn" role="button" style={{background:"#fd961a", color:"#fff"}}><span>Pricing <ArrowRightIcon /></span></Link>
                                    <Link to="/signup" class="btn btn-outline ml-1" role="button" style={{background:"#fd961a", color:"#fff"}}><span >Create an Account</span></Link>
                                </div>
                            </div>
                            
                            
                            
                            <div class="col-lg-5 offset-lg-1 mt-5 pt-5 mt-lg-0 pt-md-0 d-flex flex-column" id="content-form">
                            
                                <div class="form-box p-3">
                                    <h5 style={{color:"#fff", margin:"0", flex:"1"}} class="pb-3 pt-1 pl-1 pr-1">Latest Mining Rewards</h5>
                                    <div class="d-flex flex-column" id="dexexexexexe"></div>
                                    {/* <a class="btn btn-outline text-center mt-3 d-flex all-center"  role="button" style={{width:"100%", fontSize:"12px"}}><span style={{color:"#fff"}}>all_mining_rewards</span></a> */}
                                </div>
                                
                                
                            </div>
                            
                            
                        </div>
                        
                    </div>
                    
                </section>

	
                <section id="features">
                    
                    <div class="container">
                        <div class="row">
                        
                            <div class="col-lg-6 pb-0 d-flex align-items-center">
                                <div class="pr-lg-5">
                                    <h1 class="pb-3" style={{color:"#fff"}}>Feel The Hash Power.<br /><b style={{color:"#fd961a"}}>At The Tip Of Your Finger.</b></h1>
                                    <p class="pb-2" style={{color:"#fff"}}>

                                    You are only a few clicks away from state of art mining facilities filled with cutting-edge mining devices. Powerful yet flexible. Developed for cryptocurrency enthusiasts and for anyone who is passionate about the future. See how PRIME MINNERS is unclocking the accessible mining and discover the business at a glance.


                                    </p>
                                    
                                </div>
                            </div>
                            
                            <div class="col-lg-5 offset-lg-1 d-flex flex-column all-center mt-4 mt-lg-0">
                                
                                
                                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{borderRadius:"10px", overflow:"hidden"}}>
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class=""></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1" class=""></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="3" class=""></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="4" class=""></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="5" class=""></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="6" class=""></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="7" class="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item">
                                        <img alt=""  src="20200426152751.jpg" class="d-block w-100" />
                                        </div>
                                        <div class="carousel-item">
                                        <img alt=""  src="202004161122391.jpg" class="d-block w-100" />
                                        </div>
                                        <div class="carousel-item">
                                        <img alt=""  src="202004161122392.jpg" class="d-block w-100" />
                                        </div>
                                        <div class="carousel-item">
                                        <img alt=""  src="202004161122395.jpg" class="d-block w-100" />
                                        </div>
                                        <div class="carousel-item">
                                        <img alt=""  src="202004261527511.jpg" class="d-block w-100" />
                                        </div>
                                        <div class="carousel-item">
                                        <img alt=""  src="202004261527512.jpg" class="d-block w-100" />
                                        </div>
                                        <div class="carousel-item">
                                        <img alt=""  src="202004261527513.jpg" class="d-block w-100" />
                                        </div>
                                        <div class="carousel-item active">
                                        <img alt=""  src="202004261527514.jpg" class="d-block w-100" />
                                        </div>
                                        <div class="carousel-item">
                                        <img alt=""  src="202004261527515.jpg" class="d-block w-100" />
                                        </div>
                                        <div class="carousel-item">
                                        <img alt=""  src="202004261527516.jpg" class="d-block w-100" />
                                        </div>
                                        <div class="carousel-item">
                                        <img alt=""  src="202004261527517.jpg" class="d-block w-100" />
                                        </div>
                                        <div class="carousel-item">
                                        <img alt=""  src="202004261527518.jpg" class="d-block w-100" />
                                        </div>
                                        <div class="carousel-item">
                                        <img alt=""  src="202004161122393.jpg" class="d-block w-100" />
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                                
                                
                                
                            </div>
                            
                            
                        </div>
                                 
                    </div>
                </section>
	
	
	
	
	            <section id="features">

                    <div class="container">
                        <div class="row">

                            <div class="col-lg-12 pb-5 d-flex flex-column justify-content-center">
                                    <h1 class="pb-3" style={{color:"#fd961a"}}>The Best &amp; Easiest <b>Cloud Mining Experience Ever.</b></h1>

                            </div>



                            <div class="col-lg-4 col-md-6 d-flex flex-column ">

                                <div class="d-flex aff-list">
                                    <div class="d-flex pr-4">
                                        <span class="goget head-icon-small">1</span>
                                    </div>
                                    <div class="pr-md-5" style={{color:"#fff"}}>
                                        <h6 class="pb-0">Daily Return Distribution</h6>
                                        <p class="mb-0">
                                            Coins earned are reflected in the wallet of the user at the end of each day. Follow what is&nbsp;earned and securely store the fund.
                                        </p>
                                    </div>
                                </div>

                            </div>


                            <div class="col-lg-4 col-md-6 d-flex flex-column mt-4 mt-md-0">

                                <div class="d-flex aff-list">
                                    <div class="d-flex pr-4">
                                        <span class="goget head-icon-small">2</span>
                                    </div>
                                    <div class="pr-md-5" style={{color:"#fff"}}>
                                        <h6 class="pb-0">Superior Mining Technology</h6>
                                        <p class="mb-0">
                                            We supply the best and latest hardware for different coin algorithms, achieving maximum power with the best technology.							</p>
                                    </div>
                                </div>

                            </div>


                            <div class="col-lg-4 col-md-6 d-flex flex-column mt-4 mt-lg-0">

                                <div class="d-flex aff-list">
                                    <div class="d-flex pr-4">
                                        <span class="goget head-icon-small">3</span>
                                    </div>
                                    <div class="pr-md-5" style={{color:"#fff"}}>
                                        <h6 class="pb-0">Multi-Algorithm &amp; Coins</h6>
                                        <p class="mb-0">
                                            The platform supports many algorithms and coin types. The users are aimed to have plenty of options to choose from.							</p>
                                    </div>
                                </div>

                            </div>




                            <div class="col-lg-4 col-md-6 d-flex flex-column mt-4">

                                <div class="d-flex aff-list">
                                    <div class="d-flex pr-4">
                                    <span class="goget head-icon-small">4</span>
                                    </div>
                                    <div class="pr-md-5" style={{color:"#fff"}}>
                                    <h6 class="pb-0">Hash Power Allocation</h6>
                                    <p class="mb-0">
                                        You can distribute the hash power you bought among multiple coins and create a portfolio for your investment.					</p>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-4 col-md-6 d-flex flex-column mt-4">

                                <div class="d-flex aff-list">
                                    <div class="d-flex pr-4">
                                    <span class="goget head-icon-small">5</span>
                                    </div>
                                    <div class="pr-md-5" style={{color:"#fff"}}>
                                    <h6 class="pb-0">Maximum Security</h6>
                                    <p class="mb-0">
                                    High level of protection is provided against hacking and manipulation while only the mandatory information is asked.						</p>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-4 col-md-6 d-flex flex-column mt-4">

                                <div class="d-flex aff-list">
                                    <div class="d-flex pr-4">
                                    <span class="goget head-icon-small">6</span>
                                    </div>
                                    <div class="pr-md-5" style={{color:"#fff"}}>
                                    <h6 class="pb-0">User-Friendly Interface</h6>
                                    <p class="mb-0">
                                    Mining information, platform wallet, return calculator, reports, and charts.&nbsp;Simple as it is with minimum effort and time.				</p>
                                    </div>
                                </div>

                            </div>


                            <div class="col-lg-4 col-md-6 d-flex flex-column mt-4">

                                <div class="d-flex aff-list">
                                    <div class="d-flex pr-4">
                                        <span class="goget head-icon-small">7</span>
                                    </div>
                                    <div class="pr-md-5" style={{color:"#fff"}}>
                                        <h6 class="pb-0">No Fees &amp; No Additional Cost</h6>
                                        <p class="mb-0">
                                        Users have the exclusive mining opportunity and ability to use all the platform features without paying any additional commission.				</p>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-4 col-md-6 d-flex flex-column mt-4">

                                <div class="d-flex aff-list">
                                    <div class="d-flex pr-4">
                                        <span class="goget head-icon-small">8</span>
                                    </div>
                                    <div class="pr-md-5" style={{color:"#fff"}}>
                                        <h6 class="pb-0">24/7 Customer Support</h6>
                                        <p class="mb-0">
                                        With great hash power comes great responsibility. PRIME MINNERS team is always on your side to make technology accessible and simple.				</p>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-4 col-md-6 d-flex flex-column mt-4">

                                <div class="d-flex aff-list">
                                    <div class="d-flex pr-4">
                                        <span class="goget head-icon-small">9</span>
                                    </div>
                                    <div class="pr-md-5" style={{color:"#fff"}}>
                                        <h6 class="pb-0">Weekly Market Insights</h6>
                                        <p class="mb-0">
                                            Information spreads as we share it. The newest and most accurate piece of insights will be shared by PRIME MINNER's patent lover research team.</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>
	
	
	<section id="deposit-home">
		
		<div class="container">
			<div class="row yellow align-items-center">
				
				<div class="col-lg-8 offset-lg-2 d-flex flex-column text-center mt-2">	
                        <h1 class="pb-3" style={{color:"#fd961a"}}>Cloud Mining For <b style={{color:"#fff"}}>Pro's.</b><br />Prices <b style={{color:"#fff"}}>For Everyone.</b></h1>
						<p class="p-0 m-0"style={{color:"#fff"}}>
							Besides its privileged service, superior return, customer-centered platform features, easy and safe experience, PRIME MINNERS has the most advantageous prices in the market making mining more competitive than ever before. This is our way of saying "Thank You" to the ecosystem, technology, future, everyone who has the same excitement and vision as us.
						</p>
				</div>

				
				<div class="col-lg-12 d-flex flex-column text-center mt-5 mb-5">
					<div class="site-plan d-flex flex-column p-2">
						
						<div class="row m-0">
							<svg aria-hidden="true" focusable="false" style={{width:"0", height:"0", position:"absolute"}}>
							<lineargradient id="gradient-ew" x2="1" y2="1">
								<stop offset="0%" stop-color="#56BE89"></stop>
							</lineargradient>
							<lineargradient id="gradient-ver" x1="0" y1="1">
								<stop offset="0%" stop-color="#fff"></stop>
							</lineargradient>
							</svg>
							<div class="col-12 p-2 mining-plans">
								<ul class="nav nav-tabs row m-0" id="myTab" role="tablist">
									<li class="nav-item col-4 col-md-3 col-lg-2 p-1 d-flex ">
										<a class="nav-link d-flex all-center flex-fill active" id="for-btc-tab" data-toggle="tab" href="#tab-btc" role="tab" aria-controls="tab-btc" aria-selected="true">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" width="16" height="16" class="mr-1">
												<path d="M1970,1242c-133.48,535.66-676.18,861.68-1212,728S-103.69,1293.89,30,758.18,706.12-103.7,1241.82,30,2103.69,706.16,1970,1242h0Z" fill="url(#gradient-horizontal) gray"></path>
												<path d="M1441,857.53c19.88-133.07-81.44-204.61-220-252.33l45-180.25-109.76-27.34-43.84,175.51c-28.82-7.18-58.44-14-87.88-20.68l44-176.67L958.87,348.43,914,528.61,692.68,473.79,663.48,591s81.42,18.66,79.7,19.82c44.44,11.1,52.5,40.5,51.14,63.82l-123.14,493.8c-5.44,13.5-19.22,33.74-50.28,26,1.1,1.6-79.76-20-79.76-20l-54.48,125.79,221,55.8-45.42,182.35,109.6,27.34,45-180.39c30,8.12,59,15.62,87.42,22.68l-44.82,179.55,109.74,27.34,45.42-182c187.13,35.4,327.85,21.12,387-148,47.72-136.25-2.34-214.85-100.8-266.13,71.7-16.6,125.7-63.74,140.11-161.17m-250.71,351.52c-34,136.25-263.35,62.62-337.77,44.12l60.26-241.55c74.38,18.56,312.89,55.32,277.55,197.41m34-353.5c-30.94,124-221.91,61-283.89,45.54L994.91,682c62,15.48,261.51,44.3,229.25,173.59" fill="url(#gradient-vertical) white"></path>
											</svg>
											<span class="m-0">
												BITCOIN
											</span>
										</a>
									</li>
									<li class="nav-item col-4 col-md-3 col-lg-2 p-1 d-flex ">
										<a class="nav-link d-flex all-center flex-fill" id="for-eth-tab" data-toggle="tab" href="#tab-eth" role="tab" aria-controls="tab-eth" aria-selected="false">
											<svg width="16" height="16" class="mr-1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
												<path fill="url(#gradient-horizontal) gray" opacity="1.00" d=" M 497.70 0.00 L 526.26 0.00 C 541.19 1.50 556.26 1.41 571.13 3.64 C 621.31 9.47 670.64 22.70 716.91 43.02 C 780.69 70.90 838.56 112.09 885.98 163.02 C 931.19 211.44 966.87 268.76 990.28 330.74 C 1009.82 382.35 1020.72 437.16 1022.88 492.28 C 1023.15 503.19 1022.93 514.11 1023.00 525.03 C 1020.64 626.57 986.85 727.10 927.40 809.47 C 907.56 837.46 884.42 862.96 859.48 886.48 C 832.50 911.44 802.88 933.60 771.18 952.22 C 690.90 999.79 597.27 1024.36 504.00 1022.74 C 448.66 1021.99 393.47 1011.97 341.30 993.53 C 278.96 971.54 221.16 937.05 171.80 893.12 C 158.77 881.52 146.69 868.92 134.54 856.41 C 120.28 840.24 106.39 823.68 94.12 805.93 C 32.55 719.09 -0.76 612.48 1.00 506.00 C 0.93 470.99 5.36 436.06 12.64 401.85 C 26.70 337.52 53.40 276.00 90.81 221.80 C 132.98 160.50 188.69 108.53 252.83 70.81 C 317.56 32.41 391.01 9.08 465.92 2.24 C 476.48 1.08 487.16 1.26 497.70 0.00 Z"></path>
												<path fill="url(#gradient-vertical) white" opacity="1.00" d=" M 511.17 111.81 C 512.93 113.18 513.80 115.28 514.90 117.16 C 520.73 126.66 526.34 136.30 532.16 145.81 C 534.53 149.70 536.75 153.69 539.24 157.51 C 540.55 159.60 541.81 161.72 543.11 163.82 C 544.30 165.97 545.69 168.01 546.88 170.17 C 552.70 179.68 558.33 189.31 564.14 198.82 C 565.34 200.97 566.71 203.02 567.92 205.17 C 569.00 206.97 570.05 208.80 571.23 210.55 C 579.47 224.33 587.86 238.02 596.10 251.80 C 606.64 269.54 617.42 287.12 628.07 304.78 C 635.05 316.48 642.06 328.16 649.10 339.82 C 652.73 345.82 656.44 351.78 660.05 357.81 C 667.02 369.49 674.01 381.16 681.06 392.79 C 683.58 397.04 686.10 401.30 688.73 405.48 C 693.17 412.66 697.42 419.95 701.82 427.16 C 705.51 433.40 709.29 439.60 713.03 445.82 C 719.96 457.27 726.68 468.83 733.78 480.17 C 740.77 491.85 747.79 503.51 754.81 515.17 C 755.67 516.67 756.74 518.08 757.18 519.80 C 745.32 526.16 733.94 533.46 722.25 540.15 C 716.58 543.50 710.94 546.90 705.23 550.18 C 696.93 555.25 688.41 559.94 680.16 565.08 C 668.08 571.97 656.18 579.16 644.22 586.25 C 630.17 594.44 616.19 602.80 602.17 611.05 C 596.55 614.49 590.78 617.65 585.17 621.09 C 578.83 624.74 572.53 628.44 566.28 632.24 C 550.98 641.20 535.72 650.24 520.48 659.30 C 517.65 660.79 515.02 662.61 512.26 664.21 C 508.60 663.99 505.88 660.67 502.52 659.29 C 488.78 651.13 475.03 642.99 461.24 634.92 C 455.56 631.55 449.91 628.13 444.18 624.85 C 442.03 623.65 439.99 622.29 437.86 621.10 C 432.22 617.68 426.46 614.48 420.83 611.05 C 418.97 609.96 417.11 608.89 415.35 607.66 C 396.70 597.08 378.46 585.76 359.84 575.11 C 354.18 571.75 348.65 568.14 342.82 565.07 C 328.88 556.62 314.74 548.51 300.75 540.15 C 289.18 533.42 277.75 526.43 266.12 519.80 C 265.71 518.21 267.16 517.09 267.81 515.84 C 285.49 486.21 303.51 456.80 321.18 427.16 C 328.06 415.68 335.00 404.23 341.94 392.79 C 348.98 381.16 355.96 369.50 362.94 357.84 C 366.64 351.85 370.12 345.73 373.90 339.81 C 380.95 328.17 387.92 316.49 394.92 304.83 C 404.25 289.22 413.77 273.76 423.12 258.17 C 424.30 256.02 425.70 253.99 426.88 251.83 C 436.25 236.26 445.62 220.69 455.08 205.17 C 456.28 203.02 457.67 200.98 458.85 198.82 C 464.68 189.32 470.30 179.68 476.12 170.17 C 477.31 168.01 478.69 165.97 479.89 163.81 C 481.19 161.72 482.44 159.59 483.76 157.50 C 486.25 153.69 488.46 149.69 490.85 145.80 C 496.65 136.28 502.29 126.66 508.10 117.14 C 509.12 115.36 510.19 113.61 511.17 111.81 Z M 269.13 570.77 C 268.30 569.40 266.75 568.37 266.68 566.65 C 272.07 569.12 276.84 572.75 282.09 575.49 C 295.78 583.62 309.50 591.70 323.22 599.79 C 341.36 610.63 359.70 621.15 377.78 632.09 C 385.72 636.43 393.33 641.35 401.20 645.81 C 419.35 656.60 437.59 667.26 455.73 678.08 C 461.40 681.48 467.18 684.68 472.83 688.14 C 474.97 689.33 477.02 690.69 479.16 691.90 C 484.89 695.15 490.51 698.59 496.18 701.94 C 501.41 704.93 506.58 708.02 511.74 711.13 C 514.42 708.88 517.65 707.44 520.58 705.54 C 528.42 701.15 536.01 696.32 543.84 691.91 C 545.97 690.69 548.02 689.32 550.18 688.14 C 574.02 673.99 597.98 660.04 621.78 645.82 C 647.81 630.55 673.81 615.21 699.77 599.82 C 707.65 595.37 715.30 590.54 723.19 586.09 C 733.76 579.46 744.91 573.74 755.30 566.85 C 755.61 567.08 756.24 567.54 756.55 567.77 C 753.09 571.35 750.74 575.82 747.68 579.73 C 744.48 584.49 740.90 588.98 737.74 593.77 C 730.45 603.85 723.31 614.02 716.15 624.19 C 714.94 625.64 713.80 627.15 712.84 628.79 C 708.19 635.20 703.66 641.71 699.10 648.18 C 696.42 651.83 693.71 655.48 691.22 659.27 C 689.98 660.69 688.86 662.21 687.89 663.82 C 680.81 674.06 673.35 684.05 666.28 694.29 C 652.37 713.73 638.62 733.27 624.68 752.69 C 610.76 772.40 596.78 792.10 582.73 811.71 C 581.39 813.99 579.72 816.06 578.14 818.19 C 574.87 823.17 571.07 827.79 567.91 832.85 C 565.53 835.87 563.48 839.14 561.12 842.18 C 558.60 845.94 555.91 849.58 553.22 853.22 C 550.53 857.41 547.57 861.44 544.57 865.42 C 541.97 869.48 539.00 873.29 536.21 877.22 C 529.82 886.44 523.24 895.53 516.76 904.69 C 514.67 907.01 513.51 910.05 511.15 912.14 C 503.65 900.11 494.64 889.06 486.82 877.23 C 484.00 873.30 481.03 869.48 478.42 865.41 C 475.43 861.43 472.46 857.42 469.79 853.22 C 467.08 849.59 464.40 845.93 461.88 842.18 C 456.09 834.25 450.50 826.18 444.84 818.16 C 436.45 806.55 428.23 794.82 419.93 783.15 C 412.73 772.97 405.39 762.88 398.29 752.65 C 379.47 726.17 360.53 699.78 341.91 673.17 C 339.51 670.15 337.47 666.88 335.11 663.84 C 334.14 662.21 333.01 660.69 331.80 659.25 C 311.08 629.64 289.99 600.29 269.13 570.77 Z"></path>
											</svg>
											<span class="m-0">
												ETHEREUM
											</span>
										</a>
									</li>
									<li class="nav-item col-4 col-md-3 col-lg-2 p-1 d-flex ">
										<a class="nav-link d-flex all-center flex-fill" id="for-ltc-tab" data-toggle="tab" href="#tab-ltc" role="tab" aria-controls="tab-ltc" aria-selected="false">
											<svg width="16" height="16" class="mr-1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
												<path fill="url(#gradient-horizontal) gray" opacity="1.00" d=" M 497.70 0.00 L 526.26 0.00 C 541.19 1.50 556.26 1.41 571.13 3.64 C 621.31 9.47 670.64 22.70 716.91 43.02 C 780.69 70.90 838.56 112.09 885.98 163.02 C 931.19 211.44 966.87 268.76 990.28 330.74 C 1009.82 382.35 1020.72 437.16 1022.88 492.28 C 1023.15 503.19 1022.93 514.11 1023.00 525.03 C 1020.64 626.57 986.85 727.10 927.40 809.47 C 907.56 837.46 884.42 862.96 859.48 886.48 C 832.50 911.44 802.88 933.60 771.18 952.22 C 690.90 999.79 597.27 1024.36 504.00 1022.74 C 448.66 1021.99 393.47 1011.97 341.30 993.53 C 278.96 971.54 221.16 937.05 171.80 893.12 C 158.77 881.52 146.69 868.92 134.54 856.41 C 120.28 840.24 106.39 823.68 94.12 805.93 C 32.55 719.09 -0.76 612.48 1.00 506.00 C 0.93 470.99 5.36 436.06 12.64 401.85 C 26.70 337.52 53.40 276.00 90.81 221.80 C 132.98 160.50 188.69 108.53 252.83 70.81 C 317.56 32.41 391.01 9.08 465.92 2.24 C 476.48 1.08 487.16 1.26 497.70 0.00 Z"></path>
												<path fill="url(#gradient-vertical) white" opacity="1.00" d=" M 511.17 111.81 C 512.93 113.18 513.80 115.28 514.90 117.16 C 520.73 126.66 526.34 136.30 532.16 145.81 C 534.53 149.70 536.75 153.69 539.24 157.51 C 540.55 159.60 541.81 161.72 543.11 163.82 C 544.30 165.97 545.69 168.01 546.88 170.17 C 552.70 179.68 558.33 189.31 564.14 198.82 C 565.34 200.97 566.71 203.02 567.92 205.17 C 569.00 206.97 570.05 208.80 571.23 210.55 C 579.47 224.33 587.86 238.02 596.10 251.80 C 606.64 269.54 617.42 287.12 628.07 304.78 C 635.05 316.48 642.06 328.16 649.10 339.82 C 652.73 345.82 656.44 351.78 660.05 357.81 C 667.02 369.49 674.01 381.16 681.06 392.79 C 683.58 397.04 686.10 401.30 688.73 405.48 C 693.17 412.66 697.42 419.95 701.82 427.16 C 705.51 433.40 709.29 439.60 713.03 445.82 C 719.96 457.27 726.68 468.83 733.78 480.17 C 740.77 491.85 747.79 503.51 754.81 515.17 C 755.67 516.67 756.74 518.08 757.18 519.80 C 745.32 526.16 733.94 533.46 722.25 540.15 C 716.58 543.50 710.94 546.90 705.23 550.18 C 696.93 555.25 688.41 559.94 680.16 565.08 C 668.08 571.97 656.18 579.16 644.22 586.25 C 630.17 594.44 616.19 602.80 602.17 611.05 C 596.55 614.49 590.78 617.65 585.17 621.09 C 578.83 624.74 572.53 628.44 566.28 632.24 C 550.98 641.20 535.72 650.24 520.48 659.30 C 517.65 660.79 515.02 662.61 512.26 664.21 C 508.60 663.99 505.88 660.67 502.52 659.29 C 488.78 651.13 475.03 642.99 461.24 634.92 C 455.56 631.55 449.91 628.13 444.18 624.85 C 442.03 623.65 439.99 622.29 437.86 621.10 C 432.22 617.68 426.46 614.48 420.83 611.05 C 418.97 609.96 417.11 608.89 415.35 607.66 C 396.70 597.08 378.46 585.76 359.84 575.11 C 354.18 571.75 348.65 568.14 342.82 565.07 C 328.88 556.62 314.74 548.51 300.75 540.15 C 289.18 533.42 277.75 526.43 266.12 519.80 C 265.71 518.21 267.16 517.09 267.81 515.84 C 285.49 486.21 303.51 456.80 321.18 427.16 C 328.06 415.68 335.00 404.23 341.94 392.79 C 348.98 381.16 355.96 369.50 362.94 357.84 C 366.64 351.85 370.12 345.73 373.90 339.81 C 380.95 328.17 387.92 316.49 394.92 304.83 C 404.25 289.22 413.77 273.76 423.12 258.17 C 424.30 256.02 425.70 253.99 426.88 251.83 C 436.25 236.26 445.62 220.69 455.08 205.17 C 456.28 203.02 457.67 200.98 458.85 198.82 C 464.68 189.32 470.30 179.68 476.12 170.17 C 477.31 168.01 478.69 165.97 479.89 163.81 C 481.19 161.72 482.44 159.59 483.76 157.50 C 486.25 153.69 488.46 149.69 490.85 145.80 C 496.65 136.28 502.29 126.66 508.10 117.14 C 509.12 115.36 510.19 113.61 511.17 111.81 Z M 269.13 570.77 C 268.30 569.40 266.75 568.37 266.68 566.65 C 272.07 569.12 276.84 572.75 282.09 575.49 C 295.78 583.62 309.50 591.70 323.22 599.79 C 341.36 610.63 359.70 621.15 377.78 632.09 C 385.72 636.43 393.33 641.35 401.20 645.81 C 419.35 656.60 437.59 667.26 455.73 678.08 C 461.40 681.48 467.18 684.68 472.83 688.14 C 474.97 689.33 477.02 690.69 479.16 691.90 C 484.89 695.15 490.51 698.59 496.18 701.94 C 501.41 704.93 506.58 708.02 511.74 711.13 C 514.42 708.88 517.65 707.44 520.58 705.54 C 528.42 701.15 536.01 696.32 543.84 691.91 C 545.97 690.69 548.02 689.32 550.18 688.14 C 574.02 673.99 597.98 660.04 621.78 645.82 C 647.81 630.55 673.81 615.21 699.77 599.82 C 707.65 595.37 715.30 590.54 723.19 586.09 C 733.76 579.46 744.91 573.74 755.30 566.85 C 755.61 567.08 756.24 567.54 756.55 567.77 C 753.09 571.35 750.74 575.82 747.68 579.73 C 744.48 584.49 740.90 588.98 737.74 593.77 C 730.45 603.85 723.31 614.02 716.15 624.19 C 714.94 625.64 713.80 627.15 712.84 628.79 C 708.19 635.20 703.66 641.71 699.10 648.18 C 696.42 651.83 693.71 655.48 691.22 659.27 C 689.98 660.69 688.86 662.21 687.89 663.82 C 680.81 674.06 673.35 684.05 666.28 694.29 C 652.37 713.73 638.62 733.27 624.68 752.69 C 610.76 772.40 596.78 792.10 582.73 811.71 C 581.39 813.99 579.72 816.06 578.14 818.19 C 574.87 823.17 571.07 827.79 567.91 832.85 C 565.53 835.87 563.48 839.14 561.12 842.18 C 558.60 845.94 555.91 849.58 553.22 853.22 C 550.53 857.41 547.57 861.44 544.57 865.42 C 541.97 869.48 539.00 873.29 536.21 877.22 C 529.82 886.44 523.24 895.53 516.76 904.69 C 514.67 907.01 513.51 910.05 511.15 912.14 C 503.65 900.11 494.64 889.06 486.82 877.23 C 484.00 873.30 481.03 869.48 478.42 865.41 C 475.43 861.43 472.46 857.42 469.79 853.22 C 467.08 849.59 464.40 845.93 461.88 842.18 C 456.09 834.25 450.50 826.18 444.84 818.16 C 436.45 806.55 428.23 794.82 419.93 783.15 C 412.73 772.97 405.39 762.88 398.29 752.65 C 379.47 726.17 360.53 699.78 341.91 673.17 C 339.51 670.15 337.47 666.88 335.11 663.84 C 334.14 662.21 333.01 660.69 331.80 659.25 C 311.08 629.64 289.99 600.29 269.13 570.77 Z"></path>
											</svg>
											<span class="m-0">
												LITECOIN
											</span>
										</a>
									</li>
									<li class="nav-item col-4 col-md-3 col-lg-2 p-1 d-flex ">
										<a class="nav-link d-flex all-center flex-fill" id="for-bch-tab" data-toggle="tab" href="#tab-bch" role="tab" aria-controls="tab-bch" aria-selected="false">
											<svg width="18" height="16" class="mr-1" viewBox="0 0 1471 907" version="1.1" xmlns="http://www.w3.org/2000/svg">
												<path fill="url(#gradient-horizontal) gray" opacity="1.00" d=" M 0.00 0.00 L 413.78 0.00 C 409.93 3.47 405.68 6.43 401.53 9.52 C 387.97 19.47 375.04 30.26 362.58 41.54 C 354.94 47.88 348.34 55.33 341.21 62.22 C 334.82 68.83 327.90 74.96 321.99 82.03 C 291.99 115.07 266.50 152.08 245.27 191.30 C 237.37 206.89 229.37 222.44 222.81 238.66 C 215.64 256.59 208.70 274.66 203.48 293.27 C 198.36 309.75 194.86 326.67 191.30 343.54 C 185.79 372.36 181.90 401.60 181.50 430.95 C 180.14 441.25 180.63 451.67 180.78 462.03 C 182.23 470.74 181.07 479.59 182.30 488.32 C 184.00 515.41 188.10 542.33 193.91 568.84 C 197.54 587.32 202.73 605.49 208.87 623.29 C 232.74 696.30 272.90 763.70 324.38 820.59 C 329.64 826.66 335.64 832.02 341.22 837.79 C 348.00 844.34 354.28 851.45 361.58 857.46 C 374.54 869.25 388.13 880.36 402.17 890.83 C 406.24 893.62 410.20 896.57 413.76 900.00 L 0.00 900.00 L 0.00 0.00 Z M 699.74 0.00 L 758.27 0.00 C 761.76 0.80 765.34 1.07 768.91 1.29 C 821.35 5.70 873.00 19.61 920.46 42.37 C 926.20 44.80 931.86 47.45 937.20 50.68 C 1007.86 87.25 1068.06 143.41 1110.16 210.87 C 1115.79 219.18 1120.10 228.27 1125.13 236.94 C 1134.96 255.16 1143.29 274.17 1150.62 293.53 C 1158.04 312.56 1163.15 332.39 1167.85 352.24 C 1173.56 378.48 1176.74 405.21 1178.18 432.00 C 1178.13 444.00 1178.13 456.00 1178.18 468.00 C 1176.73 493.92 1173.88 519.83 1168.31 545.21 C 1160.02 584.08 1146.43 621.80 1128.20 657.11 C 1123.82 665.12 1119.48 673.16 1115.03 681.13 C 1098.44 707.82 1079.88 733.40 1058.34 756.34 C 1046.22 767.88 1035.22 780.61 1022.23 791.20 C 992.93 816.77 960.14 838.34 925.11 855.23 C 886.04 874.78 843.79 887.62 800.73 894.71 C 791.51 895.95 782.34 897.55 773.05 898.10 C 771.44 898.05 770.31 899.28 769.03 900.00 L 688.96 900.00 C 687.97 899.22 686.91 898.62 685.79 898.21 C 635.46 893.76 585.95 880.36 540.17 859.02 C 523.41 851.71 507.65 842.35 491.92 833.08 C 436.75 798.55 388.90 752.22 353.34 697.65 C 347.74 690.31 343.88 681.88 338.87 674.16 C 333.94 666.40 330.28 657.95 326.08 649.79 C 321.10 640.14 316.71 630.20 312.75 620.09 C 292.52 571.64 281.79 519.40 279.82 466.99 C 279.99 453.98 279.72 440.97 279.93 427.96 C 280.65 421.23 280.83 414.45 281.47 407.72 C 285.51 363.33 296.02 319.49 313.17 278.33 C 325.26 249.13 340.11 221.06 358.00 194.99 C 373.80 172.51 390.96 150.86 410.70 131.69 C 416.30 126.28 421.44 120.37 427.50 115.45 C 467.36 79.33 513.79 50.49 563.78 30.63 C 603.51 14.91 645.57 5.20 688.10 1.25 C 691.99 1.05 695.93 0.94 699.74 0.00 Z  M 1044.17 0.00 L 1460.00 0.00 L 1460.00 900.00 L 1043.25 900.00 C 1048.30 895.00 1054.56 891.52 1060.03 887.04 C 1074.70 875.83 1088.74 863.81 1102.32 851.31 C 1108.62 844.95 1114.97 838.63 1121.29 832.30 C 1133.89 820.16 1145.11 806.69 1156.16 793.15 C 1181.26 761.82 1202.88 727.72 1220.78 691.79 C 1229.71 674.13 1237.08 655.71 1244.04 637.19 C 1251.51 616.05 1258.55 594.68 1262.89 572.65 C 1265.73 561.67 1267.58 550.48 1269.58 539.34 C 1273.27 515.41 1276.28 491.27 1276.50 467.05 C 1277.95 455.10 1277.65 442.99 1276.40 431.05 C 1276.65 420.60 1275.44 410.22 1274.62 399.83 C 1272.44 375.97 1268.73 352.24 1263.35 328.88 C 1250.76 270.50 1227.36 214.66 1196.32 163.72 C 1175.73 130.53 1152.15 99.10 1124.92 71.06 C 1117.16 61.17 1107.01 53.66 1098.29 44.71 C 1085.64 33.27 1072.53 22.34 1058.94 12.03 C 1054.07 7.95 1048.19 5.04 1044.17 0.00 Z"></path>
												<path fill="url(#gradient-vertical) white" opacity="1.00" d=" M 670.69 172.92 C 686.56 168.48 702.39 163.67 718.66 160.87 C 726.88 187.27 732.18 214.45 739.79 241.02 C 769.92 238.95 801.34 233.54 830.68 243.39 C 847.44 248.95 862.32 260.49 870.95 276.03 C 885.35 298.80 893.70 328.46 882.39 354.29 C 878.21 367.34 868.21 377.03 860.22 387.72 C 879.40 389.62 899.51 392.20 916.01 402.99 C 929.74 411.24 939.53 424.59 945.96 439.03 C 953.78 456.90 957.93 476.43 957.78 495.95 C 956.28 526.00 942.00 555.53 917.98 573.98 C 893.14 593.29 862.68 602.50 833.84 613.98 C 838.24 641.48 846.60 668.09 853.17 695.09 C 837.25 700.44 820.88 704.47 804.31 707.15 C 796.55 681.25 791.30 654.68 783.83 628.71 C 770.36 628.79 757.62 633.43 744.66 636.39 C 748.42 664.07 758.82 690.34 763.22 717.91 C 747.44 722.56 731.13 725.05 715.39 729.88 C 707.40 703.13 701.43 675.84 694.75 648.76 C 661.20 654.77 628.27 663.80 595.26 672.20 C 592.96 652.06 592.27 631.77 589.95 611.64 C 601.19 607.51 613.23 606.91 624.68 603.66 C 630.56 601.32 637.70 598.15 639.38 591.36 C 642.43 572.15 633.93 554.03 629.24 535.87 C 614.57 477.71 600.48 419.41 585.64 361.31 C 583.22 353.36 577.84 345.47 569.19 343.72 C 550.72 340.28 533.72 349.49 516.18 353.33 C 510.46 336.17 507.53 318.25 501.98 301.05 C 534.95 292.00 568.31 284.48 601.45 276.06 C 596.31 248.75 587.69 222.24 581.69 195.12 C 597.84 190.42 614.31 186.91 630.65 182.92 C 637.30 209.01 643.88 235.12 650.00 261.34 C 662.94 258.84 675.59 255.13 688.30 251.66 C 685.56 224.78 675.07 199.49 670.69 172.92 M 666.85 319.29 C 667.45 323.84 668.07 328.42 669.02 332.93 C 675.60 361.55 682.91 390.00 690.93 418.25 C 714.69 415.51 737.70 407.72 759.01 396.99 C 772.52 389.62 785.88 380.07 793.07 366.05 C 801.25 350.81 795.14 331.83 784.54 319.45 C 774.20 308.35 758.76 303.99 743.99 304.10 C 717.55 304.28 692.07 312.14 666.85 319.29 M 702.75 468.17 C 704.01 476.32 706.66 484.14 708.85 492.07 C 716.63 520.25 722.14 549.01 730.08 577.15 C 762.94 568.04 798.02 562.92 827.38 544.41 C 837.00 539.03 844.66 530.65 850.26 521.25 C 857.89 508.27 859.01 491.84 853.02 478.00 C 845.77 462.09 828.73 452.17 811.69 450.41 C 774.44 447.16 738.15 458.12 702.75 468.17 Z"></path>
											</svg>
											<span class="m-0">
												DASH
											</span>
										</a>
									</li>
									<li class="nav-item col-4 col-md-3 col-lg-2 p-1 d-flex ">
										<a class="nav-link d-flex all-center flex-fill" id="for-dash-tab" data-toggle="tab" href="#tab-dash" role="tab" aria-controls="tab-dash" aria-selected="false">
											<svg width="16" height="16" class="mr-1" viewBox="0 0 602 602" version="1.1" xmlns="http://www.w3.org/2000/svg">
												<path fill="url(#gradient-horizontal) gray" opacity="1.00" d=" M 286.35 1.34 C 329.53 -0.72 373.20 6.45 413.29 22.70 C 484.93 51.40 544.40 108.95 575.40 179.62 C 591.66 216.17 600.23 256.03 600.99 296.00 C 601.56 335.50 594.45 375.14 579.81 411.86 C 556.69 470.29 514.55 520.91 461.45 554.49 C 429.56 574.76 393.77 588.89 356.62 595.79 C 284.00 609.73 206.38 595.50 143.59 556.41 C 89.70 523.26 46.75 472.66 23.00 414.01 C 8.35 378.26 1.03 339.61 0.98 301.00 C 0.95 249.40 14.32 197.80 39.97 152.99 C 69.46 100.90 114.92 58.02 168.66 31.66 C 205.24 13.54 245.60 3.34 286.35 1.34 Z"></path>
												<path fill="url(#gradient-vertical) white" opacity="1.00" d=" M 204.29 139.07 C 206.18 138.85 208.07 138.67 209.98 138.67 C 232.99 138.77 255.99 138.69 279.00 138.72 C 294.66 138.81 310.36 138.26 325.97 139.86 C 359.95 143.14 394.29 154.79 419.62 178.37 C 438.69 195.71 451.41 219.17 458.14 243.87 C 463.39 263.09 465.64 283.09 465.37 303.00 C 465.77 337.22 459.57 372.72 441.07 402.04 C 426.60 425.27 403.97 442.90 378.43 452.48 C 357.01 460.66 333.87 463.97 311.01 463.15 C 283.67 463.09 256.33 463.15 229.00 463.13 C 220.76 462.94 212.50 463.55 204.29 462.81 C 204.12 424.54 204.28 386.27 204.22 348.00 C 204.04 338.30 204.59 328.59 203.98 318.91 C 191.41 318.17 178.80 318.92 166.22 318.62 C 165.34 312.78 165.90 306.87 165.79 301.00 C 165.90 295.11 165.39 289.20 166.13 283.34 C 178.74 282.95 191.38 283.76 203.97 283.00 C 204.08 281.67 204.17 280.33 204.23 279.01 C 204.25 232.36 204.12 185.71 204.29 139.07 M 265.36 199.10 C 265.30 227.01 265.29 254.94 265.36 282.86 C 266.88 283.05 268.41 283.24 269.96 283.29 C 290.85 283.33 311.75 283.13 332.64 283.36 C 332.78 295.10 332.82 306.86 332.61 318.60 C 314.74 318.68 296.87 318.58 279.00 318.63 C 274.45 318.71 269.86 318.17 265.36 319.06 C 265.30 346.97 265.29 374.89 265.36 402.80 C 278.87 403.69 292.46 402.90 306.00 403.19 C 327.17 403.53 349.18 399.91 367.19 388.18 C 380.66 379.67 390.96 366.61 396.84 351.87 C 404.08 333.92 405.72 314.22 404.67 295.05 C 403.79 278.84 400.41 262.54 393.02 247.99 C 386.77 235.64 377.60 224.72 366.21 216.81 C 347.39 203.46 323.85 197.93 300.99 198.66 C 289.12 198.99 277.18 198.06 265.36 199.10 Z"></path>
											</svg>
											<span class="m-0">
												DOGECOIN
											</span>
                                            <label style={{color:"#fff", background:"#EB2323", position:"absolute", padding:"3px 6px", fontSize:"10px", fontWeight:"700", borderRadius:"3px", top:"-2px", right:"10%"}}>NEW</label>
										</a>
									</li>
									<li class="nav-item col-4 col-md-3 col-lg-2 p-1 d-flex">
										<a class="nav-link d-flex all-center flex-fill" id="for-doge-tab" data-toggle="tab" href="#tab-doge" role="tab" aria-controls="tab-doge" aria-selected="false">
											<svg width="16" height="16" class="mr-1" viewBox="0 0 1243 1243" version="1.1" xmlns="http://www.w3.org/2000/svg">
												<path fill="url(#gradient-horizontal) gray" opacity="1.00" d=" M 614.71 0.00 L 628.02 0.00 C 666.58 0.68 705.15 4.35 742.98 11.97 C 820.46 27.26 894.89 57.69 960.95 100.96 C 1036.38 150.20 1100.90 216.05 1148.61 292.46 C 1192.43 362.46 1222.02 441.33 1234.92 522.90 C 1250.00 617.80 1243.09 716.21 1214.20 807.90 C 1191.42 880.61 1154.91 948.95 1107.39 1008.50 C 1059.87 1068.12 1001.33 1118.94 935.56 1157.52 C 863.21 1200.06 782.11 1227.63 698.81 1237.87 C 605.75 1249.44 510.04 1240.03 421.24 1209.72 C 343.39 1183.35 271.00 1141.10 209.50 1086.57 C 172.46 1053.75 139.33 1016.52 111.08 975.89 C 68.92 915.41 37.67 847.33 19.46 775.88 C 8.06 731.48 1.73 685.79 0.37 639.97 C 0.09 635.08 0.47 630.17 0.00 625.29 L 0.00 617.59 C 0.50 612.06 0.06 606.51 0.44 600.98 C 2.14 547.14 10.84 493.51 26.39 441.93 C 48.60 367.97 84.93 298.31 132.69 237.63 C 174.11 184.95 224.04 138.96 280.04 102.13 C 342.64 60.82 412.83 31.05 486.07 14.84 C 528.28 5.38 571.49 0.72 614.71 0.00 Z"></path>
												<path fill="url(#gradient-vertical) white" opacity="1.00" d=" M 472.15 349.21 C 551.08 349.30 630.00 349.22 708.93 349.25 C 754.13 349.25 800.33 352.65 842.86 369.13 C 872.32 380.45 899.46 399.46 917.18 425.89 C 934.99 451.77 943.29 483.02 946.02 514.01 C 948.87 546.52 946.19 579.25 941.26 611.43 C 934.85 653.31 924.23 694.81 906.49 733.40 C 890.96 767.31 869.75 798.96 842.21 824.29 C 816.14 848.66 784.22 866.19 750.49 877.47 C 725.53 885.91 699.24 889.64 673.04 891.48 C 645.41 893.56 617.70 892.90 590.02 893.00 C 518.82 893.00 447.63 893.00 376.44 893.00 C 383.19 855.25 389.94 817.50 396.72 779.76 C 440.82 779.82 484.92 779.54 529.00 780.00 C 555.33 780.00 581.66 780.00 607.98 780.00 C 639.94 779.95 672.40 777.30 702.78 766.73 C 717.49 761.57 731.62 754.46 743.95 744.85 C 756.33 735.30 766.78 723.30 774.72 709.84 C 783.22 695.61 789.10 679.97 793.69 664.08 C 798.99 645.31 803.43 626.30 806.88 607.11 C 809.48 591.92 811.74 576.55 811.39 561.11 C 811.02 543.00 807.76 524.39 798.23 508.72 C 789.91 494.86 776.72 484.45 762.11 477.84 C 742.74 469.00 721.44 465.53 700.38 463.83 C 677.29 462.13 654.14 462.94 631.02 462.75 C 598.34 462.75 565.67 462.75 533.00 462.75 C 505.98 462.39 478.95 462.53 451.92 462.50 C 458.58 424.72 465.41 386.97 472.15 349.21 Z"></path>
												<path fill="url(#gradient-vertical) white" opacity="1.00" d=" M 343.14 566.70 C 356.21 563.72 369.66 564.62 382.95 564.50 C 460.90 564.50 538.86 564.48 616.82 564.51 C 614.02 578.42 610.71 592.23 607.46 606.04 C 603.93 621.07 600.45 636.62 591.56 649.55 C 583.75 661.35 571.41 669.73 557.90 673.63 C 546.62 677.06 534.75 677.86 523.02 677.76 C 441.09 677.74 359.17 677.78 277.24 677.73 C 280.16 663.92 283.32 650.16 286.60 636.43 C 290.43 620.16 294.18 603.09 304.71 589.63 C 313.92 577.33 328.26 569.70 343.14 566.70 Z"></path>
											</svg>
											<span class="m-0">
												ZCASH
											</span>
										</a>
									</li>
								</ul>
							</div>
						
							<div class="col-12 p-1">
								<div class="tab-content" id="myTabContent">
								<div class="tab-pane fade active show" id="tab-btc" role="tabpanel" aria-labelledby="for-btc-tab">
								  
								  
									<div class="row m-0">
										<div class="col-lg-4 d-flex flex-column p-2">
											<div class="d-flex flex-column white-bo">
												<div>
													<h4 class="m-0 p-4 d-flex text-center all-center">Bitcoin Starter</h4>
												</div>

												<div class="bo-box d-flex all-center p-4">
													<div class="row flex-fill">

														<div class="col-12 d-flex flex-column all-center">
															<p>Starter</p>
															<h1><small class="pr-2"><AttachMoneyIcon /></small>70<small class="pl-1">00</small></h1>
															<p>1 TH/s</p>
														</div>

													</div>
													<i class="fas fa-caret-down slide-down"></i>
												</div>

												<div>
													<div class="row min-dep mt-4 p-3 text-left">

														<div class="col-12 pb-2 d-flex flex-column text-center">
															<p class="all-center">48 Months Bitcoin Mining</p>
															<p class="all-center">SHA-256 Mining Algorithm</p>
															<p class="all-center">No Fees &amp; Additional Costs</p>
														</div>

													</div>
												</div>
											</div>
										</div>

										<div class="col-lg-4 d-flex flex-column p-2">
											<div class="d-flex flex-column white-bo">
												<div>
													<h4 class="m-0 p-4 d-flex text-center all-center">Bitcoin Advanced</h4>
												</div>

												<div class="bo-box d-flex all-center p-4">
													<div class="row flex-fill">

														<div class="col-12 d-flex flex-column all-center">
															<p>Advanced</p>
															<h1><small class="pr-2"><AttachMoneyIcon /></small>980<small class="pl-1">50</small></h1>
															<p>14 TH/s</p>
														</div>

													</div>
													<i class="fas fa-caret-down slide-down"></i>
												</div>

												<div>
													<div class="row min-dep mt-4 p-3 text-left">

														<div class="col-12 pb-2 d-flex flex-column text-center">
															<p class="all-center">48 Months Bitcoin Mining</p>
															<p class="all-center">SHA-256 Mining Algorithm</p>
															<p class="all-center">No Fees &amp; Additional Costs</p>
														</div>

													</div>
												</div>
											</div>
										</div>

										<div class="col-lg-4 d-flex flex-column p-2">
											<div class="d-flex flex-column white-bo">
												<div>
													<h4 class="m-0 p-4 d-flex text-center all-center">Bitcoin Superior</h4>
												</div>

												<div class="bo-box d-flex all-center p-4">
													<div class="row flex-fill">

														<div class="col-12 d-flex flex-column all-center">
															<p>Superior</p>
															<h1><small class="pr-2"><AttachMoneyIcon /></small>5,250<small class="pl-1">00</small></h1>
															<p>75 TH/s</p>
														</div>

													</div>
													<i class="fas fa-caret-down slide-down"></i>
												</div>

												<div>
													<div class="row min-dep mt-4 p-3 text-left">

														<div class="col-12 pb-2 d-flex flex-column text-center">
															<p class="all-center">48 Months Bitcoin Mining</p>
															<p class="all-center">SHA-256 Mining Algorithm</p>
															<p class="all-center">No Fees &amp; Additional Costs</p>
														</div>

													</div>
												</div>
											</div>
										</div>
									</div>
								  </div>
								  <div class="tab-pane fade" id="tab-eth" role="tabpanel" aria-labelledby="for-eth-tab">


						<div class="row m-0">
							<div class="col-lg-4 d-flex flex-column p-2">
								<div class="d-flex flex-column white-bo">
									<div>
										<h4 class="m-0 p-4 d-flex text-center all-center">Ethereum Starter</h4>
									</div>

									<div class="bo-box d-flex all-center p-4">
										<div class="row flex-fill">

											<div class="col-12 d-flex flex-column all-center">
												<p>Starter</p>
												<h1><small class="pr-2"><AttachMoneyIcon /></small>102<small class="pl-1">00</small></h1>
												<p>6 MH/s</p>
											</div>

										</div>
										<i class="fas fa-caret-down slide-down"></i>
									</div>

									<div>
										<div class="row min-dep mt-4 p-3 text-left">

                    <div class="col-12 pb-2 d-flex flex-column text-center">
                      <p class="all-center">48 Months Ethereum Mining</p>
                      <p class="all-center">Ethash Mining Algorithm</p>
                      <p class="all-center">No Fees &amp; Additional Costs</p>
                    </div>


										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 d-flex flex-column p-2">
								<div class="d-flex flex-column white-bo">
									<div>
										<h4 class="m-0 p-4 d-flex text-center all-center">Ethereum Advanced</h4>
									</div>

									<div class="bo-box d-flex all-center p-4">
										<div class="row flex-fill">

											<div class="col-12 d-flex flex-column all-center">
												<p>Advanced</p>
												<h1><small class="pr-2"><AttachMoneyIcon /></small>1037<small class="pl-1">50</small></h1>
												<p>61 MH/s</p>
											</div>

										</div>
										<i class="fas fa-caret-down slide-down"></i>
									</div>

									<div>
										<div class="row min-dep mt-4 p-3 text-left">

                    <div class="col-12 pb-2 d-flex flex-column text-center">
                      <p class="all-center">48 Months Ethereum Mining</p>
                      <p class="all-center">Ethash Mining Algorithm</p>
                      <p class="all-center">No Fees &amp; Additional Costs</p>
                    </div>

										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 d-flex flex-column p-2">
								<div class="d-flex flex-column white-bo">
									<div>
										<h4 class="m-0 p-4 d-flex text-center all-center">Ethereum Superior</h4>
									</div>

									<div class="bo-box d-flex all-center p-4">
										<div class="row flex-fill">

											<div class="col-12 d-flex flex-column all-center">
												<p>Superior</p>
												<h1><small class="pr-2"><AttachMoneyIcon /></small>5,015<small class="pl-1">00</small></h1>
												<p>295 MH/s</p>
											</div>

										</div>
										<i class="fas fa-caret-down slide-down"></i>
									</div>

									<div>
										<div class="row min-dep mt-4 p-3 text-left">

                    <div class="col-12 pb-2 d-flex flex-column text-center">
                      <p class="all-center">48 Months Ethereum Mining</p>
                      <p class="all-center">Ethash Mining Algorithm</p>
                      <p class="all-center">No Fees &amp; Additional Costs</p>
                    </div>

										</div>
									</div>
								</div>
							</div>
						</div>


								  </div>
								  <div class="tab-pane fade" id="tab-ltc" role="tabpanel" aria-labelledby="for-ltc-tab">




						<div class="row m-0">
							<div class="col-lg-4 d-flex flex-column p-2">
								<div class="d-flex flex-column white-bo">
									<div>
										<h4 class="m-0 p-4 d-flex text-center all-center">Litecoin Starter</h4>
									</div>

									<div class="bo-box d-flex all-center p-4">
										<div class="row flex-fill">

											<div class="col-12 d-flex flex-column all-center">
												<p>Starter</p>
												<h1><small class="pr-2"><AttachMoneyIcon /></small>108<small class="pl-1">00</small></h1>
												<p>9 MH/s</p>
											</div>

										</div>
										<i class="fas fa-caret-down slide-down"></i>
									</div>

									<div>
										<div class="row min-dep mt-4 p-3 text-left">

                    <div class="col-12 pb-2 d-flex flex-column text-center">
                      <p class="all-center">48 Months Litecoin Mining</p>
                      <p class="all-center">Scrypt Mining Algorithm</p>
                      <p class="all-center">No Fees &amp; Additional Costs</p>
                    </div>

										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 d-flex flex-column p-2">
								<div class="d-flex flex-column white-bo">
									<div>
										<h4 class="m-0 p-4 d-flex text-center all-center">Litecoin Advanced</h4>
									</div>

									<div class="bo-box d-flex all-center p-4">
										<div class="row flex-fill">

											<div class="col-12 d-flex flex-column all-center">
												<p>Advanced</p>
												<h1><small class="pr-2"><AttachMoneyIcon /></small>1,020<small class="pl-1">00</small></h1>
												<p>85 MH/s</p>
											</div>

										</div>
										<i class="fas fa-caret-down slide-down"></i>
									</div>

									<div>
										<div class="row min-dep mt-4 p-3 text-left">

                    <div class="col-12 pb-2 d-flex flex-column text-center">
                      <p class="all-center">48 Months Litecoin Mining</p>
                      <p class="all-center">Scrypt Mining Algorithm</p>
                      <p class="all-center">No Fees &amp; Additional Costs</p>
                    </div>

										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 d-flex flex-column p-2">
								<div class="d-flex flex-column white-bo">
									<div>
										<h4 class="m-0 p-4 d-flex text-center all-center">Litecoin Superior</h4>
									</div>

									<div class="bo-box d-flex all-center p-4">
										<div class="row flex-fill">

											<div class="col-12 d-flex flex-column all-center">
												<p>Superior</p>
												<h1><small class="pr-2"><AttachMoneyIcon /></small>5,004<small class="pl-1">00</small></h1>
												<p>417 MH/s</p>
											</div>

										</div>
										<i class="fas fa-caret-down slide-down"></i>
									</div>

									<div>
										<div class="row min-dep mt-4 p-3 text-left">

                    <div class="col-12 pb-2 d-flex flex-column text-center">
                      <p class="all-center">48 Months Litecoin Mining</p>
                      <p class="all-center">Scrypt Mining Algorithm</p>
                      <p class="all-center">No Fees &amp; Additional Costs</p>
                    </div>

										</div>
									</div>
								</div>
							</div>
						</div>





								  </div>
								  <div class="tab-pane fade" id="tab-bch" role="tabpanel" aria-labelledby="for-bch-tab">





						<div class="row m-0">
							<div class="col-lg-4 d-flex flex-column p-2">
								<div class="d-flex flex-column white-bo">
									<div>
										<h4 class="m-0 p-4 d-flex text-center all-center">Dash Starter</h4>
									</div>

									<div class="bo-box d-flex all-center p-4">
										<div class="row flex-fill">

											<div class="col-12 d-flex flex-column all-center">
												<p>Starter</p>
												<h1><small class="pr-2"><AttachMoneyIcon /></small>95<small class="pl-1">00</small></h1>
												<p>10,000 MH/s</p>
											</div>




										</div>
										<i class="fas fa-caret-down slide-down"></i>
									</div>

									<div>
										<div class="row min-dep mt-4 p-3 text-left">

                    <div class="col-12 pb-2 d-flex flex-column text-center">
                      <p class="all-center">48 Months Dash Mining</p>
                      <p class="all-center">X11 Mining Algorithm</p>
                      <p class="all-center">No Fees &amp; Additional Costs</p>
                    </div>

										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 d-flex flex-column p-2">
								<div class="d-flex flex-column white-bo">
									<div>
										<h4 class="m-0 p-4 d-flex text-center all-center">Dash Advanced</h4>
									</div>

									<div class="bo-box d-flex all-center p-4">
										<div class="row flex-fill">

											<div class="col-12 d-flex flex-column all-center">
												<p>Advanced</p>
												<h1><small class="pr-2"><AttachMoneyIcon /></small>1045<small class="pl-1">50</small></h1>
												<p>110,000 MH/s</p>
											</div>



										</div>
										<i class="fas fa-caret-down slide-down"></i>
									</div>

									<div>
										<div class="row min-dep mt-4 p-3 text-left">

                    <div class="col-12 pb-2 d-flex flex-column text-center">
                      <p class="all-center">48 Months Dash Mining</p>
                      <p class="all-center">X11 Mining Algorithm</p>
                      <p class="all-center">No Fees &amp; Additional Costs</p>
                    </div>

										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 d-flex flex-column p-2">
								<div class="d-flex flex-column white-bo">
									<div>
										<h4 class="m-0 p-4 d-flex text-center all-center">Dash Superior</h4>
									</div>

									<div class="bo-box d-flex all-center p-4">
										<div class="row flex-fill">

											<div class="col-12 d-flex flex-column all-center">
												<p>Superior</p>
												<h1><small class="pr-2"><AttachMoneyIcon /></small>5,035<small class="pl-1">00</small></h1>
												<p>530,000 MH/s</p>
											</div>

										</div>
										<i class="fas fa-caret-down slide-down"></i>
									</div>

									<div>
										<div class="row min-dep mt-4 p-3 text-left">

                    <div class="col-12 pb-2 d-flex flex-column text-center">
                      <p class="all-center">48 Months Dash Mining</p>
                      <p class="all-center">X11 Mining Algorithm</p>
                      <p class="all-center">No Fees &amp; Additional Costs</p>
                    </div>

										</div>
									</div>
								</div>
							</div>
						</div>




								  </div>
					
					
					
					<div class="tab-pane fade" id="tab-dash" role="tabpanel" aria-labelledby="for-dash-tab">


						<div class="row m-0">
							<div class="col-lg-4 d-flex flex-column p-2">
								<div class="d-flex flex-column white-bo">
									<div>
										<h4 class="m-0 p-4 d-flex text-center all-center">Doge Starter</h4>
									</div>

									<div class="bo-box d-flex all-center p-4">
										<div class="row flex-fill">

											<div class="col-12 d-flex flex-column all-center">
												<p>Starter</p>
												<h1><small class="pr-2"><AttachMoneyIcon /></small>120<small class="pl-1">00</small></h1>
												<p>8 MH/s</p>
											</div>

										</div>
										<i class="fas fa-caret-down slide-down"></i>
									</div>

									<div>
										<div class="row min-dep mt-4 p-3 text-left">

                    <div class="col-12 pb-2 d-flex flex-column text-center">
                      <p class="all-center">48 Months Doge Mining</p>
                      <p class="all-center">Scrypt Mining Algorithm</p>
                      <p class="all-center">No Fees &amp; Additional Costs</p>
                    </div>

										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 d-flex flex-column p-2">
								<div class="d-flex flex-column white-bo">
									<div>
										<h4 class="m-0 p-4 d-flex text-center all-center">Doge Advanced</h4>
									</div>

									<div class="bo-box d-flex all-center p-4">
										<div class="row flex-fill">

											<div class="col-12 d-flex flex-column all-center">
												<p>Advanced</p>
												<h1><small class="pr-2"><AttachMoneyIcon /></small>1,050<small class="pl-1">00</small></h1>
												<p>70 MH/s</p>
											</div>

										</div>
										<i class="fas fa-caret-down slide-down"></i>
									</div>

									<div>
										<div class="row min-dep mt-4 p-3 text-left">

                    <div class="col-12 pb-2 d-flex flex-column text-center">
                      <p class="all-center">48 Months Doge Mining</p>
                      <p class="all-center">Scrypt Mining Algorithm</p>
                      <p class="all-center">No Fees &amp; Additional Costs</p>
                    </div>

										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 d-flex flex-column p-2">
								<div class="d-flex flex-column white-bo">
									<div>
										<h4 class="m-0 p-4 d-flex text-center all-center">Doge Superior</h4>
									</div>

									<div class="bo-box d-flex all-center p-4">
										<div class="row flex-fill">

											<div class="col-12 d-flex flex-column all-center">
												<p>Superior</p>
												<h1><small class="pr-2"><AttachMoneyIcon /></small>5,550<small class="pl-1">00</small></h1>
												<p>370 MH/s</p>
											</div>

										</div>
										<i class="fas fa-caret-down slide-down"></i>
									</div>

									<div>
										<div class="row min-dep mt-4 p-3 text-left">

                    <div class="col-12 pb-2 d-flex flex-column text-center">
                      <p class="all-center">48 Months Doge Mining</p>
                      <p class="all-center">Scrypt Mining Algorithm</p>
                      <p class="all-center">No Fees &amp; Additional Costs</p>
                    </div>

										</div>
									</div>
								</div>
							</div>
						</div>




								  </div>
								  <div class="tab-pane fade" id="tab-doge" role="tabpanel" aria-labelledby="for-doge-tab">




						<div class="row m-0">
							<div class="col-lg-4 d-flex flex-column p-2">
								<div class="d-flex flex-column white-bo">
									<div>
										<h4 class="m-0 p-4 d-flex text-center all-center">Zcash Starter</h4>
									</div>

									<div class="bo-box d-flex all-center p-4">
										<div class="row flex-fill">

											<div class="col-12 d-flex flex-column all-center">
												<p>Starter</p>
												<h1><small class="pr-2"><AttachMoneyIcon /></small>128<small class="pl-1">00</small></h1>
												<p>50 H/s</p>
											</div>

										</div>
										<i class="fas fa-caret-down slide-down"></i>
									</div>

									<div>
										<div class="row min-dep mt-4 p-3 text-left">


                    <div class="col-12 pb-2 d-flex flex-column text-center">
                      <p class="all-center">48 Months Zcash Mining</p>
                      <p class="all-center">Equihash Mining Algorithm</p>
                      <p class="all-center">No Fees &amp; Additional Costs</p>
                    </div>

										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 d-flex flex-column p-2">
								<div class="d-flex flex-column white-bo">
									<div>
										<h4 class="m-0 p-4 d-flex text-center all-center">Zcash Advanced</h4>
									</div>

									<div class="bo-box d-flex all-center p-4">
										<div class="row flex-fill">

											<div class="col-12 d-flex flex-column all-center">
												<p>Advanced</p>
												<h1><small class="pr-2"><AttachMoneyIcon /></small>1020<small class="pl-1">00</small></h1>
												<p>400 H/s</p>
											</div>

										</div>
										<i class="fas fa-caret-down slide-down"></i>
									</div>

									<div>
										<div class="row min-dep mt-4 p-3 text-left">

                    <div class="col-12 pb-2 d-flex flex-column text-center">
                      <p class="all-center">48 Months Zcash Mining</p>
                      <p class="all-center">Equihash Mining Algorithm</p>
                      <p class="all-center">No Fees &amp; Additional Costs</p>
                    </div>
										</div>
									</div>
								</div>
							</div>

							<div class="col-lg-4 d-flex flex-column p-2">
								<div class="d-flex flex-column white-bo">
									<div>
										<h4 class="m-0 p-4 d-flex text-center all-center">Zcash Superior</h4>
									</div>

									<div class="bo-box d-flex all-center p-4">
										<div class="row flex-fill">

											<div class="col-12 d-flex flex-column all-center">
												<p>Superior</p>
												<h1><small class="pr-2"><AttachMoneyIcon /></small>5,100<small class="pl-1">00</small></h1>
												<p>2,000 H/s</p>
											</div>

										</div>
										<i class="fas fa-caret-down slide-down"></i>
									</div>

									<div>
										<div class="row min-dep mt-4 p-3 text-left">

                    <div class="col-12 pb-2 d-flex flex-column text-center">
                      <p class="all-center">48 Months Zcash Mining</p>
                      <p class="all-center">Equihash Mining Algorithm</p>
                      <p class="all-center">No Fees &amp; Additional Costs</p>
                    </div>
												
											</div>
											
										</div>
									</div>
								</div>
							</div>
						</div>
								  
								  
								  
								  
								  
								  
								  
								  
								  
								  </div>
								</div>
							</div>
						
						
						
						
						
						
						
						
						
						


						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
							
							
							
						</div>
						
					</div>
				</div>
				
				<div class="col-lg-8 offset-lg-2 d-flex flex-column text-center">
						<div class="">
							<Link  to="/pricing" class="btn" role="button" style={{background:"#fd961a", color:"#fff"}}><span>Pricing <ArrowRightIcon /></span></Link>
							<Link to="/signup" class="btn btn-outline ml-1" role="button" style={{background:"#fd961a", color:"#fff"}}><span >Create an Account</span></Link>
						</div>
				</div>
				
				
			</div>
			
			
		
	</section>
	


	
<section id="affiliate-home" >
		
		<div class="container">
			<div class="row">
			
				<div class="col-lg-6 pb-4 d-flex justify-content-center flex-column">
					<div class="pr-lg-5">
						<div class="d-flex">
							<img  src="img /5d1282a32d63f3b7c77a9755_experience-icon.png" width="46" alt="" class="icon-split-screen" />
						</div>
						<h2 class="pb-3" style={{color:"#fff"}}>You know you love us,<br /><b  style={{color:"#fd961a"}}>your friends will too.</b></h2>
						<p class="pb-2" style={{color:"#fff"}}>
							PRIME MINNERS Ltd offers a 10% affiliate Commission to existing members who introduce the minning concept to others. 
						</p>
						<div class="d-flex">
							<a class="btn" href="/affiliate" role="button"><span>Affiliate <i class="fas fa-arrow-right"></i></span></a>
							<a class="btn btn-outline" href="/representatives" role="button"><span>Representatives</span></a>
						</div>
					</div>
				</div>
				
				<div class="col-lg-5 offset-lg-1 d-flex flex-column justify-content-center">
					<div class="d-flex flex-column aff-fercent p-4">
						<svg height="128" viewBox="0 0 491 517" fill="none" xmlns="http://www.w3.org/2000/svg" class="optic-bg">
							<path d="M381.611 21.7415C381.611 10.8362 372.775 2 361.869 2H229.601C218.696 2 209.859 10.8362 209.859 21.7415C209.859 32.6469 218.696 41.4831 229.601 41.4831H361.86C372.765 41.4831 381.611 32.6469 381.611 21.7415Z" stroke="#525388" stroke-width="3" stroke-miterlimit="10"></path>
							<path d="M437.829 53.6901L422.648 38.5094L407.468 53.6901L422.648 68.8708L437.829 53.6901Z" fill="white"></path>
							<path d="M482.647 190.352L474.477 182.181L482.647 174.01L490.818 182.181L482.647 190.352Z" fill="white"></path>
							<path d="M484.332 91.6346L474.395 101.572L464.457 91.6346L460.585 95.5165L470.522 105.444L460.585 115.381L464.457 119.254L474.395 109.326L484.332 119.254L488.204 115.381L478.267 105.444L488.204 95.507L484.332 91.6346Z" fill="#34956C"></path>
							<path d="M370.629 265.967C416.518 265.967 453.714 228.772 453.714 182.882C453.714 136.992 416.518 99.7966 370.629 99.7966V265.967Z" fill="#313260"></path>
							<path d="M370.629 99.8066V265.977C416.518 265.977 453.714 228.782 453.714 182.892C453.714 137.002 416.509 99.8066 370.629 99.8066Z" fill="#313260"></path>
							<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="412" y="211" width="64" height="127">
							<path d="M412 337.933C446.965 337.933 475.467 309.597 475.467 274.467C475.467 239.502 447.13 211 412 211V337.933Z" fill="#34956C"></path>
							</mask>
							<g mask="url(#mask0)">
							<path d="M412 337.94C446.965 337.94 475.467 309.603 475.467 274.473C475.467 239.509 447.13 211.007 412 211.007V337.94Z" fill="white"></path>
							</g>
							<mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="54" width="420" height="420">
							<path d="M209.858 473.852C325.76 473.852 419.717 379.895 419.717 263.993C419.717 148.092 325.76 54.135 209.858 54.135C93.9568 54.135 0 148.092 0 263.993C0 379.895 93.9568 473.852 209.858 473.852Z" fill="#34956C"></path>
							</mask>
							<g mask="url(#mask1)">
							<path d="M209.858 473.852C325.76 473.852 419.717 379.895 419.717 263.993C419.717 148.092 325.76 54.135 209.858 54.135C93.9568 54.135 0 148.092 0 263.993C0 379.895 93.9568 473.852 209.858 473.852Z" fill="#34956C"></path>
							<path d="M-222.026 -252.39C-204.022 -310.761 -148.888 -381.318 -66.7512 -429.818C15.385 -478.317 124.533 -504.76 250.556 -474.901C376.58 -445.041 413.244 -380.682 426.978 -291.276C440.711 -201.869 431.524 -87.4155 465.844 42.651C515.074 229.218 452.063 343.178 357.056 397.695C262.05 452.212 135.04 447.286 56.2823 396.091C-22.4846 344.896 -113.713 253.003 -174.428 138.796C-235.143 24.5893 -265.344 -111.931 -222.026 -252.39Z" stroke="#56BE89" stroke-width="2" stroke-miterlimit="10"></path>
							<path d="M82.2893 368.557C16.8764 315.407 -69.5024 234.837 -121.343 132.266C-172.415 31.2426 -197.301 -87.3491 -158.729 -207.459C-142.223 -258.854 -93.6479 -319.151 -22.4738 -359.555C48.9659 -399.959 142.378 -418.618 249.438 -390.41C355.539 -362.459 387.154 -306.423 399.141 -228.995C411.328 -150.446 405.035 -51.4062 431.297 60.0008C470.41 225.934 426.371 326.92 346.323 378.912C266.284 430.914 151.983 425.182 82.2893 368.557Z" stroke="#56BE89" stroke-width="2" stroke-miterlimit="10"></path>
							<path d="M108.304 341.024C56.0458 286.886 -25.3122 216.699 -68.2596 125.736C-109.726 37.9243 -129.193 -62.7671 -95.4422 -162.538C-80.4082 -206.966 -38.4289 -256.984 21.8018 -289.302C82.5451 -321.609 160.192 -332.524 248.327 -305.93C334.478 -279.934 361.081 -232.184 371.313 -166.724C381.952 -99.0328 378.355 -15.2925 396.759 77.341C425.659 222.831 400.697 310.652 335.607 360.129C270.517 409.607 169.019 403.921 108.304 341.024Z" stroke="#56BE89" stroke-width="2" stroke-miterlimit="10"></path>
							<path d="M134.33 313.49C94.6757 259.362 18.8416 198.609 -15.1557 119.207C-47.0744 44.6538 -60.9504 -38.1564 -32.1353 -117.607C-18.544 -155.068 16.744 -194.969 66.0884 -219.029C116.059 -243.393 177.96 -246.487 247.227 -221.44C313.399 -197.503 335.02 -157.925 343.505 -104.433C352.597 -47.6 351.363 21.0209 362.24 94.71C380.738 220.05 375.044 294.422 324.912 341.366C274.78 388.309 185.715 383.639 134.33 313.49Z" stroke="#56BE89" stroke-width="2" stroke-miterlimit="10"></path>
							<path d="M160.342 285.966C132.41 232.654 62.8776 180.595 37.9349 112.686C15.4504 51.4684 7.46832 -13.4889 31.1582 -72.6661C43.3638 -103.152 71.9796 -132.821 110.371 -148.757C149.646 -165.053 195.659 -160.62 246.113 -136.94C292.278 -115.272 308.945 -83.6663 315.674 -42.1426C323.219 3.83243 323.77 57.5617 327.699 112.069C335.321 217.687 349.358 278.174 314.193 322.602C279.01 367.02 201.382 364.306 160.342 285.966Z" stroke="#56BE89" stroke-width="2" stroke-miterlimit="10"></path>
							<path d="M186.36 258.432C169.077 206.231 106.701 162.666 91.0217 106.156C77.7625 58.3588 76.225 11.2828 94.448 -27.7353C105.41 -51.2068 127.24 -70.6447 154.641 -78.4938C183.247 -86.6847 213.334 -75.2574 244.996 -52.4502C271.211 -33.5723 282.866 -9.4079 287.839 20.138C293.838 55.2552 295.091 94.3207 293.154 129.419C288.399 215.779 323.678 261.915 303.462 303.819C283.255 345.722 215.213 345.561 186.36 258.432Z" stroke="#56BE89" stroke-width="2" stroke-miterlimit="10"></path>
							<path d="M198.925 -8.22131C163.048 -8.39216 135.913 36.4155 144.114 99.6264C149.979 144.814 204.686 179.456 212.374 230.898C226.677 326.616 287.496 324.424 292.754 285.045C298.003 245.667 234.906 212.315 258.624 146.769C275.253 100.822 244.568 -8.01251 198.925 -8.22131Z" stroke="#56BE89" stroke-width="2" stroke-miterlimit="10"></path>
							</g>
							<path d="M410.217 406.997C397.879 425.4 327.303 521.953 209.859 514.835" stroke="#3E4170" stroke-width="3.48" stroke-miterlimit="10" stroke-dasharray="14 14"></path>
							<path d="M392.801 408.288L393.513 411.515L409.41 407.993L411.764 424.109L415.029 423.625L412.163 403.998L392.801 408.288Z" fill="#3E4170"></path>
						</svg>
						<div class="d-flex flex-column aff-bpx p-5">
							<h1 class="m-0" style={{color:"#fff"}}>10%</h1>
							<p class="m-0" style={{color:"#fff"}}>AFFILIATE COMMISSION</p>
						</div>
					</div>
				</div>
			
		</div>
	</div>
</section>
	
	
	
</main>
        </div>
    )
}

export default main
