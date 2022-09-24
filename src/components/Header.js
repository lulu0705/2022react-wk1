export default function Header() {
    return (
        <header id="header" className="qk-w--100vw qk-pos--fixed qk-t--0 qk-l--0">
            <div className="computer_nav qk-hidden--mobile ">
                <div className="header_logo qk-bg--nav_logo_bg">
                    <div className="qk-pos--rel">
                        <div className="qk-text--center">
                        <nav className="logo qk-display--il_bk">
                            <a href="/" className="qk-w--100">
                                <img src="images/header_img.png" className="qk-tst qk-tst_dur--15 qk-tst_timing--ease_io qk-tst_prop--pc_logo qk-hidden--mobile" height="52" width="auto" alt="" />
                            </a>                            
                        </nav>
                        </div>
                    </div>
                </div>
            </div>
        
        <div class="qk-hidden--pc">
            <nav class="mobile-nav qk-bg--nav_logo_bg">
            <ul class="qk-display--flex qk-flex--row qk-justify--between qk-align--center qk-pd_x--05 qk-pd_y--0">

                <li class="logo qk-mg_r--auto qk-pd_x--05 qk-pd_y--0">
                <a href="/" class="qk-display--il_flex qk-align--center qk-h--100 qk-hidden--phone">
                    <img src="images/header_img.png" height="25" width="auto" alt="" />
                </a>
                <a href="/" class="qk-display--il_flex qk-align--center qk-h--100 qk-hidden--tablet">
                    <img src="images/header_img.png" height="25" width="auto" alt="" />
                </a>
                </li>
            </ul>
            </nav>
        </div>
        </header>
    );
}