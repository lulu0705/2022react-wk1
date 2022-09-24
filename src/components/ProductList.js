import ProductItem from "./ProductItem";
import products from "../json/products.json";


export default function ProductList() {
    return (
        <div id="template" style={{flex:"1 0 auto", backgroundcolor: "var(--theme_bg)"}}>
        <div id="collection" className="qk-mg_t--3">

            <div className="qk-container">
            <div className="row qk-mg_x--0">
                <div className="col-md-12">
                <div id="ckeditor" className="collection_description qk-pd_b--2">
                    <span className="ckeditor">
                    <p style={{textalign:"center"}}><img alt="" src="images/img_title.png" /></p>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" style={{width:"90%"}}>
                            <tbody>
                                <tr>
                                    <td>
                                    <p><span style={{fontsize:"14px"}}>我是くにのいあいこ，最近出版了我的書「犬日無休」。</span></p>
                                    <p><span style={{fontsize:"14px"}}>這邊看到的都是Fandora限定販售的原創商品喔！</span></p>
                                    <p><span style={{fontsize:"14px"}}>你想不想也來當當看「捏捏臉柴犬」的主人呢？</span></p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </span>
                </div>
                </div>

                {/* 側邊欄 Start */}
                <div className="col-md-3 qk-hidden--mobile">   
                
                <ul id="collection_menu_shelf_top" className="sidebar qk-pd_b--1">
                        
                    <li className="qk-pos--rel qk-pd--0">
                    <a className="qk-fw--bold qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">角色館</a>
                    </li>
                    <li className="qk-pos--rel qk-pd--0">
                    <a className="qk-fw--bold qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">🔥好想兔萌鬼系列</a>
                    </li>
                    <li className="qk-pos--rel qk-pd--0">
                    <a className="qk-fw--bold qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">🔥35折超值福袋</a>
                    </li>

                    <li className="qk-pos--rel qk-pd--0">
                        <button className="linklist bt-toggle qk-fw--bold  collapsed  qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-text--heading qk-bg--theme_bg qk-pos--rel" data-toggle="collapse" data-target=".collapse_collection_menu_4" aria-expanded={false}>
                        主打活動
                        <i className="far fa-angle-down fa-lg"></i>
                        </button>
                        <ul id="collection_menu_shelf_second_4" className="collapse_collection_menu_4 collapse shelf_second  qk-pd--0">
                        
                                
                                <li className="qk-pos--rel qk-pd--0">
                                <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                    夏裝換季│全面75折起
                                </a>
                                </li>
                            
                                <li className="qk-pos--rel qk-pd--0">
                                <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                    限量福袋│下殺35折 只要888
                                </a>
                                </li>
                            
                                <li className="qk-pos--rel qk-pd--0">
                                <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                    ㄇㄚˊ幾│文博新品登場
                                </a>
                                </li>
                            
                                <li className="qk-pos--rel qk-pd--0">
                                <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                    好想兔│萌鬼系列新登場
                                </a>
                                </li>
                            
                                <li className="qk-pos--rel qk-pd--0">
                                <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                    呦嘻百分百│滿$800送限量小物
                                </a>
                                </li>
                            
                                <li className="qk-pos--rel qk-pd--0">
                                <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                    無所事事小海豹│浴巾、飲料提袋新品
                                </a>
                                </li>
                            
                                <li className="qk-pos--rel qk-pd--0">
                                <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                    卡娜赫拉的小動物│限量服飾特惠中
                                </a>
                                </li>
                            
                                <li className="qk-pos--rel qk-pd--0">
                                <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                    動力火車│演唱會週邊預購加開
                                </a>
                                </li>
                            
                            
                        </ul>
                    </li>
            
                    <li className="qk-pos--rel qk-pd--0">
                        <button className="linklist bt-toggle qk-fw--bold  collapsed  qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-text--heading qk-bg--theme_bg qk-pos--rel" data-toggle="collapse" data-target=".collapse_collection_menu_5" aria-expanded={false}>
                            人氣角色商品
                            <i className="far fa-angle-down fa-lg"></i>
                        </button>
                        <ul id="collection_menu_shelf_second_5" className="collapse_collection_menu_5 collapse shelf_second  qk-pd--0">
                         
                                <li className="qk-pos--rel qk-pd--0">
                                <button className="qk-fw--500 linklist bt-toggle   collapsed  qk-display--il_bk qk-w--100 qk-text--left qk-text--heading qk-fs--body qk-bg--theme_bg qk-pos--rel" data-toggle="collapse" data-target=".collapse_collection_menu_5_1" aria-expanded={false}>
                                    台灣原創角色一
                                </button>
                                <ul className="collapse_collection_menu_5_1 collapse shelf_third qk-pd--0 qk-bd--nav_menu_text">
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        貓貓蟲咖波
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        好想兔
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        掰掰啾啾Ｘ奧樂雞
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        可布魯的豆卡頻道
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        無所事事小海豹
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        ㄇㄚˊ幾
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        花貓大旅社
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        來貘 LAIMO
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        懶散兔與啾先生
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        熊超人ｘ包大山
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--accent" href="/">
                                        咻咻熊
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        吃貨恐龍
                                        </a>
                                    </li>
                                    
                                </ul>
                                </li>
                            
                                <li className="qk-pos--rel qk-pd--0">
                                <button className="qk-fw--500 linklist bt-toggle   collapsed  qk-display--il_bk qk-w--100 qk-text--left qk-text--heading qk-fs--body qk-bg--theme_bg qk-pos--rel" data-toggle="collapse" data-target=".collapse_collection_menu_5_2" aria-expanded={false}>
                                    台灣原創角色二
                                </button>
                                <ul className="collapse_collection_menu_5_2 collapse shelf_third qk-pd--0 qk-bd--nav_menu_text">
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        小學課本的逆襲之神秘福利社
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        廢物女友
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        虎爺實習中
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        黃色書刊-勇者系列
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        囂搞 Shaogao
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        Ning's可愛小藍
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        辛卡米克
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        拉查花
                                        </a>
                                    </li>
                                    
                                </ul>
                                </li>
                            
                                <li className="qk-pos--rel qk-pd--0">
                                <button className="qk-fw--500 linklist bt-toggle   collapsed  qk-display--il_bk qk-w--100 qk-text--left qk-text--heading qk-fs--body qk-bg--theme_bg qk-pos--rel" data-toggle="collapse" data-target=".collapse_collection_menu_5_3" aria-expanded={false}>
                                    台灣原創新星
                                </button>
                                <ul className="collapse_collection_menu_5_3 collapse shelf_third qk-pd--0 qk-bd--nav_menu_text">
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        柴語錄
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        bonbon法鬥哥
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        Hime's cats
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        紐約狗狗
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        starlululu大白兔
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        柯基犬椪椪
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        Kimyim金銀喵
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        ViaFang
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        碳布負能量商店
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        Clerk的路障生活
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        竹林八閒
                                        </a>
                                    </li>
                                    
                                </ul>
                                </li>
                            
                                <li className="qk-pos--rel qk-pd--0">
                                <button className="qk-fw--500 linklist bt-toggle   collapsed  qk-display--il_bk qk-w--100 qk-text--left qk-text--heading qk-fs--body qk-bg--theme_bg qk-pos--rel" data-toggle="collapse" data-target=".collapse_collection_menu_5_4" aria-expanded={false}>
                                    國際知名角色
                                </button>
                                <ul className="collapse_collection_menu_5_4 collapse shelf_third qk-pd--0 qk-bd--nav_menu_text">
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        卡娜赫拉的小動物
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        角落小夥伴
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        BT21
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        KAKAO FRIENDS
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        呦嘻百分百
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        懶得"鳥"你
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        正能量企鵝
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        捏捏臉柴犬
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        懶洋洋喵之助
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        微笑柴犬
                                        </a>
                                    </li>
                                    
                                    
                                    <li className="qk-pos--rel qk-pd--0">
                                        <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-bg--theme_bg qk-fs--body qk-text--heading" href="/">
                                        無氣力 Zariganiworks 
                                        </a>
                                    </li>
                                    
                                </ul>
                                </li>
                   
                        </ul>

                    </li>
            
                    <li className="qk-pos--rel qk-pd--0">
                    <a className="qk-fw--bold qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">湊免運專區</a>
                    </li>
            
                    <li className="qk-pos--rel qk-pd--0">
                    <a className="qk-fw--bold qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">即將絕版</a>
                    </li>
            
                    <li className="qk-pos--rel qk-pd--0">
                    <button className="linklist bt-toggle qk-fw--bold  collapsed  qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-text--heading qk-bg--theme_bg qk-pos--rel" data-toggle="collapse" data-target=".collapse_collection_menu_8" aria-expanded={false}>
                        主題館
                        <i className="far fa-angle-down fa-lg"></i>
                    </button>
                    <ul id="collection_menu_shelf_second_8" className="collapse_collection_menu_8 collapse shelf_second  qk-pd--0">
                        
                        
                        
                            
                            <li className="qk-pos--rel qk-pd--0">
                            <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                厭世人生
                            </a>
                            </li>
                        
                        
                        
                        
                            
                            <li className="qk-pos--rel qk-pd--0">
                            <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                台灣精神
                            </a>
                            </li>
                        
                        
                        
                        
                            
                            <li className="qk-pos--rel qk-pd--0">
                            <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                當老師真難
                            </a>
                            </li>
                        
                        
                        
                        
                            
                            <li className="qk-pos--rel qk-pd--0">
                            <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                喵喵星人
                            </a>
                            </li>
                        
                        
                        
                        
                            
                            <li className="qk-pos--rel qk-pd--0">
                            <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                汪汪星人
                            </a>
                            </li>
                        
                        
                        
                        
                            
                            <li className="qk-pos--rel qk-pd--0">
                            <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                世界名畫系列商品
                            </a>
                            </li>
                        
                        
                    </ul>
                    </li>
            
                    <li className="qk-pos--rel qk-pd--0">
                    <button className="linklist bt-toggle qk-fw--bold  collapsed  qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-text--heading qk-bg--theme_bg qk-pos--rel" data-toggle="collapse" data-target=".collapse_collection_menu_9" aria-expanded={false}>
                        經典服飾
                        <i className="far fa-angle-down fa-lg"></i>
                    </button>
                    <ul id="collection_menu_shelf_second_9" className="collapse_collection_menu_9 collapse shelf_second  qk-pd--0">
                        
                        
                        
                            
                            <li className="qk-pos--rel qk-pd--0">
                            <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                特別限量款
                            </a>
                            </li>
                        
                        
                        
                        
                            
                            <li className="qk-pos--rel qk-pd--0">
                            <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                經典 Tshirt
                            </a>
                            </li>
                        
                        
                        
                        
                            
                            <li className="qk-pos--rel qk-pd--0">
                            <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                童裝短袖
                            </a>
                            </li>
                        
                        
                    </ul>
                    </li>
            
            
                    <li className="qk-pos--rel qk-pd--0">
                    <button className="linklist bt-toggle qk-fw--bold  collapsed  qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-text--heading qk-bg--theme_bg qk-pos--rel" data-toggle="collapse" data-target=".collapse_collection_menu_10" aria-expanded={false}>
                        包袋配件
                        <i className="far fa-angle-down fa-lg"></i>
                    </button>
                    <ul id="collection_menu_shelf_second_10" className="collapse_collection_menu_10 collapse shelf_second  qk-pd--0">
                        
                        
                        
                            
                            <li className="qk-pos--rel qk-pd--0">
                            <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                百搭老帽漁夫帽
                            </a>
                            </li>
                        
                        
                        
                        
                            
                            <li className="qk-pos--rel qk-pd--0">
                            <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                授權角色帆布袋
                            </a>
                            </li>
                        
                        
                        
                        
                            
                            <li className="qk-pos--rel qk-pd--0">
                            <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                零錢收納包
                            </a>
                            </li>
                        
                        
                        
                        
                            
                            <li className="qk-pos--rel qk-pd--0">
                            <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                其他包款
                            </a>
                            </li>
                        
                        
                    </ul>
                    </li>
            
            
                    <li className="qk-pos--rel qk-pd--0">
                    <button className="linklist bt-toggle qk-fw--bold  collapsed  qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-text--heading qk-bg--theme_bg qk-pos--rel" data-toggle="collapse" data-target=".collapse_collection_menu_11" aria-expanded={false}>
                        生活小物
                        <i className="far fa-angle-down fa-lg"></i>
                    </button>
                    <ul id="collection_menu_shelf_second_11" className="collapse_collection_menu_11 collapse shelf_second  qk-pd--0">
                        
                        
                        
                            
                            <li className="qk-pos--rel qk-pd--0">
                            <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                手機氣墊支架
                            </a>
                            </li>
                        
                        
                        
                        
                            
                            <li className="qk-pos--rel qk-pd--0">
                            <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                交通卡、票卡夾
                            </a>
                            </li>
                        
                        
                        
                        
                            
                            <li className="qk-pos--rel qk-pd--0">
                            <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                超人氣絨毛娃娃
                            </a>
                            </li>
                        
                        
                        
                        
                            
                            <li className="qk-pos--rel qk-pd--0">
                            <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                潮流玩具
                            </a>
                            </li>
                        
                        
                        
                        
                            
                            <li className="qk-pos--rel qk-pd--0">
                            <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                居家療癒系
                            </a>
                            </li>
                        
                        
                        
                        
                            
                            <li className="qk-pos--rel qk-pd--0">
                            <a className="qk-fw--500 qk-display--il_bk qk-w--100 qk-text--left qk-fs--body qk-bg--theme_bg qk-text--heading" href="/">
                                柔軟短絨毛抱枕
                            </a>
                            </li>
                        
                        
                    </ul>
                    </li>
            
                </ul>

                </div>
                {/* 側邊欄 End */}


                {/* 右邊欄 Start */}
                <div className=" col-lg-9  collection_products square_prods">
                
                    {/*  資訊 Start  */}
                    <div className="collection_title clear-fix qk-display--flex qk-justify--between qk-align--start">
                    <div className="section-heading qk-text--heading qk-fs--hd2 qk-bd--heading qk-flex--1 qk-display--flex qk-align--center">
                        捏捏臉 柴犬專賣店
                    </div>

                    
                    <div className="products_setting qk-display--flex qk-align--center">
                        <p className="qk-text--default_light qk-fs--breadcrumb">共 9 件商品</p>
                        <div className="sort-wrapper qk-text--heading qk-fs--body">

                        </div>


                    </div>

                    </div>
                    
                    
                    <div className="infinite-scroll-top-spinner qk-display--flex qk-justify--center qk-align--center qk-mg_y--2" style={{display: "none"}}>
                        <i className="fas fa-spinner fa-spin fa-fw fa-2x"></i>
                    </div>
                    {/*  資訊 End  */}



                    



                    {/* 商品 Start  */}
                    <div className="products_content qk-display--il_flex qk-flex--wrap qk-mg_b--2">

                    {/* 商品型錄  */}
                    {products.map(product =>(
                        <ProductItem key={product.id} product={product}/>
                    ))}


                    </div>
                    {/* 商品 End  */}

                    <div className="infinite-scroll-bottom-spinner qk-display--flex qk-justify--center qk-align--center qk-mg_y--2" style={{display: "none"}}>
                        <i className="fas fa-spinner fa-spin fa-fw fa-2x"></i>
                    </div>

                    
                
                </div>
                {/* 右邊欄 End */}


            </div>
            </div>
        </div>

        </div>
    );
}